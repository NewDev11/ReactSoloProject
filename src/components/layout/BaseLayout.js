
import React from 'react';
import {Link} from 'react-router-dom'


const BaseLayout = (props) => {
  return (
    <><div>
        
        <ul flex-direction= "row">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favs">Favorites</Link></li>
            <li><Link to="/about">About Me</Link></li>
        </ul>
    </div>
      {props.children}

    </>
  )
}

export default BaseLayout
