import React from 'react';
import { connect } from 'react-redux';
import addProduct from '../actions/addProduct';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        var product = this.props.productCart.map((product) => {
            return <li key={product.ProductName}>{product.productName}</li>
        })

        return ( 
            <div>This is the Cart Component
                <br />
                {this.props.totalCost}
                <br />
                <ul>
                    {product}
                </ul>
                
                <button onClick={() => {this.props.onAddProduct({productName: 'apples', productPrice: 2})}} >Click Me!</button>

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

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
