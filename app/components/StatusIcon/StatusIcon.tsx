"use client"
import { Box } from '@mui/material'; 
import { StaticImageData } from 'next/image';
import { useTheme }  from '@mui/material/styles';
import { useStyles } from './styles';
import DuoToneIcon from '@/public/Done_round_duotone.svg';
import TimeDuoToneIcon from '@/public/Time_atack_duotone.svg';
import CloseIcon from '@/public/close_ring_duotone-1.svg';
import Image from 'next/image';

export default function StatusIcon({status_icon}: any){

    const theme = useTheme();
    const styles = useStyles({theme});

    let current_icon : string | StaticImageData = "";   
    let bgStyle;

    switch(status_icon){
        case 1:
            current_icon = TimeDuoToneIcon;
            bgStyle = [styles.status_background, styles.sb_orange]
            break;
        case 2:
            current_icon = DuoToneIcon;
            bgStyle = [styles.status_background, styles.sb_green]
            break;
        case 3:
            current_icon = CloseIcon;
            bgStyle = [styles.status_background, styles.sb_red]
            break;
        default:
            bgStyle = [styles.status_background];
    }

    const handleBackground = (): any => {
        return [styles.status_background, styles.sb_green]
    }

    return (
        <Box sx={bgStyle}>
            <Box sx={styles.status_image_box}>
                <Image
                    src={current_icon}
                    alt="status icon"
                    fill
                />
            </Box>
        </Box>
    )
}