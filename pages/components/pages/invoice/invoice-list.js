import { invoicelist } from '@/shared/data/pages/invoice/invoicelistdata'
import Pageheader from '@/shared/layout-components/pageheader/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Image from 'next/image'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { Button, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap'

const Invoicelist = () => {

    const [solidalert, setSolidalert] = useState(invoicelist);
    const handleRemove = (id) => {
        const newList = solidalert.filter((list) => list.id !== id);
        setSolidalert(newList);
    };
    return (
        <Fragment>
            <Seo title="Invoice List" />
            <Pageheader title="Invoice List" heading="Invoice" active="Invoice List" />
            <div className="row">
                <div className="col-xl-12">
                    <div className="card custom-card">
                        <div className="card-header justify-content-between">
                            <div className="card-title">
                                Manage Invoices
                            </div>
                            <div className="d-flex">
                                <Link href="/components/pages/invoice/create-invoice" className="btn btn-sm btn-primary btn-wave waves-light"><i className="ri-add-line fw-semibold align-middle me-1"></i> Create Invoice</Link>
                                <Dropdown className="ms-2">
                                    <Dropdown.Toggle as="a" className="btn btn-secondary-light btn-sm btn-wave waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ti ti-dots-vertical"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="">
                                        <Dropdown.Item><Link className="" href="#!">All Invoices</Link></Dropdown.Item>
                                        <Dropdown.Item><Link className="" href="#!">Paid Invoices</Link></Dropdown.Item>
                                        <Dropdown.Item><Link className="" href="#!">Pending Invoices</Link></Dropdown.Item>
                                        <Dropdown.Item><Link className="" href="#!">Overdue Invoices</Link></Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Client</th>
                                            <th scope="col">Invoice ID</th>
                                            <th scope="col">Issued Date</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Due Date</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {solidalert.map((idx) => (
                                            <tr className="invoice-list" key={Math.random()}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <Image src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold">{idx.class}</p>
                                                            <p className="mb-0 fs-11 text-muted">{idx.class1}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <a href="#!" className="fw-semibold text-primary">
                                                        {idx.card}
                                                    </a>
                                                </td>
                                                <td>
                                                    {idx.date}
                                                </td>
                                                <td>
                                                    {idx.amount}
                                                </td>
                                                <td>
                                                    <span className={`badge bg-${idx.color}-transparent`}>{idx.status}</span>
                                                </td>
                                                <td>
                                                    {idx.duedate}
                                                </td>
                                                <td>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip >Print</Tooltip>}>
                                                        <Button variant='' className="btn btn-primary-light btn-icon btn-sm"><i className="ri-printer-line"></i></Button>
                                                    </OverlayTrigger>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip >Delete</Tooltip>}>
                                                        <Button variant='' onClick={() => handleRemove(idx.id)} className="btn btn-danger-light btn-icon ms-1 btn-sm invoice-btn"><i className="ri-delete-bin-5-line"></i></Button>
                                                    </OverlayTrigger>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="card-footer">
                            <nav aria-label="Page navigation">
                                <ul className="pagination mb-0 float-end">
                                    <li className="page-item disabled">
                                        <a className="page-link">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">1</a></li>
                                    <li className="page-item active" aria-current="page">
                                        <a className="page-link" href="#!">2</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#!">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#!">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Invoicelist.layout = "Contentlayout";

export default Invoicelist;