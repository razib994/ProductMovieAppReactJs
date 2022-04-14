import React, {useEffect, useState} from "react";
import Product from "./Product/Product";


const url = "https://fakestoreapi.com/products";
const loadingData = "Loading.....";
const errorData = "Data Not Fetching";
function Home(props) {
    const [products, setProducts] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [filteringProduct, setFilteringProduct] = useState("");

    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            const data     = await response.json();
            setProducts(data);
            setFilteringProduct(data)
            setIsLoading(false);
            setError(null);
        }catch (error) {
            setIsLoading(false);
            setError(error)
        }
    }
    useEffect(() => {
        fetchData(url)
    },[])

    const filterItem = (categoryItem) => {
        const updateProduct = products && products.filter((product) => product.category === categoryItem);
        setFilteringProduct(updateProduct)
    }
    return (
        <>
            <div className="container">
                <div className="row mt-3 mb-4 pt-2 text-center">
                    <div className="col-md-12">
                        <button type="button" className="btn btn-outline-dark m-1" onClick={() => setFilteringProduct(products)} >All</button>
                        <button type="button" onClick={() => filterItem("electronics")} className="btn btn-outline-primary m-1">electronics</button>
                        <button type="button" onClick={() => filterItem("jewelery")} className="btn btn-outline-secondary m-1">jewelery</button>
                        <button type="button" onClick={() => filterItem("men's clothing")} className="btn btn-outline-success m-1">men's clothing</button>
                        <button type="button" onClick={() => filterItem("women's clothing")} className="btn btn-outline-danger m-1">women's clothing</button>
                    </div>
                </div>
                <div className="row">
                    {error && <p>{errorData}</p>}
                    {isloading && <p>{loadingData}</p>}
                    {filteringProduct && filteringProduct.map((product) =>
                        <div className="col-md-4 mb-4" key={product.id}>
                            <Product  product={product}/>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Home;