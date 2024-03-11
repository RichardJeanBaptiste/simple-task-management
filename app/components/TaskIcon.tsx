"use client"

import { Box } from "@mui/material";
import Image, { StaticImageData } from 'next/image';
import ClockIcon from '@/public/3d-alarm.png';
import WeightLiftingIcon from '@/public/weightlifting.png';
import BooksIcon from '@/public/stack-of-books.png';
import CoffeeIcon from '@/public/coffee-cup.png';
import ChatIcon from '@/public/chat.png';
import LaptopIcon from '@/public/browsing.png';
import { useTheme }  from '@mui/material/styles';
import { useStyles } from '@/app/styles';

export default function TaskIcon ({task_icon}: any){

    const theme = useTheme();
    const styles = useStyles(theme);

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