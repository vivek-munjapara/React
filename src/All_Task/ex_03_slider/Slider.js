import React, { useState } from 'react'
import localData from './Sliderobj'
import './Slider.css';

export default function Slider() {

    const [index, setIndex] = useState(0);

    const previous = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }
    const next = () => {
        if (index == localData.length-1) {
            setIndex(0);
        } else { 
            setIndex(index + 1);
        }
    }
    return (
        <div>
            <main>
                <section className="container">
                    <div className="title">
                        <h2>our reviews</h2>
                        <div className="underline"></div>
                    </div>
                    <article className="review">
                        <div className="img-container">
                            <img src={localData[index].image} id="person-img" alt="" />
                        </div>
                        <h4 id="author">{localData[index].name}</h4>
                        <p id="job">{localData[index].job}</p>
                        <p id="info">
                            {localData[index].text}
                        </p>
                        <div className="button-container">
                            <button className="prev-btn" onClick={previous}>
                                ◀️
                            </button>
                            <button className="next-btn" onClick={next}>
                                ▶️
                            </button>
                        </div>
                    </article>
                </section>
            </main>


        </div>
    )
}
