import React from 'react';
import { connect } from 'react-redux';
import addProduct from '../actions/addProduct';
import AddProducts from './AddProducts';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {

        var product = this.props.productCart.map((product) => {
            return <li key={product.ProductName}>{product.productName}</li>
        })

        return ( 
            <div>
                <AddProducts />
                
                <table>
                    {/* Table Header */}
                    <thead>
                        <tr>
                            <td>
                                Product Name
                            </td>
                            <td>
                                Product Price
                            </td>
                            <td>
                                #
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.productCart.map((productData) =>{
                                return 
                            })
                        }
                    </tbody>
                </table>

                <br />
                {this.props.totalCost}
                <br />
                <ul>
                    {product}
                </ul>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddProducts)
