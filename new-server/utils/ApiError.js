class ApiError extends Error {
    constructor(statusCode , message) {
        super(message);
        this.message = statusCode
    }
}

module.exports = ApiError