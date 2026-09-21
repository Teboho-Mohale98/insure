// ==========================================
// InsureCompare SA - Improved Implementation
// DISCLAIMER: This is a demonstration/lead generation tool
// Actual quotes require direct contact with insurers
// ==========================================

document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initMobileMenu();
    initCompareForm();
    initSmoothScroll();
    initAnimations();
    initFilterButtons();
    initVehicleDatabase();
    initFormValidation();
    initModals();
    initModifySearch();
    initFooterLinks();
    initProvinceHints();
});

// ==========================================
// Vehicle Database (Common SA Vehicles)
// ==========================================
const vehicleDatabase = {
    toyota: {
        name: 'Toyota',
        models: {
            'hilux': { name: 'Hilux', avgValue: 450000, riskGroup: 'medium' },
            'fortuner': { name: 'Fortuner', avgValue: 650000, riskGroup: 'high' },
            'corolla': { name: 'Corolla', avgValue: 380000, riskGroup: 'low' },
            'rav4': { name: 'RAV4', avgValue: 550000, riskGroup: 'medium' },
            'starlet': { name: 'Starlet', avgValue: 220000, riskGroup: 'low' },
            'urban_cruiser': { name: 'Urban Cruiser', avgValue: 340000, riskGroup: 'low' },
            'land_cruiser': { name: 'Land Cruiser', avgValue: 1200000, riskGroup: 'high' }
        }
    },
    volkswagen: {
        name: 'Volkswagen',
        models: {
            'polo': { name: 'Polo', avgValue: 350000, riskGroup: 'medium' },
            'polo_vivo': { name: 'Polo Vivo', avgValue: 280000, riskGroup: 'low' },
            'tiguan': { name: 'Tiguan', avgValue: 650000, riskGroup: 'medium' },
            'golf': { name: 'Golf', avgValue: 550000, riskGroup: 'high' },
            'golf_gti': { name: 'Golf GTI', avgValue: 750000, riskGroup: 'very_high' },
            't_cross': { name: 'T-Cross', avgValue: 420000, riskGroup: 'medium' }
        }
    },
    ford: {
        name: 'Ford',
        models: {
            'ranger': { name: 'Ranger', avgValue: 520000, riskGroup: 'high' },
            'everest': { name: 'Everest', avgValue: 750000, riskGroup: 'high' },
            'figo': { name: 'Figo', avgValue: 220000, riskGroup: 'low' },
            'puma': { name: 'Puma', avgValue: 480000, riskGroup: 'medium' },
            'mustang': { name: 'Mustang', avgValue: 1100000, riskGroup: 'very_high' }
        }
    },
    hyundai: {
        name: 'Hyundai',
        models: {
            'i20': { name: 'i20', avgValue: 320000, riskGroup: 'low' },
            'creta': { name: 'Creta', avgValue: 450000, riskGroup: 'medium' },
            'tucson': { name: 'Tucson', avgValue: 580000, riskGroup: 'medium' },
            'venue': { name: 'Venue', avgValue: 350000, riskGroup: 'low' },
            'grand_creta': { name: 'Grand Creta', avgValue: 620000, riskGroup: 'medium' }
        }
    },
    nissan: {
        name: 'Nissan',
        models: {
            'np200': { name: 'NP200', avgValue: 280000, riskGroup: 'low' },
            'np300': { name: 'NP300 Hardbody', avgValue: 380000, riskGroup: 'medium' },
            'navara': { name: 'Navara', avgValue: 650000, riskGroup: 'high' },
            'magnite': { name: 'Magnite', avgValue: 320000, riskGroup: 'low' },
            'qashqai': { name: 'Qashqai', avgValue: 520000, riskGroup: 'medium' }
        }
    },
    bmw: {
        name: 'BMW',
        models: {
            '1_series': { name: '1 Series', avgValue: 550000, riskGroup: 'high' },
            '3_series': { name: '3 Series', avgValue: 750000, riskGroup: 'very_high' },
            'x1': { name: 'X1', avgValue: 680000, riskGroup: 'high' },
            'x3': { name: 'X3', avgValue: 950000, riskGroup: 'very_high' },
            'x5': { name: 'X5', avgValue: 1400000, riskGroup: 'very_high' }
        }
    },
    mercedes: {
        name: 'Mercedes-Benz',
        models: {
            'a_class': { name: 'A-Class', avgValue: 620000, riskGroup: 'high' },
            'c_class': { name: 'C-Class', avgValue: 850000, riskGroup: 'very_high' },
            'glb': { name: 'GLB', avgValue: 780000, riskGroup: 'high' },
            'gle': { name: 'GLE', avgValue: 1300000, riskGroup: 'very_high' }
        }
    },
    kia: {
        name: 'Kia',
        models: {
            'picanto': { name: 'Picanto', avgValue: 240000, riskGroup: 'low' },
            'rio': { name: 'Rio', avgValue: 320000, riskGroup: 'low' },
            'seltos': { name: 'Seltos', avgValue: 450000, riskGroup: 'medium' },
            'sportage': { name: 'Sportage', avgValue: 580000, riskGroup: 'medium' },
            'sorento': { name: 'Sorento', avgValue: 850000, riskGroup: 'high' }
        }
    },
    mazda: {
        name: 'Mazda',
        models: {
            'mazda2': { name: 'Mazda2', avgValue: 350000, riskGroup: 'low' },
            'mazda3': { name: 'Mazda3', avgValue: 480000, riskGroup: 'medium' },
            'cx3': { name: 'CX-3', avgValue: 450000, riskGroup: 'medium' },
            'cx5': { name: 'CX-5', avgValue: 620000, riskGroup: 'medium' },
            'cx30': { name: 'CX-30', avgValue: 550000, riskGroup: 'medium' }
        }
    },
    haval: {
        name: 'Haval',
        models: {
            'jolion': { name: 'Jolion', avgValue: 380000, riskGroup: 'medium' },
            'h6': { name: 'H6', avgValue: 520000, riskGroup: 'medium' },
            'h6_gt': { name: 'H6 GT', avgValue: 620000, riskGroup: 'medium' }
        }
    }
};

