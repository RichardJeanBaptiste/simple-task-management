"use client"

import React, {useState} from 'react';
import { Box, IconButton, TextField, Modal, Button } from '@mui/material';
import { useTheme }  from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';
import ClockIcon from '@/public/3d-alarm.png';
import WeightLiftingIcon from '@/public/weightlifting.png';
import BooksIcon from '@/public/stack-of-books.png';
import CoffeeIcon from '@/public/coffee-cup.png';
import ChatIcon from '@/public/chat.png';
import LaptopIcon from '@/public/browsing.png';
import logo from "@/public/Logo.svg";
import AddIcon from "@/public/Add_round_duotone.svg";
import DuoToneIcon from '@/public/Done_round_duotone.svg';
import TimeDuoToneIcon from '@/public/Time_atack_duotone.svg';
import CloseIcon from '@/public/close_ring_duotone.svg';
import Image from 'next/image';
import ModalStatusIcon from './components/ModalStatus/ModalStatusIcon';
import BoardTitle from './components/BoardTitle/BoardTitle';
import ModalTaskIcon from './components/ModalTaskIcon/ModalTaskIcon';
import TaskIcon from './components/TaskIcon';
import { useStyles } from './styles';
import "./page.module.css";




export default function Home() {

  const theme = useTheme();
  const router = useRouter();
  const styles = useStyles(theme);

  const [id, SetNewID] = useState(uuidv4());
  const [title, SetTitle] = useState("My Task Board");
  const [editTitle, SetEditTitle] = useState(false);
  

  const TaskBox = ({name="", status, icon, desc="", new_task=false}: any) => {

    const [currentName, SetCurrentName] = useState(name);
    const [currentIcon, SetCurrentIcon] = useState(icon);
    const [currentDesc, SetCurrentDesc] = useState(desc);
    const [selectedIdx, SetSelectedIdx] = useState(1);
    const [selectedIconIdx, SetSelectedIconIdx] = useState(1);
    const [open, SetOpen] = useState(false);

    const handleOpen = () => SetOpen(true);
    const handleClose = () => SetOpen(false);

    const handleSelectedIndex = (newIndex: number) => {
      SetSelectedIdx(newIndex);
    }

    const handleIconIndex = (newIndex: number) => {
      SetSelectedIconIdx(newIndex);
    }


    let TaskStyle;

    if(status === 'in_progress'){
      TaskStyle = [styles.task_box, styles.task_box_orange]
    } else if(status === 'completed'){
      TaskStyle = [styles.task_box, styles.task_box_green]
    } else if(status === 'wont_do'){
      TaskStyle = [styles.task_box, styles.task_box_pink]
    } else {
      TaskStyle = [styles.task_box, styles.task_box_gray]
    }


    if(new_task){
      return (
        <Box sx={[styles.task_box, styles.task_box_new]}>
          <Box sx={{marginLeft: '3%', marginTop: '4%', width: '55px', height: '55px', backgroundColor:"#E9A23B", borderRadius: '12px'}}>
              <Box sx={styles.task_icon}>
                <Image
                  src={AddIcon}
                  fill
                  alt= "add new task"
                />
              </Box>
          </Box>
          
          <h3 style={styles.task_title}>Add New Task</h3>
        </Box>
      )
    } else {
      return (
        <>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styles.modal_style}>
              <Box sx={styles.modal_title}>
                <h3>Task Details</h3>

                <Box 
                  sx={styles.modal_close_button}
                  onClick={handleClose}
                >
                  
                  <Box sx={styles.close_button}>
                    <Image
                      src={CloseIcon}
                      alt= ""
                      fill
                    />
                  </Box>
                </Box>
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
                <p style={styles.modal_text}>Task Name</p>
                <TextField id="standard-basic"  variant="outlined" placeholder={currentName}/>

                <p style={styles.modal_text}>Description</p>
                <TextField
                  id="outlined-multiline-flexible"
                  placeholder={currentDesc}
                  multiline
                  maxRows={7}
                />

                {/************************ Task Icons ***************************/}
                <p style={styles.modal_text}>Icon</p>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                  <ModalTaskIcon icon={ClockIcon} selected={1} selectedIconIdx={selectedIconIdx} handleSelected={()=> handleIconIndex(1)}/>

                  <ModalTaskIcon icon={ChatIcon} selected={2} selectedIconIdx={selectedIconIdx} handleSelected={() => handleIconIndex(2)}/>

                  <ModalTaskIcon icon={WeightLiftingIcon} selected={3} selectedIconIdx={selectedIconIdx} handleSelected={() => handleIconIndex(3)}/>

                  <ModalTaskIcon icon={BooksIcon} selected={4} selectedIconIdx={selectedIconIdx} handleSelected={() => handleIconIndex(4)}/>

                  <ModalTaskIcon icon={CoffeeIcon} selected={5} selectedIconIdx={selectedIconIdx} handleSelected={() => handleIconIndex(5)}/>

                  <ModalTaskIcon icon={LaptopIcon} selected={6} selectedIconIdx={selectedIconIdx} handleSelected={() => handleIconIndex(6)}/>
                </Box>

                {/************************ Status Icons ***************************/}
                <p style={styles.modal_text}>Status</p>
                <Box sx={{ display: 'grid', gridTemplateColumns:'auto auto', gridGap: '20px'}}>
                    <ModalStatusIcon icon_svg={TimeDuoToneIcon} bg_color="#E9A23B" text="In Progress" selected={1} selectedIdx={selectedIdx} handleSelected={() => handleSelectedIndex(1)}/>
                    <ModalStatusIcon icon_svg={DuoToneIcon} bg_color="#32D657" text="Completed" selected={2} selectedIdx={selectedIdx} handleSelected={() => handleSelectedIndex(2)}/>
                    <ModalStatusIcon icon_svg={CloseIcon} bg_color="#DD524C" text="Won't Do" selected={3} selectedIdx={selectedIdx} handleSelected={() => handleSelectedIndex(3)}/>
                </Box>

                {/*********************** Bottom Buttons **************************/}
                <Box sx={{ width: '47%', marginTop: '15%', marginLeft: '57%',position: 'relative'}}>
                  <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                      <Button variant="contained" color='error' endIcon={<DeleteForeverIcon/>} sx={{  backgroundColor:'#97A3B6', borderRadius: '27px', width: '9vw' }}>
                          Delete
                      </Button>

                      <Button variant="contained" endIcon={<CheckIcon/>} sx={{ marginLeft: '2%', borderRadius: '27px', width: '9vw'}} >
                          Save
                      </Button>
                  </Box>
                </Box>
                
              </Box>
            </Box>
        </Modal>

        <Box sx={TaskStyle} onClick={handleOpen}>
          <TaskIcon task_icon={currentIcon}/>
          <h3 style={styles.task_title}>{currentName}</h3>
          <p>{currentDesc}</p>
        </Box>
        </>
        
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

            <BoardTitle title={title} SetTitle={SetTitle} editTitle={editTitle} SetEditTitle={SetEditTitle}/>

            <Box sx={styles.icon_box}>
              <IconButton onClick={() => SetEditTitle(!editTitle)}>
                  <EditIcon/>
              </IconButton>
            </Box> 
        </Box>
        
        <Box sx={{ paddingBottom: '2.5%'}}>
          <TaskBox name="Task in progress" desc="" status="in_progress" icon="clock"/>
        </Box>
        
        <Box sx={{ paddingBottom: '2.5%'}}>
          <TaskBox name="Task Completed" desc="" status="completed" icon="weights"/>
        </Box>

        <Box sx={{ paddingBottom: '2.5%'}}>
          <TaskBox name="Task Won't Do" status="wont_do" icon="books"/>
        </Box>

        <Box sx={{ paddingBottom: '2.5%'}}>
          <TaskBox status="gray" icon="test" new_task={true}/>
        </Box>
       
      </Box>
    </Box>    
  );
}
 