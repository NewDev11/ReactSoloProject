
import React from 'react';
import {Link} from 'react-router-dom'


const BaseLayout = (props) => {
  return (
    <><div>
        
    </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/favs">Favorites</Link></li>
            <li><Link to="/about">About Me</Link></li>
        </ul>
      {props.children}

    </>
  )
}

export default BaseLayout