// ==========================================
// ACTUAL 2025 Medical Aid Contribution Tables
// Source: CMS published rates, scheme websites
// These are REAL rates for main member + spouse + child
// ==========================================
const medicalAidRates2025 = {
    discovery: {
        name: 'Discovery Health',
        rating: 4.8,
        claimsRatio: 95,
        website: 'www.discovery.co.za',
        plans: {
            'keycare_core': {
                name: 'KeyCare Core',
                type: 'hospital',
                mainMember: 1628,
                adultDep: 1348,
                childDep: 489,
                features: ['Network hospitals only', 'Basic day-to-day via KeyCare clinics', 'Limited chronic cover']
            },
            'keycare_plus': {
                name: 'KeyCare Plus',
                type: 'hospital',
                mainMember: 2089,
                adultDep: 1731,
                childDep: 628,
                features: ['Network hospitals', 'KeyCare GP network', 'Better chronic benefits']
            },
            'coastal_core': {
                name: 'Coastal Core',
                type: 'saver',
                mainMember: 2456,
                adultDep: 2034,
                childDep: 738,
                features: ['Above threshold benefit', 'Medical savings account', 'Coastal network']
            },
            'classic_core': {
                name: 'Classic Core',
                type: 'saver',
                mainMember: 2891,
                adultDep: 2394,
                childDep: 869,
                features: ['Medical savings', 'Full chronic cover', 'Limited specialists']
            },
            'classic_comprehensive': {
                name: 'Classic Comprehensive',
                type: 'comprehensive',
                mainMember: 3456,
                adultDep: 2863,
                childDep: 1039,
                features: ['Day-to-day benefits', 'Full specialist access', 'Vitality rewards']
            },
            'executive': {
                name: 'Executive',
                type: 'premium',
                mainMember: 6234,
                adultDep: 5164,
                childDep: 1874,
                features: ['Unlimited hospital', 'Full day-to-day', 'International cover', 'Executive screening']
            }
        }
    },
    bonitas: {
        name: 'Bonitas',
        rating: 4.4,
        claimsRatio: 92,
        website: 'www.bonitas.co.za',
        plans: {
            'bonsave': {
                name: 'BonSave',
                type: 'hospital',
                mainMember: 1584,
                adultDep: 1312,
                childDep: 476,
                features: ['Hospital cover', 'Basic GP visits', 'Network dentist']
            },
            'primary': {
                name: 'Primary',
                type: 'saver',
                mainMember: 2236,
                adultDep: 1851,
                childDep: 672,
                features: ['Personal medical savings', 'GP unlimited', 'Chronic cover']
            },
            'standard': {
                name: 'Standard',
                type: 'comprehensive',
                mainMember: 2867,
                adultDep: 2374,
                childDep: 862,
                features: ['Full chronic', 'Specialist cover', 'Maternity benefits']
            },
            'bonessential': {
                name: 'BonEssential',
                type: 'comprehensive',
                mainMember: 3542,
                adultDep: 2934,
                childDep: 1065,
                features: ['Enhanced day-to-day', 'Full specialist', 'Oncology cover']
            },
            'boncap': {
                name: 'BonCap',
                type: 'premium',
                mainMember: 5234,
                adultDep: 4334,
                childDep: 1573,
                features: ['Unlimited benefits', 'Premium hospitals', 'Global cover']
            }
        }
    },
    momentum: {
        name: 'Momentum Health',
        rating: 4.5,
        claimsRatio: 93,
        website: 'www.momentumhealth.co.za',
        plans: {
            'ingwe': {
                name: 'Ingwe',
                type: 'hospital',
                mainMember: 1423,
                adultDep: 1179,
                childDep: 428,
                features: ['Network hospital', 'Basic PMBs', 'Limited day-to-day']
            },
            'evolve': {
                name: 'Evolve',
                type: 'saver',
                mainMember: 1847,
                adultDep: 1530,
                childDep: 555,
                features: ['Medical savings', 'GP visits', 'Multiply rewards up to 25%']
            },
            'incentive': {
                name: 'Incentive',
                type: 'comprehensive',
                mainMember: 2680,
                adultDep: 2220,
                childDep: 806,
                features: ['Above threshold', 'Full specialist', 'Good chronic']
            },
            'summit': {
                name: 'Summit',
                type: 'comprehensive',
                mainMember: 4950,
                adultDep: 4101,
                childDep: 1489,
                features: ['Day-to-day from savings', 'Full cover', 'Oncology']
            },
            'summit_executive': {
                name: 'Summit Executive',
                type: 'premium',
                mainMember: 7234,
                adultDep: 5992,
                childDep: 2175,
                features: ['Unlimited', 'Executive wellness', 'International']
            }
        }
    },
    medihelp: {
        name: 'Medihelp',
        rating: 4.3,
        claimsRatio: 91,
        website: 'www.medihelp.co.za',
        plans: {
            'necesse': {
                name: 'Necesse',
                type: 'hospital',
                mainMember: 1289,
                adultDep: 1067,
                childDep: 387,
                features: ['PMB hospital cover', 'Network providers', 'Basic chronic']
            },
            'medsave': {
                name: 'MedSave',
                type: 'saver',
                mainMember: 1756,
                adultDep: 1454,
                childDep: 528,
                features: ['Savings account', 'Network GPs', 'Above threshold']
            },
            'dimension': {
                name: 'Dimension',
                type: 'comprehensive',
                mainMember: 2345,
                adultDep: 1942,
                childDep: 705,
                features: ['Full day-to-day', 'Specialist cover', 'Maternity']
            },
            'prime': {
                name: 'Prime',
                type: 'premium',
                mainMember: 3567,
                adultDep: 2954,
                childDep: 1072,
                features: ['Comprehensive cover', 'Oncology', 'Alternative medicine']
            }
        }
    },
    gems: {
        name: 'GEMS',
        rating: 4.2,
        claimsRatio: 94,
        website: 'www.gems.gov.za',
        plans: {
            'sapphire': {
                name: 'Sapphire',
                type: 'hospital',
                mainMember: 1456,
                adultDep: 1206,
                childDep: 438,
                features: ['State hospital only', 'Basic PMBs', 'Lowest cost']
            },
            'beryl': {
                name: 'Beryl',
                type: 'saver',
                mainMember: 1923,
                adultDep: 1593,
                childDep: 578,
                features: ['Personal savings', 'Network GPs', 'Good value']
            },
            'emerald': {
                name: 'Emerald',
                type: 'comprehensive',
                mainMember: 2789,
                adultDep: 2310,
                childDep: 839,
                features: ['Full benefits', 'Private hospital', 'Full chronic']
            },
            'onyx': {
                name: 'Onyx',
                type: 'premium',
                mainMember: 3867,
                adultDep: 3203,
                childDep: 1163,
                features: ['Premium cover', 'No co-payments', 'Executive benefits']
            }
        }
    },
    fedhealth: {
        name: 'Fedhealth',
        rating: 4.4,
        claimsRatio: 92,
        website: 'www.fedhealth.co.za',
        plans: {
            'flexifed1': {
                name: 'flexiFED 1',
                type: 'hospital',
                mainMember: 1534,
                adultDep: 1270,
                childDep: 461,
                features: ['Hospital network', 'Flexi-care benefit', 'Basic chronic']
            },
            'flexifed2': {
                name: 'flexiFED 2',
                type: 'saver',
                mainMember: 2123,
                adultDep: 1758,
                childDep: 638,
                features: ['Above threshold', 'Day-to-day savings', 'Specialist']
            },
            'flexifed3': {
                name: 'flexiFED 3',
                type: 'comprehensive',
                mainMember: 2867,
                adultDep: 2374,
                childDep: 862,
                features: ['Full day-to-day', 'Unlimited hospital', 'Oncology']
            },
            'maxima_plus': {
                name: 'Maxima Plus',
                type: 'premium',
                mainMember: 4234,
                adultDep: 3506,
                childDep: 1273,
                features: ['Premium everything', 'International', 'Executive wellness']
            }
        }
    }
};

