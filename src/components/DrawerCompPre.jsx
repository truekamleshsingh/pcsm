import { Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// import SettingsIcon from '@mui/icons-material/Settings';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import LoginIcon from '@mui/icons-material/Login';
// import WebhookIcon from '@mui/icons-material/Webhook';
// import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
// import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
// import DeveloperBoardRoundedIcon from '@mui/icons-material/DeveloperBoardRounded';
// import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
// import TouchAppRoundedIcon from '@mui/icons-material/TouchAppRounded';
// import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
// import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
// import RingVolumeRoundedIcon from '@mui/icons-material/RingVolumeRounded';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
// import Login from './Login';
import { itemList } from './itemList';




const DrawerCompPre = (props) => {
    // console.log(props)
    const [openCollapse, setOpenCollapse] = React.useState(false);

    function handleOpenSettings() {
        setOpenCollapse(!openCollapse);
    }
    const [opneDrawer, setOpneDrawer] = useState(false);
    // const [subnav, setSubnav] = React.useState(false);
    // const showSabNav = () => {
    //     setSubnav(!subnav)
    // }

    const StyledNavLink = styled(NavLink)`
        color: white;
        text-decoration: none;
        
    `


    

    return (
        <>
            <Drawer
                anchor='left'
                open={opneDrawer}
                onClose={() => setOpneDrawer(false)}
                elevation={5}
            >

                <List>
                    {
                        itemList.map((item, index) => {
                            return (
                                <>
                                    {/* <StyledNavLink  to={item.path} onClick={item.subMenu && openCollapse}> */}
                                    <ListItem button key={item.text} onClick={item.expandTrue ? handleOpenSettings : undefined}>
                                        <ListItemIcon>{item.icon}</ListItemIcon>
                                        <StyledNavLink to={item.path}>
                                            <ListItemText primary={item.text} sx={{}} />
                                        </StyledNavLink>
                                        {openCollapse && item.subMenu ? item.iconLess : item.iconMore}
                                    </ListItem>
                                    {/* </StyledNavLink> */}
                                    <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                                        <List component="div" disablePadding>
                                            {
                                                item.expandTrue ? item.subMenu.map((subMenu, index) => (
                                                    <>
                                                        <StyledNavLink to={subMenu.path} key={index}>
                                                            <ListItem  button sx={{ ml: 2, }} >
                                                                {/* {subMenu.icon} */}
                                                                < ListItemText inset primary={subMenu.text} />
                                                            </ListItem>
                                                        </StyledNavLink>
                                                    </>
                                                )) : undefined

                                            }

                                        </List>
                                    </Collapse>
                                    <Divider />
                                </>
                            )
                        })
                    }
                </List>
            </Drawer>




            <IconButton onClick={() => setOpneDrawer(!opneDrawer)} sx={{ color: 'black' }}>
                <MenuOpenIcon />
            </IconButton>
        </>
    )
}

export default DrawerCompPre