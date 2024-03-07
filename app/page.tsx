"use client"

import React, {useEffect, useState} from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import { useTheme }  from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import EditIcon from '@mui/icons-material/Edit';
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
  }

})

export default function Home() {

  const theme = useTheme();
  const router = useRouter();
  const styles = useStyles(theme);

  const [id, SetNewID] = useState(uuidv4());
  const [editTitle, SetEditTitle] = useState(false);
  

  useEffect(() => {

    //let id = uuidv4();

    // fetch("/api/create_board", {
    //   method: "post",
    //   body: JSON.stringify({
    //     board_id: id,
    //   })
    // }).then((res) => {
    //   console.log(res);
    //   router.push(`/new/${id}`);
    // }).catch((err) => {
    //   console.log(err);
    // })
  },[]);

  const TaskBox = ({color, icon, new_task="false"}: any) => {

    return (
      <Box>
        <p>{color}</p>
        <p>{icon}</p>
        <p>{new_task}</p>
        <p><span></span> Task in progress</p>
        <p>progress icon</p>
      </Box>
    )
  }

  const BoardTitle = () => {
    const [title, SetTitle] = useState("My Task Board");

    if(!editTitle){
      return (
        <Box>
          <h3>{title}</h3>
          <h5>Tasks to keep organised</h5>
        </Box>
      )
    } else {
      return (
        <Box>
            <TextField id="standard-basic" label="Board Name" variant="standard" placeholder={title}/>
            <h5>Tasks to keep organised</h5>
        </Box>
      )
    }
    
  }

  return (
    <Box sx={styles.root}>
      <Box sx={styles.root2}>
        <Box sx={{ display: 'flex', flexDirection:"row", width: '100%'}}>
            <Box sx={{width:'50px', height:'50px', paddingRight: '2%', position: 'relative'}}>
              <Image
                src={logo}
                fill
                alt="logo"
              />
            </Box>

            <BoardTitle/>

            <IconButton onClick={() => SetEditTitle(!editTitle)}>
                <EditIcon/>
            </IconButton>

            
        </Box>
        

        <TaskBox color="orange" icon="test"/>

        <TaskBox color="orange" icon="test" new_task="true"/>
      </Box>
    </Box>    
  );
}