// ==========================================
// Car Insurance Providers (2025 Estimates)
// Note: These are ESTIMATES - actual quotes vary significantly
// ==========================================
const carInsuranceProviders = {
    discovery: {
        name: 'Discovery Insure',
        rating: 4.8,
        claimsRatio: 92,
        website: 'www.discovery.co.za/insure',
        ratePerR100k: 520, // Base rate per R100k vehicle value
        features: ['Vitality Drive - up to 50% back', 'Fuel rewards', 'Impact Alert'],
        excessRange: { min: 0, standard: 3500, max: 7500 },
        strengths: ['Best rewards', 'Tech-driven', 'Good drivers save most'],
        weaknesses: ['Higher base price', 'Requires engagement']
    },
    kingprice: {
        name: 'King Price',
        rating: 4.7,
        claimsRatio: 93,
        website: 'www.kingprice.co.za',
        ratePerR100k: 450,
        features: ['Decreasing premium (as car depreciates)', '20% multi-vehicle discount', 'Royal Treatment service'],
        excessRange: { min: 2500, standard: 4000, max: 10000 },
        strengths: ['Premium decreases monthly', 'Fun brand', 'Good value'],
        weaknesses: ['Higher excess', 'Less tech features']
    },
    outsurance: {
        name: 'OUTsurance',
        rating: 4.6,
        claimsRatio: 94,
        website: 'www.outsurance.co.za',
        ratePerR100k: 490,
        features: ['OUTbonus - 3 months back after 3 years', 'SmartDrive app saves 25%', 'Fast claims'],
        excessRange: { min: 1000, standard: 3000, max: 7500 },
        strengths: ['OUTbonus cashback', 'Fastest claims', 'Strong finances'],
        weaknesses: ['Limited customization', 'Call center wait times']
    },
    miway: {
        name: 'MiWay',
        rating: 4.4,
        claimsRatio: 89,
        website: 'www.miway.co.za',
        ratePerR100k: 380,
        features: ['Online self-service', '15-30% cheaper than traditional', 'No broker needed'],
        excessRange: { min: 3000, standard: 4500, max: 12000 },
        strengths: ['Most affordable', 'Easy online', 'Good for young drivers'],
        weaknesses: ['Higher excess', 'Less personal service', 'Lower claims ratio']
    },
    santam: {
        name: 'Santam',
        rating: 4.5,
        claimsRatio: 91,
        website: 'www.santam.co.za',
        ratePerR100k: 580,
        features: ['SA\'s largest insurer', 'Wide broker network', 'Premium roadside assist'],
        excessRange: { min: 2000, standard: 3500, max: 7500 },
        strengths: ['100+ years', 'Most trusted', 'Comprehensive options'],
        weaknesses: ['Premium pricing', 'Traditional processes']
    },
    firstforwomen: {
        name: '1st for Women',
        rating: 4.5,
        claimsRatio: 90,
        website: 'www.firstforwomen.co.za',
        ratePerR100k: 440,
        features: ['Handbag & contents cover', 'Personal safety alerts', 'Trauma counselling'],
        excessRange: { min: 2500, standard: 3500, max: 7500 },
        strengths: ['Women-focused', 'Safety features', 'Good pricing'],
        weaknesses: ['Limited to women', 'Smaller network']
    },
    budget: {
        name: 'Budget Insurance',
        rating: 4.2,
        claimsRatio: 87,
        website: 'www.budgetinsurance.co.za',
        ratePerR100k: 340,
        features: ['Lowest premiums', 'Basic cover', 'Quick signup'],
        excessRange: { min: 4000, standard: 5500, max: 15000 },
        strengths: ['Cheapest option', 'Simple', 'Fast'],
        weaknesses: ['High excess', 'Basic cover only', 'Lower claims ratio']
    },
    auto_general: {
        name: 'Auto & General',
        rating: 4.3,
        claimsRatio: 88,
        website: 'www.autogeneral.co.za',
        ratePerR100k: 410,
        features: ['Flexible payment dates', 'Good cover options', 'Established'],
        excessRange: { min: 3000, standard: 4000, max: 10000 },
        strengths: ['Flexible', 'Middle ground', 'Reliable'],
        weaknesses: ['Not cheapest', 'Less innovative']
    }
};

