"use client"

import React, {useState} from 'react';
import { Box, IconButton, TextField, Modal } from '@mui/material';
import { useTheme }  from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ClockIcon from '@/public/3d-alarm.png';
import WeightLiftingIcon from '@/public/weightlifting.png';
import BooksIcon from '@/public/stack-of-books.png';
import CoffeeIcon from '@/public/coffee-cup.png';
import ChatIcon from '@/public/chat.png';
import LaptopIcon from '@/public/browsing.png';
import logo from "@/public/Logo.svg";
import AddIcon from "@/public/Add_round_duotone.svg";
import DuoToneIcon from '@/public/Done_round_duotone.svg';
import AddRoundIcon from '@/public/Add_round_duotone.svg';
import TimeDuoToneIcon from '@/public/Time_atack_duotone.svg';
import CloseIcon from '@/public/close_ring_duotone.svg';
import Image, { StaticImageData } from 'next/image';
import "./page.module.css";
import ModalStatusIcon from './components/ModalStatus/ModalStatusIcon';
import { useStyles } from './styles';


export default function Home() {

  const theme = useTheme();
  const router = useRouter();
  const styles = useStyles(theme);

  const [id, SetNewID] = useState(uuidv4());
  const [title, SetTitle] = useState("My Task Board");
  const [editTitle, SetEditTitle] = useState(false);
  
  const TaskIcon = ({task_icon}: any) => {

    let current_icon: string | StaticImageData = "";

    switch(task_icon) {
      case "clock":
        current_icon = ClockIcon;
        break;
      case "books":
        current_icon = BooksIcon;
        break;
      case "weights":
        current_icon = WeightLiftingIcon;
        break;
      case "laptop":
        current_icon = LaptopIcon;
        break;
      case "coffee":
        current_icon = CoffeeIcon;
        break;
      case "chat":
        current_icon = ChatIcon;
        break;
      default:
        current_icon = "";
    } 
    
    return (
      <Box sx={{marginLeft: '3%', marginTop: '4%', width: '55px', height: '55px', backgroundColor:'white', borderRadius: '12px'}}>
        <Box sx={styles.task_icon}>
          <Image
            src={current_icon}
            fill
            alt="icon"
          />
        </Box>
      </Box>
    )
  }

  const TaskBox = ({name="", status, icon, desc="", new_task=false}: any) => {

    const [currentName, SetCurrentName] = useState(name);
    const [currentIcon, SetCurrentIcon] = useState(icon);
    const [currentDesc, SetCurrentDesc] = useState(desc);
    const [open, SetOpen] = useState(false);

    const handleOpen = () => SetOpen(true);
    const handleClose = () => SetOpen(false);


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
              <Box sx={{ display:'flex', flexDirection: 'row'}}>
                <h3>Task Details</h3>
                <p onClick={handleClose}>Close</p>
              </Box>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%'}}>
                <p>Task Name</p>
                <TextField id="standard-basic"  variant="outlined" placeholder={currentName}/>

                <p>Description</p>
                <TextField
                  id="outlined-multiline-flexible"
                  placeholder={currentDesc}
                  multiline
                  maxRows={4}
                />

                {/************************ Task Icons ***************************/}
                <p>Icon</p>
                <Box sx={{display: 'flex', flexDirection: 'row'}}>
                  <Box sx={[styles.task_icon, styles.task_icon2]}>
                    <Image
                      src={ClockIcon}
                      fill
                      alt= "add new task"
                    />
                  </Box>

                  <Box sx={[styles.task_icon, styles.task_icon2]}>
                    <Image
                      src={ChatIcon}
                      fill
                      alt= "add new task"
                    />
                  </Box>

                  <Box sx={[styles.task_icon, styles.task_icon2]}>
                    <Image
                      src={WeightLiftingIcon}
                      fill
                      alt= "add new task"
                    />
                  </Box>

                  <Box sx={[styles.task_icon, styles.task_icon2]}>
                    <Image
                      src={BooksIcon}
                      fill
                      alt= "add new task"
                    />
                  </Box>

                  <Box sx={[styles.task_icon, styles.task_icon2]}>
                    <Image
                      src={CoffeeIcon}
                      fill
                      alt= "add new task"
                    />
                  </Box>

                  <Box sx={[styles.task_icon, styles.task_icon2]}>
                    <Image
                      src={LaptopIcon}
                      fill
                      alt= "add new task"
                    />
                  </Box>
                </Box>

                {/************************ Status Icons ***************************/}
                <p>Status</p>
                <Box sx={{ display: 'grid', gridTemplateColumns:'auto auto', gridGap: '20px'}}>
                    
                    <ModalStatusIcon icon_svg={TimeDuoToneIcon} bg_color="#E9A23B" text="In Progress" selected={true}/>
                    <ModalStatusIcon icon_svg={DuoToneIcon} bg_color="#32D657" text="Completed" />
                    <ModalStatusIcon icon_svg={CloseIcon} bg_color="#DD524C" text="Won't Do"/>

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
