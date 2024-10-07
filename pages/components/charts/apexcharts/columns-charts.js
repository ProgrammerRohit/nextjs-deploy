import { Basicolumn, Columnwithlabels, Distributed, Loaded, Markers, Negativecolumn, Rangecolumn, Rotated, Stacked100column, Stackedcolumn } from '@/shared/data/charts/apexcharts/columschartdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Columnscharts = () => {
    return (
        <Fragment>
            <Seo title={"Columns Chart"} />
            <Pageheader title="Apex Columns Chart" heading="Apex Charts" active="Apex Columns Chart" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Column Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-basic">
                                <Basicolumn />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Column Chart With Datalabels</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-datalabels">
                                <Columnwithlabels />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Column Chart With Markers</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-markers">
                                <Markers />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Column Chart With Rotated Labels</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-rotated-labels">
                                <Rotated />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Column Chart With Negative Values</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-negative">
                                <Negativecolumn />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Range Column Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="column-range">
                                <Rangecolumn />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Dynamic Loaded Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Loaded />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Distributed Columns Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="columns-distributed">
                                <Distributed />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Columnscharts.layout = "Contentlayout"

export default Columnscharts;