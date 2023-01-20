import React, { useEffect, useState } from 'react'
import './Card.css';

export default function Card() {

    const [data, setData] = useState([])
    const [readMoreTitle, setReadMoreTitle] = useState(20)
    const [readMore, setReadMore] = useState(50)

    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then(y => y.json())
            .then(y => {
                setData(y)
            })

    }, [])

    const dltCard = (index) => {
        let orgCard = [...data];
        orgCard.splice(index, 1);
        setData(orgCard);
    }

    const rdMoreTitle = (index) => {

        setReadMore(data[index].description.splice(0, 20));
    }
    const rdMore = (index) => {

        setReadMore(data[index].description.splice(0, 30));
    }

    return (
        <div className='container'>
            <div className='hding'><h2>Product list</h2></div>
            {
                data.map((element, index) => {
                    return <div className='item'>
                        <div className='item-image'>
                            <div className='itemsub-image' >
                                <img src={element.image} />
                            </div>
                        </div>
                        <div className='product-detail'>
                            <div className='btm'><strong>Title:</strong> {element.title.slice(0, readMoreTitle)}<a onMouseOver={() => rdMoreTitle()}></a></div>
                            <div className='btm'><strong>Price:</strong> {element.price}</div>
                            <div className='btm'><strong>Category:</strong> {element.category}</div>
                            <div className='btm'><strong>Description:</strong> {element.description.slice(0, readMore)}<a onClick={() => rdMore()}> Read More</a></div>
                            <div className='dltbtn'>
                                <button onClick={() => dltCard(index)}>Delete</button>
                            </div>
                        </div>
                    </div>
                })

            }
        </div>
    )
}
