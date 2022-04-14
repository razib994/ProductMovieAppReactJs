import React from 'react';
import {Link} from "react-router-dom";

function Product({product}) {
    return (
        <div>
            <div className="card shadow border-0" style={{borderRadius:"10px"}}>
                <img className="card-img-top" src={product.image} alt={product.title}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">${product.price}</p>
                        <Link to={"/products/"+product.id} className="btn btn-warning">Details</Link>
                    </div>
            </div>
        </div>
    );
}
export default Product;