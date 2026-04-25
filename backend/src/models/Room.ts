import { Schema, model } from 'mongoose';

const RoomSchema = new Schema({
    roomId: { type: String, unique: true, required: true },
    name: { type: String, required: true },
    pin: { type: String, required: true }, 
    type: { type: String, enum: ['Texto', 'Multimedia'], default: 'Texto' },
    maxFileSize: { type: Number, default: 10485760 } //tamanio maximo de archivo (bytes)
});

export const Room = model('Room', RoomSchema);