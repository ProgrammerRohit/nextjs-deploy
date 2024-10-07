import { CircleWithImage, CustomAngleCircle, Gradient, MultipleRadilBar, Piechart, SemiCircle, StrokedCircle } from '@/shared/data/charts/apexcharts/piechartdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap'

const Radialbarcharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Radialbar Chart"} />
            <Pageheader title="Apex Radialbar Chart" heading="Apex Charts" active="Apex Radialbar Chart" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="radialbar-basic"><Piechart /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Multiple Radialbar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="radialbar-multiple"><MultipleRadilBar /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Circle Chart - Custom Angle</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="circle-custom"><CustomAngleCircle />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Gradient Circle Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="gradient-circle"><Gradient />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Stroked Circular Gauge</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="circular-stroked"><StrokedCircle />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Circle Chart With Image</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="circle-image"><CircleWithImage />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Semi Circular Gauge</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="circular-semi"><SemiCircle />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Radialbarcharts.layout = "Contentlayout"

export default Radialbarcharts;