import { Collapse, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React, { useState } from 'react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LoginIcon from '@mui/icons-material/Login';
import WebhookIcon from '@mui/icons-material/Webhook';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import DeveloperBoardRoundedIcon from '@mui/icons-material/DeveloperBoardRounded';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import TouchAppRoundedIcon from '@mui/icons-material/TouchAppRounded';
import ContactSupportRoundedIcon from '@mui/icons-material/ContactSupportRounded';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import RingVolumeRoundedIcon from '@mui/icons-material/RingVolumeRounded';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';




const DrawerComp = (props) => {
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


        const itemList = [
            {
                text: 'Login',
                path: '/',
                icon: <LoginIcon />
            },
            {
                text: 'Services',
                path: '/services',
                icon: <WebhookIcon />
            },
            {
                text: 'Certificate Varify',
                path: '/certificateVarify',
                icon: <PublishedWithChangesIcon />
            },
            {
                text: 'Enquary Now',
                path: '/enqueryNow',
                icon: <PermPhoneMsgIcon />,
            },
            {
                text: 'About us',
                path: '/aboutUs',
                icon: <DeveloperBoardRoundedIcon />,
                iconLess: <ExpandLessIcon />,
                iconMore: <ExpandMoreIcon />,
                expandTrue: true,
                subMenu: [
                    {
                        text: 'AboutPCSM',
                        path: '/aboutpcsm',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                    {
                        text: 'Chairman Message',
                        path: '/chairmanmessage',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                    {
                        text: 'Director Message',
                        path: '/directormessage',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                    {
                        text: 'Insfratructure',
                        path: '/insfratructure',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                    {
                        text: 'Our Mission & Vission',
                        path: '/ourMissionAndVission',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                ]
            },
            {
                text: 'Courses Offered',
                path: '/courseOffered',
                icon: <LocalLibraryIcon />,
                iconLess: <ExpandLessIcon />,
                iconMore: <ExpandMoreIcon />,
                expandTrue: true,
                subMenu: [
                    {
                        text: 'Certificate Courses',
                        path: '/certificateCourses',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                    {
                        text: 'NIELIT Courses',
                        path: '/nielitCourses',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                    {
                        text: 'Univercity Courses',
                        path: '/universityCourses',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                    {
                        text: 'PCSM Yoga Courses',
                        path: '/pcsmYogaCourses',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                ]
            },
            {
                text: 'Get in Touch',
                path: '/getInTouch',
                icon: <TouchAppRoundedIcon />,
                iconLess: <ExpandLessIcon />,
                iconMore: <ExpandMoreIcon />,
                expandTrue: true,
                subMenu: [
                    {
                        text: 'Student Registration',
                        path: '/studentReg',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                    {
                        text: 'Examination',
                        path: '/examination',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                    {
                        text: 'Study Centers',
                        path: '/studyCenter',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                ]
            },
            {
                text: 'Affiliation',
                path: '/affiliation',
                icon: <ContactSupportRoundedIcon />,
                iconLess: <ExpandLessIcon />,
                iconMore: <ExpandMoreIcon />,
                expandTrue: true,
                subMenu: [
                    {
                        text: 'How To',
                        path: '/how',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                    {
                        text: 'Downloads Form',
                        path: '/downloadForm',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                    {
                        text: 'Agreements Form',
                        path: '/agreementForm',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                    {
                        text: 'Check Status',
                        path: '/checkStatus',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },

                ]
            },
            {
                text: 'Downloads',
                path: '/downloads',
                icon: <DownloadForOfflineRoundedIcon />,
                iconLess: <ExpandLessIcon />,
                iconMore: <ExpandMoreIcon />,
                expandTrue: true,
                subMenu: [
                    {
                        text: 'Get e Cirtificates',
                        path: '/getECertificate',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                    {
                        text: 'Course Syallabus',
                        path: '/courseSyallabus',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                    {
                        text: 'Sample Papers',
                        path: '/samplePapers',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                    {
                        text: 'Blogging',
                        path: '/blogging',
                        icon: <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    },
                ]
            },
            {
                text: 'Contact us',
                path: '/contactUs',
                icon: <RingVolumeRoundedIcon />,
            }

        ]

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
                                        <StyledNavLink to={item.path} onClick={item.subMenu && openCollapse}>
                                            <ListItem key={index.toString()} button onClick={item.expandTrue ? handleOpenSettings : undefined}>
                                                <ListItemIcon>{item.icon}</ListItemIcon>
                                                <ListItemText primary={item.text} sx={{}} />
                                                {openCollapse && item.subMenu ? item.iconLess : item.iconMore}
                                            </ListItem>
                                        </StyledNavLink>
                                        <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                {
                                                    item.expandTrue ? item.subMenu.map((subMenu, index) => (
                                                        <>
                                                            <StyledNavLink to={subMenu.path}>
                                                                <ListItem button key={subMenu.text} sx={{ ml: 2, }} >
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

                {/* <Drawer anchor='right'
                open={opneDrawer}
                onClose={() => setOpneDrawer(false)}
                elevation={5}>
                <ListItem button onClick={handleOpenSettings}>
                    <ListItemIcon>
                        <SettingsIcon sx={{ pr: 0, mr: 0, }} />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                    {openCollapse ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>
                <Collapse in={openCollapse} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button >
                            <ListItemText inset primary="Starred" />
                        </ListItem>
                    </List>
                </Collapse>
            </Drawer> */}


                <IconButton onClick={() => setOpneDrawer(!opneDrawer)} sx={{ color: 'black' }}>
                    <MenuOpenIcon />
                </IconButton>
            </>
        )
    }

    export default DrawerComp