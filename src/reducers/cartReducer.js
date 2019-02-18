function cartReducer (state, action) {
    if (state === undefined) {
        return {
            totalCost: 0, 
            productCart: []
        }
    }
    switch(action.type){
        case 'addProduct':
            console.log('inside reducer ' + parseInt(action.productData.productName))
            return {
                ...state, 

                totalCost: state.totalCost + action.productData.productPrice,

                productCart: state.productCart.concat({
                    productName: action.productData.productName,
                    productPrice: action.productData.productPrice
                })
            }
        case 'deleteProduct':
            const updatedArray = state.productCart.filter(product => {
                return product.productName !== action.productData.productName
            })

            return {
                ...state, 
                totalCost: state.totalCost - parseInt(action.productData.productName),
                productCart: updatedArray
            };
        default: 
            return state;
    }
}

export default cartReducer