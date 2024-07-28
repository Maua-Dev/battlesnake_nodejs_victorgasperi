import { Request } from "express"
import { coordinate } from "./info_interfaces"

export function getHeadCoordinates(req: Request): coordinate {
    return req.body["you"]["head"];
}

export function getBodyCoordinates(req: Request): coordinate[] {
    return req.body["you"]["body"];
}

export function getBoardHeight(req: Request): number {
    return req.body["board"]["height"];
}

export function getBoardWidth(req: Request): number {
    return req.body["board"]["width"];
}

export function getOtherSnakes(req: Request): object {
    return req.body["board"]["snakes"];
}

export function getFoodCoordinates(req: Request): object[] { 
    return req.body["board"]["food"];
}