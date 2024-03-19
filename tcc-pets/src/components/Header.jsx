import logo from '../assets/logo.png';
import cart from '../assets/cart_icon.png';
import { useState } from 'react';

const Header = () => {
  const [menu, setMenu] = useState('shop');

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className='navBar'>
        <ul>
          <li><a href="#" onClick={() => setMenu('shop')}>home {menu=== 'shop' ? <hr /> : ''} </a></li>
          <li><a href="#" onClick={() => setMenu('men')}>homem {menu=== 'men' ? <hr /> : ''} </a></li>
          <li><a href="#" onClick={() => setMenu('women')}>mulher {menu=== 'women' ? <hr /> : ''}</a></li>
          <li><a href="#" onClick={() => setMenu('kids')}>kids {menu=== 'kids' ? <hr /> : ''}</a></li>
        </ul>
      </nav>

      <div className="login-cart">
        <button className='btn'>Login</button>
        <div className="cart">
          <img src={cart} alt="carrinho de compras" className='cartIcon'/>
        </div>
        <div className="acount">0</div>
      </div>
    </div>
  );
};

export default Header;
