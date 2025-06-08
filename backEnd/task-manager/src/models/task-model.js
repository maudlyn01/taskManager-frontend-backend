import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    
    text: { type: String, required: true }, 
    completed: { type: Boolean, default: false }, 
    date: { type: Date, default: Date.now } 
});

export const Task = mongoose.model("task", taskSchema);
