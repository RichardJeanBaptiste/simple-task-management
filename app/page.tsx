"use client"

import React, {useState} from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import { useTheme }  from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import logo from "@/public/Logo.svg";;
import Image from 'next/image';
import "./page.module.css";

const useStyles = (theme: any) => ({
  root: {
    width: '50%',
    height: '80vh',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  root2: {
    width: '100%',
    height: '100%',
    position: 'relative'
  },
  outfit_title: {
    fontSize: '2.5rem',
    fontWeight: '200',
  },
  outfit_desc: {
    fontSize: '1rem',
    fontWeight: '300'
  },
  logo_box: {
    position: 'relative',
    paddingRight: '2%',
    width: '50px',
    height: '60px',
    marginTop:'5%'
  },
  icon_box: {
    marginTop: '6%',
    marginLeft: '1%',
    width: '30px',
    height: '30px'
  },
  task_box: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '16vh',
    borderRadius: '20px',
  },
  task_box_orange: {
    backgroundColor: '#F5D565',
  },
  task_box_green: {
    backgroundColor: '#A0ECB1',
  },
  task_box_pink: {
    backgroundColor: '#F7D4D3',
  },
  task_box_gray: {
    backgroundColor: '#E3E8EF',
  }

})

export default function Home() {

  const theme = useTheme();
  const router = useRouter();
  const styles = useStyles(theme);

  const [id, SetNewID] = useState(uuidv4());
  const [title, SetTitle] = useState("My Task Board");
  const [editTitle, SetEditTitle] = useState(false);
  

  const TaskBox = ({color, icon, new_task="false"}: any) => {

    let TaskStyle;

    if(color === 'orange'){
      TaskStyle = [styles.task_box, styles.task_box_orange]
    } else if(color === 'green'){
      TaskStyle = [styles.task_box, styles.task_box_green]
    } else if(color === 'pink'){
      TaskStyle = [styles.task_box, styles.task_box_pink]
    } else {
      TaskStyle = [styles.task_box, styles.task_box_gray]
    }


    return (
      <Box sx={TaskStyle}>
        <p>Task in progress</p>
        <p>progress icon</p>
      </Box>
    )
  }

  const BoardTitle = () => {

    const [boardTitle, SetBoardTitle] = useState("");
    
    const handleTitleChange = (e: any) => {
      SetBoardTitle(e.target.value);
    }

    const setBoardTitle = () => {
      SetTitle(boardTitle);
      SetEditTitle(!editTitle);
    }

    if(!editTitle){
      return (
        <Box>
          <h3 style={styles.outfit_title}>{title}</h3>
          <h5 style={styles.outfit_desc}>Tasks to keep organised</h5>
        </Box>
      )
    } else {
      return (
        <Box>
            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
              <TextField id="standard-basic" label="Board Name" variant="standard" placeholder={title} onChange={handleTitleChange}/>
              <IconButton onClick={setBoardTitle}>
                  <CheckIcon/>
              </IconButton>
              <IconButton>
                  <ClearIcon/>
              </IconButton>
            </Box>
            
            <h5 style={styles.outfit_desc} onClick={() => console.log(title)}>Tasks to keep organised</h5>
        </Box>
      )
    }
    
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

            <BoardTitle/>

            <Box sx={styles.icon_box}>
              <IconButton onClick={() => SetEditTitle(!editTitle)}>
                  <EditIcon/>
              </IconButton>
            </Box>
            

            
        </Box>
        
        <Box sx={{ paddingBottom: '2.5%'}}>
          <TaskBox color="orange" icon="test"/>
        </Box>
        
        <Box sx={{ paddingBottom: '2.5%'}}>
          <TaskBox color="green" icon="test"/>
        </Box>

        <Box sx={{ paddingBottom: '2.5%'}}>
          <TaskBox color="pink" icon="test"/>
        </Box>

        <Box sx={{ paddingBottom: '2.5%'}}>
          <TaskBox color="gray" icon="test" new_task="true"/>
        </Box>
       
      </Box>
    </Box>    
  );
}
