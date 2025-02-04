import { StatusCodes } from "http-status-codes";

type ErrorResponse = {
    status: StatusCodes;
    body: {
        error: string;
        details?: string;
    };
};

export function createErrorResponse(error: string, details?: string): ErrorResponse {
    return {
        status: 500,
        body: {
            error,
            details,
        },
    };
}
