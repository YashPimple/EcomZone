import React from 'react'
import Card from '../Card/Card';
import "./List.scss"

const List = () => {
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
        {
            id:5,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            oldPrice: 30,
            price: 35,

        },
        {
            id:6,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Jeans",
            oldPrice: 30,
            price: 35,

        },
        {
            id:7,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Skirt",
            oldPrice: 30,
            price: 35,

        },
        {
            id:8,
            img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title: "Jeans",
            oldPrice: 30,
            price: 35,

        },

    ];
  return (
    <div className='list'>{data?.map(item=>{
        return ( <Card item={item} key={item.id} />)
        })}
    </div>
  )
}

export default List