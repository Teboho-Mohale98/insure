// Car Insurance Providers Data
// Rates are estimates based on market research

module.exports = {
    discovery: {
        name: 'Discovery Insure',
        rating: 4.8,
        claimsRatio: 92,
        website: 'www.discovery.co.za/insure',
        ratePerR100k: 520,
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
