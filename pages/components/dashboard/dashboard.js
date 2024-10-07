import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react';
import { Card, Col, Nav, OverlayTrigger, ProgressBar, Row, Tab, Table, Tooltip } from 'react-bootstrap';
import { Activity, Data, Data2, Data3, ProsuctData, RecentOrder, RecentOrder2, SalesAnalytics, TotalCost, TotalProfit, TotalUser, Totalexpenses, Worldmap } from '@/shared/data/dashboard/dashboarddata';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const WorldMapCom = dynamic(() => import('@/shared/data/dashboard/mapdata'), { ssr: false });

const DashboardCom = () => {

  return (
    <Fragment>
      <Seo title="Dashboard 01" />
      <Pageheader title="Dashboard 01" heading="Home" active="Dashboard 01" />
      <Row>
        <Col lg={6} md={6} sm={12} xxl={3}>
          <Card className="overflow-hidden">
            <Card.Body>
              <div className="d-flex" >
                <div className="">
                  <h6 className="">Total Users</h6>
                  <h2 className="mb-0 number-font">44,278</h2>
                </div>
                <div className="ms-auto">
                  <div className="chart-wrapper mt-1">
                    <TotalUser />
                  </div>
                </div>
              </div>
              <span className="text-muted fs-12"><span className="text-secondary me-1 d-inline-block"><i
                className="fe fe-arrow-up-circle text-secondary"></i> 5%</span>
                Last week</span>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xxl={3}>
          <Card className="overflow-hidden">
            <Card.Body>
              <div className="d-flex">
                <div className="">
                  <h6 className="fw-normal">Total Profit</h6>
                  <h2 className="mb-0 text-dark fw-semibold">67,987</h2>
                </div>
                <div className="ms-auto">
                  <div className="chart-wrapper mt-1">
                    <TotalProfit />
                  </div>
                </div>
              </div>
              <span className="text-muted fs-12"><span className="text-pink me-1 d-inline-block"><i
                className="fe fe-arrow-down-circle text-pink"></i> 0.75%</span>
                Last 6 days</span>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xxl={3}>
          <Card className="overflow-hidden">
            <Card.Body>
              <div className="d-flex">
                <div className="">
                  <h6 className="fw-normal">Total Expenses</h6>
                  <h2 className="mb-0 text-dark fw-semibold">$76,965</h2>
                </div>
                <div className="ms-auto">
                  <div className="chart-wrapper mt-1">
                    <Totalexpenses />
                  </div>
                </div>
              </div>
              <span className="text-muted fs-12"><span className="text-green me-1 d-inline-block"><i
                className="fe fe-arrow-up-circle text-green"></i> 0.9%</span>
                Last 9 days</span>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={6} sm={12} xxl={3}>
          <Card className="overflow-hidden">
            <Card.Body>
              <div className="d-flex">
                <div className="">
                  <h6 className="fw-normal">Total Cost</h6>
                  <h2 className="mb-0 text-dark fw-semibold">$59,765</h2>
                </div>
                <div className="ms-auto">
                  <div className="chart-wrapper mt-1">
                    <TotalCost />
                  </div>
                </div>
              </div>
              <span className="text-muted fs-12"><span className="text-warning me-1 d-inline-block"><i
                className="fe fe-arrow-up-circle text-warning"></i> 0.6%</span>
                Last year</span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xxl={9}>
          <Card className="overflow-hidden">
            <Card.Header>
              <Card.Title as="h3">Sales Analytics</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="chartjs-wrapper-demo w-100">
                <SalesAnalytics />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={3}>
          <Card className="overflow-hidden">
            <Card.Body className="pb-0 bg-recentorder">
              <h3 className="card-title text-fixed-white mb-4">Recent Orders</h3>
              <div className="chartjs-wrapper-demo">
                <RecentOrder />
              </div>
            </Card.Body>
            <div id="back-chart">
              <RecentOrder2 />
            </div>
            <Card.Body>
              <div className="d-flex mb-4">
                <div className="avatar avatar-md bg-secondary-transparent text-secondary bradius me-3">
                  <i className="fe fe-check"></i>
                </div>
                <div className="">
                  <h6 className="mb-1 fw-semibold fs-14">Delivered Orders</h6>
                  <p className="fw-normal fs-12 mb-1"> <span className="text-success me-1 d-inline-block">3.5%</span>
                    increased </p>
                </div>
                <div className=" ms-auto mb-auto">
                  <p className="fw-bold fs-20 mb-0"> 1,768 </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="avatar  avatar-md bg-pink-transparent text-pink bradius me-3">
                  <i className="fe fe-x"></i>
                </div>
                <div className="">
                  <h6 className="mb-1 fw-semibold fs-14">Cancelled Orders</h6>
                  <p className="fw-normal fs-12 mb-1"> <span className="text-success me-1 d-inline-block">1.2%</span>
                    increased </p>
                </div>
                <div className=" ms-auto mb-auto">
                  <p className="fw-bold fs-20 mb-0"> 3,675 </p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xxl={4} md={12}>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">Daily Activity</h4>
            </Card.Header>
            <Card.Body className="pb-0">

              <ul className="task-list">
                {Activity.map((idx) => (
                  <li className="d-sm-flex" key={Math.random()}>
                    <div>
                      <i className={`task-icon bg-${idx.color}`}></i>
                      <h6 className="fw-semibold">{idx.class}<span
                        className="text-muted fs-11 mx-2 fw-normal">{idx.date}</span>
                      </h6>
                      <p className="text-muted fs-12 mb-0">{idx.data}<a href="#!"
                        className="fw-semibold text-primary"> {idx.role}</a></p>
                    </div>
                    <div className="ms-auto d-md-flex">
                      <OverlayTrigger overlay={<Tooltip>Edit</Tooltip>}>
                        <Link href="#!" className="text-muted me-2" data-bs-toggle="tooltip" data-bs-placement="top" aria-label="Edit" data-bs-original-title="Edit"><span className="fe fe-edit"></span></Link>
                      </OverlayTrigger>
                      <Link aria-label="anchor" href="#!" className="text-muted"><span className="fe fe-trash-2"></span></Link>
                    </div>
                  </li>
                ))}
              </ul>

            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4} lg={6} md={12}>
          <Card className="overflow-hidden">
            <Card.Header>
              <div>
                <Card.Title as="h3">Sales Report by Locations with Devices</Card.Title>
              </div>
            </Card.Header>
            <Card.Body className="p-0 mt-2">
              <div className="">
                <div id="visitors-countries" className="worldh world-map h-250">
                <WorldMapCom/>
                </div>
              </div>
              <div className="table-responsive mt-2 text-center">
                <Table className="table text-nowrap border-dashed mb-0">
                  <thead className="text-uppercase">
                    <tr>
                      <th scope="col" className="text-start">Device</th>
                      <th scope="col" className="">USA</th>
                      <th scope="col" className="">India</th>
                      <th scope="col" className="">Bahrain</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-start p-3 d-flex align-items-center"><span className="sales-icon text-primary bg-primary-transparent"><i className="bi bi-phone"></i></span>Mobiles</td>
                      <td className="p-3">17%</td>
                      <td className="p-3">22%</td>
                      <td className="p-3">11%</td>
                    </tr>
                    <tr>
                      <td className="text-start p-3 d-flex align-items-center"><span className="sales-icon text-secondary bg-secondary-transparent "><i className="bi bi-display"></i></span>Desktops</td>
                      <td className="p-3">34%</td>
                      <td className="p-3">76%</td>
                      <td className="p-3">58%</td>
                    </tr>
                    <tr>
                      <td className="border-bottom-0 text-start p-3 d-flex align-items-center"><span className="sales-icon text-danger bg-danger-transparent"><i className="bi bi-tablet"></i></span>Tablets</td>
                      <td className="border-bottom-0 p-3">56%</td>
                      <td className="border-bottom-0 p-3">83%</td>
                      <td className="border-bottom-0 p-3">66%</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xxl={4} lg={6} md={12}>
          <Card>
            <Card.Header>
              <h4 className="card-title fw-semibold">Browser Usage</h4>
            </Card.Header>
            <Card.Body>
              <div className="browser-stats">
                <div className="row mb-3">
                  <Col sm={2} lg={3} xl={3} xxl={2} className="mb-sm-0 mb-3 pe-0">
                    {/* <img src="../../../assets/imgs/browsers/chrome.svg" width="" className="img-fluid"
                      alt="img" /> */}
                  </Col>
                  <Col sm={10} lg={9} xl={9} xxl={10} className="">
                    <div className="d-flex align-items-end justify-content-between mb-1">
                      <h6 className="mb-1">Chrome</h6>
                      <h6 className="fw-semibold mb-1">35,502 <span
                        className="text-success fs-11">(<i
                          className="fe fe-arrow-up"></i>12.75%)</span></h6>
                    </div>
                    <ProgressBar variant='primary' className="h-2 mb-3 progress-sm" now={70} />
                  </Col>
                </div>
                <div className="row mb-3">
                  <Col sm={2} lg={3} xl={3} xxl={2} className="mb-sm-0 mb-3 pe-0">
                    {/* <img src="../../../assets/imgs/browsers/opera.svg" className="img-fluid"
                      alt="img" /> */}
                  </Col>
                  <Col sm={10} lg={9} xl={9} xxl={10} className="">
                    <div className="d-flex align-items-end justify-content-between mb-1">
                      <h6 className="mb-1">Opera</h6>
                      <h6 className="fw-semibold mb-1">12,563 <span
                        className="text-danger fs-11">(<i
                          className="fe fe-arrow-down"></i>15.12%)</span></h6>
                    </div>
                    <ProgressBar variant='secondary' className="h-2 mb-3  progress-sm" now={40} />
                  </Col>
                </div>
                <div className="row mb-3">
                  <Col sm={2} lg={3} xl={3} xxl={2} className="mb-sm-0 mb-3 pe-0">
                    {/* <img src="../../../assets/imgs/browsers/ie.svg" className="img-fluid"
                      alt="img" /> */}
                  </Col>
                  <Col sm={10} lg={9} xl={9} xxl={10} className="">
                    <div className="d-flex align-items-end justify-content-between mb-1">
                      <h6 className="mb-1">IE</h6>
                      <h6 className="fw-semibold mb-1">25,364 <span
                        className="text-success fs-11">(<i
                          className="fe fe-arrow-down"></i>24.37%)</span></h6>
                    </div>
                    <ProgressBar variant='success' className="h-2 mb-3  progress-sm" now={50} />
                  </Col>
                </div>
                <div className="row mb-3">
                  <Col sm={2} lg={3} xl={3} xxl={2} className="mb-sm-0 mb-3 pe-0">
                    {/* <img src="../../../assets/imgs/browsers/firefox.svg" className="img-fluid"
                      alt="img" /> */}
                  </Col>
                  <Col sm={10} lg={9} xl={9} xxl={10} className="">
                    <div className="d-flex align-items-end justify-content-between mb-1">
                      <h6 className="mb-1">Firefox</h6>
                      <h6 className="fw-semibold mb-1">14,635 <span
                        className="text-success fs-11">(<i
                          className="fe fe-arrow-down"></i>15.63%)</span></h6>
                    </div>
                    <ProgressBar variant='danger' className="h-2 mb-3 progress-sm " now={50} />
                  </Col>
                </div>
                <div className="row mb-3">
                  <Col sm={2} lg={3} xl={3} xxl={2} className="mb-sm-0 mb-3 pe-0">
                    {/* <img src="../../../assets/imgs/browsers/edge.svg" className="img-fluid"
                      alt="img" /> */}
                  </Col>
                  <Col sm={10} lg={9} xl={9} xxl={10} className="">
                    <div className="d-flex align-items-end justify-content-between mb-1">
                      <h6 className="mb-1">Edge</h6>
                      <h6 className="fw-semibold mb-1">15,453 <span className="text-danger fs-11">(<i
                        className="fe fe-arrow-down"></i>23.70%)</span></h6>
                    </div>
                    <ProgressBar variant='warning' className="h-2 mb-3  progress-sm" now={10} />
                  </Col>
                </div>
                <div className="row mb-3">
                  <Col sm={2} lg={3} xl={3} xxl={2} className="mb-sm-0 mb-3 pe-0">
                    {/* <img src="../../../assets/imgs/browsers/safari.svg" className="img-fluid"
                      alt="img" /> */}
                  </Col>
                  <Col sm={10} lg={9} xl={9} xxl={10} className="">
                    <div className="d-flex align-items-end justify-content-between mb-1">
                      <h6 className="mb-1">Safari</h6>
                      <h6 className="fw-semibold mb-1">10,054 <span
                        className="text-success fs-11">(<i
                          className="fe fe-arrow-up"></i>11.04%)</span></h6>
                    </div>
                    <ProgressBar variant='info' className="h-2 mb-3  progress-sm" now={40} />
                  </Col>
                </div>
                <div className="row mb-0">
                  <Col sm={2} lg={3} xl={3} xxl={2} className="mb-sm-0 mb-3 pe-0">
                    {/* <img src="../../../assets/imgs/browsers/netscape.svg" className="img-fluid"
                      alt="img" /> */}
                  </Col>
                  <Col sm={10} lg={9} xl={9} xxl={10} className="">
                    <div className="d-flex align-items-end justify-content-between mb-1">
                      <h6 className="mb-1">Netscape</h6>
                      <h6 className="fw-semibold mb-1">35,502 <span
                        className="text-success fs-11">(<i
                          className="fe fe-arrow-up"></i>12.75%)</span></h6>
                    </div>
                    <ProgressBar variant='green' className="h-2 mb-3  progress-sm" now={30} />
                  </Col>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="col-12">
          <Card>
            <Tab.Container id="left-tabs-example" defaultActiveKey="AllProducts">
              <Card.Header className='d-md-flex justify-content-between'>
                <h4 className="card-title p-2">Product Summary</h4>
                <Nav variant="pills" className='product-sale'>
                  <Nav.Item>
                    <Nav.Link eventKey="AllProducts" className="text-dark">All Products</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Shipped" className="text-dark">Shipped</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Pending" className="text-dark">Pending</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="Cancelled" className="text-dark">Cancelled</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Header>
              <Card.Body>

                <Tab.Content>
                  <Tab.Pane eventKey="AllProducts" className='p-0 border-0'>
                    <Card.Body className="pt-0 p-0 example1-table">
                      <ProsuctData />
                    </Card.Body>
                  </Tab.Pane>
                  <Tab.Pane eventKey="Shipped" className='p-0 border-0'>
                    <Data />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Pending" className='p-0 border-0'>
                    <Data2 />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Cancelled" className='p-0 border-0'>
                    <Data3 />
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Tab.Container>

          </Card>
        </Col>
      </Row>

    </Fragment>
  );
};

DashboardCom.layout = "Contentlayout";

export default DashboardCom;
