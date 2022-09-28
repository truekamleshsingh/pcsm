import React from "react";
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
import Login from './Login';

export const itemList = [
    {
        text: <Login />,
        path: false,
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
        path: false,
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
        path: false,
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
        path: false,
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
        path: false,
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
        path: false,
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