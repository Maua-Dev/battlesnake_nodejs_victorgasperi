import { Router } from "express"
import { snakeCustomization } from "../handlers/snake_customization"
import { snakeMovement } from "../handlers/move_handler"

export const router = Router();

router.get('/', snakeCustomization);
router.post('/move', snakeMovement)