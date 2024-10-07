import { BasicTable, DrinkTable, FoodTable, GroupTable, IncidentTable, IndividualTable, NappyTable, Savetable, SleepTable } from "@/shared/data/tables/datatablesdata";
import Pageheader from "@/shared/layout-components/pageheader/pageheader";
import Image from "next/image";
import { useState } from "react";
import { Button, Row, Tab, Nav, Col, Card } from "react-bootstrap";
import GenericDropDown from "../genericcomponent/GenericDropDown";
import { useRouter } from "next/router";
import GenericConfirmation from "../genericcomponent/GenericConfirmationModal";
import GeneralCard from "../genericcomponent/GereralCard";


export default function KidDocs() {

    const router = useRouter()
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

    const foodHeader = ["Food Item", "Type", "Quantity", "Duration", "Date/Time", "Care Taker", "Comments"]

    const drinkHeader = ["Drink Name", "Drink Type", "Quantity", "Comment", "Date/Time", "Caretaker"]

    const individualHeader = ["Activities", "From", "To", "Duration", "Comment", "CareTaker", "Picture/Videos"]

    const groupHeader = ["Activities", "From", "To", "Duration", "Team", "Comment", "CareTaker", "Picture/Videos"]

    const incidentHeader = ["Incident", "Details", "Time", "Action Taken", "Comments", "Date/Time", "CareTaker", "Picture/Videos"]

    const nappyHeader = ["Nappy/Toilet", "Comments", "Date/Time", "Caretaker"]

    const sleepHeader = ["From", "To", "Comment"]

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };
    const [deleteModal, setDeleteModal] = useState(false)

    const handleDelete = () => {
        console.log("hello world")
        setDeleteModal(true)
    }
    const openModal = () => {
        setDeleteModal(true)
    }
    const closeModal = () => {
        setDeleteModal(false)
    }
    return (
        <>
            {/* <Pageheader title="Child Banner" /> */}
            <GeneralCard />
            {/* documentation - food */}
            <Card className="mt-4">
                <Card>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="AllProducts">
                        <Card.Header className='d-md-flex justify-content-between'>
                            <div className="d-flex">
                                <h4 className="card-title p-2">Documentation - Foods</h4>
                                <Nav variant="pills" className='product-sale ms-4'>
                                    <Nav.Item>
                                        <Nav.Link eventKey="AllProducts" className="text-dark">Breakfast</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Shipped" className="text-dark">Lunch</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Pending" className="text-dark">Supper</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="Cancelled" className="text-dark">Miscellaneous
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                            <div>
                                <Button variant="secondary">Edit All</Button>
                                <Button className="ms-2" variant="danger" onClick={handleDelete}>Delete All</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <GenericDropDown selectedItems={selectedItems} handleClick={handleClick} dropdownData={childData} label="General Menu" />
                                </Col>
                                <Col>
                                    <GenericDropDown selectedItems={selectedItems} handleClick={handleClick} dropdownData={childData} label="Specific Menu" />
                                </Col>
                                <Col>
                                    <GenericDropDown selectedItems={selectedItems} handleClick={handleClick} dropdownData={childData} label="Fruits" />
                                </Col>
                                <Col>
                                    <GenericDropDown selectedItems={selectedItems} handleClick={handleClick} dropdownData={childData} label="Vegetables" />
                                </Col>
                                <Col>
                                    <GenericDropDown selectedItems={selectedItems} handleClick={handleClick} dropdownData={childData} label="Drink" />
                                </Col>
                                <Col>
                                    <GenericDropDown selectedItems={selectedItems} handleClick={handleClick} dropdownData={childData} label="Others" />
                                </Col>
                            </Row>
                            <Tab.Content>
                                <Tab.Pane eventKey="AllProducts" className='p-0 border-0'>
                                    <Card.Body className="pt-0 p-0 example1-table">
                                        <FoodTable actions header={foodHeader} addNewRow={false} />
                                    </Card.Body>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Shipped" className='p-0 border-0'>
                                    <FoodTable actions header={foodHeader} addNewRow={false} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Pending" className='p-0 border-0'>
                                    <FoodTable actions header={foodHeader} addNewRow={false} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="Cancelled" className='p-0 border-0'>
                                    <FoodTable actions header={foodHeader} addNewRow={false} />
                                </Tab.Pane>
                            </Tab.Content>
                        </Card.Body>
                    </Tab.Container>

                </Card>
            </Card>

            {/* documentation - Drink */}
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
                            <DrinkTable addNewRow={false} header={drinkHeader} actions />

                        </Card.Body>
                    </Tab.Container>

                </Card>
            </Card>

            {/* documentation - Individual Activity */}


            {/* documentation - Group Activity */}
            <Card className="mt-4">
                <Card>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="AllProducts">
                        <Card.Header className='d-md-flex justify-content-between'>
                            <h4 className="card-title p-2">Documentation - Group Activity</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <GenericDropDown selectedItems={selectedItems} handleClick={handleClick} dropdownData={childData} label="Group Activity" />
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                            <GroupTable actions header={groupHeader} addNewRow={false} />

                        </Card.Body>
                    </Tab.Container>

                </Card>
            </Card>

            {/* documentation - Incident Report */}
            <Card className="mt-4">
                <Card>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="AllProducts">
                        <Card.Header className='d-md-flex justify-content-between'>
                            <h4 className="card-title p-2">Documentation - Incident Report</h4>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <GenericDropDown selectedItems={selectedItems} handleClick={handleClick} dropdownData={childData} label="Incident Report" />
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                </Col>
                            </Row>
                            <IncidentTable actions header={incidentHeader} addNewRow={false} />

                        </Card.Body>
                    </Tab.Container>

                </Card>
            </Card>

            {/* documentation - Incident Report */}
            <Card className="mt-4">
                <Card>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="AllProducts">
                        <Card.Header className='d-md-flex justify-content-between'>
                            <h4 className="card-title p-2">Documentation - Nappy/Toilet</h4>
                        </Card.Header>
                        <Card.Body>
                            <NappyTable header={nappyHeader} actions addNewRow={false} />
                        </Card.Body>
                    </Tab.Container>

                </Card>
            </Card>

            {/* documentation - Incident Report */}
            <Card className="mt-4">
                <Card>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="AllProducts">
                        <Card.Header className='d-md-flex justify-content-between'>
                            <h4 className="card-title p-2">Documentation - Sleep</h4>
                        </Card.Header>
                        <Card.Body>
                            <SleepTable actions header={sleepHeader} addNewRow={false} />
                        </Card.Body>
                    </Tab.Container>

                </Card>
            </Card>
            {deleteModal && <GenericConfirmation openConfirmation={openModal} closeConfirmModal={closeModal} />}
        </>
    );
}

KidDocs.layout = "Contentlayout";
