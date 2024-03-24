"use client"


import React, {useState, useEffect, useContext} from 'react';
import { TaskProvider } from '@/app/components/TaskContext';
import { TaskContext } from '@/app/components/TaskContext';
import { Box } from '@mui/material';
import TaskBox from '@/app/components/TaskBox';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

function ViewTask({board_id}: any) {

    const {id , SetId, title, SetTitle, tasks, SetTasks, saveBoard} = useContext(TaskContext);

    //const [ showTasks, SetShowTasks ] = useState([]);

    useEffect(() => {
        axios.post('/api/get_board', {
            BoardID: board_id,
        })
        .then(function (response) {
            //console.log(response.data.currentTaskBoard.Tasks);

            let temp = response.data.currentTaskBoard.Tasks;
            SetId(board_id);
            SetTasks(temp)

        })
        .catch(function (error) {
            console.log(error);
        }); 
    },[]);

    const AddTask = () => {
        let temp = [...tasks];
        temp.push({
          task_id: uuidv4(),
          task_title: 'New Task',
          desc: '',
          icon: "books",
          status: 0
        });
        SetTasks(temp); 
        saveBoard(temp, false);
      }

    const RemoveTask = (itemId: string) => {
        let temp = [...tasks];
    
        temp = temp.filter(item => item.task_id !== itemId);
    
        SetTasks(temp);
    }
    

    return (
        <>
            {tasks.map((x: any, index: number) => {
                return (
                    <Box sx={{ paddingBottom: '2.5%'}} key={index}>
                        <TaskBox name={x.task_title} desc={x.desc} status={x.status} icon={x.icon} task_id={x.task_id} board_id={id} RemoveTask={RemoveTask}/>
                    </Box>
                )
            })}

            <Box sx={{ paddingBottom: '2.5%'}} onClick={AddTask}>
                <TaskBox status="gray" icon="test" new_task={true} />
            </Box>
        </>
    )
}

export default function View({params}: any){
    return (
        <TaskProvider>
            <ViewTask board_id={params.id}/>
        </TaskProvider>
    )
}
