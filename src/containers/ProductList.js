import React,{useEffect} from "react";
import axios from "axios";
import { useSelector,useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/ProductActions";

const ProductList = ()=>{
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log("products list");
    console.log(products);

    const fetchProducts = async ()=>{
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log('Err',err);
        })

        
        dispatch(setProducts(response.data));
    }

    useEffect(()=>{
        fetchProducts();
    },[])
    console.log("product response",products);
    const martop = {
        margintop:'5rem',
    }
    return(
        <div className="ui grid container" style={{marginTop:'5rem'}}>
            <ProductComponent/>
        </div>
    )
}

export default ProductList;