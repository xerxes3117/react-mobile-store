import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../context';

class ProductList extends Component {
    state = {
        products: []
    }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our " title="products" />
                        
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return <h1>{value}</h1>
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            // <Product />
        );
    }
}

export default ProductList;