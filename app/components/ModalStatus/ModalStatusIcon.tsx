import React, {useState, useEffect} from 'react';
import { useTheme }  from '@mui/material/styles';
import { useStyles } from './styles';
import { Box } from '@mui/material';
import Image from 'next/image';
import DoneRoundIcon from '@/public/Done_round.svg'

export default function ModalStatusIcon({icon_svg, bg_color, text, selected, selectedIdx, handleSelected}: any){

    const theme = useTheme();
    const styles = useStyles({theme, bg_color});

    useEffect(() => {
        console.log(`${selected}, ${selectedIdx}`);
    },[])

    const handleSelectedStyle = () => {
        if(selected === selectedIdx){
            return styles.status_root_selected
        } else {
            return styles.status_root
        }
    }

    const showCheckMark = () => {
        if(selected === selectedIdx){
            return 'block'
        } else {
            return 'none'
        }
    }
    return (
        <Box sx={handleSelectedStyle} onClick={handleSelected}>
            <Box sx={styles.image_background}>
                <Box sx={styles.image_box}>
                    <Image
                        src={icon_svg}
                        alt="Status Icon"
                        fill
                    />
                </Box>
            </Box>
            
            <Box sx={{marginLeft: "2%", display:'flex', flexDirection: 'row'}}>
                <p>{text}</p>
                <Box sx={{ position: 'relative', backgroundColor: "#3662E3", width: '19px', height: '19px',borderRadius: '15px', top: '16px', left: '11vw', display: showCheckMark}}>
                    <Image
                        src={DoneRoundIcon}
                        alt="Check Mark Icon"
                        fill
                    />  
                </Box>
            </Box>
            
        </Box>
    )   
    
}