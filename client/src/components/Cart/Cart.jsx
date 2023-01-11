import React from 'react'
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import "./Cart.scss"
const Cart = () => {
  const data = [
    {
        id:1,
        img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Long Sleeve Graphic T-shirt",
        isNew: true,
        oldPrice: 19,
        price: 12,
        desc: "Lorem24 uhcd nni dn  nn n j",

    },
    {
        id:2,
        img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Over-Sized T-shirt",
        isNew: true,
        oldPrice: 20,
        price: 323,
        desc: "Lorem24 uhcd nni dn  nn n j",

    },
  ]
  return (
    <div className='cart'>
    <h1>Products in your Cart</h1>
    {data.map(item=>{
         return (
                 <div className='item' key={item.id}>
                  <img src={item.img} alt='' />
                  <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0,100)}</p>
                    <div className='price'>1 X ${item.price}</div>
                  </div>
                  <DeleteOutlinedIcon className="delete"/>
                 </div>)
            })}
            <div className="total">
                  <span>SUBTOTAL</span>
                  <span>$123</span>
             </div>
              <button >PROCEED TO CHECKOUT</button>
             <span className="reset" >
                Reset Cart
             </span>
  
            
     
    
    </div>
  )
}

export default Cart