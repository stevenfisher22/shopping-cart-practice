import React from 'react';
import { connect } from 'react-redux';
import addProduct from '../actions/addProduct';

class AddProducts extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="Product Name"
                />
                <br />

                <input 
                    type="text" 
                    placeholder="Product Price"
                />

                <br />

                <button>Add Product</button>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        totalCost: state.totalCost,
        productCart: state.productCart
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onAddProduct: (productData) => {dispatch(addProduct(productData))}
    }
}


export default AddProducts
