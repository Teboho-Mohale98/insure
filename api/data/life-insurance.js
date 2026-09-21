// Life Insurance Providers Data
// Base rates for age 30, non-smoker per R1M cover

module.exports = {
    discovery: {
        name: 'Discovery Life',
        rating: 4.8,
        claimsRatio: 98,
        website: 'www.discovery.co.za/life',
        ratePerMillion: 485,
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
