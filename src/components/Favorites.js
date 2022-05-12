import React from 'react'
import {useSelector} from 'react-redux'
import formatCurrency from './utils'

const Favorites = () => {
    let favorites = useSelector(state=>state.favorites)
    console.log(favorites)
    
  return (
    <div>Favorites

        <ul>
          {favorites.map(fav=>{
              return <li key={fav.symbol}>{fav.symbol}
               <div>
                   
               </div>
               <ul>
                  
              
                  <li>open: {formatCurrency(fav.data["1. open"])}
                  </li>
                  <li>high: {formatCurrency(fav.data["2. high"])}
                  </li>
                  <li>low:  {formatCurrency(fav.data["3. low"])}
                  </li>
                  <li>close:  {formatCurrency(fav.data["4. close"])}
                  </li>
                </ul>
              
              </li> 
          })}
        </ul>
    </div>
  )
}

export default Favorites