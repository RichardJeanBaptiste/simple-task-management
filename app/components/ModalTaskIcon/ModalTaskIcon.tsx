"use client"

import { Box } from '@mui/material';
import { useStyles } from "@/app/styles";
import { useTheme }  from '@mui/material/styles';
import Image from 'next/image';


export default function ModalTaskIcon({icon}: any) {
    const theme = useTheme();
    const styles = useStyles(theme);

    return (
        <Box sx={[styles.task_icon, styles.task_icon2]}>
            <Image
                src={icon}
                fill
                alt= "add new task"
            />
        </Box>  
    )

    
}