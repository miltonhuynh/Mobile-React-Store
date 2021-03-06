import React from 'react'
import { useNavigate } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Githubicon } from '../github-brands.svg';

export default function HeaderFooter(props) {

  let navigate = useNavigate();
  function goHome () {
    navigate("/Mobile-React-Store", { replace: true });
  }
  function goCart () {
    navigate("/Mobile-React-Store/Cart", { replace: true });
  }
  function goCheckout () {
    navigate("/Mobile-React-Store/Checkout", { replace: true });
  }

  return (
    <>
      <div id="Header">
        <div id="Brand" onClick={goHome}>The React Store<br/>Mobile Version</div>
        <div>
          <a href="https://miltonhuynh.github.io/React-Store/">
            <FontAwesomeIcon icon={faDesktop} id="Mobile-icon"/>
          </a>
        </div>
        <div id="Github-icon"><a href="https://github.com/miltonhuynh/Mobile-React-Store"><Githubicon/></a></div>
        <div id="Navbar">
          <div className="Nav-icon" onClick={goHome}><FontAwesomeIcon icon={faHome} /></div>
          <div className="Nav-icon" onClick={goCart}><FontAwesomeIcon icon={faCartShopping} /></div>
          <div className="Nav-icon" onClick={goCheckout}><FontAwesomeIcon icon={faCircleCheck} /></div>
        </div>
      </div>
      {props.children}
    </>
  )
}
