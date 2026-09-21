// API Client for InsureCompare SA
// Handles all communication with the backend API

const API_BASE_URL = window.location.origin + '/api';

class InsureCompareAPI {
    /**
     * Get car insurance quotes
     */
    static async getCarQuotes(data) {
        return this.post('/quotes/car', data);
    }

    /**
     * Get life insurance quotes
     */
    static async getLifeQuotes(data) {
        return this.post('/quotes/life', data);
    }

    /**
     * Get medical aid quotes
     */
    static async getMedicalQuotes(data) {
        return this.post('/quotes/medical', data);
    }

    /**
     * Get available insurers by type
     */
    static async getInsurers(type) {
        return this.get(`/insurers/${type}`);
    }

    /**
     * Request callback from insurer
     */
    static async requestCallback(data) {
        return this.post('/callback/request', data);
    }

    /**
     * Check API health
     */
    static async checkHealth() {
        return this.get('/health');
    }

    /**
     * Generic GET request
     */
    static async get(endpoint) {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || error.message || 'Request failed');
            }

            return await response.json();
        } catch (error) {
            console.error('API GET error:', error);
            throw error;
        }
    }

    /**
     * Generic POST request
     */
    static async post(endpoint, data) {
        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || error.message || 'Request failed');
            }

            return await response.json();
        } catch (error) {
            console.error('API POST error:', error);
            throw error;
        }
    }

    /**
     * Handle API errors gracefully
     */
    static handleError(error) {
        let message = 'Something went wrong. Please try again.';

        if (error.message) {
            message = error.message;
        } else if (typeof error === 'string') {
            message = error;
        }

        return {
            success: false,
            error: message
        };
    }
}

// Export for use in script.js
window.InsureCompareAPI = InsureCompareAPI;
