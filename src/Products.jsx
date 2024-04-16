const Product = ({ id, price, title, description, imgSrc }, setCart, cart) => {
  const obj = {
    id,
    price,
    title,
    description,
    imgSrc
  };
  setCart([...cart, obj]);
  console.log("Cart element = ", cart);
};

const Products = ({ cart, setCart }) => {
  return (
    <div>
      <h1 className="productsH1">SHOES WHICH MAKE YOU TRAVELLER</h1>
      <div className="grid">
        <img className="img1" src="/images/shoe1.png" alt="shoe1-logo" /><br/><br />
        <p className="productsP1">REBOOK AIR ORANGE EXCLUSIVE<br/>MRP:$20</p> 
        <button onClick={() => Product(1, 20, 'REBOOK AIR ORANGE EXCLUSIVE', 'Description', '/images/shoe1.png', setCart, cart)}>
          Add to Cart
        </button>

        <img className="img2" src="/images/shoe2.png" alt="shoe2-logo" /><br/>
        <p className="productsP2">AIR BLACK EDITION<br/>MRP:$25</p> 
        <button onClick={() => Product(2, 25, 'AIR BLACK EDITION', 'Description', '/images/shoe2.png', setCart, cart)}>
          Add to Cart
        </button><br/>
      </div>

      <div className="grid2">
        <img className="img3" src="/images/shoe3.png" alt="shoe3-logo" /><br/>
        <p className="productsP3">PUMA BLUE WHITE LAYERZ<br/>MRP:$22</p> 
        <button onClick={() => Product(3, 22, 'PUMA BLUE WHITE LAYERZ', 'Description', '/images/shoe3.png', setCart, cart)}>
          Add to Cart
        </button><br/>

        <img className="img4" src="/images/shoe4.png" alt="shoe4-logo" /><br/>
        <p className="productsP4">ADIDAS RARE EXCLUSIVE EDITION<br/>MRP:$30</p> 
        <button onClick={() => Product(4, 30, 'ADIDAS RARE EXCLUSIVE EDITION', 'Description', '/images/shoe4.png', setCart, cart)}>
          Add to Cart
        </button><br/>
      </div>
    </div>
  );
};

export default Products;