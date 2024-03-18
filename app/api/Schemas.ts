import mongoose from 'mongoose';

const TaskBoardSchema = new mongoose.Schema({
    BoardID: String,
    BoardTitle: String,
    BoardDesc: String,
    Tasks: Array,
})


export const taskBoard = mongoose.models.taskBoard || mongoose.model("taskBoard", TaskBoardSchema, "taskBoard");