import { DBubbleChart, Simplebubble } from '@/shared/data/charts/apexcharts/bubblechartdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap'

const Bubblecharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Bubble Chart"} />
            <Pageheader title="Apex Bubble Chart" heading="Apex Charts" active="Apex Bubble Chart" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Simple Bubble Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bubble-simple"><Simplebubble />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>3D Bubble Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bubble-3d">  <DBubbleChart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}

Bubblecharts.layout = "Contentlayout"

export default Bubblecharts;