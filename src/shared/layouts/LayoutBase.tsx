import { useTheme, Typography, IconButton, Icon } from "@mui/material";
import { Box, useMediaQuery } from "@mui/system";
import React, { ReactNode } from "react";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseProps {
    children: React.ReactNode;
    titulo: string;
    barraDeFerramentas?: ReactNode;

}


export const LayoutBase: React.FC<ILayoutBaseProps> = ({ children, titulo, barraDeFerramentas }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height='100%' display='flex' flexDirection='column' gap={1}>
            <Box display='flex' alignItems='center' width='100%' padding={1} gap={2} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} >
                <IconButton onClick={toggleDrawerOpen}>
                    <Icon>menu</Icon>
                </IconButton>
                <Typography
                    
                    overflow='hidden'
                    whiteSpace='nowrap'
                    textOverflow='ellipsis'
                    variant={smDown ? "h5" : mdDown ? 'h4' : 'h3'}
                >
                    {titulo}
                </Typography>

            </Box>
            {barraDeFerramentas && (
                <Box>
                    {barraDeFerramentas}
                </Box>
            )}
            <Box flex={1} overflow='auto'>
                {children}
            </Box>

        </Box>
    );

}