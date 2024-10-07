import { BasicTable, ResponsiveDataTable, Savetable, } from '@/shared/data/tables/datatablesdata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment, useState } from 'react'
import { Card, Col, Row } from "react-bootstrap";
import { ReactTabulator } from 'react-tabulator';

const Datatables = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(10);
    const [totalPages] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <Fragment>
            <Seo title={"Data Table"} />
            <Pageheader title="Data Tables" heading="Tables" active="Data Tables" />
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Datatable
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive basic-datatable">
                                <BasicTable />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className=" custom-card">
                        <Card.Header>
                            <Card.Title>
                                Delete Row Datatable
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="deleted-table table-responsive">
                                <div className="text-center">

                                </div>
                                <Savetable />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    )
}
Datatables.layout = "Contentlayout"

export default Datatables;