export const initialState = {
    cart: [],
    user: null
};

export const getCartTotal = (cart) =>
    cart?.reduce((initial, item) => initial = initial + item.price,0);
const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                ...state,
                cart: [...state.cart, action.item],
            };
        case 'REMOVE_FROM_CART':
            const i = state.cart.findIndex((item) => item.id === action.id);
            let newCart = [...state.cart];
            if(i>=0){
                newCart.splice(i,1);

            } else {
                console.warn('Item not found in basket')
            }

            return {
                ...state,
                cart: newCart
            }
            
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}

export default reducer;