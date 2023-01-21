import React, { useEffect, useState } from 'react'
import './Card.css';

export default function Card() {

    const [data, setData] = useState([])

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

    // const rdMoreTitle = (index) => {

    //     // setReadMore(data[index].description.splice(0, 20));
    // }
    const rdMoreDetail = (index) => {
        let v = document.getElementsByClassName('readMoreAnchor')[index].attributes.data;
        console.log(v);

        if (v.value.includes("small")) {

            document.getElementById(index).innerHTML = data[index].description;
            v.value = "full";
        }
        else {
            document.getElementById(index).innerHTML = data[index].description.slice(0, 50);
            v.value = "small";

        }
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
                            <div className='btm'><strong>Title:</strong> {element.title}
                                {/* <a onMouseOver={() => rdMoreTitle()}></a> */}
                            </div>

                            <div className='btm'><strong>Price:</strong> {element.price}</div>

                            <div className='btm'><strong>Category:</strong> {element.category}</div>

                            <div className='btm'><strong>Description:</strong><span id={index}>{element.description.slice(0, 50)}</span><a data="small" className='readMoreAnchor' onClick={() => rdMoreDetail(index)}>...Read More</a></div>

                            <div className='dltbtn'>
                                <button onClick={() => dltCard(index)}>
                                    <span>Delete</span>
                                </button>
                            </div>

                        </div>
                    </div>
                })

            }
        </div>
    )
}
