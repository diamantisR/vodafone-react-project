import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Gallery from "./Gallery";
import ServiceForm from "./ServiceForm";
import { SECTIONS } from "./constants";

/**
 * The Section header holds the Heading
 */
const SectionHeader = () => {
    return (
        <Row>
            <Col className="p-3">
                <h4 className="text-center">Our Sections</h4>
            </Col>
        </Row>
    );
}

const SectionSelector = ({ onChange, section }) => {

    const [activeSection, setActiveSection] = React.useState(section);
    const getActiveStateClass = (sectionNum) => activeSection === sectionNum ? 'active-select' : '';

    const changeSection = (section) => {
        setActiveSection(section);
        onChange(section);
    }

    return (
        <Row>
            <Col xl={{ span: 3, offset: 9 }}>
                <Row>
                    <Col className="p-3 text-center">
                        <a
                            className={`sel-links ${getActiveStateClass(SECTIONS.GALLERY)}`}
                            onClick={() => changeSection(SECTIONS.GALLERY)}
                        >
                            Section 1
                        </a>
                    </Col>
                    <Col className="p-3 text-center">
                        <a
                            className={`sel-links ${getActiveStateClass(SECTIONS.SERVICE_FORM)}`}
                            onClick={() => changeSection(SECTIONS.SERVICE_FORM)}>
                            Section 2
                        </a>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

const SectionOptions = ({ section }) => {

    const getSection = () => {
        switch (section) {
            case SECTIONS.GALLERY:
                return <Gallery />;
            case SECTIONS.SERVICE_FORM:
                return <ServiceForm />;
        }
    }

    return (
        <div>
            {getSection()}
        </div>
    )
}


const Sections = () => {
    const [currentSection, setCurrentSection] = React.useState(SECTIONS.GALLERY);

    return (
        <div className="section">
            <Container>
                <SectionHeader />
                <SectionSelector onChange={(section) => { setCurrentSection(section) }} section={currentSection} />
                <SectionOptions section={currentSection} />
            </Container>
        </div>
    );
};

export default Sections;
