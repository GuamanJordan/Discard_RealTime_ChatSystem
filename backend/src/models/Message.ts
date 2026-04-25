import { Schema, model } from 'mongoose';

const MessageSchema = new Schema({
    roomId: { type: String, required: true },
    nickname: { type: String, required: true },
    content: { type: String, required: true },
    fileUrl: { type: String }, // Para requisitos multimedia [cite: 33]
    timestamp: { type: Date, default: Date.now }
});

export const Message = model('Message', MessageSchema);