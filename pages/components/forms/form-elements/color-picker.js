import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap';

const Colorpicker = () => {

    return (
        <Fragment>
            <Seo title="Color Picker" />
            <Pageheader title="Color Picker" heading="Form Elements" active="Color Picker" />
            <Row>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Bootstrap Color Picker
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='' className="btn btn-sm btn-primary-light">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Control type="color" className="form-control-color border-0"
                                id="exampleColorInput" value="#136ad0" title="Choose your color" />
                        </Card.Body>
                        <Card.Footer className="d-none border-top-0">
                            <pre className="language-html"><code className="language-html">&lt;input type="color" className="form-control form-control-color border-0"
                                id="exampleColorInput" value="#136ad0" title="Choose your color"&gt;</code></pre>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={9}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Classic
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="d-flex justify-content-between">
                            <div>
                                <div className="theme-container"></div>
                                <div className="pickr-container example-picker"></div>
                            </div>
                            <div>
                                <div className="theme-container1"></div>
                                <div className="pickr-container1 example-picker"></div>
                            </div>
                            <div>
                                <div className="theme-container2"></div>
                                <div className="pickr-container2 example-picker"></div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Colorpicker.layout = "Contentlayout"

export default Colorpicker;