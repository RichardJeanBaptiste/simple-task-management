"use client"

import React, {useState, createContext, SetStateAction, Dispatch, ReactNode} from "react";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export interface Task {
    task_id: string,
    task_title: string,
    desc: string,
    icon: string | number,
    status: number,
}

export interface TasksContextInterface {
    id: string,
    title: string,
    desc: string,
    tasks: Array<Task>,
    SetId : Dispatch<SetStateAction<string>>,
    SetTitle: Dispatch<SetStateAction<string>>,
    SetDesc: Dispatch<SetStateAction<string>>,
    SetTasks: Dispatch<SetStateAction<Array<Task>>>,
    saveBoard: (currentTasks: Array<Task>, isNew: boolean) => void,
}

const defaultState = {
    id: "",
    title: "",
    desc: "",
    tasks: [],
    SetId : (id: string) => {},
    SetTitle: (title: string) => {},
    SetDesc: (desc: string) => {},
    SetTasks: (tasks: Array<Task>) => {},
    saveBoard() {},
} as TasksContextInterface;

export const TaskContext = createContext<TasksContextInterface>(defaultState);

type TaskProviderProps = {
    children: ReactNode,
}

export const TaskProvider = ({children}: TaskProviderProps) => {

    let defaultTasks = [
        {
            task_id: uuidv4(),
            task_title: "Task In Progress",
            desc: "",
            icon: "clock",
            status: 1
        },
        {
            task_id: uuidv4(),
            task_title: "Task Completed",
            desc: "",
            icon: "books",
            status: 2
        },
        {
            task_id: uuidv4(),
            task_title: "Task Won't Do",
            desc: "",
            icon: "weights",
            status: 3
        },
    ]

    const [id, SetId] = useState(uuidv4());
    const [title, SetTitle] = useState("My Task Board");
    const [desc, SetDesc] = useState("");
    const [tasks, SetTasks] = useState<Array<Task>>(defaultTasks);

    const saveBoard = (currentTasks: Array<Task>, isNew: boolean) => {
        
        axios.post('/api/create_board', {
            BoardID: id,
            BoardTitle: title,
            Tasks: currentTasks,
            new: isNew,
        })
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });      
    }
    

    return (
        <TaskContext.Provider value={{ id, title, desc, tasks, SetId, SetTitle, SetDesc, SetTasks, saveBoard}}>
            {children}
        </TaskContext.Provider>
    )
}

