import { BarChart, Categorybar, GroupedBar, Imagebar, Markerbar, Negativebar, Patternbar, Reversedbar, Stacked100bar, Stackedbar } from '@/shared/data/charts/apexcharts/barchartdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap'

const Barcharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Bar Chart"} />
            <Pageheader title="Apex Bar Charts" heading="Apex Charts" active="Apex Bar Charts" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-basic"><BarChart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Grouped Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-group"><GroupedBar />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Stacked Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-stacked"><Stackedbar /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>100% Stacked Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-full"><Stacked100bar /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Bar Chart With Negative Values</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-negative"><Negativebar /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Bar Chart With Markers</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-markers"><Markerbar /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Reversed Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-reversed"><Reversedbar /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Bar With Categogry DataLabels</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-categories"><Categorybar /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Patterned Bar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-pattern"><Patternbar /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Bar With Image Fill</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bar-image"><Imagebar /></div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Barcharts.layout = "Contentlayout"

export default Barcharts;