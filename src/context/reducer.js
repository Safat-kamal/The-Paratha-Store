export const initialState = {
    cart : []
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {
                cart : [...state.cart,action.item]
            }
        case 'REMOVE_FROM_CART':
            return {
                cart: state.cart.filter(item => item !== action.item)
            } 
         default:
            return state;   
    }
}

export default reducer;

 