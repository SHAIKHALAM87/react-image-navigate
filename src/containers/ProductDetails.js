import React,{useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { removeSelectedProducts, selectedProducts } from "../redux/actions/ProductActions";

const ProductDetails = ()=>{
    const params = useParams();
    const dispatch = useDispatch();
    const ProductDet = useSelector((state) => state.selectedproducts.product);
    const {id,title,image,price,category,description} = ProductDet;
    console.log(params);
    const productid = params.productid;

    const fetchProductsById = async ()=>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productid}`)
        .catch((err)=>{console.log(err)});

        //console.log("product id response",response);
        dispatch(selectedProducts(response.data));
    }
    useEffect(() => {
        if(productid &&  productid!= '')fetchProductsById();
        return ()=>{
            dispatch(removeSelectedProducts())
        }
    }, [productid]);
    console.log("product id response",ProductDet)
    return(
        <div className="ui grid container">
        {Object.keys(ProductDet).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
}

export default ProductDetails;