"use client"

import React, {useState} from 'react';
import { Box, IconButton } from '@mui/material';
import { useTheme }  from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import EditIcon from '@mui/icons-material/Edit';
import logo from "@/public/Logo.svg";
import Image from 'next/image';
import BoardTitle from './components/BoardTitle/BoardTitle';
import { useStyles } from './styles';
import TaskBox from './components/TaskBox';
import "./page.module.css";


export default function Home() {

  const theme = useTheme();
  const router = useRouter();
  const styles = useStyles(theme);

  const [id, SetNewID] = useState(uuidv4());
  const [title, SetTitle] = useState("My Task Board");
  const [editTitle, SetEditTitle] = useState(false);
  const [tasks, SetTasks] = useState<any>([]);
  
  const AddTask = () => {
    let temp = [...tasks];
    temp.push("a");
    SetTasks(temp);
  }

  return (
    <Box sx={styles.root}>
      <Box sx={styles.root2}>
        <Box sx={{ display: 'flex', flexDirection:"row", width: '100%'}}>
            <Box sx={styles.logo_box}>
              <Image
                src={logo}
                fill
                alt="logo"
              />
            </Box>

            <BoardTitle title={title} SetTitle={SetTitle} editTitle={editTitle} SetEditTitle={SetEditTitle}/>

            <Box sx={styles.icon_box}>
              <IconButton onClick={() => SetEditTitle(!editTitle)}>
                  <EditIcon/>
              </IconButton>
            </Box> 
        </Box>
        
        {tasks.map((x: any, index: number) => {
          return (
            <Box sx={{ paddingBottom: '2.5%'}} key={index}>
              <TaskBox status={4} icon="books"/>
            </Box>
          )
        })}

        <Box sx={{ paddingBottom: '2.5%'}}>
          <TaskBox name="Task in progress" desc="" status={1} icon="clock"/>
        </Box>
        
        <Box sx={{ paddingBottom: '2.5%'}}>
          <TaskBox name="Task Completed" desc="" status={2} icon="weights"/>
        </Box>

        <Box sx={{ paddingBottom: '2.5%'}}>
          <TaskBox name="Task Won't Do" status={3} icon="books"/>
        </Box>

        <Box sx={{ paddingBottom: '2.5%'}} onClick={AddTask}>
          <TaskBox status="gray" icon="test" new_task={true} />
        </Box>
       
      </Box>
    </Box>    
  );
}
 