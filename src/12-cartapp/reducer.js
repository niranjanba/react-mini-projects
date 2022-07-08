const reducer = (state, action) => {
    switch (action.type) {
        case "CLEAR_CART":
            return { ...state, cart: [] };
        case "REMOVE":
            const { id } = action.payload;
            const { cart } = state;
            const newCart = cart.filter((item) => item.id !== id);
            return { ...state, cart: newCart };
        case "DECREASE":
            let tempCart = state.cart
                .map((item) => {
                    if (item.id === action.payload.id) {
                        return { ...item, amount: item.amount - 1 };
                    }
                    return item;
                })
                .filter((item) => item.amount !== 0);
            return { ...state, cart: tempCart };
        case "INCREASE": {
            let tempCart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, amount: item.amount + 1 };
                }
                return item;
            });
            return { ...state, cart: tempCart };
        }
        case "GET_AMOUNT": {
            const { total, amount } = state.cart.reduce(
                (cartTotal, cartItem) => {
                    const { amount, price } = cartItem;
                    const itemTotal = amount * price;
                    cartTotal.total += itemTotal;
                    cartTotal.amount += amount;
                    return cartTotal;
                },
                { total: 0, amount: 0 }
            );
            return { ...state, total: total.toFixed(2), amount };
        }
        case "LOADING":
            return { ...state, loading: true };
        case "DISPLAY_ITEMS":
            return { ...state, cart: action.payload, loading: false };
        default:
            return state;
    }
};

export default reducer;
