// import { Link as Links } from 'react-router-dom';
import React, { useState } from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import NotesIcon from '@mui/icons-material/Notes';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import { useLocation } from "react-router-dom";
import "./style.css"
import logo from "../pages/images/logo.png"
import { Link } from '@mui/material';





const drawerWidth = 240;


function Navbar(props) {


    function handleClick(e) {
        const tablinks = document.getElementsByClassName('tablink');
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "")            
        }
        e.currentTarget.className += " active";
    }

  

    const navItems = [
        <Link href="#home" 
        
         onClick={(e)=>handleClick(e)} id="nav" className='active tablink' underline="none" sx={{ color: "#2a2a2a", fontWeight: "600", height: "20px", letterSpacing: "1px", "&:hover": { color: "#aaa" } }}>
            {'Home'}
        </Link>,
        <Link href="#mens" 
        activeClass="ac" 
         underline="none" onClick={(e)=>handleClick(e)} id="nav" className='tablink' sx={{ color: "#2a2a2a", fontWeight: "600", height: "20px", letterSpacing: "1px" }}>
            {"Men's"}
        </Link>,
        <Link href="#women" underline="none" onClick={handleClick} id="nav" className='tablink' sx={{ color: "#2a2a2a", fontWeight: "600", height: "20px", letterSpacing: "1px" }}>
            {"Women's"}
        </Link>,
        <Link href="#kidis" underline="none" onClick={handleClick} id="nav" className='tablink' sx={{ color: "#2a2a2a", fontWeight: "600", height: "20px", letterSpacing: "1px" }}>
            {"Kid's"}
        </Link>,
        <Link href="#" underline="none" onClick={handleClick} id="nav" className='tablink' sx={{ color: "#2a2a2a", fontWeight: "600", height: "20px", letterSpacing: "1px" }}>
            {"Pages "}
        </Link>,
        <Link href="#" underline="none" onClick={handleClick} id="nav" className='tablink' sx={{ color: "#2a2a2a", fontWeight: "600", height: "20px", letterSpacing: "1px" }}>
            {"Features"}
        </Link>,
        <Link href="#explor" underline="none" onClick={handleClick} id="nav" className='tablink' sx={{ color: "#2a2a2a", fontWeight: "600", height: "20px", letterSpacing: "1px" }}>
            {"Explore"}
        </Link>
    ];

    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText >
                                <ListItemText primary={item} />
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (<>


        <Box sx={{ display: 'flex', maxWidth: "100%" }} >
            <Grid container justifyContent="center" spacing={0}>
                <Grid item xs={5} sm={12} md={11.2} lg={9.7} xl={10.8}   >

                    <AppBar component="nav" id="App" sx={{
                        background: { xs: "#F7F7F7", sm: "#F7F7F7", md: "#fff", lg: "#fff", xl: "#fff" },
                        color: "#ffc800",
                        height: "auto",
                        padding: { lg: "6px 0px 6px 0px", md: "6px 0px 6px 0px", sm: "6px 0px 6px 0px", xs: "6px 0px 12px 0px" },

                    }}>
                        <Typography sx={{
                            position: "absolute",
                            fontSize: { lg: "40px", md: "30px", sm: "35px", xs: "35px" },
                            color: "black",
                            marginLeft: { lg: "11%", md: "7%", xs: "10%", sm: "3%" },
                            fontWeight: "700",
                        }}>

                            <img src={logo} width={"100%"} alt="" />
                        </Typography>
                        <Toolbar sx={{
                            width: { lg: "88%", md: "92%", sm: "92%", xs: "92%" },
                            margin: { lg: "0% -8%", md: "0% 4%", sm: "0% 85%", xs: "0% 75%" }
                        }} >

                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{
                                    mr: 10,
                                    display: { lg: "none", md: "none", sm: "none" },
                                    background: "#F7F7F7",
                                    color: "black",
                                    borderRadius: "0px",
                                    padding: "10px 19px",
                                    border: "1px solid #F7F7F7",
                                    fontSize: "40px"
                                }}
                            >
                                <NotesIcon sx={{ fontSize: "40px" }} />
                            </IconButton>
                            <Box sx={{
                                display: { xs: 'none', sm: 'flex', md: "flex", lg: "flex" },
                                width: { lg: "53%", md: "100%", sm: "72%" },
                                marginLeft: { lg: "64%", md: "40%", sm: "-60%" },
                                border: { sm: "1px solid #F7F7F7", md: "1px solid #fff", lg: "1px solid #fff", xl: "1px solid #fff" },

                            }}>

                                {navItems.map((item, index) => (
                                    <Link key={index} sx={{
                                        textDecoration: "none",
                                        width: { sm: "60px", md: "80px" },
                                        color: 'black'
                                        ,
                                        fontSize: { sm: "12px", xs: "12px", md: "15px", lg: "16px", xl: "16px" },
                                        letterSpacing: "0.0625rem",
                                        marginRight: { lg: "6%" },
                                        cursor: "pointer",
                                        textAlign: "center",
                                        fontWeight: "400"
                                    }}>
                                        {item}
                                    </Link>
                                ))}
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Grid>
            </Grid>

            <Box component="nav" >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    </>
    );
}

Navbar.propTypes = {
    window: PropTypes.func,
};

export default Navbar;







