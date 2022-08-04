import Drawer from '@mui/material/Drawer';
//import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListIcon from '@mui/icons-material/List';
import AppBar from '@mui/material/AppBar';


import { format } from 'date-fns';
import { Avatar } from '@mui/material';
 
import { makeStyles } from '@material-ui/core';
import {
    useNavigate,
    useLocation,
  } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        page:{
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3) // <=> 24 px
        },
        root: {
        display: 'flex',
        },
        drawer: {
        width: drawerWidth,
        },
        drawerPaper: {
        width: drawerWidth,
        },
        active: {
        background: '#f4f4f4'
        },
        title:{
          padding: theme.spacing(2)  
        },
        blankSpace: theme.mixins.toolbar,
        avt:{
             marginLeft: theme.spacing(2)
        } 
        
    }
  })

const Layout = ({children}) => {

    const classes = useStyles()
    let navigate = useNavigate();
    let location = useLocation();

    const menuItems = [
        {
            text : 'Dashboard',
            icon : <ListIcon />,
            path : '/'
        },
        {
            text : 'Add Transaction',
            icon : <AddCircleIcon />,
            path : '/form'
        }
    ]

    

    return (
        <div className={classes.root}>
            <AppBar 
                style = {{width: `calc(100% - ${drawerWidth}px)`}}
                elevation = {0}
                // className={classes.appbar}
            >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Day and time: {format(new Date(), 'dd-MM-yyyy p')}
                    </Typography>
                    <Avatar src='/pic.jpg'
                            className={classes.avt}
                    ></Avatar>
                </Toolbar>
            </AppBar>


            <Drawer
                    className={classes.drawer}
                    sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Expense-Tracker
                    </Typography>
                </Toolbar>
                    
                    <Divider />
                    <List>
                        {/* {['All notes', 'Create note'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))} */}

                        {menuItems.map((object, index) => (
                                <ListItem 
                                        button 
                                        key={object.text}
                                        onClick={()=>navigate(object.path+location.search)}
                                >
                                    <ListItemIcon>
                                        {object.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={object.text} />
                                </ListItem>
                        ))}
                    </List>
                    <Divider />

                </Drawer>

            <div className={classes.page}>
                <div className={classes.blankSpace}></div>
                {children}
            </div>
        </div>
    )
}

export default Layout