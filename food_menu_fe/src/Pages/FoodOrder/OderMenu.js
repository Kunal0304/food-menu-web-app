import React, { useEffect, useState } from 'react';
import Header from "../../Components/Header";
import { useParams } from "react-router-dom"
import Modal from '../../Components/ShoppingCart'
import BackButton from '../../Components/CustomBackButton'
import CategoryListModal from '../../Components/CategoryListModal'


function App() {
  const [menuData, setMenuData] = useState([]);
  const [toggles, setToggles] = useState({});
  let { category } = useParams();
  const [shoppingCart, setShoppingCart] = useState([]);

  useEffect(() => {
    updateCartDetails();
  }, [shoppingCart]);

  const updateCartDetails = () => {

    const cartItemsList = shoppingCart.map(item => (
      <li key={item.id}>{item.title} - ₹{item.price} x {item.quantity}</li>
    ));

    const totalAmount = shoppingCart.reduce((total, item) => (
      total + (item.price * item.quantity)
    ), 0);

    // document.getElementById("cartTotal").textContent = totalAmount.toFixed(2);
  };

  const addItemToCart = (item) => {
    const itemId = item.id;

    const updatedCart = [...shoppingCart];
    const existingItemIndex = updatedCart.findIndex(cartItem => cartItem.id === itemId);

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({
        id: item.id,
        title: item.attributes.name,
        price: item.attributes.price,
        quantity: 1,
      });
    }

    setShoppingCart(updatedCart);
  };

console.log(toggles, "toggles")


  const removeItemFromCart = (itemId) => {
    const updatedCart = [...shoppingCart];
    const existingItemIndex = updatedCart.findIndex(cartItem => cartItem.id === itemId);

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity -= 1;

      if (updatedCart[existingItemIndex].quantity === 0) {
        setToggles(prevState => {
          const newState = { ...prevState };
          delete newState[itemId];
          return newState; 
        });
        updatedCart.splice(existingItemIndex, 1);
      }
    }

    setShoppingCart(updatedCart);
  };

  useEffect(() => {
    async function callApi() {
      try {
        const response = await fetch(`http://localhost:1337/api/categories?filters[category][$eq]=${category}&populate=*`);
        const result = await response.json();
        setMenuData(result.data);
      } catch (error) {
        console.error('Error fetching menu data:', error);
      }
    }
    callApi();
  }, [category]);

  const handleToggle = (item) => {
    setToggles(prevState => ({
      ...prevState,
      [item.id]: !prevState[item.id]
    }));
    addItemToCart(item)
  };

  return (
    <div>
      <Header/>
      <BackButton/>
      <CategoryListModal/>
      <div className="container">
      <div className="row" id="userdata">
        {menuData.map((user) => (
          <div key={`IT_${user.id}`} className={`col-12 col-sm-12 mb-3 IT_${user.id}`}>
            <p className="category-main-text" id="menu">{user.attributes.category}</p>
            {user.attributes.foodmenus.data.map((item) => (
              <div key={item.id} className="card my-3">
                <div className="card-body p-2">
                  <div className="row">
                    <div className="col-8 col-sm-8">
                      <p className="menu-item-title mb-2 d-flex">
                        <span className="veg-item-icon me-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17">
                            <g id="Group_6775" data-name="Group 6775" transform="translate(-336 -359)">
                              <g id="Rectangle_6056" data-name="Rectangle 6056" transform="translate(336 359)" fill="#fff" stroke="#457917" strokeWidth="1">
                                <rect width="17" height="17" rx="3" stroke="none"></rect>
                                <rect x="0.5" y="0.5" width="16" height="16" rx="2.5" fill="none"></rect>
                              </g>
                              <circle id="Ellipse_46" data-name="Ellipse 46" cx="4.5" cy="4.5" r="4.5" transform="translate(340 363)" fill="#457917"></circle>
                            </g>
                          </svg>
                        </span>
                        <span>{item.attributes.name}</span>
                      </p>
                      <p className="menu-item-description mb-0 minimize"></p>
                    </div>
                    <div className="col-4 col-sm-4 text-end">
                      <p className="menu-item-price mb-2">
                        <span className="rs-font-family">₹ </span>{item.attributes.price}
                      </p>
                      <div className="col-add float-end text-center" style={{ borderColor: 'red', backgroundColor: '#f6baba' }}>
                        <button
                          type="button"
                          className="btn btn-sm product-add additem"
                          data-id={item.id}
                          data-type={`IT_${user.id}`}
                          data-title={item.attributes.name}
                          data-price={item.attributes.price}
                          data-category={user.attributes.category}
                          data-currency="INR"
                          onClick={() => {handleToggle(item)}}
                          style={{ display: toggles[item.id] ? 'none' : 'inline-block' }}
                        >
                          Add +
                        </button>
                        <div>
                          <button
                            type="button"
                            className="btn btn-sm product-remove removeitem"
                            style={{ display: toggles[item.id] ? 'inline-block' : 'none' }}
                            data-id={item.id}
                            data-type={`IT_${user.id}`}
                            data-title={item.attributes.name}
                            data-price={item.attributes.price}
                            data-category={user.attributes.category}
                            data-currency="INR"
                            onClick={() => {removeItemFromCart(item.id)}}
                          >
                            -
                          </button>
                          {shoppingCart.map(i => (
                           item.id == i.id && <span className="total-quantity product-qty" style={{ display: toggles[item.id] ? 'inline-block' : 'none' }} data-id={item.id} data-type={`IT_${user.id}`}>{i.quantity}</span>
                          ))}
                          <button
                            type="button"
                            className="btn btn-sm product-addd additem"
                            style={{ display: toggles[item.id] ? 'inline-block' : 'none' }}
                            data-id={item.id}
                            data-type={`IT_${user.id}`}
                            data-title={item.attributes.name}
                            data-price={item.attributes.price}
                            data-category={user.attributes.category}
                            data-currency="INR"
                            onClick={() => {addItemToCart(item)}}
                          >
                            +
                          </button>
                        </div>                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      </div>
      <div>
      <div>
    </div>
    </div>
    <Modal shoppingCart={shoppingCart} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart}/>
    </div>
  );
}

export default App;

