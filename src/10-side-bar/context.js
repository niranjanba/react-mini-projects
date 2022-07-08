import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };
    const openSidebar = () => {
        setShowSidebar(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };
    const closeSidebar = () => {
        setShowSidebar(false);
    };
    return (
        <AppContext.Provider
            value={{
                showModal,
                showSidebar,
                openModal,
                openSidebar,
                closeModal,
                closeSidebar,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => useContext(AppContext);
