import React, { useEffect, useRef, useState } from 'react'
import CategoryModal from '../CustomModal'
import './modal.css'; 
import cart_bottom from '../../assets/img/cart-bottom.png'

function Modal({shoppingCart, addItemToCart, removeItemFromCart}) {

    const [orderModal, setOrderModal] = useState(false)

    useEffect(()=>{
        if (shoppingCart.length < 1) {           
            setOrderModal(false)
        }
    },[shoppingCart])
    
    let totalQuantity = 0

    const data = shoppingCart.map((item)=>{
        totalQuantity += item.quantity       

    })

    const totalAmount = shoppingCart.reduce((total, item) => (
        total + (item.price * item.quantity)
      ), 0);



  return (
    <div>
   {shoppingCart.length > 0 &&  <div className="bottom-modal">
      <div className="footer-tabs cart-bottom cartfooter">
        <div className="cart-bottom-curv" style={{backgroundImage: "url(" + { cart_bottom } + ")"}}></div>
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-start">
            <div className="cart-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="21" height="21" viewBox="0 0 21 21">
                <defs>
                  <clipPath id="clip-path">
                    <rect id="Rectangle_6225" data-name="Rectangle 6225" width="21" height="21" transform="translate(0.481)" fill="none"></rect>
                  </clipPath>
                </defs>
                <g id="Group_6821" data-name="Group 6821" transform="translate(-0.481)">
                  <g id="Group_6820" data-name="Group 6820" clipPath="url(#clip-path)">
                    <path id="Path_20518" data-name="Path 20518" d="M14.126,12.524a.258.258,0,0,1-.136.205,5.274,5.274,0,0,0-2.248,1.695A15.577,15.577,0,0,1,8.664,16.9c-.488.321-.978.636-1.485.965-.337-.655-.664-1.288-1-1.938l.294-.177A1.138,1.138,0,0,0,7.109,14.7c0-.272.035-.546.057-.818A1.293,1.293,0,0,0,6.8,12.813c-.119-.121-.257-.264-.156-.448s.307-.143.479-.126a.692.692,0,0,1,.53.323c.218.35.423.709.612,1.075a.915.915,0,0,0,1.215.542,9.529,9.529,0,0,0,2.943-1.461,3.276,3.276,0,0,1,.928-.451,1.389,1.389,0,0,1,.637.032c.063.012.139.143.143.223" transform="translate(0.698 0.905)"></path>
                    <path id="Path_20519" data-name="Path 20519" d="M9.419,5.263A.191.191,0,0,1,9.425,5a.871.871,0,0,1,1.236,0,.194.194,0,0,1,0,.276c-.09.116-.149.257-.231.382a.2.2,0,0,1-.119.091c-.205.01-.411,0-.574,0-.122-.19-.213-.345-.318-.489" transform="translate(0.934 0.351)"></path>
                    <path id="Path_20520" data-name="Path 20520" d="M9.635,2.4A1.1,1.1,0,0,1,10.167.886,1.242,1.242,0,0,0,10,2.623c.15.264.307.525.46.788a.741.741,0,0,1-.088.884.8.8,0,0,0-.108-.783c-.214-.367-.452-.724-.633-1.107" transform="translate(0.944 0.066)"></path>
                    <path id="Path_20521" data-name="Path 20521" d="M6.095,15.746,4.213,16.6c.468.936.924,1.844,1.383,2.764l1.81-1.074c-.227-.443-.439-.859-.654-1.275s-.434-.838-.657-1.268m.562,2.4c-.005.057-.11.157-.154.148a.244.244,0,0,1-.166-.16c-.008-.059.082-.13.128-.2l.081,0c.041.069.117.141.112.205" transform="translate(0.552 1.166)"></path>
                    <path id="Path_20522" data-name="Path 20522" d="M18.913,11.455a.253.253,0,0,1-.139.183,1.019,1.019,0,0,1-.306.04c-.443.039-.887.061-1.326.12a2.8,2.8,0,0,0-.5.188,1.235,1.235,0,0,1-.378.093q-5.031.008-10.062,0c-.45,0-.9.006-1.351,0a1.068,1.068,0,0,1-.324-.092,2.556,2.556,0,0,0-.5-.189c-.433-.058-.872-.081-1.308-.118a1.054,1.054,0,0,1-.306-.038c-.07-.029-.114-.121-.169-.186a1.016,1.016,0,0,1,.191-.158.437.437,0,0,1,.18-.006H18.551a.505.505,0,0,1,.2.01c.068.032.162.1.163.154" transform="translate(0.406 0.836)"></path>
                    <path id="Path_20523" data-name="Path 20523" d="M10.864,2.4A1.092,1.092,0,0,1,11.276.949c.023-.015.048-.026.115-.061-.044.058-.056.077-.07.093a1.17,1.17,0,0,0-.142,1.55c.166.291.338.578.506.867a.741.741,0,0,1-.093.911.733.733,0,0,0-.078-.767c-.218-.379-.464-.744-.65-1.139" transform="translate(1.035 0.066)"></path>
                    <path id="Path_20524" data-name="Path 20524" d="M8.39,2.414A1.094,1.094,0,0,1,8.9.907c-.05.063-.078.106-.114.143a1.012,1.012,0,0,0-.2,1.2c.182.4.415.77.628,1.151a.774.774,0,0,1-.078.908,1,1,0,0,0-.208-.958c-.18-.309-.382-.609-.532-.933" transform="translate(0.852 0.067)"></path>
                    <path id="Path_20525" data-name="Path 20525" d="M15.159,11.473H4.461A5.787,5.787,0,0,1,7.069,6.835a5.682,5.682,0,0,1,6.255-.26,5.815,5.815,0,0,1,3.036,4.905h-.68a5.283,5.283,0,0,0-4.016-4.864,5.313,5.313,0,0,1,3.494,4.857" transform="translate(0.57 0.427)"></path>
                  </g>
                </g>
              </svg>
            </div>
            <div className="ps-2">
              <p className="cart-total-sub mb-0"><span className="rs-font-family">₹ </span><span className="totalamountclsval" id="cartTotal">{totalAmount}</span></p>
              <p className="cart-total-note mb-0">Extra charges may apply</p>
            </div>
            
          </div>
          <div className="text-end">
            <p className="item-cart-text totalcartitems">{totalQuantity} Items in cart</p>
            <a className="btn btn-sm view-order-btn cartbtnlink" onClick={()=>setOrderModal((prev)=> !prev)} id="data-id">View Order</a>
          </div>
        </div>
      </div>
    </div>}


   {orderModal &&
   <CategoryModal isOpen={orderModal} isClose={()=>setOrderModal(false)}>
    <div>
    <div>
      {/* Modal content */}
      <div className="modal-dialog order-summary-pop-wrapper" >
        <div className="modal-content">
          <div className="modal-header p-2 my-2 d-flex justify-content-between mb-3 align-items-center ">
            <p className="item-summary-title mb-0 ">Your Order Summary</p>
            <button type="button" className="close" onClick={()=> setOrderModal(false)} data-bs-dismiss="modal" aria-label="Close">&times;</button>
          </div>
          <div className="modal-body p-2 mt-3 modal-body-cust-height">
        <div className="mx-3">
      <div className="row" id="userdata">
            {shoppingCart.map((item) => (
              <div key={item.id} className="card mb-2">
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
                        <span>{item.title}</span>
                      </p>
                      <p className="menu-item-description mb-0 minimize"></p>
                    </div>
                    <div className="col-4 col-sm-4 text-end">                      
                        <span className="rs-font-family p-2">₹ {item.price}</span>
                      <div className="col-add float-end text-center" style={{ borderColor: 'red', backgroundColor: '#f6baba' }}>
                        <div>
                          <button
                            type="button"
                            className="btn btn-sm product-remove removeitem"
                            onClick={() => {removeItemFromCart(item.id)}}
                          >
                            -
                          </button>
                          {shoppingCart.map(i => (
                           item.id == i.id && <span className="total-quantity product-qty" data-id={item.id}>{i.quantity}</span>
                          ))}
                          <button
                            type="button"
                            className="btn btn-sm product-addd additem"
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
      </div>
          </div>
          <div className="modal-footer d-block">
            <textarea className="form-control" name="sp_note" id="cart_special_notes" rows="3" placeholder="Enter any additional information about your order."></textarea>
          </div>
        </div>
      </div>
    </div>

     </div>
     </CategoryModal>
    }
    </div>
  )
}

export default Modal