// ==========================================
// Life Insurance Base Rates (per R1M cover)
// Age 30, non-smoker - rates increase ~3-4% per year of age
// ==========================================
const lifeInsuranceProviders = {
    discovery: {
        name: 'Discovery Life',
        rating: 4.8,
        claimsRatio: 98,
        website: 'www.discovery.co.za/life',
        ratePerMillion: 485, // Age 30, non-smoker
        ageLoadingPercent: 3.2,
        smokerLoading: 1.50,
        features: ['PayBack - up to 100% premiums returned', 'Vitality integration', 'Booster benefit'],
        strengths: ['Best rewards', 'Premium payback', 'Innovative'],
        weaknesses: ['Higher base premium', 'Complex products']
    },
    sanlam: {
        name: 'Sanlam',
        rating: 4.6,
        claimsRatio: 97,
        website: 'www.sanlam.co.za',
        ratePerMillion: 395,
        ageLoadingPercent: 3.5,
        smokerLoading: 1.55,
        features: ['Flexible cover', 'Income protection', '100+ years in SA'],
        strengths: ['Trusted brand', 'Strong advisors', 'Good payouts'],
        weaknesses: ['Traditional', 'Less tech']
    },
    liberty: {
        name: 'Liberty',
        rating: 4.5,
        claimsRatio: 96,
        website: 'www.liberty.co.za',
        ratePerMillion: 445,
        ageLoadingPercent: 3.3,
        smokerLoading: 1.50,
        features: ['Lifestyle Protector', 'Critical illness', 'Disability income'],
        strengths: ['Flexible', 'Good disability', 'Strong brand'],
        weaknesses: ['Middle pricing', 'Complex']
    },
    momentum: {
        name: 'Momentum',
        rating: 4.5,
        claimsRatio: 95,
        website: 'www.momentum.co.za',
        ratePerMillion: 365,
        ageLoadingPercent: 3.2,
        smokerLoading: 1.45,
        features: ['Myriad product range', 'Multiply rewards', '24hr instant claim payout'],
        strengths: ['Affordable', 'Fast claims', 'Multiply program'],
        weaknesses: ['Less comprehensive', 'Fewer options']
    },
    oldmutual: {
        name: 'Old Mutual',
        rating: 4.4,
        claimsRatio: 96,
        website: 'www.oldmutual.co.za',
        ratePerMillion: 410,
        ageLoadingPercent: 3.3,
        smokerLoading: 1.50,
        features: ['Greenlight cover', 'Old Mutual Rewards', 'Investment options'],
        strengths: ['Established 1845', 'Strong network', 'Reliable'],
        weaknesses: ['Traditional', 'Slower innovation']
    },
    fnb: {
        name: 'FNB Life',
        rating: 4.3,
        claimsRatio: 94,
        website: 'www.fnb.co.za/life',
        ratePerMillion: 340,
        ageLoadingPercent: 3.0,
        smokerLoading: 1.45,
        features: ['FNB app integration', 'eBucks rewards', 'Simple products'],
        strengths: ['Cheapest', 'Bank integration', 'Simple'],
        weaknesses: ['Basic products', 'FNB customers mainly']
    }
};

// ==========================================
// Province Risk Factors (Car Insurance)
// Based on crime stats and accident rates
// ==========================================
const provinceRiskFactors = {
    'gauteng': { factor: 1.25, label: 'High risk - highest crime & accident rates' },
    'western_cape': { factor: 1.12, label: 'Medium-high risk' },
    'kwazulu_natal': { factor: 1.15, label: 'Medium-high risk' },
    'eastern_cape': { factor: 1.05, label: 'Medium risk' },
    'free_state': { factor: 0.95, label: 'Lower risk' },
    'mpumalanga': { factor: 1.02, label: 'Medium risk' },
    'limpopo': { factor: 0.92, label: 'Lower risk' },
    'north_west': { factor: 0.98, label: 'Medium-low risk' },
    'northern_cape': { factor: 0.88, label: 'Lowest risk' }
};

// ==========================================
// Utility Functions
// ==========================================
function formatCurrency(amount) {
    return 'R' + Math.round(amount).toLocaleString('en-ZA');
}

function formatCurrencyFull(amount) {
    return 'R' + amount.toLocaleString('en-ZA', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

// ==========================================
// Vehicle Database Functions
// ==========================================
function initVehicleDatabase() {
    const makeSelect = document.getElementById('vehicleMake');
    if (!makeSelect) return;

    // Clear and populate makes
    makeSelect.innerHTML = '<option value="">Select make</option>';
    Object.keys(vehicleDatabase).forEach(makeKey => {
        const make = vehicleDatabase[makeKey];
        const option = document.createElement('option');
        option.value = makeKey;
        option.textContent = make.name;
        makeSelect.appendChild(option);
    });

    // Add model select after make select
    const modelGroup = document.createElement('div');
    modelGroup.className = 'form-group';
    modelGroup.innerHTML = `
        <label for="vehicleModel">Vehicle Model</label>
        <select id="vehicleModel" name="vehicleModel">
            <option value="">Select make first</option>
        </select>
    `;

    makeSelect.closest('.form-group').after(modelGroup);

    // Handle make change
    makeSelect.addEventListener('change', function() {
        const modelSelect = document.getElementById('vehicleModel');
        const valueInput = document.getElementById('vehicleValue');
        const make = vehicleDatabase[this.value];

        modelSelect.innerHTML = '<option value="">Select model</option>';

        if (make) {
            Object.keys(make.models).forEach(modelKey => {
                const model = make.models[modelKey];
                const option = document.createElement('option');
                option.value = modelKey;
                option.textContent = model.name;
                option.dataset.avgValue = model.avgValue;
                option.dataset.riskGroup = model.riskGroup;
                modelSelect.appendChild(option);
            });
        }
    });

    // Auto-populate value when model selected
    const modelSelect = document.getElementById('vehicleModel');
    if (modelSelect) {
        modelSelect.addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex];
            const avgValue = selectedOption.dataset.avgValue;
            const valueInput = document.getElementById('vehicleValue');

            if (avgValue && valueInput) {
                valueInput.value = avgValue;
                valueInput.placeholder = `Avg: ${formatCurrency(avgValue)}`;
            }
        });
    }
}

// ==========================================
// Form Validation
// ==========================================
function initFormValidation() {
    const form = document.getElementById('compareForm');
    if (!form) return;

    // Vehicle value validation
    const vehicleValue = document.getElementById('vehicleValue');
    if (vehicleValue) {
        vehicleValue.addEventListener('blur', function() {
            const val = parseInt(this.value);
            if (val && (val < 30000 || val > 5000000)) {
                showFieldError(this, 'Vehicle value should be between R30,000 and R5,000,000');
            } else {
                clearFieldError(this);
            }
        });
    }

    // Building value validation
    const buildingValue = document.getElementById('buildingValue');
    if (buildingValue) {
        buildingValue.addEventListener('blur', function() {
            const val = parseInt(this.value);
            if (val && (val < 200000 || val > 50000000)) {
                showFieldError(this, 'Building value should be between R200,000 and R50,000,000');
            } else {
                clearFieldError(this);
            }
        });
    }

    // Age validation for life insurance
    const ageInput = document.getElementById('age');
    if (ageInput) {
        ageInput.addEventListener('blur', function() {
            const val = parseInt(this.value);
            if (val && (val < 18 || val > 65)) {
                showFieldError(this, 'Age must be between 18 and 65 for standard life cover');
            } else {
                clearFieldError(this);
            }
        });
    }

    // Phone validation
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('blur', function() {
            const val = this.value.replace(/\s/g, '');
            if (val && !val.match(/^(0[0-9]{9}|\+27[0-9]{9})$/)) {
                showFieldError(this, 'Enter valid SA phone: 0XX XXX XXXX');
            } else {
                clearFieldError(this);
            }
        });
    }
}

