import React from 'react';
import Box from "@mui/material/Box";

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

interface socialMedia {
    name: string,
    url: string,
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

const smedias: socialMedia[] = [
    {
        name: "facebook",
        url: "https://www.facebook.com",
        icon: FacebookIcon
    },
    {
        name: "instagram",
        url: "https://www.instagram.com",
        icon: InstagramIcon
    },
    {
        name: "Whatsapp",
        url: "https://www.gmail.com",
        icon: WhatsAppIcon
    },
]

function TopHeader() {
    return (
        <Box
            sx={{
                width: 'fullWidth',
                height: 100,
                backgroundColor: 'primary.main',
                color: 'primary.light',
            }}
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            alignItems="center"
        >
            <div><WatchLaterIcon /> - Sábado ao Domingo, 9h ás 19h</div>
            <div><LocalPhoneIcon /> - Contato 85 98543-0987</div>
            <Box display="flex" flexDirection="row" justifyContent="space-between">
                {smedias.map((item, idx) => {
                    const IconMui = item.icon;
                    return <a key={idx} href={item.url}><IconMui /></a>;
                })}
            </Box>
        </Box>
    );
}

export default TopHeader;