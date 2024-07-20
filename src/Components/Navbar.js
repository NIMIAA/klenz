import React, { useState } from 'react';
import Switch from 'react-switch';
import Logo from '../Assets/KLogo.svg';
import { Link } from 'react-router-dom';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { 
  Box, 
  Drawer, 
  List,
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText,
  } from '@mui/material';


const Navbar = ({toggleTheme, theme}) => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
      {text: "Home", path : "/"},
      {text: "About Me", path : "/about"},
      {text: "Portfolio", path : "/portfolio"},
      {text: "Services", path : "/services"},
      {text: "Contact", path: "/contact" }
    ];
    const handleSwitch = (checked) => {
      toggleTheme();
    };

  return (
    <nav>
      <div className="navbar">
        <div className='nav-logo'>
        <Link to="/" className='nav-logo-link' >KLENZ PICTURES</Link>
        </div>
        <div className='navbar-links-container'>
        
            <Link to="/" className='navbar-link1'>Home</Link>
            <Link to="/about" className='navbar-link2'>About Me</Link>
            <Link to="/portfolio" className='navbar-link3'>Portfolio</Link>
            <Link to="/services" className='navbar-link4'>Services</Link>
            
        </div>
        
        <div className='nav-btn navbar-links-container'>
            <Link to="/contact"  className='primary-btn btn-link'>Contact Us</Link>

            
            <div className='toggle-btn'>
            <Switch
            onChange={handleSwitch}
            checked={theme === 'dark'}
            uncheckedIcon={<div></div>}
            checkedIcon={<div></div>}
            onColor='#fff'
            onHandleColor='#000'
            offColor='#000'
            offHandleColor='#fff'
            handleDiameter={25}
            width={70}
            height={32}
            />
            </div>

        </div>
        
        <div className='navbar-sidemenu'>
          <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
        </div>
        <Drawer open={openMenu} onClick={() => setOpenMenu(false)}
          anchor='right'
          sx={{ '& .MuiDrawer-paper':{
             backgroundColor : 'var(--background-color)',
            color : 'var(--primary-text-color)'
          },
           
          }}
          >
            <Box
            sx={{width : 250}}
            role='presentation'
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
            >
              <List>
                {menuOptions.map((items) =>(
                  <ListItem key={items.text}>
                    <ListItemButton component={Link} to={items.path}>
                      <ListItemText primary = {items.text}/>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <div className='toggle-btn'>
            <Switch
            onChange={handleSwitch}
            checked={theme === 'dark'}
            uncheckedIcon={<div></div>}
            checkedIcon={<div></div>}
            onColor='#fff'
            onHandleColor='#000'
            offColor='#000'
            offHandleColor='#fff'
            handleDiameter={25}
            width={70}
            height={32}
            />
            </div>
            </Box>
        </Drawer>


      </div>
      <hr/>
    </nav>
  );
};

export default Navbar;