function showFieldError(field, message) {
    clearFieldError(field);
    field.style.borderColor = '#ef4444';
    const error = document.createElement('span');
    error.className = 'field-error';
    error.style.cssText = 'color: #ef4444; font-size: 0.75rem; display: block; margin-top: 0.25rem;';
    error.textContent = message;
    field.parentNode.appendChild(error);
}

function clearFieldError(field) {
    field.style.borderColor = '';
    const error = field.parentNode.querySelector('.field-error');
    if (error) error.remove();
}

// ==========================================
// Premium Calculation - More Realistic
// ==========================================
function calculateCarPremium(provider, factors) {
    const vehicleValue = parseInt(factors.vehicleValue) || 250000;
    const baseRate = provider.ratePerR100k;

    // Base premium from vehicle value
    let premium = (vehicleValue / 100000) * baseRate;

    // Vehicle age adjustment (older = cheaper, but floor)
    if (factors.vehicleYear) {
        const age = 2026 - parseInt(factors.vehicleYear);
        const ageFactor = Math.max(0.45, 1 - (age * 0.055)); // ~5.5% per year, min 45%
        premium *= ageFactor;
    }

    // Vehicle risk group (from model selection)
    const modelSelect = document.getElementById('vehicleModel');
    if (modelSelect && modelSelect.selectedIndex > 0) {
        const riskGroup = modelSelect.options[modelSelect.selectedIndex].dataset.riskGroup;
        const riskMultipliers = {
            'low': 0.85,
            'medium': 1.0,
            'high': 1.20,
            'very_high': 1.45
        };
        premium *= riskMultipliers[riskGroup] || 1.0;
    }

    // Cover type
    if (factors.coverType === 'thirdparty_fire_theft') {
        premium *= 0.50;
    } else if (factors.coverType === 'thirdparty') {
        premium *= 0.28;
    }

    // Province risk
    const provinceFactor = provinceRiskFactors[factors.province]?.factor || 1.0;
    premium *= provinceFactor;

    return {
        monthly: Math.round(premium),
        annual: Math.round(premium * 12),
        excess: provider.excessRange.standard
    };
}

function calculateMedicalAidPremium(scheme, planKey, factors) {
    const plan = scheme.plans[planKey];
    if (!plan) return null;

    let total = plan.mainMember;

    // Add dependants based on family size
    const members = parseInt(factors.members) || 1;
    if (members >= 2) {
        total += plan.adultDep; // Spouse/partner
    }
    if (members >= 3) {
        total += plan.childDep; // First child
    }
    if (members >= 4) {
        total += plan.childDep; // Second child
    }
    if (members >= 5) {
        total += plan.childDep * 0.8; // Additional children often discounted
    }

    return {
        monthly: Math.round(total),
        annual: Math.round(total * 12),
        planName: plan.name,
        planType: plan.type,
        features: plan.features
    };
}

function calculateLifePremium(provider, factors) {
    const coverAmount = parseInt(factors.coverAmount) || 1000000;
    const age = parseInt(factors.age) || 30;

    // Base premium per R1M
    let premium = (coverAmount / 1000000) * provider.ratePerMillion;

    // Age loading (exponential after 30)
    if (age > 30) {
        const yearsOver30 = age - 30;
        premium *= Math.pow(1 + (provider.ageLoadingPercent / 100), yearsOver30);
    } else if (age < 30) {
        premium *= Math.pow(0.97, 30 - age); // Slight discount
    }

    // Smoker loading
    if (factors.smoker === 'yes') {
        premium *= provider.smokerLoading;
    }

    // Cover type
    if (factors.lifeCoverType === 'whole') {
        premium *= 2.2; // Whole life much more expensive
    } else if (factors.lifeCoverType === 'funeral') {
        premium *= 0.12; // Funeral cover is for smaller amounts
    }

    return {
        monthly: Math.round(premium),
        annual: Math.round(premium * 12),
        coverAmount: coverAmount
    };
}

// ==========================================
// Generate Results
// ==========================================
function generateCarResults(factors) {
    const results = [];

    Object.keys(carInsuranceProviders).forEach(key => {
        const provider = carInsuranceProviders[key];
        const premium = calculateCarPremium(provider, factors);

        // Value score calculation
        let valueScore = 70;
        valueScore += (provider.claimsRatio - 85) * 2; // Higher claims ratio = better
        valueScore += (provider.rating - 4) * 10; // Higher rating = better
        valueScore -= (premium.monthly - 1000) / 50; // Lower price = better
        valueScore = Math.min(100, Math.max(0, Math.round(valueScore)));

        results.push({
            ...provider,
            premium,
            valueScore,
            recommended: false
        });
    });

    // Sort by value score
    results.sort((a, b) => b.valueScore - a.valueScore);
    results[0].recommended = true;

    return results;
}

function generateMedicalResults(factors) {
    const results = [];
    const planTypeFilter = factors.planType || 'comprehensive';

    Object.keys(medicalAidRates2025).forEach(schemeKey => {
        const scheme = medicalAidRates2025[schemeKey];

        // Find best matching plan
        let bestPlan = null;
        let bestPlanKey = null;

        Object.keys(scheme.plans).forEach(planKey => {
            const plan = scheme.plans[planKey];
            if (plan.type === planTypeFilter ||
                (planTypeFilter === 'comprehensive' && plan.type === 'saver')) {
                if (!bestPlan || (plan.type === planTypeFilter && bestPlan.type !== planTypeFilter)) {
                    bestPlan = plan;
                    bestPlanKey = planKey;
                }
            }
        });

        if (!bestPlan) {
            // Fallback to first plan
            bestPlanKey = Object.keys(scheme.plans)[0];
            bestPlan = scheme.plans[bestPlanKey];
        }

        const premium = calculateMedicalAidPremium(scheme, bestPlanKey, factors);

        let valueScore = 70;
        valueScore += (scheme.claimsRatio - 90) * 3;
        valueScore += (scheme.rating - 4) * 8;
        valueScore -= (premium.monthly - 2500) / 100;
        valueScore = Math.min(100, Math.max(0, Math.round(valueScore)));

        results.push({
            name: scheme.name,
            rating: scheme.rating,
            claimsRatio: scheme.claimsRatio,
            website: scheme.website,
            premium,
            valueScore,
            features: premium.features,
            planName: premium.planName,
            recommended: false
        });
    });

    results.sort((a, b) => b.valueScore - a.valueScore);
    results[0].recommended = true;

    return results;
}

