import { Request, Response } from "express";

export async function post(req: Request, res: Response) {
    const body = req.body;
    res.status(201).send(body);
}
