import { Router } from 'express';
import { createRoom } from '../controllers/roomController.js';
import { authMiddleware } from '../middlewares/auth.js';

const router = Router();

// El administrador debe estar autenticado para crear salas [cite: 24]
router.post('/rooms', authMiddleware, createRoom);

export default router;