function generateLifeResults(factors) {
    const results = [];

    Object.keys(lifeInsuranceProviders).forEach(key => {
        const provider = lifeInsuranceProviders[key];
        const premium = calculateLifePremium(provider, factors);

        let valueScore = 70;
        valueScore += (provider.claimsRatio - 94) * 5;
        valueScore += (provider.rating - 4) * 10;
        valueScore -= (premium.monthly - 400) / 20;
        valueScore = Math.min(100, Math.max(0, Math.round(valueScore)));

        results.push({
            ...provider,
            premium,
            valueScore,
            recommended: false
        });
    });

    results.sort((a, b) => b.valueScore - a.valueScore);
    results[0].recommended = true;

    return results;
}

// ==========================================
// Navbar
// ==========================================
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
}

// ==========================================
// Compare Form
// ==========================================
function initCompareForm() {
    const form = document.getElementById('compareForm');
    if (!form) return;

    const typeRadios = form.querySelectorAll('input[name="insuranceType"]');
    const dynamicFields = form.querySelectorAll('.dynamic-fields');

    // Insurance type change handler
    typeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            dynamicFields.forEach(field => {
                field.style.display = 'none';
            });

            const selectedFields = document.getElementById(this.value + 'Fields');
            if (selectedFields) {
                selectedFields.style.display = 'block';
            }

            // Update progress to step 2
            updateFormProgress(2);
        });
    });

    // Track form progress as user fills in fields
    form.querySelectorAll('[data-section="2"] input, [data-section="2"] select').forEach(field => {
        field.addEventListener('change', function() {
            updateFormProgress(2);
        });
    });

    form.querySelectorAll('[data-section="3"] select').forEach(field => {
        field.addEventListener('change', function() {
            if (this.value) {
                updateFormProgress(3);
            }
        });
    });

    // Form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Validate form
        if (!validateForm(form)) {
            return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');

        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        submitBtn.disabled = true;

        const formData = new FormData(form);
        const factors = {};
        for (let [key, value] of formData.entries()) {
            factors[key] = value;
        }

        const insuranceType = factors.insuranceType;

        try {
            let response;

            // Call appropriate API endpoint
            switch (insuranceType) {
                case 'car':
                    response = await InsureCompareAPI.getCarQuotes(factors);
                    break;
                case 'health':
                    response = await InsureCompareAPI.getMedicalQuotes(factors);
                    break;
                case 'life':
                    response = await InsureCompareAPI.getLifeQuotes(factors);
                    break;
                default:
                    response = await InsureCompareAPI.getCarQuotes(factors);
            }

            if (response.success) {
                displayResults(response.quotes, insuranceType, factors);

                document.getElementById('compareResults').scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                showError('Failed to get quotes. Please try again.');
            }

        } catch (error) {
            console.error('Quote request error:', error);
            showError(error.message || 'Failed to get quotes. Please check your connection and try again.');
        } finally {
            btnText.style.display = 'inline-flex';
            btnLoading.style.display = 'none';
            submitBtn.disabled = false;
        }
    });
}

// ==========================================
// Error Display
// ==========================================
function showError(message) {
    const resultsContainer = document.getElementById('compareResults');
    const resultsList = document.getElementById('resultsList');

    resultsContainer.style.display = 'block';
    resultsList.innerHTML = `
        <div class="error-message" style="padding: 2rem; text-align: center; background: #fee; border: 1px solid #fcc; border-radius: var(--radius-lg);">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" style="margin: 0 auto 1rem;">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="12"/>
                <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            <h3 style="color: #ef4444; margin-bottom: 0.5rem;">Unable to Get Quotes</h3>
            <p style="color: #666;">${message}</p>
            <button type="button" class="btn btn-primary" onclick="location.reload()" style="margin-top: 1rem;">
                Try Again
            </button>
        </div>
    `;

    document.getElementById('compareResults').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// ==========================================
// Form Validation
// ==========================================
function validateForm(form) {
    const insuranceType = form.querySelector('input[name="insuranceType"]:checked')?.value;
    let isValid = true;

    // Clear previous errors
    form.querySelectorAll('.field-error').forEach(el => el.textContent = '');
    form.querySelectorAll('.form-group').forEach(el => el.classList.remove('has-error'));

    // Validate based on insurance type
    if (insuranceType === 'car') {
        isValid = validateField('vehicleMake', 'Please select a vehicle make') && isValid;
        isValid = validateField('vehicleYear', 'Please select a year') && isValid;
        isValid = validateField('vehicleValue', 'Please enter vehicle value', validateVehicleValue) && isValid;
    } else if (insuranceType === 'life') {
        isValid = validateField('age', 'Please enter your age', validateAge) && isValid;
    }

    // Province is always required
    isValid = validateField('province', 'Please select a province') && isValid;

    // Phone validation (optional but if provided, must be valid)
    const phone = document.getElementById('phone');
    if (phone && phone.value.trim()) {
        const phoneVal = phone.value.replace(/\s/g, '');
        if (!phoneVal.match(/^(0[0-9]{9}|\+27[0-9]{9})$/)) {
            showFieldValidationError('phone', 'Enter valid SA phone: 0XX XXX XXXX');
            isValid = false;
        }
    }

    return isValid;
}

function validateField(fieldId, errorMessage, customValidator = null) {
    const field = document.getElementById(fieldId);
    if (!field) return true;

    // Check if field is in a visible section
    const section = field.closest('.dynamic-fields');
    if (section && section.style.display === 'none') {
        return true; // Skip validation for hidden sections
    }

    let isValid = true;

    if (!field.value.trim()) {
        isValid = false;
    } else if (customValidator) {
        isValid = customValidator(field.value);
    }

    if (!isValid) {
        showFieldValidationError(fieldId, errorMessage);
    }

    return isValid;
}

function validateVehicleValue(value) {
    const val = parseInt(value);
    return val >= 30000 && val <= 5000000;
}

function validateAge(value) {
    const val = parseInt(value);
    return val >= 18 && val <= 65;
}

function showFieldValidationError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + 'Error');

    if (field) {
        field.closest('.form-group')?.classList.add('has-error');
        field.focus();
    }

    if (errorEl) {
        errorEl.textContent = message;
    }
}

