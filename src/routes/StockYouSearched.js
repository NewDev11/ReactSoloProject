
import React from 'react'
import {useSelector} from 'react-redux'
import {formatCurrency} from './utils'
import Fade from 'react-reveal/Fade'

const favStocks = () => {

  const favStocks = useSelector(state => state.cart.favStocks) //an array of objects 
  const numberItems = useSelector(state =>  state.cart.numberItems); 
  const totalCost = useSelector(state =>  state.cart.totalCost);

  return (
    <>
      <div>
        {
          favStocks.length === 0 
          ? 
          <div>Cart is empty</div>
          : 
          <div>
            You have <em>{numberItems}</em> items in the cart
            <br />
            Total Cost: {formatCurrency(totalCost)}
          </div>
        }
      </div>

      <Fade left cascade>
        <div className="row cart-items">
          {
            favStocks.map(item =>{
              return <div key={item.id} className="col-12 d-flex flex-column">

                  <div className="d-flex">
                    <div>
                      <img src={item.image} alt="" />
                    </div>

                    <div>{item.title}</div>
                  </div>

                  <div>
                    {formatCurrency(item.price)} X {item.quantity}

                    <button className="btn btn-warning">Remove</button>
                  </div>
              </div>
            })
          }
        </div>
      </Fade>
    </>
  )
}

export default favStocks
