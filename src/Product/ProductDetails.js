import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
const error = "data not fetching...";
const loading = "Loading...";
function ProductDetails(props) {
    let { id } = useParams();
    const url =`https://fakestoreapi.com/products/${id}`;

    const [details, setProductDetails] = useState([]);
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false);

    const fetchData = async (url) => {
        setLoader(true)
        try {
            const response = await fetch(url);
            const data     = await response.json();
            setProductDetails(data);
            setError(null);
            setLoader(false)
        }catch (error) {
            setLoader(false)
            setError(error)
        }
    }
    useEffect(() => {
        fetchData(url)
    },[])

    return (
        <>
            <div className="container">
                <div className="row pt-5 pb-5">
                    {loader && <h2>{ loading }</h2>}
                    {error && <h2>{error}</h2>}
                    <div className="col-md-6">
                        <img className="img-rounded" src={details.image} style={{width:"100%", height:"500px"}}/>
                    </div>
                    <div className="col-md-6 pt-5 pb-5">
                        <h2>{details.title}</h2>
                        <span className="badge bg-success">{details.category}</span>
                        <p className="price">${details.price}</p>
                        <p>{details.description}</p>
                        <button className="btn btn-info"> Add To Cart </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;