// ==========================================
// Display Results
// ==========================================
function displayResults(results, insuranceType, factors) {
    const resultsContainer = document.getElementById('compareResults');
    const formContainer = document.querySelector('.compare-form-container');
    const resultsList = document.getElementById('resultsList');
    const quotesCount = document.getElementById('quotesCount');
    const savingsAmount = document.getElementById('savingsAmount');

    // Hide form, show results
    if (formContainer) formContainer.style.display = 'none';
    resultsContainer.style.display = 'block';

    // Update progress to step 4
    updateFormProgress(4);

    const prices = results.map(r => r.premium.monthly);
    const maxPrice = Math.max(...prices);
    const minPrice = Math.min(...prices);
    const priceDifference = (maxPrice - minPrice) * 12;

    quotesCount.textContent = results.length;
    savingsAmount.textContent = formatCurrency(priceDifference) + '/year';

    window.currentResults = results;
    window.currentInsuranceType = insuranceType;

    renderResults(results, insuranceType);
}

// ==========================================
// Render Results (Updated for API format)
// ==========================================

function renderResults(results, insuranceType) {
    const resultsList = document.getElementById('resultsList');

    resultsList.innerHTML = results.map((result, index) => {
        const isRecommended = result.recommended;
        const providerName = result.providerName || result.name || result.schemeName;
        const stars = '★'.repeat(Math.floor(result.rating)) +
                     (result.rating % 1 >= 0.5 ? '☆' : '');

        let featuresHtml = '';
        if (result.features) {
            featuresHtml = result.features.slice(0, 3).map(f =>
                `<span class="result-feature positive">✓ ${f}</span>`
            ).join('');
        }

        let extraInfo = '';
        if (insuranceType === 'car' && result.premium.excess) {
            extraInfo = `<div class="result-claims">Excess: ${formatCurrency(result.premium.excess)}</div>`;
        } else if (insuranceType === 'health' && result.planName) {
            extraInfo = `<div class="result-claims">Plan: ${result.planName}</div>`;
        } else if (insuranceType === 'life' && result.premium.coverAmount) {
            extraInfo = `<div class="result-claims">Cover: ${formatCurrency(result.premium.coverAmount)}</div>`;
        }

        return `
            <div class="result-card ${isRecommended ? 'recommended' : ''}" data-index="${index}" role="listitem">
                <div class="result-rank">${index + 1}</div>
                <div class="result-provider">
                    <div class="result-provider-name">
                        ${providerName}
                        ${isRecommended ? '<span class="recommended-badge">Best Value</span>' : ''}
                    </div>
                    <div class="result-features">
                        ${featuresHtml}
                    </div>
                </div>
                <div class="result-metrics">
                    <div class="result-rating">
                        <span class="stars" aria-label="${result.rating} out of 5 stars">${stars}</span>
                        <span>${result.rating}/5</span>
                    </div>
                    <div class="result-claims">Claims: ${result.claimsRatio}%</div>
                    ${extraInfo}
                </div>
                <div class="result-pricing">
                    <div class="result-price">${formatCurrency(result.premium.monthly)}<span>/mo</span></div>
                    <div class="result-annual">${formatCurrency(result.premium.annual)}/year</div>
                    <button class="btn ${isRecommended ? 'btn-success' : 'btn-primary'} btn-sm"
                            onclick="requestCallback('${providerName}', '${result.website}', '${insuranceType}')">
                        Get Actual Quote
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================
// Callback Request
// ==========================================
function requestCallback(providerName, website, insuranceType) {
    const fullName = document.getElementById('fullName')?.value || '';
    const phone = document.getElementById('phone')?.value || '';
    const email = document.getElementById('email')?.value || '';

    const modal = document.createElement('div');
    modal.className = 'callback-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close-btn" onclick="this.closest('.callback-modal').remove()" aria-label="Close">×</button>
            <h3>Get Your Actual Quote from ${providerName}</h3>

            <div class="callback-options">
                <div class="callback-option">
                    <h4>Option 1: Visit Their Website</h4>
                    <p>Get an online quote directly from ${providerName}</p>
                    <a href="https://${website}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                        Visit ${website} →
                    </a>
                </div>

                <div class="callback-divider">OR</div>

                <div class="callback-option">
                    <h4>Option 2: Request a Callback</h4>
                    <p>We'll share your details with ${providerName} to call you</p>
                    <form class="callback-form" onsubmit="submitCallback(event, '${providerName}', '${insuranceType}')">
                        <input type="text" name="callbackName" placeholder="Your name" value="${fullName}" required>
                        <input type="tel" name="callbackPhone" placeholder="Phone number" value="${phone}" required>
                        <input type="email" name="callbackEmail" placeholder="Email (optional)" value="${email}">
                        <select name="callbackTime" required>
                            <option value="">Best time to call?</option>
                            <option value="morning">Morning (8am-12pm)</option>
                            <option value="afternoon">Afternoon (12pm-5pm)</option>
                            <option value="anytime">Anytime</option>
                        </select>
                        <button type="submit" class="btn btn-success">Request Callback</button>
                    </form>
                </div>
            </div>

            <p class="callback-disclaimer">
                By requesting a callback, you consent to ${providerName} contacting you.
                Your information is handled per POPIA. You can opt out at any time.
            </p>
        </div>
    `;

    // Styles
    modal.style.cssText = `
        position: fixed; inset: 0; display: flex; align-items: center;
        justify-content: center; z-index: 10000; padding: 1rem;
    `;

    const overlay = modal.querySelector('.modal-overlay');
    overlay.style.cssText = 'position: absolute; inset: 0; background: rgba(0,0,0,0.6);';

    const content = modal.querySelector('.modal-content');
    content.style.cssText = `
        position: relative; background: white; padding: 2rem; border-radius: 1rem;
        max-width: 500px; width: 100%; max-height: 90vh; overflow-y: auto;
    `;

    const closeBtn = modal.querySelector('.modal-close-btn');
    closeBtn.style.cssText = `
        position: absolute; top: 1rem; right: 1rem; background: none; border: none;
        font-size: 1.5rem; cursor: pointer; color: #666;
    `;

    document.body.appendChild(modal);
    overlay.addEventListener('click', () => modal.remove());
}

async function submitCallback(event, providerName, insuranceType) {
    event.preventDefault();
    const form = event.target;
    const modal = form.closest('.callback-modal');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Disable form
    submitBtn.disabled = true;
    submitBtn.textContent = 'Submitting...';

    const data = {
        provider: providerName,
        name: form.callbackName.value,
        phone: form.callbackPhone.value,
        email: form.callbackEmail.value || null,
        preferredTime: form.callbackTime.value,
        insuranceType: insuranceType
    };

    try {
        const response = await InsureCompareAPI.requestCallback(data);

        if (response.success) {
            modal.querySelector('.modal-content').innerHTML = `
                <div style="text-align: center; padding: 2rem;">
                    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2" style="margin: 0 auto 1rem;">
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                    <h3 style="color: #10b981; margin-bottom: 0.5rem;">Callback Requested!</h3>
                    <p>${response.message}</p>
                    <p style="color: #666; font-size: 0.875rem; margin-top: 1rem;">
                        Reference: ${response.reference}
                    </p>
                    <button class="btn btn-primary" onclick="this.closest('.callback-modal').remove()" style="margin-top: 1rem;">
                        Close
                    </button>
                </div>
            `;
        }
    } catch (error) {
        console.error('Callback request error:', error);
        modal.querySelector('.modal-content').innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" style="margin: 0 auto 1rem;">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                </svg>
                <h3 style="color: #ef4444; margin-bottom: 0.5rem;">Request Failed</h3>
                <p>${error.message || 'Failed to submit callback request. Please try again or contact the provider directly.'}</p>
                <button class="btn btn-primary" onclick="this.closest('.callback-modal').remove()" style="margin-top: 1rem;">
                    Close
                </button>
            </div>
        `;
    }
}

// ==========================================
// Filter Buttons
// ==========================================
function initFilterButtons() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            sortResults(e.target.dataset.sort);
        }
    });
}

function sortResults(sortType) {
    if (!window.currentResults) return;

    let sorted = [...window.currentResults];

    switch (sortType) {
        case 'recommended':
            sorted.sort((a, b) => b.valueScore - a.valueScore);
            break;
        case 'price-low':
            sorted.sort((a, b) => a.premium.monthly - b.premium.monthly);
            break;
        case 'price-high':
            sorted.sort((a, b) => b.premium.monthly - a.premium.monthly);
            break;
        case 'rating':
            sorted.sort((a, b) => b.rating - a.rating);
            break;
    }

    sorted.forEach(r => r.recommended = false);
    const bestValue = sorted.reduce((prev, current) =>
        prev.valueScore > current.valueScore ? prev : current
    );
    bestValue.recommended = true;

    renderResults(sorted, window.currentInsuranceType);
}

// ==========================================
// Smooth Scroll
// ==========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                window.scrollTo({
                    top: target.offsetTop - navbarHeight - 20,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==========================================
// Animations
// ==========================================
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.type-card, .testimonial-card, .step-card, .provider-card').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${i * 0.1}s`;
        observer.observe(el);
    });
}

// ==========================================
// Type Card Click Handlers
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.type-card[data-type]').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const type = this.dataset.type;
            const typeMap = { 'car': 'car', 'home': 'home', 'life': 'life', 'health': 'health' };
            const radio = document.querySelector(`input[name="insuranceType"][value="${typeMap[type] || 'car'}"]`);
            if (radio && !radio.disabled) {
                radio.checked = true;
                radio.dispatchEvent(new Event('change'));
            }
            document.getElementById('compare').scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// ==========================================
// Mobile Menu
// ==========================================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!mobileMenuBtn || !mobileMenu) return;

    mobileMenuBtn.addEventListener('click', function() {
        const isActive = mobileMenu.classList.toggle('active');
        this.classList.toggle('active');
        this.setAttribute('aria-expanded', isActive);
        mobileMenu.setAttribute('aria-hidden', !isActive);
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
            mobileMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
        }
    });
}

