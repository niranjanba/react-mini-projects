import React, { useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
    loading: false,
    cart: cartItems,
    total: 0,
    amount: 0,
};

const AppProvider = ({ children }) => {
    // const [cart, setCart] = useState(cartItems);

    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" });
    };

    const remove = (id) => {
        dispatch({ type: "REMOVE", payload: { id: id } });
    };

    const increase = (id) => {
        dispatch({ type: "INCREASE", payload: { id: id } });
    };
    const decrease = (id) => {
        dispatch({ type: "DECREASE", payload: { id: id } });
    };
    const fetchItems = async () => {
        dispatch({ type: "LOADING" });
        const response = await fetch(url);
        const cart = await response.json();
        dispatch({ type: "DISPLAY_ITEMS", payload: cart });
    };
    useEffect(() => {
        fetchItems();
    }, []);
    useEffect(() => {
        dispatch({ type: "GET_AMOUNT" });
    }, [state.cart]);

    return (
        <AppContext.Provider
            value={{
                ...state,
                clearCart,
                remove,
                increase,
                decrease,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
