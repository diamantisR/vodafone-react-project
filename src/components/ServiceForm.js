import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const ServiceForm = () => {

    // Static Data
    const [title, setTitle] = React.useState('');
    const [graphText, setGraphText] = React.useState('');
    const [formLabels, setFormlabels] = React.useState([]);
    const [formText, setFormText] = React.useState('');
    const [buttonText, setButtonText] = React.useState('');
    const [stats, setStats] = React.useState([]);


    // Percentage
    const [percentage1, setPercentage1] = React.useState(0);
    const [percentage2, setPercentage2] = React.useState(0);
    const [percentage3, setPercentage3] = React.useState(0);

    React.useEffect(function () {
        fetch('https://voda-react-assessment.herokuapp.com/home')
            .then(r => r.json())
            .then(data => {
                const sectionData = data[0].sections[1];
                console.log({ sectionData })
                setTitle(sectionData.title);
                setGraphText(sectionData.graphText);
                setFormlabels(sectionData.formLabels);
                setFormText(sectionData.formText);
                setButtonText(sectionData.buttonText);
                setStats(sectionData.stats.map(stat => ({ title: stat.title, amount: stat.amount / 10 })));
            })
            .catch(err => console.error(err));
    }, []);


    return (
        <Row className="main-section">
            <Col xl={6}>
                <Row>
                    <h5>{title}</h5>
                </Row>
                <Row>
                    <p>{graphText}</p>
                </Row>
                <Row>
                    <Form style={{ width: '100%' }}>
                        {stats.map((stat, index) => {
                            return (
                                <Form.Group>
                                    <Row>
                                        <Col xs={{ span: 3 }}>{stat.title}</Col>
                                        <Col xs={{ span: 1, offset: "8" }}>{stat.amount}%</Col>
                                    </Row>
                                    <Form.Control
                                        type="range"
                                        onChange={(e) => {
                                            console.log(e.target.value);
                                            stats[index].amount = e.target.value;
                                            setStats(stats.slice());
                                        }}
                                        value={stat.amount} style={{ width: '100%' }} />
                                </Form.Group>
                            )
                        })}
                    </Form>
                </Row>

            </Col>
            <Col xl={6}>
                <Row >
                    <Col xs={12}>
                        <h5 className="text-center">{formText}</h5>
                        <p className="text-center">We work with ecosystem leaders, corporation and startups worldwide. How can we help you?</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <ApplicationForm formLabels={formLabels} buttonText={buttonText} />
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

/**
 * Application Form
 */
const ApplicationForm = ({ formLabels, buttonText }) => {
    const [phone, setPhone] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    const [error, setError] = React.useState(null);

    // Email Regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /(\+\d\d)?[26]\d{9}$/;
    // Morethan8digits.
    // It should include at least:
    // a number,
    // a capital letter,
    // a symbol and
    // a low case letter.
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

    const validateForm = () => {
        setError(null);
        if (emailRegex.test(email) === false) {
            setError('Email is invalid!');
            return;
        }
        if (phoneRegex.test(phone) === false) {
            setError('Phone number should start with 2 or 6!');
            return;
        }

        if (passwordRegex.test(password) === false) {
            setError('Password is invalid.\nMust be more than 8 digits.\nIt should include at least: a number, a capital letter, a symbol and a low case letter.');
            return;
        }
        alert('Application submitted');
    };

    return (
        <Form className="enquiry-form">
            <Form.Group controlId="formYourPhone">
                <Form.Control
                    type={"tel"}
                    placeholder={formLabels[0]}
                    className="custom-input"
                    onChange={(e) => { setPhone(e.target.value) }} />
            </Form.Group>
            <Form.Group controlId="formYourEmail">
                <Form.Control
                    type={"email"}
                    placeholder={formLabels[1]}
                    className="custom-input"
                    onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formYourPassword">
                <Form.Control
                    type={"password"}
                    placeholder={formLabels[2]}
                    className="custom-input"
                    onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group style={{ display: 'flex', justifyContent: 'center' }}>
                <p>{error ? error : ''}</p>
            </Form.Group>
            <Form.Group style={{ display: 'flex', justifyContent: 'center' }}>

                <Button style={{ margin: 'auto' }} className='custom-submit' onClick={() => validateForm()}>{buttonText}</Button>
            </Form.Group>
        </Form>
    )
}



export default ServiceForm;