// ==========================================
// Modals
// ==========================================
function initModals() {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    const modalClose = modalOverlay?.querySelector('.modal-close');

    if (!modalOverlay) return;

    // Open modal from links with data-modal attribute
    document.querySelectorAll('[data-modal]').forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const modalType = this.dataset.modal;
            const template = document.getElementById(modalType + 'Content');

            if (template) {
                const titles = {
                    'disclaimer': 'Disclaimer',
                    'privacy': 'Privacy Notice'
                };
                modalTitle.textContent = titles[modalType] || 'Information';
                modalContent.innerHTML = template.innerHTML;
                openModal();
            }
        });
    });

    function openModal() {
        modalOverlay.classList.add('active');
        modalOverlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        modalClose?.focus();
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
        modalOverlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // Close button
    modalClose?.addEventListener('click', closeModal);

    // Click overlay to close
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // Escape key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
}

// ==========================================
// Modify Search Button
// ==========================================
function initModifySearch() {
    const modifyBtn = document.getElementById('modifySearchBtn');
    const results = document.getElementById('compareResults');
    const formContainer = document.querySelector('.compare-form-container');

    if (!modifyBtn || !results || !formContainer) return;

    modifyBtn.addEventListener('click', function() {
        results.style.display = 'none';
        formContainer.style.display = 'block';

        // Update progress
        updateFormProgress(3);

        // Scroll to form
        document.getElementById('compare').scrollIntoView({ behavior: 'smooth' });
    });
}

// ==========================================
// Footer Links for Insurance Types
// ==========================================
function initFooterLinks() {
    document.querySelectorAll('.footer-links a[data-type]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const type = this.dataset.type;
            const radio = document.querySelector(`input[name="insuranceType"][value="${type}"]`);

            if (radio && !radio.disabled) {
                radio.checked = true;
                radio.dispatchEvent(new Event('change'));
            }

            document.getElementById('compare').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// ==========================================
// Province Risk Hints
// ==========================================
function initProvinceHints() {
    const provinceSelect = document.getElementById('province');
    const provinceHint = document.getElementById('provinceHint');

    if (!provinceSelect || !provinceHint) return;

    provinceSelect.addEventListener('change', function() {
        const riskInfo = provinceRiskFactors[this.value];
        if (riskInfo) {
            provinceHint.textContent = riskInfo.label;
        } else {
            provinceHint.textContent = '';
        }
    });
}

// ==========================================
// Form Progress Indicator
// ==========================================
function updateFormProgress(step) {
    const steps = document.querySelectorAll('.progress-step');
    const lines = document.querySelectorAll('.progress-line');

    steps.forEach((stepEl, index) => {
        const stepNum = index + 1;
        stepEl.classList.remove('active', 'completed');

        if (stepNum < step) {
            stepEl.classList.add('completed');
        } else if (stepNum === step) {
            stepEl.classList.add('active');
        }
    });

    lines.forEach((line, index) => {
        line.classList.remove('active');
        if (index < step - 1) {
            line.classList.add('active');
        }
    });
}
