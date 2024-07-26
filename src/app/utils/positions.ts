import { Request, Response } from "express"
import { stringify } from "querystring";

export function get_head_coordinates(req: Request): any {
    return req.body["you"]["head"];
}