import { Basicarea, Datetimexaxis, Github, Negative, Nullarea, Spiline, Stacked } from '@/shared/data/charts/apexcharts/areachartdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap'

const Areacharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Area Chart"} />
            <Pageheader title="Apex Area Chart" heading="Apex Charts" active="Apex Area Chart" />
            <Row>
                <Col xl={6} >
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-basic"><Basicarea /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Spline Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-spline"><Spiline /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <div className="card-title">Area Chart With Negative Values</div>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-negative"><Negative /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Selection-Github Style Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Github />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Stacked Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-stacked"><Stacked /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Area Chart With Null Values</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-null"><Nullarea /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                            <Datetimexaxis />
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Areacharts.layout = "Contentlayout"

export default Areacharts;