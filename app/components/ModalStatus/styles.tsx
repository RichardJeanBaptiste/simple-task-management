export const useStyles = ({theme, bg_color}: any) => ({

    status_root:{ 
        display: 'flex', 
        flexDirection: 'row', 
        borderWidth: '3px', 
        borderStyle:'solid', 
        borderColor: '#E3E8EF', 
        borderRadius: '12px',
        cursor: 'pointer'
    },
    status_root_selected:{ 
        display: 'flex', 
        flexDirection: 'row', 
        borderWidth: '3px', 
        borderStyle:'solid', 
        borderColor: '#3662E3', 
        borderRadius: '12px',
        cursor: 'pointer'
    },
    image_background: { 
        width: '45px', 
        height: '45px', 
        borderRadius: '8px', 
        backgroundColor:bg_color,
        marginLeft: '1%', 
        marginTop: '1%'
    },
    image_box:{
        position: 'relative', 
        width: '30px', 
        height: '30px', 
        top: '9px', 
        left: '8px'
    }
  
})