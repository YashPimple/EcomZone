import React from 'react'
import "./Featured.scss"
import Card from '../Card/Card'

const Featured = ({type}) => {

    const data = [
        {
            id:1,
            img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Long Sleeve Graphic T-shirt",
            isNew: true,
            oldPrice: 19,
            price: 12,

        },
        {
            id:2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Over-Sized T-shirt",
            isNew: true,
            oldPrice: 20,
            price: 323,

        },
        {
            id:3,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            oldPrice: 30,
            price: 35,

        },
        {
            id:4,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Jeans",
            oldPrice: 30,
            price: 35,

        },
    ];
  return (
    <div className='featured'>
        <div className='top'>
           <h1>{type} Products</h1>
           <p>
           Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
           </p>
        </div>

        <div className='bottom'>
            {data.map(item=>{
                return (
                 <Card item={item} key={item.id}/>)
            })}
        </div>
    </div>
  )
}

export default Featured