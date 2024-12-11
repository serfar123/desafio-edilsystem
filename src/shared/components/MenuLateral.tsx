import { Avatar, Collapse, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Box, useMediaQuery } from "@mui/system";
import { useDrawerContext } from "../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface MenuLateralProps {
    children: React.ReactNode;
}

interface IListItemLinkProps {
    label: string;
    icon: string;
    to: string;
    onClick: (() => void) | undefined;
}
const ListItemLink: React.FC<IListItemLinkProps> = ({ label, icon, to, onClick }) => {
    const navigate = useNavigate();

    const resolvedPath = useResolvedPath(to);
    const match = useMatch({ path: resolvedPath.pathname, end: false });

    const handleClick = () => {
        navigate(to);
        onClick?.();
    }

    return (
        <ListItemButton selected={!!match} onClick={handleClick}>
            <ListItemIcon>
                <Icon>{icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={label} />
        </ListItemButton>
    );
}


export const MenuLateral: React.FC<MenuLateralProps> = ({ children }) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down('sm'));

    const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();

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
                            {drawerOptions.map(drawerOption => (
                                <ListItemLink
                                    to={drawerOption.path}
                                    key={drawerOption.path}
                                    icon={drawerOption.icon}
                                    label={drawerOption.label}
                                    onClick={toggleDrawerOpen}
                                />
                            ))}
                        </List>


                    </Box>


                </Box>
            </Drawer >
            <Box height='100vh' marginLeft={smDown ? 0 : theme.spacing(2)}>
                {children}
            </Box>

        </>
    );
}