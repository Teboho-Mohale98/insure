// Province Risk Factors for Car Insurance
// Based on crime statistics and accident rates

module.exports = {
    'gauteng': {
        factor: 1.25,
        label: 'High risk - highest crime & accident rates',
        reason: 'High population density and crime statistics'
    },
    'western_cape': {
        factor: 1.12,
        label: 'Medium-high risk',
        reason: 'Urban density and moderate crime rates'
    },
    'kwazulu_natal': {
        factor: 1.15,
        label: 'Medium-high risk',
        reason: 'Coastal city crime and accident rates'
    },
    'eastern_cape': {
        factor: 1.05,
        label: 'Medium risk',
        reason: 'Moderate risk profile'
    },
    'free_state': {
        factor: 0.95,
        label: 'Lower risk',
        reason: 'Lower population density'
    },
    'mpumalanga': {
        factor: 1.02,
        label: 'Medium risk',
        reason: 'Rural with some high-traffic routes'
    },
    'limpopo': {
        factor: 0.92,
        label: 'Lower risk',
        reason: 'Lower crime and accident rates'
    },
    'north_west': {
        factor: 0.98,
        label: 'Medium-low risk',
        reason: 'Moderate risk areas'
    },
    'northern_cape': {
        factor: 0.88,
        label: 'Lowest risk',
        reason: 'Lowest population density and crime rates'
    }
};
