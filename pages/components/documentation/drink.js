import {  Button, Row, Tab, Nav, Col, Card  } from "react-bootstrap";
import GenericDropDown from "../genericcomponent/GenericDropDown";
import { useState } from "react";
import { DrinkTable } from "@/shared/data/tables/datatablesdata";
export default function Drink() {
    const [selectedItems, setSelectedItems] = useState([])

    const handleClick = (item, index, optionItem) => {
        // Toggle item selection
        setSelectedItems(prevSelectedItems =>
            prevSelectedItems.includes(item.id)
                ? prevSelectedItems.filter(selectedItem => selectedItem !== item.id)
                : [...prevSelectedItems, item.id]
        );
    };
    const childData = [
        { id: '1', name: 'Dosa' },
        { id: '2', name: 'Roti' },
        { id: '3', name: 'Rice' },
        { id: '4', name: 'Roll' },
        { id: '5', name: 'Chilli' },
        { id: '6', name: 'Dosa' },
        { id: '7', name: 'Roti' },
        { id: '8', name: 'Rice' },
        { id: '9', name: 'Roll' },
        { id: '10', name: 'Chilli' },
    ]
    const drinkHeader = ["Drink Name","Drink Type","Quantity","Comment","Date/Time","Caretaker"]
    return (
        <div>
           <Row className="justify-content mb-0 align-items-stretch">
                <Col lg={5} md={5} className="d-flex">
                    <Card className=" p-4 rounded shadow mt-3 w-100">
                        <div className="card-content">
                            <div className="info-section">
                                <p><strong>Language:</strong> English</p>
                                <p><strong>Allergies:</strong> fever</p>
                                <p><strong>Important Notes:</strong> Important Notes</p>
                            </div>
                            <div className="child-info">
                                <img alt="Child Picture" src="/assets/images/faces/9.jpg" />
                                <p>Child 1</p>
                            </div>
                        </div>
                        <Button variant="primary" className="mt-3">General Information</Button>
                    </Card>
                </Col>
                <Col lg={5} md={5} className="d-flex">
                    <Card className="p-4 rounded shadow mt-3 w-100">
                        <div className="d-flex justify-content-between">
                            <div>
                                <p><strong>Parent/CLG:</strong> rahil1</p>
                                <p><strong>Name:</strong> rahil1</p>
                                <p><strong>Contact No.:</strong> 9809090</p>
                                <p><strong>Comment:</strong> call nanny</p>
                            </div>
                            <div className="ms-2">
                                <p><strong>Current Location:</strong> New Delhi</p>
                                <p><strong>Caretaker:</strong> login user</p>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Card className="mt-4">
                <Card>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="AllProducts">
                        <Card.Header className='d-md-flex justify-content-between'>
                            <h4 className="card-title p-2">Documentation - Drinks</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <GenericDropDown selectedItems={selectedItems} handleClick={handleClick} dropdownData={childData} label="Drinks" />
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                            <DrinkTable addNewRow={false} header={drinkHeader} actions/>

                        </Card.Body>
                    </Tab.Container>

                </Card>
            </Card>
        </div>
    )
}
Drink.layout = "Contentlayout";