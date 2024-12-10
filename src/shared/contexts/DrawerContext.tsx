import { createContext, ReactNode, useCallback, useContext, useState } from "react";




interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

interface AppDrawerProviderProps {
    children: ReactNode;
}

const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const DrawerProvider: React.FC<AppDrawerProviderProps> = ({ children }) => {
    const [isDrawerOpen, setThemeName] = useState(false);

    const toggleDrawerOpen = useCallback(() => {
        setThemeName(oldDrawerOpen => !oldDrawerOpen);
    }, []);


    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    )
}
