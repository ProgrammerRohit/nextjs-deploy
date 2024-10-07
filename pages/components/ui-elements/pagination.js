import Seo from '@/shared/layout-components/seo/seo';
import React from 'react';
import { Pagination, Row, Col } from 'react-bootstrap';
import ShowCode from '@/shared/layout-components/showcode/showcode';
import { pagination1, pagination2, pagination3, pagination4, pagination5, pagination6, pagination7, pagination8, pagination9 } from '@/shared/data/prismdata/uielements-prism';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';


const Pagination1 = () => {

	return (

		<div >
			<Seo title="Pagination" />
			<Pageheader title="Pagination" heading="Ui Elements" active="Pagination" />
			<Row>
				<Col xxl={3} xl={6}>
					<ShowCode title="Basic Pagination" customCardClass="custom-card" customCardBodyClass="" code={pagination1}>
						<nav aria-label="Page navigation">
							<Pagination className="pagination mb-0">
								<Pagination.Item disabled className="disabled" href="#!">Previous</Pagination.Item>
								<Pagination.Item href="#!">1</Pagination.Item>
								<Pagination.Item href="#!">2</Pagination.Item>
								<Pagination.Item href="#!">Next</Pagination.Item>
							</Pagination>
						</nav>
					</ShowCode>
				</Col>
				<Col xxl={3} xl={6}>
					<ShowCode title="Pagination With Icons" customCardClass="custom-card" customCardBodyClass="" code={pagination2}>
						<nav aria-label="Page navigation">
							<Pagination className="pagination mb-0">
								<Pagination.Item className="page-item" href="#!" aria-label="Previous">
									<span aria-hidden="true"><i className="bx bx-chevron-left"></i></span></Pagination.Item>
								<Pagination.Item href="#!">1</Pagination.Item>
								<Pagination.Item href="#!">2</Pagination.Item>
								<Pagination.Item href="#!">3</Pagination.Item>
								<Pagination.Item className="page-item" href="#!" aria-label="Next">
									<span aria-hidden="true"><i className="bx bx-chevron-right"></i></span></Pagination.Item>
							</Pagination>
						</nav>
					</ShowCode>
				</Col>
				<Col xxl={6} className="">
					<ShowCode title="Pagination Sizing" customCardClass="custom-card" customCardBodyClass="d-flex flex-wrap justify-content-between" code={pagination3}>
						<nav aria-label="...">
							<Pagination className="pagination pagination-sm mb-2 mb-sm-0">
								<Pagination.Item active aria-current="page">
									1
								</Pagination.Item>
								<Pagination.Item href="#!">2</Pagination.Item>
								<Pagination.Item href="#!">3</Pagination.Item>
							</Pagination>
						</nav>
						<nav aria-label="...">
							<Pagination className="pagination  mb-2 mb-sm-0">
								<Pagination.Item active aria-current="page">
									1
								</Pagination.Item>
								<Pagination.Item href="#!">2</Pagination.Item>
								<Pagination.Item href="#!">3</Pagination.Item>
							</Pagination>
						</nav>
						<nav aria-label="...">
							<Pagination className="pagination pagination-lg mb-2 mb-sm-0">
								<Pagination.Item className=" active" aria-current="page">
									1
								</Pagination.Item>
								<Pagination.Item href="#!">2</Pagination.Item>
								<Pagination.Item href="#!">3</Pagination.Item>
							</Pagination>
						</nav>
					</ShowCode>

				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<ShowCode title="Center & Right Aligned Pagination" customCardClass="custom-card" customCardBodyClass="" code={pagination4}>
						<nav aria-label="Page navigation">
							<Pagination className="justify-content-center">
								<Pagination.Item disabled>Previous
								</Pagination.Item>
								<Pagination.Item href="#!">1</Pagination.Item>
								<Pagination.Item href="#!">2</Pagination.Item>
								<Pagination.Item href="#!">3</Pagination.Item>
								<Pagination.Item href="#!">Next
								</Pagination.Item>
							</Pagination>
						</nav>
						<nav aria-label="Page navigation">
							<Pagination className="justify-content-end mb-0">
								<Pagination.Item disabled >Previous
								</Pagination.Item>
								<Pagination.Item href="#!">1</Pagination.Item>
								<Pagination.Item href="#!">2</Pagination.Item>
								<Pagination.Item href="#!">3</Pagination.Item>
								<Pagination.Item href="#!">Next
								</Pagination.Item>
							</Pagination>
						</nav>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Active and disabled states" customCardClass="custom-card" customCardBodyClass="d-flex flex-wrap" code={pagination5}>
						<nav aria-label="..." className="me-3">
							<Pagination className="pagination">
								<Pagination.Item disabled>Previous
								</Pagination.Item>
								<Pagination.Item href="#!">1</Pagination.Item>
								<Pagination.Item active aria-current="page" href="#!">2
								</Pagination.Item>
								<Pagination.Item href="#!">Next
								</Pagination.Item>
							</Pagination>
						</nav>
						<nav aria-label="...">
							<Pagination className="pagination">
								<Pagination.Item disabled>Previous
								</Pagination.Item>
								<Pagination.Item href="#!">1</Pagination.Item>
								<Pagination.Item active aria-current="page">2
								</Pagination.Item>
								<Pagination.Item href="#!">Next
								</Pagination.Item>
							</Pagination>
						</nav>
					</ShowCode>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<ShowCode title="Pagination Style-1" customCardClass="custom-card" customCardBodyClass="" code={pagination6}>
						<nav aria-label="Page navigation" className="pagination-style-1">
							<Pagination className="pagination mb-0">
								<Pagination.Item disabled href="#!">
									<i className="ri-arrow-left-s-line align-middle"></i>
								</Pagination.Item>
								<Pagination.Item href="#!">1</Pagination.Item>
								<Pagination.Item active href="#!">2</Pagination.Item>
								<Pagination.Item href="#!"><i className="bi bi-three-dots"></i>
								</Pagination.Item>
								<Pagination.Item href="#!">21</Pagination.Item>
								<Pagination.Item href="#!">
									<i className="ri-arrow-right-s-line align-middle"></i>
								</Pagination.Item>
							</Pagination>
						</nav>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Pagination Style-2" customCardClass="custom-card" customCardBodyClass="" code={pagination7}>
						<nav aria-label="Page navigation" className="pagination-style-2">
							<Pagination className="mb-0 flex-wrap">
								<Pagination.Item disabled href="#!">Prev
								</Pagination.Item>
								<Pagination.Item active href="#!">1</Pagination.Item>
								<Pagination.Item href="#!">2</Pagination.Item>
								<Pagination.Item>
									<i className="bi bi-three-dots"></i>
								</Pagination.Item>
								<Pagination.Item href="#!">17</Pagination.Item>
								<Pagination.Item className='pagination-next' href="#!">
									next
								</Pagination.Item>
							</Pagination>
						</nav>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Pagination Style-3" customCardClass="custom-card" customCardBodyClass="" code={pagination8}>
						<nav aria-label="Page navigation" className="pagination-style-3">
							<Pagination className=" mb-0 flex-wrap">
								<Pagination.Item disabled>Prev
								</Pagination.Item>
								<Pagination.Item active href="#!">1</Pagination.Item>
								<Pagination.Item href="#!">2</Pagination.Item>
								<Pagination.Item href="#!">
									<i className="bi bi-three-dots"></i>
								</Pagination.Item>
								<Pagination.Item href="#!">16</Pagination.Item>
								<Pagination.Item className="pagination-next">next </Pagination.Item>
							</Pagination>
						</nav>
					</ShowCode>
				</Col>
				<Col xl={6}>
					<ShowCode title="Pagination Style-4" customCardClass="custom-card" customCardBodyClass="" code={pagination9}>
						<nav aria-label="Page navigation" className="pagination-style-4">
							<Pagination className="mb-0 flex-wrap">
								<Pagination.Item disabled href="#!">
									Prev
								</Pagination.Item>
								<Pagination.Item active href="#!">1</Pagination.Item>
								<Pagination.Item href="#!">2</Pagination.Item>
								<Pagination.Item href="#!">
									<i className="bi bi-three-dots"></i>

								</Pagination.Item>
								<Pagination.Item href="#!">16</Pagination.Item>
								<Pagination.Item href="#!">17</Pagination.Item>
								<Pagination.Item className="pagination-next" href="#!">
									next
								</Pagination.Item>
							</Pagination>
						</nav>
					</ShowCode>
				</Col>
			</Row>
		</div>
	);
};
Pagination1.layout = "Contentlayout";

export default Pagination1;
