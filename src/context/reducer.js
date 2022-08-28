export const initialState = {
    cart : [],
}
const reducer = (state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            const index = state.cart?.findIndex((cartItem)=>{
                return (cartItem.dish === action.item.dish)
            });
            if(index === -1){
                return {
                    ...state,
                    cart : [...state.cart,action.item]
                }
            }
            else{
                let addingCart = state.cart.map((curElm)=>{
                    if(curElm.id === action.item.id){
                        return {...curElm, quantity: curElm.quantity + 1}
                    }
                    return curElm;
                })
                return {
                    ...state,
                    cart:addingCart
                }  
            }
        case 'REMOVE_FROM_CART':
            const Index = state.cart.findIndex((cartItem)=>{
                return (cartItem.id === action.item.id)
            });
            let newCart = [...state.cart];
            
            if(Index >=0){
                newCart.splice(Index,1);
            }else{
                console.error(`Can't remove item ${action.item.id} as it is not available in your cart`)
            }
            return {
                ...state,
                cart:newCart
            } 
        case "ITEM_INCREMENT":
            let updateCart = state.cart.map((curElm)=>{
                if(curElm.id === action.item.id){
                    return {...curElm, quantity: curElm.quantity + 1}
                }
                return curElm;
            })
            return {
                ...state,
                cart:updateCart
            }  
        case "ITEM_DECREMENT":
            let updateCartAgain = state.cart.map((curElm)=>{
                if(curElm.id === action.item.id){
                    return {
                        ...curElm,
                        quantity: (curElm.quantity > 1) ? curElm.quantity - 1 : 1
                    }
                }
                return curElm;
            })  
            return {
                ...state,
                cart:updateCartAgain
            }
        case "ADDON_ADD":
            let updateCartAddon = state.cart.map((curElm)=>{
                if(curElm.dish === action.item.dish){
                    const  serchIndex = curElm.selectedAddons.findIndex((checker)=>{
                        return (checker === action.item.dishAddon)
                    });
                    if(serchIndex === -1){
                        curElm['selectedAddons'].push(action.item.dishAddon);
                        curElm['AddonTotalPrice'] = curElm.AddonTotalPrice + action.item.dishAddonPrice;
                    }
                }
                return curElm;
            });

            return {
                ...state,
                cart:updateCartAddon
            }
        case "ADDON_REMOVE":
            let updateCartAddonRemove = state.cart.map((curElm)=>{
                if(curElm.dish === action.item.dish){
                    const  serchIndexRemove = curElm.selectedAddons.findIndex((checker)=>{
                        return (checker === action.item.dishAddon)
                    });
                    if(serchIndexRemove >= 0){
                        curElm['selectedAddons'].splice(serchIndexRemove,1);
                        curElm['AddonTotalPrice'] = curElm.AddonTotalPrice - action.item.dishAddonPrice;
                    }
                }
                return curElm;
            });

            return {
                ...state,
                cart:updateCartAddonRemove
            }
        default:
            return state; 
    }
}

export const getcartTotalPrice = (cart)=>{
    return (cart?.reduce((amount,item)=> (item.quantity*item.price)+item.AddonTotalPrice+amount,0))
}


export default reducer;

 