
import Pageheader from '@/shared/layout-components/pageheader/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import { Accordion, Button, Card, Col, Form, Row } from 'react-bootstrap'

const Faqs = () => {
    return (
        <Fragment>
            <Seo title="Faq's" />
			<Pageheader title="Faq's" heading="Pages" active="Faq's" />
            <div className="row justify-content-center">
                <Col xl={12}>
                    <Row>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        General Topics ?
                                    </div>
                                </div>
                                <Card.Body>
                                    <Accordion className="accordion-customicon1 accordion-primary" id="accordionFAQ1" defaultActiveKey="1">
                                        <Accordion.Item className="" eventKey='1'>
                                            <Accordion.Header as="h2" className="" id="headingcustomicon2One">
                                                Where can I subscribe to your newsletter?
                                            </Accordion.Header>
                                            <Accordion.Body id="collapsecustomicon2One" className=""
                                                aria-labelledby="headingcustomicon2One"
                                                data-bs-parent="#accordionFAQ1">
                                                <div className="">
                                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                                    default, until the collapse plugin adds the appropriate classes that we
                                                    use to style each element
                                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey='2' className="">
                                            <Accordion.Header as="h2" className="" id="headingcustomicon2Two">
                                                Where can in edit my address?
                                            </Accordion.Header>
                                            <Accordion.Body id="collapsecustomicon2Two" className=""
                                                aria-labelledby="headingcustomicon2Two"
                                                data-bs-parent="#accordionFAQ1">
                                                <div className="">
                                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                                    default, until the collapse plugin adds the appropriate classes that we
                                                    use to style each element
                                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey='3' className="">
                                            <Accordion.Header as="h2" className="" id="headingcustomicon2Three">
                                                What are your opening hours?
                                            </Accordion.Header>
                                            <Accordion.Body id="collapsecustomicon2Three" className=""
                                                aria-labelledby="headingcustomicon2Three"
                                                data-bs-parent="#accordionFAQ1">
                                                <div className="">
                                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                                    default, until the collapse plugin adds the appropriate classes that we
                                                    use to style each element
                                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey='4' className="">
                                            <Accordion.Header as="h2" className="" id="headingcustomicon2Four">
                                                Do I have the right to return an item?
                                            </Accordion.Header>
                                            <Accordion.Body id="collapsecustomicon2Four" className=""
                                                aria-labelledby="headingcustomicon2Four"
                                                data-bs-parent="#accordionFAQ1">
                                                <div className="">
                                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                                    default, until the collapse plugin adds the appropriate classes that we
                                                    use to style each element
                                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Customer Support ?
                                    </div>
                                </div>
                                <Card.Body>
                                    <Accordion className="accordion accordion-customicon1 accordion-primary" id="accordionFAQ3" defaultActiveKey="2">
                                        <Accordion.Item className="accordion-item" eventKey='1'>
                                            <Accordion.Header as="h2" className="accordion-header" id="headingcustomicon3One">
                                                What is the order procedure?
                                            </Accordion.Header>
                                            <Accordion.Body id="collapsecustomicon3One" className=""
                                                aria-labelledby="headingcustomicon3One"
                                                data-bs-parent="#accordionFAQ3">
                                                <div className="">
                                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                                    default, until the collapse plugin adds the appropriate classes that we
                                                    use to style each element
                                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='2' className="accordion-item">
                                            <Accordion.Header as="h2" className="accordion-header" id="headingcustomicon3Two">
                                                How and when do I receive the invoices?
                                            </Accordion.Header>
                                            <Accordion.Body id="collapsecustomicon3Two" className=""
                                                aria-labelledby="headingcustomicon3Two"
                                                data-bs-parent="#accordionFAQ3">
                                                <div className="">
                                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                                    default, until the collapse plugin adds the appropriate classes that we
                                                    use to style each element
                                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item className="accordion-item" eventKey='3'>
                                            <Accordion.Header as="h2" className="accordion-header" id="headingcustomicon3Three">
                                                Which method of ordering is best for me?
                                            </Accordion.Header>
                                            <Accordion.Body id="collapsecustomicon3Three" className=""
                                                aria-labelledby="headingcustomicon3Three"
                                                data-bs-parent="#accordionFAQ3">
                                                <div className="">
                                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                                    default, until the collapse plugin adds the appropriate classes that we
                                                    use to style each element
                                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey='4' className="accordion-item">
                                            <Accordion.Header as="h2" className="accordion-header" id="headingcustomicon3Four">
                                                What does an order cost?
                                            </Accordion.Header>
                                            <Accordion.Body id="collapsecustomicon3Four" className=""
                                                aria-labelledby="headingcustomicon3Four"
                                                data-bs-parent="#accordionFAQ3">
                                                <div className="">
                                                    <strong>This is the first item's accordion body.</strong> It is shown by
                                                    default, until the collapse plugin adds the appropriate classes that we
                                                    use to style each element
                                                    <code>.accordion-body</code>, though the transition does limit overflow.
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <div className="card-header">
                                    <div className="card-title">
                                        Still Have Questions ?
                                        <span className="subtitle fw-normal text-muted d-block fs-12">
                                            You can post your questions here,our support team is always active.
                                        </span>
                                    </div>
                                </div>
                                <Card.Body>
                                    <div className="row gy-3">
                                        <Col xl={6}>
                                            <Form.Label htmlFor="user-name" className="">Your Name</Form.Label>
                                            <Form.Control type="text" className="form-control-light" id="user-name" placeholder="Enter Your Name" />
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="user-email" className="">Email Id</Form.Label>
                                            <Form.Control type="text" className="form-control-light" id="user-email" placeholder="Enter Email" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="text-area" className="">Textarea</Form.Label>
                                            <Form.Control as="textarea" className="form-control-light" placeholder="Enter your question here" id="text-area" rows={5} />
                                        </Col>
                                    </div>
                                </Card.Body>
                                <div className="card-footer">
                                    <Button variant='primary' type="button" className="btn btn-wave float-end">Send</Button>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </div>
        </Fragment>
    )
}
Faqs.layout = "Contentlayout"

export default Faqs;