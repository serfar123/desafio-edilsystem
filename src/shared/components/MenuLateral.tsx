import { Avatar, Collapse, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Box, useMediaQuery } from "@mui/system";
import { useDrawerContext } from "../contexts";

interface MenuLateralProps {
    children: React.ReactNode;
}


export const MenuLateral: React.FC<MenuLateralProps> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen,toggleDrawerOpen } = useDrawerContext();

    return (
        <>
            <Drawer variant="temporary" open={isDrawerOpen} onClose={toggleDrawerOpen}>
                <Box height='100%' width={theme.spacing(28)} display='flex' flexDirection='column'>
                    <Box width='100%' height={theme.spacing(15)} display='flex' alignItems='center' justifyContent='center'>
                        <Avatar sx={{ bgcolor: deepPurple[500] }}>S</Avatar>
                    </Box>

                    <Divider />

                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Início" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon>
                                    <Icon>person</Icon>
                                </ListItemIcon>
                                <ListItemText primary="Clientes" />
                            </ListItemButton>
                        </List>



                    </Box>


                </Box>
            </Drawer >
            <Box height='100vh' marginLeft={smDown ? 0 :theme.spacing(2)}>
                {children}
            </Box>

        </>
    );
}