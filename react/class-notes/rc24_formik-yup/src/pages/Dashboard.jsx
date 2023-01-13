
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useAuthCall from '../hooks/useAuthCall';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toastErrorNotify } from '../helper/ToastNotify';
import { useNavigate } from 'react-router-dom';



export default function Dashboard() {
    const { logout } = useAuthCall();
    const { currentUser, error} = useSelector((state) => state.auth);
    const navigate = useNavigate()

    useEffect(() => {
        error && toastErrorNotify("logout can not be performed");
    }, [error]);


    return (
        <Box  sx={{ flexGrow: 1}}>
            <AppBar  position="static">
                <Toolbar >
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1,}}>
                        STOCK
                    </Typography>
                    
                    {currentUser ? (
                    <Button color="inherit" onClick={(e) => logout() }>
                        Logout
                    </Button>) : (
                    <Button color="inherit" onClick={(e) => navigate("/") }>
                        Login
                    </Button>
                    )
                    } 
                    
                </Toolbar>
            </AppBar>
        </Box>
    );
}