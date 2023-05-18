import PropTypes from "prop-types"
import Product from "./Product"


function Products(prop){
    return(
        <div>
            <h1 id="productsTitle">Best Sellers</h1>
            <div id="products">
                <Product category="Canvases" name="OFF-WHITE AIR JORDAN 1 CANVAS" price="32.00€ - 120.00€"/>
                <Product category="Posters" name="YEEZY BOOST 350 V2 FROZEN YELLOW POSTER" price="32.00€ - 120.00€"/>
                <Product category="Stickers" name="YEEZY 350 V2 ZEBRA STICKER" price="32.00€ - 120.00€"/>
                <Product category="Adidas" name="ADIDAS YEEZY POWERPHASE CALABASAS POSTER" price="32.00€ - 120.00€"/>
                <Product category="Jordans" name="AIR JORDAS 4 RED SUEDE POSTER" price="32.00€ - 120.00€"/>
                <Product category="Balenciaga" name="BALENCIAGA TRIPLE S POSTER" price="32.00€ - 120.00€"/>
                <Product category="Nike" name="NIKE BLAZER MID SACAI POSTER" price="32.00€ - 120.00€"/>
                <Product category="Artists" name="LIL PEEP POSTER" price="32.00€ - 120.00€"/>
            </div>
        </div>
    )
}

Products.propTypes = {
    title: PropTypes.string
};

export default Products;