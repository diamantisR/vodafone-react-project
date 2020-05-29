import React from "react";
import { Col, Row } from "react-bootstrap";

const Gallery = () => {

    const [home, setHomeData] = React.useState([]);

    React.useEffect(function () {
        fetch('https://voda-react-assessment.herokuapp.com/home')
            .then(r => r.json())
            .then(data => setHomeData(data))
            .catch(err => console.error(err))
    }, [home.length]);

    const galleryData = home.length > 0 ? home[0].sections[0] : null;

    return (
        galleryData != null ?
            <Row className="main-section">
                <Col className="text-center gallery-big-picture-wrapper mb-1" md={12} xl={4}>
                    <div style={{ backgroundImage: `url(${galleryData.images[0].img})` }}>
                        <div className="tile-overlay">{galleryData.images[0].title}</div>
                    </div>
                </Col>
                <Col className=" mb-1" md={12} xl={4}>
                    <Row className="text-center gallery-small-picture-wrapper mb-1">
                        <div style={{ backgroundImage: `url(${galleryData.images[1].img})` }}>
                            <div className="tile-overlay">{galleryData.images[1].title}</div>
                        </div>
                    </Row>
                    <Row className="text-center gallery-small-picture-wrapper">
                        <div style={{ backgroundImage: `url(${galleryData.images[2].img})` }}>
                            <div className="tile-overlay">{galleryData.images[2].title}</div>
                        </div>
                    </Row>
                </Col>
                <Col className="text-center" xl={4}>
                    <Row className="text-center gallery-small-picture-wrapper mb-1">
                        <div style={{ backgroundImage: `url(${galleryData.images[3].img})` }}>
                            <div className="tile-overlay">{galleryData.images[3].title}</div>
                        </div>
                    </Row>
                    <Row className="text-center gallery-small-picture-wrapper">
                        <div style={{ backgroundImage: `url(${galleryData.images[4].img})` }}>
                            <div className="tile-overlay">{galleryData.images[4].title}</div>
                        </div>
                    </Row>
                </Col>
            </Row> : null
    );
}

export default Gallery;
