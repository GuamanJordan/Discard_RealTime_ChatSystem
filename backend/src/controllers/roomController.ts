import { type Request, type Response } from 'express';
import { Room } from '../models/Room.js';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid'; 

export const createRoom = async (req: Request, res: Response) => {
    try {
        const { name, pin, type } = req.body;

        if (!pin || pin.length < 4) {
            return res.status(400).json({ message: 'El PIN debe tener al menos 4 dígitos.' });
        }

        const hashedPin = await bcrypt.hash(pin, 10);

        const newRoom = new Room({
            roomId: uuidv4().substring(0, 8), 
            name,
            pin: hashedPin,
            type: type || 'Texto'
        });

        await newRoom.save();
        res.status(201).json(newRoom);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la sala.' });
    }
};