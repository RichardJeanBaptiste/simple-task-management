"use client"

import React, {useState} from 'react';
import { Box, Modal, TextField, Button} from '@mui/material';
import { useTheme }  from '@mui/material/styles';
import { useStyles } from '../styles';
import Image from 'next/image';
import ModalTaskIcon from './ModalTaskIcon/ModalTaskIcon';
import ModalStatusIcon from './ModalStatus/ModalStatusIcon';
import TaskIcon from './TaskIcon';
import StatusIcon from './StatusIcon/StatusIcon';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';
import ClockIcon from '@/public/3d-alarm.png';
import WeightLiftingIcon from '@/public/weightlifting.png';
import BooksIcon from '@/public/stack-of-books.png';
import CoffeeIcon from '@/public/coffee-cup.png';
import ChatIcon from '@/public/chat.png';
import LaptopIcon from '@/public/browsing.png';
import AddIcon from "@/public/Add_round_duotone.svg";
import DuoToneIcon from '@/public/Done_round_duotone.svg';
import TimeDuoToneIcon from '@/public/Time_atack_duotone.svg';
import CloseIcon from '@/public/close_ring_duotone.svg';

export default function TaskBox({name="", status, icon, desc="", new_task=false}: any){

    const theme = useTheme();
    const styles = useStyles(theme);

    const [currentName, SetCurrentName] = useState(name);
    const [currentIcon, SetCurrentIcon] = useState(icon);
    const [currentDesc, SetCurrentDesc] = useState(desc);
    const [currentStatus, SetCurrentStatus] = useState(status);
    const [selectedIdx, SetSelectedIdx] = useState(1);
    const [selectedIconIdx, SetSelectedIconIdx] = useState(1);
    const [open, SetOpen] = useState(false);

    const handleOpen = () => SetOpen(true);
    const handleClose = () => SetOpen(false);

    const handleSelectedIndex = (newIndex: number) => {
      SetSelectedIdx(newIndex);
      SetCurrentStatus(newIndex);
    }

    const handleIconChange = (newIndex: number) => {
      if(newIndex === 1){
        SetCurrentIcon("clock");
      } else if(newIndex === 2){
        SetCurrentIcon("chat");
      } else if(newIndex === 3){
        SetCurrentIcon("weights");
      } else if(newIndex === 4){
        SetCurrentIcon("books");
      } else if(newIndex === 5){
        SetCurrentIcon("coffee");
      } else {
        SetCurrentIcon("laptop");
      }
    }

    const handleIconIndex = (newIndex: number) => {
      SetSelectedIconIdx(newIndex);
      handleIconChange(newIndex);
    }

    const handleNameChange = (e: any) => {
        SetCurrentName(e.target.value);
    }

    const handleDescChange = (e: any) => {
        SetCurrentDesc(e.target.value);
    }
    

    let TaskStyle;

    if(selectedIdx === 1){
      TaskStyle = [styles.task_box, styles.task_box_orange]
    } else if(selectedIdx === 2){
      TaskStyle = [styles.task_box, styles.task_box_green]
    } else if(selectedIdx === 3){
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
                <TextField id="standard-basic"  variant="outlined" placeholder={currentName} value={currentName} onChange={handleNameChange}/>

                <p style={styles.modal_text}>Description</p>
                <TextField
                  id="outlined-multiline-flexible"
                  placeholder={currentDesc}
                  multiline
                  maxRows={7}
                  value={currentDesc}
                  onChange={handleDescChange}
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
          <Box sx={{ width: '80%', marginLeft: '3%'}}>
            <h3>{currentName}</h3>
            {"\n"}
            <p>{currentDesc}</p>
          </Box>
          <StatusIcon status_icon={currentStatus}/>
        </Box>
        </>
        
      )
    }   
}