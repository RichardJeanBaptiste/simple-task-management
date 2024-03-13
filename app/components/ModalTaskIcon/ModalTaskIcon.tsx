"use client"

import { Box } from '@mui/material';
import { useStyles } from "@/app/styles";
import { useTheme }  from '@mui/material/styles';
import Image from 'next/image';


export default function ModalTaskIcon({icon, selected, selectedIconIdx, handleSelected}: any) {
    const theme = useTheme();
    const styles = useStyles(theme);

    const backgroundStyle = () => {
        if(selected === selectedIconIdx){
            return styles.task_icon_background_selected;
        } else {
            return styles.task_icon_background;
        }
    }


    return (
        <Box sx={{paddingRight: '2%'}} onClick={handleSelected}>
            <Box sx={backgroundStyle}>
                <Box sx={[styles.task_icon, styles.task_icon2]}>
                    <Image
                        src={icon}
                        fill
                        alt= "add new task"
                    />
                </Box> 
            </Box>
        </Box>
        
    )

    
}