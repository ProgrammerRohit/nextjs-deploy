import { Basicpolararea, PolarAreaMonoChrome } from '@/shared/data/charts/apexcharts/piechartdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap'

const Polarareacharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Ploar Chart"} />
            <Pageheader title="Apex Polar Chart" heading="Apex Charts" active="Apex Polar Chart" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Basic Polar Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="polararea-basic"> <Basicpolararea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Polar Area Monochrome Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="polararea-monochrome"><PolarAreaMonoChrome />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Polarareacharts.layout = "Contentlayout"

export default Polarareacharts;