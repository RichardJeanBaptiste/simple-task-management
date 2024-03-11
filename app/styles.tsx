export const useStyles = (theme: any) => ({
    root: {
      width: '50%',
      height: '80vh',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    root2: {
      width: '100%',
      height: '100%',
      position: 'relative'
    },
    outfit_title: {
      fontSize: '2.5rem',
      fontWeight: '200',
    },
    outfit_desc: {
      fontSize: '1rem',
      fontWeight: '300'
    },
    logo_box: {
      position: 'relative',
      paddingRight: '2%',
      width: '50px',
      height: '60px',
      marginTop:'5%'
    },
    icon_box: {
      marginTop: '6%',
      marginLeft: '1%',
      width: '30px',
      height: '30px'
    },
    task_box: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      height: '16vh',
      borderRadius: '20px',
      cursor: 'pointer',
    },
    task_box_orange: {
      backgroundColor: '#F5D565',
    },
    task_box_green: {
      backgroundColor: '#A0ECB1',
    },
    task_box_pink: {
      backgroundColor: '#F7D4D3',
    },
    task_box_gray: {
      backgroundColor: '#E3E8EF',
    },
    task_box_new: {
      backgroundColor: 'rgba(245, 213, 101, 0.2)'
    },
    task_title: {
      marginLeft: '5%',
    },
    task_icon: {
      position: 'relative',
      top: '9px',
      left: '12px',
      width: '30px',
      height: '30px',
    },
    task_icon2: {
      cursor: 'pointer'
    },
    modal_style: {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '75%',
      transform: 'translate(-50%, -50%)',
      width: '45%',
      height: '87%',
      borderRadius: '17px',
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    }
  })