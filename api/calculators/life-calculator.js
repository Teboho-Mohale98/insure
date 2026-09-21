const lifeInsuranceData = require('../data/life-insurance');

/**
 * Calculate life insurance quotes from all providers
 * @param {Object} params - Quote parameters
 * @returns {Array} Array of quote objects
 */
function calculateLifeQuote(params) {
    const { age, smoker, coverAmount, coverType } = params;

    const quotes = [];

    Object.keys(lifeInsuranceData).forEach(providerKey => {
        const provider = lifeInsuranceData[providerKey];

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
                    coverAmount: coverAmount
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

    // Sort by value score
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
    const { age, smoker, coverAmount, coverType } = params;

    // Base premium per R1M
    let premium = (coverAmount / 1000000) * provider.ratePerMillion;

    // Age loading (exponential after 30)
    if (age > 30) {
        const yearsOver30 = age - 30;
        premium *= Math.pow(1 + (provider.ageLoadingPercent / 100), yearsOver30);
    } else if (age < 30) {
        premium *= Math.pow(0.97, 30 - age); // Slight discount for younger
    }

    // Smoker loading
    if (smoker) {
        premium *= provider.smokerLoading;
    }

    // Cover type adjustment
    if (coverType === 'whole') {
        premium *= 2.2; // Whole life is much more expensive
    } else if (coverType === 'funeral') {
        premium *= 0.12; // Funeral cover is cheaper (smaller amounts)
    }

    // Add realistic variance
    const variance = 0.96 + (Math.random() * 0.08); // ±4%
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

    // Higher claims ratio is better (very important for life insurance)
    score += (provider.claimsRatio - 94) * 5;

    // Higher rating is better
    score += (provider.rating - 4) * 10;

    // Lower price is better (relative to R400 baseline)
    score -= (monthlyPremium - 400) / 20;

    // Ensure score is between 0-100
    return Math.min(100, Math.max(0, Math.round(score)));
}

module.exports = calculateLifeQuote;
