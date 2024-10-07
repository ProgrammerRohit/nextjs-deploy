import {  Button, Row, Tab, Nav, Col, Card  } from "react-bootstrap";
import GenericDropDown from "../genericcomponent/GenericDropDown";
import { useState } from "react";
import { DrinkTable, NappyTable } from "@/shared/data/tables/datatablesdata";
export default function Nappy() {
    const nappyHeader = ["Nappy/Toilet","Comments","Date/Time","Caretaker"]
    return (
        <div>
            <Row className="justify-content">
                <Col lg={5} md={5} >
                    <Card className="p-4 rounded shadow mt-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <img
                                alt="Child Picture"
                            // width={100}
                            // height={100}
                            />
                        </div>
                        <p className="mt-1"><strong>Child Display Name:</strong> rahil1</p>
                        <p><strong>Language:</strong> English</p>
                        <p><strong>Allergies:</strong> fever</p>
                        <p className="mt-2"><strong>Important Notes:</strong> Important Notes</p>
                        <Button variant="primary">General Information</Button>
                    </Card>
                </Col>
                <Col lg={5} md={5} >
                    <Card className="p-4 rounded shadow mt-3">
                        <p><strong>Parent/CLG:</strong> rahil1</p>
                        <p><strong>Name:</strong> rahil1</p>
                        <p><strong>Contact No.:</strong> 9809090</p>
                        <p><strong>Comment:</strong> call nanny</p>
                        <p><strong>Current Location:</strong> New Delhi</p>
                        <p><strong>Caretaker:</strong> login user</p>
                    </Card>
                </Col>
            </Row>
            <Card className="mt-4">
                <Card>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="AllProducts">
                        <Card.Header className='d-md-flex justify-content-between'>
                            <h4 className="card-title p-2">Documentation - 	Nappy/Toilet</h4>
                        </Card.Header>
                        <Card.Body>
                            <NappyTable addNewRow={false} header={nappyHeader} actions/>

                        </Card.Body>
                    </Tab.Container>

                </Card>
            </Card>
        </div>
    )
}
Nappy.layout = "Contentlayout";