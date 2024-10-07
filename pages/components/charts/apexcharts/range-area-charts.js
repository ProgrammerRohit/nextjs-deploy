import { Comborangearea, RangeArea } from '@/shared/data/charts/apexcharts/rangeareachartdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap'

const Rangeareacharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Range Area Chart"} />
            <Pageheader title="Apex Range Area Chart" heading="Apex Charts" active="Apex Range Area Chart" />
            <Row>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Range Area Chart
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="rangearea-basic"><RangeArea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Combo Range Area Chart
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="rangearea-combo"><Comborangearea /></div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Rangeareacharts.layout = "Contentlayout"

export default Rangeareacharts;