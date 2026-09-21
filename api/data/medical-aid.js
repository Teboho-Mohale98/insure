// Medical Aid Schemes Data
// 2025 CMS-published contribution rates

module.exports = {
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
            'standard': {
                name: 'Standard',
                type: 'comprehensive',
                mainMember: 2867,
                adultDep: 2374,
                childDep: 862,
                features: ['Full chronic', 'Specialist cover', 'Maternity benefits']
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
            'incentive': {
                name: 'Incentive',
                type: 'comprehensive',
                mainMember: 2680,
                adultDep: 2220,
                childDep: 806,
                features: ['Above threshold', 'Full specialist', 'Good chronic']
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
