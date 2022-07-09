import { createContext, useContext, useState } from "react";
import sublinks from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: "", links: [] });

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const openSubmenu = (page, coordinates) => {
        const links = sublinks.find((link) => link.page === page);
        setPage(links);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };
    return (
        <AppContext.Provider
            value={{
                closeSidebar,
                closeSubmenu,
                openSubmenu,
                openSidebar,
                isSidebarOpen,
                isSubmenuOpen,
                location,
                page,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
