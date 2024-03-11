"use client"

import React, {useState} from 'react';
import { Box, TextField, IconButton } from '@mui/material';
import { useTheme }  from '@mui/material/styles';
import { useStyles } from '@/app/styles';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

export default function BoardTitle({title, SetTitle, editTitle, SetEditTitle}: any){

    const theme = useTheme();
    const styles = useStyles(theme);
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