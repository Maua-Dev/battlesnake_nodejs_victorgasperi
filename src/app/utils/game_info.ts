import { Request } from "express"
import { coordinate, snake } from "../interfaces/info_interfaces"

export function getHeadCoordinates(req: Request): coordinate {
    return req.body["you"]["head"];
}

export function getBodyCoordinates(req: Request): coordinate[] {
    return req.body["you"]["body"];
}

export function getCurrentHealth(req: Request): number {
    return req.body["you"]["health"];
}

export function getBoardHeight(req: Request): number {
    return req.body["board"]["height"];
}

export function getBoardWidth(req: Request): number {
    return req.body["board"]["width"];
}

export function getOtherSnakes(req: Request): snake[] {
    return req.body["board"]["snakes"];
}

export function getFoodCoordinates(req: Request): coordinate[] { 
    return req.body["board"]["food"];
}

export function getCurrentTurn(req: Request): number {
    return req.body["turn"];
}