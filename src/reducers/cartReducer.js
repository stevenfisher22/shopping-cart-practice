function cartReducer (state, action) {
    if (state === undefined) {
        return {
            totalCost: 0, 
            productCart: [{
                productName: 'Oranges', 
                productPrice: 1
            }]
        }
    }
    switch(action.type){
        case 'addProduct':
            console.log('inside reducer ' + action.productData.productName)
            return {
                ...state, 
                productCart: state.productCart.concat({
                    productName: action.productData.productName,
                    productPrice: action.productData.productPrice
                })
            }
        case 'deleteProduct':
            return state;
        default: 
            return state;
    }
}

export default cartReducer