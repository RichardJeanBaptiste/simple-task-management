"use client"

import React, {useEffect, useState} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography, Box, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import EditIcon from '@mui/icons-material/Edit';
import logo from "@/public/Logo.svg";
import Image from 'next/image';
import "./page.module.css";



const theme = createTheme({
  typography: {
    fontFamily: 'Outfit, sans-serif', // Specify your desired font family
    // You can also customize other typography properties here
  },
});

export default function Home() {

  const router = useRouter();

  const [id, SetNewID] = useState(uuidv4());

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

  return (
    <Box>
      <p>
        <span style={{paddingRight: '2%'}}>
          <Image
            src={logo}
            width={50}
            height={50}
            alt="logo"
          />
        </span> 
          My Task Board 
        <span style={{ paddingLeft: '.5%'}}>
          <IconButton>
              <EditIcon/>
          </IconButton>
        </span>
        </p>
      <Typography variant="body1">Tasks to keep organised</Typography>

      <TaskBox color="orange" icon="test"/>

      <TaskBox color="orange" icon="test" new_task="true"/>
    </Box>    
  );
}
