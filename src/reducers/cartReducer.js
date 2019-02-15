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
            return state;
        case 'deleteProduct':
            return state;
        default: 
            return state;
    }
}

export default cartReducer