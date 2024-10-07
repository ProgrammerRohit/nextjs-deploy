import Pageheader from "@/shared/layout-components/pageheader/pageheader";
import { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Form, Row, Tab, Table, Tabs } from "react-bootstrap";
import GenericDropDown from "../genericcomponent/GenericDropDown";
import Image from "next/image";
import { objectfit1 } from "@/shared/data/prismdata/uielements-prism";
import GeneralCard from "../genericcomponent/GereralCard";

export default function GeneralInfo(props) {
    const tabItem = ["Allergies", "Medical Condition", "Diet Preference", "Permission", "Development", "Likes & Dislike", "Notes"]
    const [checked, setChecked] = useState({
        veg: false,
        nonVeg: false,
        p1: false,
        p2: false,
        p3: false,
        p4: false,
        p5: false,
        p6: false,
    })

    const card1Ref = useRef(null);
    const card2Ref = useRef(null);
    const card3Ref = useRef(null);
    const card4Ref = useRef(null);
    const card5Ref = useRef(null);
    const card6Ref = useRef(null);
    const card7Ref = useRef(null);


    const handleSelect = (key) => {
        let cardRef;
        if (key === 'card1') {
            cardRef = card1Ref.current;
        } else if (key === 'card2') {
            cardRef = card2Ref.current;
        } else if (key === 'card3') {
            cardRef = card3Ref.current;
        }
        else if (key === 'card4') {
            cardRef = card4Ref.current;
        } else if (key === 'card5') {
            cardRef = card5Ref.current;
        }
        else if (key === 'card6') {
            cardRef = card6Ref.current;
        } else if (key === 'card7') {
            cardRef = card7Ref.current;
        }


        if (cardRef) {
            const navbarHeight = document.querySelector('.static-tab-nav')?.offsetHeight || 0; // Get navbar height
            const targetPosition = cardRef.offsetTop; // Get the absolute position of the card
            const offset = 10; // You can adjust this as needed

            window.scrollTo({
                top: targetPosition - navbarHeight - offset,
                behavior: 'smooth',
            });
        }
    };

    const handleCheckBox = (type) => {
        setChecked((prev) => ({
            ...prev,
            [type]: !prev[type]
        }))
    }
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
        { id: '1', name: 'Peanut Allergy' },
        { id: '2', name: 'Nut Allergy' },
        { id: '3', name: 'Dairy Allergy' },
        { id: '4', name: 'Egg Allergy' },
        { id: '5', name: 'Shellfish Allergy' },
        { id: '6', name: 'Wheat Allergy' },
        { id: '7', name: 'Soy Allergy' },
        { id: '8', name: 'Fish Allergy' },
        { id: '9', name: 'Sesame Allergy' },
        { id: '10', name: 'Gluten Allergy' }
    ]
    console.log(67777, checked)
    const [edit, setEdit] = useState(false)
    const handleEdit = () => {
        setEdit(true)
    }
    const handleSave = () => {
        setEdit(false)
    }

    const [formData, setFormData] = useState({
        reaction: "",
        allergyComment: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const [isStatic, setIsStatic] = useState(false)
    const handdleScroll = () => {
        if (window.scrollY > 210) {
            setIsStatic(true)
        } else {
            setIsStatic(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", handdleScroll)
        return (() => window.removeEventListener("scroll", handdleScroll))
    }, [])
    console.log(65555555555555, isStatic)


    return (
        <div className="genral-information">
            <Pageheader title="General Information" />
            {/* <div className="d-flex  tabs-genral-info">
                {tabItem?.map((item, index) => (
                    <h5 className="me-4">{item}</h5>
                ))}
            </div> */}
           <GeneralCard btnInfo={false}/>
            <Row className={`d-flex justify-content-between ${isStatic && "static-tab-nav shadow"}`}>
                {isStatic && (
                    <Col className="d-flex align-items-center">
                        <img src="https://t4.ftcdn.net/jpg/07/11/42/37/360_F_711423781_XdjsUQPB2HwBd54Ot7XsrTanuXYUD5r9.jpg"
                         style={{objectFit:"cover"}} alt="" />
                        <h6 className="ms-4">Child_Display_Name   4y 10m<span className="ms-2">F</span></h6>
                    </Col>
                )}
                <Row>
                    <Col className="col-lg-10">
                        <Tabs defaultActiveKey="card1" onSelect={handleSelect}>
                            <Tab eventKey="card1" title="Allergies">
                            </Tab>
                            <Tab eventKey="card2" title="Medical Condition">
                            </Tab>
                            <Tab eventKey="card3" title="Diet Preference">
                            </Tab>
                            <Tab eventKey="card4" title="Permission">
                            </Tab>
                            <Tab eventKey="card5" title="Development">
                            </Tab>
                            <Tab eventKey="card6" title="Likes & Dislike">
                            </Tab>
                            <Tab eventKey="card7" title="Notes">
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button className="btn-info me-2" onClick={() => handleEdit()}>Edit</Button>
                        <Button className="btn-success" onClick={() => handleSave()}>Save</Button>
                    </Col>
                </Row>
                {/* <Col className="d-flex justify-content-end"> */}
              
                {/* </Col> */}


            </Row>

            <Card ref={card1Ref} className="mt-4 p-4">
                <h4 className="">Allergies</h4>
                <Row>
                    <Col className="col-lg-4">
                        <GenericDropDown selectedItems={selectedItems} handleClick={handleClick} dropdownData={childData} />
                    </Col>
                </Row>
                <div className="app-container">
                    <div className="table-responsive">
                        <Table
                            id="delete-datatable"
                            className="mt-2 table table-bordered text-nowrap border-bottom"
                        >
                            <thead>
                                <tr>
                                    {/* <th className="wd-5p text-center">S NO</th> */}
                                    <th>Allergies</th>
                                    <th>Reaction</th>
                                    <th>Comment</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Peanut Allergy</td>
                                    <td>{edit ? <Form.Control onChange={handleChange} name="reaction" type="text" value={formData.reaction} placeholder="Reaction" /> : `${formData.reaction}`} </td>
                                    <td>{edit ? <Form.Control onChange={handleChange} name="allergyComment" type="text" value={formData.allergyComment} placeholder="Comment" /> : `${formData.allergyComment}`} </td>
                                </tr>
                                <tr>
                                    <td>Nut Allergy</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Egg Allergy</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Card>

            <Card ref={card2Ref} className="mt-2 p-4">
                <h4 className="">Medical Condition</h4>
                <Row>
                    <Col className="col-lg-4">
                        <GenericDropDown selectedItems={selectedItems} handleClick={handleClick} dropdownData={childData} />
                    </Col>
                </Row>
                <div className="app-container">
                    <div className="table-responsive">
                        <Table
                            id="delete-datatable"
                            className="mt-2 table table-bordered text-nowrap border-bottom"
                        >
                            <thead>
                                <tr>
                                    <th>Medical Condition</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Coronary Artery Disease</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Congestive Heart Failure</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Hypertension (High Blood Pressure)</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Atrial Fibrillation</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Card>

            <Card ref={card3Ref} className="mt-2 p-4">
                <h4 className="">Diet Preference</h4>
                <Row className="mt-2 d-flex align-items-center custom-height">
                    <Col className="col-lg-4"><h5>Vegetarian</h5></Col>
                    <Col className="d-flex align-items-center"> {/* Flexbox for alignment */}
                        <Form.Check
                            id=""
                            className="custom-checkbox mb-0" // mb-0 to remove margin-bottom
                            onChange={() => handleCheckBox("veg")}
                            checked={checked.veg}
                        />
                        {checked.veg && (
                            <Form.Control type="text" placeholder="Comments" className="ms-4" /> // ms-2 for small left margin
                        )}
                    </Col>
                </Row>

                <Row className="mt-2 d-flex align-items-center custom-height">
                    <Col className="col-lg-4"><h5>Fussy Eater</h5></Col>
                    <Col className="d-flex align-items-center"> {/* Flexbox for alignment */}
                        <Form.Check
                            id=""
                            className="custom-checkbox mb-0" // mb-0 to remove margin-bottom
                            onChange={() => handleCheckBox("nonVeg")}
                            checked={checked.nonVeg}
                        />
                        {checked.nonVeg && (
                            <Form.Control type="text" placeholder="Comments" className="ms-4" /> // ms-2 for small left margin
                        )}
                    </Col>
                </Row>
                <div className="app-container">
                    <div className="table-responsive">
                        <Table
                            id="delete-datatable"
                            className="mt-2 table table-bordered text-nowrap border-bottom"
                        >
                            <thead>
                                <tr>
                                    {/* <th className="wd-5p text-center">S NO</th> */}
                                    <th>Likes</th>
                                    <th>Dislikes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ASD main</td>
                                    <td>ASD main</td>
                                </tr>
                                <tr>
                                    <td>ASD main</td>
                                    <td>ASD main</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Card>
            <Card ref={card4Ref} className="p-4">
                <h4>Permissions</h4>
                <Row className="mt-2 d-flex  align-items-center custom-height">
                    <Col className="col-lg-4"> <h5>Has Permission to consume food  with nut traces</h5></Col>
                    <Col className="d-flex align-items-center">
                        <Form>
                            <Form.Check // prettier-ignore
                                id=""
                                className="custom-checkbox mb-0"
                                onChange={() => handleCheckBox("p1")}
                                checked={checked.p1}
                            />
                        </Form>
                        {checked.p1 && (
                            <Form.Control className="ms-4" type="text" placeholder="Comments" />
                        )}
                    </Col>
                </Row>
                <Row className="mt-2 d-flex align-items-center custom-height">
                    <Col className="col-lg-4"> <h5>Has Permission to have adhesive dressing applied</h5></Col>
                    <Col className="d-flex align-items-center">  <Form>
                        <Form.Check // prettier-ignore
                            id=""
                            className="custom-checkbox mb-0"
                            onChange={() => handleCheckBox("p2")}
                            checked={checked.p2}
                        />
                    </Form>
                        {checked.p2 && (
                            <Form.Control type="text" placeholder="Comments" className="ms-4" />
                        )}
                    </Col>
                </Row>
                <Row className="mt-2 d-flex align-items-center custom-height">
                    <Col className="col-lg-4"> <h5>Has Permission to have sunscreen applied</h5></Col>
                    <Col className="d-flex align-items-center">  <Form>
                        <Form.Check // prettier-ignore
                            id=""
                            className="custom-checkbox mb-0"
                            onChange={() => handleCheckBox("p3")}
                            checked={checked.p3}
                        />
                    </Form>
                        {checked.p3 && (
                            <Form.Control type="text" placeholder="Comments" className="ms-4" />
                        )}
                    </Col>
                </Row>
                <Row className="mt-2 align-items-center d-flex custom-height">
                    <Col className="col-lg-4" > <h5>Has Permission to have nappy cream applied</h5></Col>
                    <Col className="d-flex align-items-center">  <Form>
                        <Form.Check // prettier-ignore
                            id=""
                            className="custom-checkbox"
                            onChange={() => handleCheckBox("p4")}
                            checked={checked.p4}
                        />
                    </Form>
                        {checked.p4 && (
                            <Form.Control type="text" placeholder="Comments" className="ms-4" />
                        )}
                    </Col>
                </Row>
                <Row className="mt-2 d-flex align-items-center  custom-height">
                    <Col className="col-lg-4 "> <h5>Has Permission to have medicine administered (e.g. calpol)</h5></Col>
                    <Col className="d-flex align-items-center">  <Form>
                        <Form.Check // prettier-ignore
                            id=""
                            className="custom-checkbox "
                            onChange={() => handleCheckBox("p5")}
                            checked={checked.p5}
                        />
                    </Form>
                        {checked.p5 && (
                            <Form.Control type="text" placeholder="Comments" className="ms-4" />
                        )}
                    </Col>
                </Row>
                <Row className="mt-2 d-flex  align-items-center custom-height">
                    <Col className="col-lg-4 "> <h5>Has Permission to take a bus</h5></Col>
                    <Col className="d-flex  align-items-center">  <Form>
                        <Form.Check // prettier-ignore
                            id=""
                            className="custom-checkbox"
                            onChange={() => handleCheckBox("p6")}
                            checked={checked.p6}
                        />
                    </Form>
                        {checked.p6 && (
                            <Form.Control type="text" placeholder="Comments" className="ms-4" />
                        )}
                    </Col>
                </Row>
            </Card>

            {/* dvelopment */}
            <Card ref={card5Ref} className="mt-2 p-4">
                <h4 className="">Development</h4>
                <div className="app-container">
                    <div className="table-responsive">
                        <Table
                            id="delete-datatable"
                            className="mt-2 table table-bordered text-nowrap border-bottom"
                        >
                            <thead>
                                <tr>
                                    {/* <th className="wd-5p text-center">S NO</th> */}
                                    <th>Medical Condition</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Special Education needs</td>
                                </tr>
                                <tr>
                                    <td>English as additional language</td>
                                </tr>
                                <tr>
                                    <td>Language skills</td>
                                </tr>
                                <tr>
                                    <td>Physical skills</td>
                                </tr>
                                <tr>
                                    <td>Social skills</td>
                                </tr>
                                <tr>
                                    <td>Sleep during the day</td>
                                </tr>
                                <tr>
                                    <td>Daily routines</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Card>

            {/* toys */}
            <Card ref={card6Ref} className="mt-2 p-4">
                <h4 className="">Likes & Dislikes</h4>
                <Row>
                    <Col className="col-lg-4">
                        <GenericDropDown selectedItems={selectedItems} handleClick={handleClick} dropdownData={childData} />
                    </Col>
                </Row>
                <div className="app-container">
                    <div className="table-responsive">
                        <Table
                            id="delete-datatable"
                            className="mt-2 table table-bordered text-nowrap border-bottom"
                        >
                            <thead>
                                <tr>
                                    {/* <th className="wd-5p text-center">S NO</th> */}
                                    <th>Items</th>
                                    <th>Likes</th>
                                    <th>Dislikes</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ASD main</td>
                                    <td>ASD main</td>
                                    <td>ASD main</td>
                                </tr>
                                <tr>
                                    <td>ASD main</td>
                                    <td>ASD main</td>
                                    <td>ASD main</td>
                                </tr>
                                <tr>
                                    <td>ASD main</td>
                                    <td>ASD main</td>
                                    <td>ASD main</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Card>

            {/* notes */}
            <Card ref={card7Ref} className="mt-2 p-4">
                <h4 className="">Notes</h4>
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" rows={6} placeholder="Enter your message here..." />
                    </Form.Group>
                </Form>
            </Card>
        </div>
    )
}
GeneralInfo.layout = "Contentlayout";