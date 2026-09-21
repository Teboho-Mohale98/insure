const medicalAidData = require('../data/medical-aid');

/**
 * Calculate medical aid quotes from all schemes
 * @param {Object} params - Quote parameters
 * @returns {Array} Array of quote objects
 */
function calculateMedicalQuote(params) {
    const { members, planType, chronicConditions, income } = params;

    const quotes = [];

    Object.keys(medicalAidData).forEach(schemeKey => {
        const scheme = medicalAidData[schemeKey];

        try {
            // Find best matching plan for the requested type
            const bestPlan = findBestPlan(scheme, planType);

            if (bestPlan) {
                const premium = calculateSchemePremium(scheme, bestPlan.key, params);

                quotes.push({
                    schemeId: schemeKey,
                    schemeName: scheme.name,
                    website: scheme.website,
                    rating: scheme.rating,
                    claimsRatio: scheme.claimsRatio,
                    planName: bestPlan.plan.name,
                    planType: bestPlan.plan.type,
                    premium: {
                        monthly: Math.round(premium.monthly),
                        annual: Math.round(premium.annual)
                    },
                    features: bestPlan.plan.features,
                    valueScore: calculateValueScore(scheme, premium.monthly),
                    calculatedAt: new Date().toISOString()
                });
            }
        } catch (error) {
            console.error(`Error calculating quote for ${scheme.name}:`, error);
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
 * Find the best matching plan for the requested type
 */
function findBestPlan(scheme, requestedType) {
    let bestMatch = null;
    let bestMatchKey = null;

    // First, try to find exact type match
    for (const [planKey, plan] of Object.entries(scheme.plans)) {
        if (plan.type === requestedType) {
            bestMatch = plan;
            bestMatchKey = planKey;
            break;
        }
    }

    // If no exact match, find similar type
    if (!bestMatch) {
        if (requestedType === 'comprehensive') {
            // Try saver plans as fallback
            for (const [planKey, plan] of Object.entries(scheme.plans)) {
                if (plan.type === 'saver') {
                    bestMatch = plan;
                    bestMatchKey = planKey;
                    break;
                }
            }
        }
    }

    // Final fallback: just use first available plan
    if (!bestMatch) {
        bestMatchKey = Object.keys(scheme.plans)[0];
        bestMatch = scheme.plans[bestMatchKey];
    }

    return bestMatch ? { key: bestMatchKey, plan: bestMatch } : null;
}

/**
 * Calculate premium for a specific scheme and plan
 */
function calculateSchemePremium(scheme, planKey, params) {
    const { members } = params;
    const plan = scheme.plans[planKey];

    let total = plan.mainMember;

    // Add dependants based on family size
    const memberCount = parseInt(members);

    if (memberCount >= 2) {
        total += plan.adultDep; // Spouse/partner
    }

    if (memberCount >= 3) {
        total += plan.childDep; // First child
    }

    if (memberCount >= 4) {
        total += plan.childDep; // Second child
    }

    if (memberCount >= 5) {
        total += plan.childDep * 0.8; // Additional children (discounted)
    }

    return {
        monthly: total,
        annual: total * 12
    };
}

/**
 * Calculate value score for ranking
 */
function calculateValueScore(scheme, monthlyPremium) {
    let score = 70;

    // Higher claims ratio is better
    score += (scheme.claimsRatio - 90) * 3;

    // Higher rating is better
    score += (scheme.rating - 4) * 8;

    // Lower price is better (relative to R2500 baseline)
    score -= (monthlyPremium - 2500) / 100;

    // Ensure score is between 0-100
    return Math.min(100, Math.max(0, Math.round(score)));
}

module.exports = calculateMedicalQuote;
