import React, { useRef, useState } from 'react';
import { Modal, Button, Row, Col, Card, Table } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PrintIcon from '@mui/icons-material/Print';
import GeneralCard from '../genericcomponent/GereralCard';

export default function Summary(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [startDate, setStartDate] = useState(null);

    const handleChange = (date) => {
        setStartDate(date);
    };
    const printRef = useRef();
    const handlePrint = () => {
        const printWindow = window.open('', '', 'height=600,width=800');
        printWindow.document.write('<html><head><title>Print</title>');
        printWindow.document.write('</head><body>');
        printWindow.document.write(printRef.current.innerHTML);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    return (
        <div className='summary' style={{ position: "relative" }}>

            <Modal show={props?.open} onHide={props?.close} size="xl">
                <Modal.Header className="modal-header" style={{ position: "sticky", backgroundColor: "whitesmoke", top: "0px", zIndex: "1000" }}>
                    <Row className='w-100 d-flex justify-content-between align-items-center'>
                        <Col xs="auto" style={{ marginTop: "7px" }}>
                            <Modal.Title>Documentation - Summary - Rahul Singh - 4y 10m - M</Modal.Title>
                        </Col>
                        {/* <Col xs="auto">
                            <div className="d-flex header-content text-center">
                                <h5 className="left">Rahul Singh </h5>
                                <h5 className="center ms-3"> 4y 10m - M</h5>
                            </div>
                        </Col> */}
                        <Col xs="auto">
                            <Button variant="secondary" onClick={props?.close}>
                                Close Summary
                            </Button>
                        </Col>
                    </Row>
                </Modal.Header>
                <Modal.Body>
                    <Button onClick={props?.handleReview} variant="dark">Reviewed Summary</Button>
                    <PrintIcon className='ms-3' style={{ cursor: "pointer", fontSize: "40px", color: "purple" }} onClick={handlePrint} />
                    <GeneralCard />
                    {/* filer */}
                    <h5>Filter Summary</h5>
                    <Row className='d-flex justify-content-between align-items-center'>
                        <Col className='d-flex col-lg-4 mb-3'>
                            <DatePicker
                                selected={startDate}
                                onChange={handleChange}
                                dateFormat="yyyy/MM/dd"
                                isClearable
                                placeholderText="Select Date.."
                            />
                        </Col>
                        <Col className='d-flex justify-content-end'>
                            <Button>Edit Summary</Button>
                            <Button className='ms-2' variant='success'>Save Summary</Button>
                        </Col>
                    </Row>

                    {/*summary table generic */}
                    <div ref={printRef}>
                        <h6>Documentation - Food (Breakfast)</h6>
                        <div className="app-container">
                            <div className="table-responsive">
                                <Table
                                    id="delete-datatable"
                                    className="mt-2 table table-bordered text-nowrap border-bottom"
                                >
                                    <thead>
                                        <tr>
                                            <th>Food Item</th>
                                            <th>Quantity 1</th>
                                            <th>Comment 1</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Dosa</td>
                                            <td>Quantity 1</td>
                                            <td>Comment 1</td>
                                        </tr>
                                        <tr>
                                            <td>Roti</td>
                                            <td>Quantity 1</td>
                                            <td>Comment 1</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        {/*summary table generic */}
                        <h6>Documentation - Drink</h6>
                        <div className="app-container">
                            <div className="table-responsive">
                                <Table
                                    id="delete-datatable"
                                    className="mt-2 table table-bordered text-nowrap border-bottom"
                                >
                                    <thead>
                                        <tr>
                                            <th>Drink Name</th>
                                            <th>Time</th>
                                            <th>Quantity</th>
                                            <th>Comment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Juice</td>
                                            <td>Time 1</td>
                                            <td>Quantity 1</td>
                                            <td>Comment 1</td>
                                        </tr>
                                        <tr>
                                            <td>Milk</td>
                                            <td>Time 2</td>
                                            <td>Quantity 2</td>
                                            <td>Comment 2</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        {/*summary table generic */}
                        <h6>Documentation - Nappy / Toilet</h6>
                        <div className="app-container">
                            <div className="table-responsive">
                                <Table
                                    id="delete-datatable"
                                    className="mt-2 table table-bordered text-nowrap border-bottom"
                                >
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Time</th>
                                            <th>Comment</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Item 1</td>
                                            <td>Time 1</td>
                                            <td>Comment 1</td>
                                        </tr>
                                        <tr>
                                            <td>Item 2</td>
                                            <td>Time 2</td>
                                            <td>Comment 2</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>

                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={props?.close}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props?.close}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </div>
    );
}

Summary.layout = "Contentlayout";

