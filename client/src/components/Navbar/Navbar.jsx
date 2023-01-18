import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Navbar.scss"
import { useSelector } from 'react-redux';
import Cart from "../Cart/Cart"
const Navbar = () => {

    const [open,setOpen] = useState(false)
    const products = useSelector((state) => state.cart.products);
  return (
  <div className='navbar'>  
     <div className='wrapper'>
        <div className='left'>
            <div className='item'>
                <img src='/img/en.png' alt='en' />
                <KeyboardArrowDownIcon />
            </div>
            <div className='item'>
                <span>USD</span>
                <KeyboardArrowDownIcon />
            </div>
            <div className='item'>
                <Link className="link" to="/products/1">Men</Link>
            </div>
            <div className='item'>
                <Link className="link" to="/products/2">Women</Link>
            </div>
            <div className='item'>
                <Link className="link" to="/products/3">children</Link>
            </div>
        </div>

        <div className='center'>
            <div className='item'>
                <Link className="link" to="/">STORE</Link>
            </div>
        </div>

        <div className='right'>
            <div className='item'>
                <Link className="link" to="/">Homepage</Link>
            </div>
            <div className='item'>
                <Link className="link" to="/about">About</Link>
            </div>
            <div className='item'>
                <Link className="link" to="/contact">Contact</Link>
            </div>
            <div className='item'>
                <Link className="link" to="/store">Stores</Link>
            </div>
            <div className='icons'>
                <SearchIcon />
                <PersonOutlineOutlinedIcon />
                <FavoriteBorderOutlinedIcon />
                 <div className='cartIcon' onClick={()=>setOpen(!open)}>
                    <ShoppingCartOutlinedIcon />
                    <span>{products.length}</span>
                 </div>
            </div>
        </div>
        {open && <Cart/>}
     </div>
    
</div>
  )
}

export default Navbar
