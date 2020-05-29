import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';

import HeaderSlider from "./components/HeaderSlider";

import Sections from "./components/Sections";
import { Col, Container, Row } from "react-bootstrap";


function App() {

    const [slider, setSlider] = React.useState([]);


    React.useEffect(function () {
        fetch('https://voda-react-assessment.herokuapp.com/slider')
            .then(r => {
                return r.json()
            })
            .then(data => {
                setSlider(data);
            })
            .catch(err => {
                console.log(err)
            })
    }, [slider.length])


    return (
        <div className="App">
            <header>
                <div className="header-wrapper" style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, backgroundColor: 'transparent', zIndex: 2, width: '100%', height: '50px', padding: 10 }}>
                        <Container>
                            <Row>
                                <Col xl={{ span: 2, offset: 2 }}>
                                    <a style={{ margin: 10 }}>Home</a> <a style={{ margin: 10 }}>Page 2</a>


                                </Col>
                                <Col xl={{ span: 2, offset: 4 }}>
                                    <span className="fa fa-search"></span>
                                </Col>
                            </Row>
                        </Container>
                    </div>

                    {slider.length > 0 ? <HeaderSlider slider={slider} /> : null}
                </div>
            </header>
            <section>
                <Sections />
            </section>
        </div>
    );
}

export default App;
