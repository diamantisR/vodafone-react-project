import React from "react";
import { Carousel } from "react-bootstrap";


const HeaderSlider = ({ slider }) => {
    return (
        <Carousel>
            {
                slider.map(slide => {
                    return (
                        <Carousel.Item className="custom-carousel-image">
                            <img src={slide.image} style={{ width: '100%' }} />
                            <Carousel.Caption>
                                <h3>{slide.title}</h3>
                                <p>{slide.subtitle}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
    )
}

export default HeaderSlider;
