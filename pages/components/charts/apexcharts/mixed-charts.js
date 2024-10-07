import { LineColoumAreaChart, LineColoumn, Linearea, MixedYaxis } from '@/shared/data/charts/apexcharts/mixedchartdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap'

const Mixedcharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Mixed Chart"} />
            <Pageheader title="Apex Mixed Chart" heading="Apex Charts" active="Apex Mixed Chart" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Line & Column Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-linecolumn"><LineColoumn />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Line & Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-linearea"><Linearea /></div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>Line,Column & Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-all"><LineColoumAreaChart /></div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Mixedcharts.layout = "Contentlayout"

export default Mixedcharts;