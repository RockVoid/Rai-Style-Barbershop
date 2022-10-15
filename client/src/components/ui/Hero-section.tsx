import Box, { BoxProps } from '@mui/material/Box';
import CustomImageList from "../Image-list";

export default function HeroSection(props: BoxProps) {
    return (
        <Box 
            display="flex" 
            justifyContent="center" 
            flex-wrap={true}
            m={1} 
            p={1} 
            bgcolor="background.paper"
        >
            <Box p={1} bgcolor="grey.300">
                <CustomImageList />
            </Box>
        </Box>
    );
}