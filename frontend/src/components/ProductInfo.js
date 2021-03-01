import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"
import ProductService from "../service/ProductService";


const ProductInfo = () => {
    const {id}=useParams();
    const[product,setProduct]=useState([])

    useEffect(()=>{
        const getProduct=async()=>{
            setProduct(await ProductService.getProductById(id));
        }
        getProduct();
    },[])

    return (
        <div className="container">
            <h1 className="text-center">{product.title}</h1>
            <p>{product.description}</p>
            <h4>{product.price}</h4>
        </div>
    )
}

export default ProductInfo
