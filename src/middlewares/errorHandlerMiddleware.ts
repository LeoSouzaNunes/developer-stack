import { Request, Response, NextFunction } from "express";

export default async function errorHandlerMiddleware(
    error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    res.status(500).send("Server error.");
}
