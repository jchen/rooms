import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Navbar from 'react-bootstrap/Navbar';
import Calendar from './Calendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component<{}> {

    render() {
        return (
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand><FontAwesomeIcon icon={faDoorOpen} />{' '}Rooms</Navbar.Brand>
                    </Container>
                </Navbar>
                <Container style={{ "paddingTop": "20px" }}>
                    <Row>
                        <Alert variant="info">
                            This tool is a work-in-progress. Currently, it only supports <i>viewing</i> room availability in the CIT. Please direct bookings to <a href="mailto:mta@cs.brown.edu">mta@cs.brown.edu</a>, <a href="mailto:reception@cs.brown.edu">reception@cs.brown.edu</a>, or the Brown Scheduler/Registrar depending on the room type as specified by hovering over the tag in bold. Clicking on a room will link to the room's Google Calendar.
                        </Alert>
                    </Row>
                    <Row className="justify-content-lg-center">
                        <Col>
                            <Calendar />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}
