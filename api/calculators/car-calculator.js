const carInsuranceData = require('../data/car-insurance');
const provinceRiskData = require('../data/province-risk');

/**
 * Calculate car insurance quotes from all providers
 * @param {Object} params - Quote parameters
 * @returns {Array} Array of quote objects
 */
function calculateCarQuote(params) {
    const {
        vehicleMake,
        vehicleModel,
        vehicleYear,
        vehicleValue,
        coverType,
        province
    } = params;

    const quotes = [];

    Object.keys(carInsuranceData).forEach(providerKey => {
        const provider = carInsuranceData[providerKey];

        try {
            const premium = calculateProviderPremium(provider, params);

            quotes.push({
                providerId: providerKey,
                providerName: provider.name,
                website: provider.website,
                rating: provider.rating,
                claimsRatio: provider.claimsRatio,
                premium: {
                    monthly: Math.round(premium.monthly),
                    annual: Math.round(premium.annual),
                    excess: provider.excessRange.standard
                },
                features: provider.features.slice(0, 3),
                strengths: provider.strengths,
                weaknesses: provider.weaknesses,
                valueScore: calculateValueScore(provider, premium.monthly),
                calculatedAt: new Date().toISOString()
            });
        } catch (error) {
            console.error(`Error calculating quote for ${provider.name}:`, error);
        }
    });

    // Sort by value score (best value first)
    quotes.sort((a, b) => b.valueScore - a.valueScore);

    // Mark the best value
    if (quotes.length > 0) {
        quotes[0].recommended = true;
    }

    return quotes;
}

/**
 * Calculate premium for a specific provider
 */
function calculateProviderPremium(provider, params) {
    const { vehicleValue, vehicleYear, coverType, province } = params;

    // Base premium from vehicle value
    let premium = (vehicleValue / 100000) * provider.ratePerR100k;

    // Vehicle age adjustment (older = cheaper, but floor at 45%)
    const age = 2026 - parseInt(vehicleYear);
    const ageFactor = Math.max(0.45, 1 - (age * 0.055));
    premium *= ageFactor;

    // Cover type adjustment
    if (coverType === 'thirdparty_fire_theft') {
        premium *= 0.50;
    } else if (coverType === 'thirdparty') {
        premium *= 0.28;
    }

    // Province risk factor
    const provinceData = provinceRiskData[province];
    if (provinceData) {
        premium *= provinceData.factor;
    }

    // Add some variance to make it more realistic
    const variance = 0.95 + (Math.random() * 0.1); // ±5%
    premium *= variance;

    return {
        monthly: premium,
        annual: premium * 12
    };
}

/**
 * Calculate value score for ranking
 */
function calculateValueScore(provider, monthlyPremium) {
    let score = 70;

    // Higher claims ratio is better
    score += (provider.claimsRatio - 85) * 2;

    // Higher rating is better
    score += (provider.rating - 4) * 10;

    // Lower price is better (relative to R1000 baseline)
    score -= (monthlyPremium - 1000) / 50;

    // Ensure score is between 0-100
    return Math.min(100, Math.max(0, Math.round(score)));
}

module.exports = calculateCarQuote;
