import { Request, Response } from "express"

export function get_head_coordinates(req: Request): object {
    return req.body["you"]["head"];
}

export function get_body_coordinates(req: Request): object[] {
    return req.body["you"]["body"];
}