const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
    contentSecurityPolicy: false // Allow inline scripts for demo
}));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.'
});

app.use('/api/', limiter);

// Serve static files
app.use(express.static(__dirname));

// ==========================================
// INSURANCE CALCULATION MODULES
// ==========================================

// Import calculation logic
const carInsuranceData = require('./api/data/car-insurance');
const lifeInsuranceData = require('./api/data/life-insurance');
const medicalAidData = require('./api/data/medical-aid');
const provinceRiskData = require('./api/data/province-risk');

const calculateCarQuote = require('./api/calculators/car-calculator');
const calculateLifeQuote = require('./api/calculators/life-calculator');
const calculateMedicalQuote = require('./api/calculators/medical-calculator');

// ==========================================
// API ROUTES
// ==========================================

// Health check
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Get available insurers by type
app.get('/api/insurers/:type', (req, res) => {
    const { type } = req.params;

    try {
        let insurers;
        switch (type) {
            case 'car':
                insurers = Object.keys(carInsuranceData).map(key => ({
                    id: key,
                    name: carInsuranceData[key].name,
                    rating: carInsuranceData[key].rating,
                    claimsRatio: carInsuranceData[key].claimsRatio
                }));
                break;
            case 'life':
                insurers = Object.keys(lifeInsuranceData).map(key => ({
                    id: key,
                    name: lifeInsuranceData[key].name,
                    rating: lifeInsuranceData[key].rating,
                    claimsRatio: lifeInsuranceData[key].claimsRatio
                }));
                break;
            case 'medical':
                insurers = Object.keys(medicalAidData).map(key => ({
                    id: key,
                    name: medicalAidData[key].name,
                    rating: medicalAidData[key].rating,
                    claimsRatio: medicalAidData[key].claimsRatio
                }));
                break;
            default:
                return res.status(400).json({ error: 'Invalid insurance type' });
        }

        res.json({ insurers });
    } catch (error) {
        console.error('Error fetching insurers:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Get car insurance quotes
app.post('/api/quotes/car', (req, res) => {
    try {
        const {
            vehicleMake,
            vehicleModel,
            vehicleYear,
            vehicleValue,
            coverType,
            province
        } = req.body;

        // Validation
        if (!vehicleMake || !vehicleYear || !vehicleValue || !province) {
            return res.status(400).json({
                error: 'Missing required fields',
                required: ['vehicleMake', 'vehicleYear', 'vehicleValue', 'province']
            });
        }

        const value = parseInt(vehicleValue);
        if (isNaN(value) || value < 30000 || value > 5000000) {
            return res.status(400).json({
                error: 'Vehicle value must be between R30,000 and R5,000,000'
            });
        }

        // Calculate quotes
        const quotes = calculateCarQuote({
            vehicleMake,
            vehicleModel,
            vehicleYear: parseInt(vehicleYear),
            vehicleValue: value,
            coverType: coverType || 'comprehensive',
            province
        });

        res.json({
            success: true,
            insuranceType: 'car',
            quotesCount: quotes.length,
            quotes,
            disclaimer: 'These are estimates only. Actual premiums may vary based on your complete profile, claims history, and underwriting criteria.',
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Error calculating car quotes:', error);
        res.status(500).json({
            error: 'Failed to calculate quotes',
            message: error.message
        });
    }
});

// Get life insurance quotes
app.post('/api/quotes/life', (req, res) => {
    try {
        const {
            age,
            smoker,
            coverAmount,
            lifeCoverType
        } = req.body;

        // Validation
        if (!age || !coverAmount) {
            return res.status(400).json({
                error: 'Missing required fields',
                required: ['age', 'coverAmount']
            });
        }

        const ageNum = parseInt(age);
        if (isNaN(ageNum) || ageNum < 18 || ageNum > 65) {
            return res.status(400).json({
                error: 'Age must be between 18 and 65'
            });
        }

        // Calculate quotes
        const quotes = calculateLifeQuote({
            age: ageNum,
            smoker: smoker === 'yes',
            coverAmount: parseInt(coverAmount),
            coverType: lifeCoverType || 'term'
        });

        res.json({
            success: true,
            insuranceType: 'life',
            quotesCount: quotes.length,
            quotes,
            disclaimer: 'These are estimates only. Actual premiums depend on medical underwriting and full health assessment.',
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Error calculating life quotes:', error);
        res.status(500).json({
            error: 'Failed to calculate quotes',
            message: error.message
        });
    }
});

// Get medical aid quotes
app.post('/api/quotes/medical', (req, res) => {
    try {
        const {
            members,
            planType,
            chronicConditions,
            income
        } = req.body;

        // Validation
        if (!members || !planType) {
            return res.status(400).json({
                error: 'Missing required fields',
                required: ['members', 'planType']
            });
        }

        // Calculate quotes
        const quotes = calculateMedicalQuote({
            members: parseInt(members),
            planType,
            chronicConditions: chronicConditions || 'none',
            income: income || 'medium'
        });

        res.json({
            success: true,
            insuranceType: 'medical',
            quotesCount: quotes.length,
            quotes,
            disclaimer: 'These are 2025 CMS-published rates. Actual contributions may vary based on scheme rules and waiting periods.',
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Error calculating medical quotes:', error);
        res.status(500).json({
            error: 'Failed to calculate quotes',
            message: error.message
        });
    }
});

// Request callback (lead generation endpoint)
app.post('/api/callback/request', (req, res) => {
    try {
        const {
            provider,
            name,
            phone,
            email,
            preferredTime,
            insuranceType
        } = req.body;

        // Validation
        if (!provider || !name || !phone) {
            return res.status(400).json({
                error: 'Missing required fields',
                required: ['provider', 'name', 'phone']
            });
        }

        // In production, this would:
        // 1. Store the lead in a database
        // 2. Send email to the provider
        // 3. Send confirmation email to user
        // 4. Potentially integrate with CRM

        const callbackRequest = {
            id: generateCallbackId(),
            provider,
            name,
            phone,
            email: email || null,
            preferredTime: preferredTime || 'anytime',
            insuranceType: insuranceType || 'unknown',
            status: 'pending',
            createdAt: new Date().toISOString()
        };

        // Log the request (in production, save to database)
        console.log('Callback request:', callbackRequest);

        res.json({
            success: true,
            message: `Your callback request has been received. ${provider} will contact you within 24 business hours.`,
            reference: callbackRequest.id,
            timestamp: callbackRequest.createdAt
        });

    } catch (error) {
        console.error('Error processing callback request:', error);
        res.status(500).json({
            error: 'Failed to process callback request',
            message: error.message
        });
    }
});

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function generateCallbackId() {
    const timestamp = Date.now().toString(36).toUpperCase();
    const random = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `CB-${timestamp}-${random}`;
}

// ==========================================
// ERROR HANDLING
// ==========================================

// 404 handler
app.use((req, res) => {
    if (req.path.startsWith('/api/')) {
        res.status(404).json({
            error: 'Endpoint not found',
            path: req.path
        });
    } else {
        // Serve index.html for all non-API routes (SPA routing)
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

// Global error handler
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

// ==========================================
// START SERVER
// ==========================================

app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════╗
║   InsureCompare SA API Server              ║
║   Running on http://localhost:${PORT}       ║
╚════════════════════════════════════════════╝

Available endpoints:
  GET  /api/health
  GET  /api/insurers/:type (car, life, medical)
  POST /api/quotes/car
  POST /api/quotes/life
  POST /api/quotes/medical
  POST /api/callback/request

Frontend: http://localhost:${PORT}/index.html
`);
});

module.exports = app;
