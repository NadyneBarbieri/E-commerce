import React, { useContext } from "react";
import '../ProductDisplay/ProductDisplay.css'
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return(
        <div className='productDisplay'>
            <div className="productDisplayLeft">
                <div className="productDisplayImgList">
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                    <img src={product.image} alt=''/>
                </div>
                <div className="productDisplayImg">
                    <img className='productDisplayMainImg' src={product.image} alt=''/>
                </div>
            </div>
            <div className="productDispalyRight">
                <h1>{product.name}</h1>
                <div className="productDisplayRightStar">
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_icon} alt=''/>
                    <img src={star_dull_icon} alt=''/>
                    <p>(122)</p>
                </div>
                <div className="producDisplayRightPrices">
                    <div className="productDispalyRightPriceOld">${product.old_price}</div>
                    <div className="productDispalyRightPriceNew">${product.new_price}</div>
                </div>
                <div className="productDisplayRightDescription">
                    A lighweight, durable, and stylish solution to your everyday carry. 
                    The perfect size for your daily essentials, the Daily Tote is designed to be 
                    comfortable to carry and easy to access.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productDisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className="productdisplay-rigth-category"><span>Category:</span> Woman, T-shirt, Crop Top</p>
                <p className="productdisplay-rigth-category"><span>Tags:</span> Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay;