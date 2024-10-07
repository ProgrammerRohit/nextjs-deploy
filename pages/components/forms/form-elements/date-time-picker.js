
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useState } from 'react'
import { Card, Col, InputGroup, Row } from 'react-bootstrap';
import DatePicker from "react-datepicker";

const Datatimepicker = () => {

	const [startDate, setStartDate] = useState(new Date());
	const handleDateChange = (date) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate(date);
		}
	};
	const [startDate1, setStartDate1] = useState(new Date());
	const handleDateChange1 = (date) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate1(date);
		}
	};
	const [startDate2, setStartDate2] = useState(new Date());
	const handleDateChange2 = (date) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate2(date);
		}
	};
	const [startDate3, setStartDate3] = useState(new Date());
	const handleDateChange3 = (date) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate3(date);
		}
	};
	const [startDate4, setStartDate4] = useState(new Date());
	const handleDateChange4 = (date) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate4(date);
		}
	};
	const [startDate5, setStartDate5] = useState(new Date());
	const handleDateChange5 = (date) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate5(date);
		}
	};
	const [startDatei, setStartDatei] = useState(new Date());
	const [startDate6, setStartDate6] = useState(new Date());
	const handleDateChange6 = (date) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate6(date);
		}
	};
	const [startDate7, setStartDate7] = useState(new Date());
	const handleDateChange7 = (date) => {
		// Ensure date is defined before setting it
		if (date) {
			setStartDate7(date);
		}
	};
	//color picker
	const [color, setColor] = useState("#6c5ffc");
	const [showColorPicker, setShowColorPicker] = useState(false);
	const handleChangeComplete = (color) => {
		console.log(color);
	};

	return (
		<Fragment>
			<Seo title="Date Time Picker" />
			<Pageheader title="Date Time Picker" heading="Form Elements" active="Date Time Picker" />
			<Row>
				<Col xl={3}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Basic Date picker
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="form-group">
								<InputGroup className="">
									<InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
									</InputGroup.Text>
									<DatePicker selected={startDate} onChange={handleDateChange} />
								</InputGroup>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Date picker With Time
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="form-group">
								<InputGroup className="">
									<InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
									<DatePicker
										selected={startDate1}
										onChange={handleDateChange1}
										timeInputLabel="Time:"
										dateFormat="yy/MM/dd h:mm aa"
										placeholderText='Choose date with time'
										showTimeInput
									/>
								</InputGroup>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Human Friendly dates
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="form-group">
								<InputGroup className="">
									<InputGroup.Text className="input-group-text text-muted">
										<i className="ri-calendar-line"></i> </InputGroup.Text>
									<DatePicker selected={startDate2} onChange={handleDateChange2} />
								</InputGroup>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Date range picker
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="form-group">
								<InputGroup className="">
									<InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
									</InputGroup.Text>
									<DatePicker selected={startDate3} onChange={handleDateChange3} />
								</InputGroup>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={3}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Basic Time picker
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="form-group">
								<InputGroup className="input-group">
									<InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
									<DatePicker
										selected={startDate4}
										onChange={handleDateChange4}
										showTimeSelect
										showTimeSelectOnly
										timeIntervals={15}
										timeCaption="Time"
										dateFormat="h:mm aa"
									/>
								</InputGroup>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3}>
					<Card className="custom-card date-time-pickr">
						<Card.Header>
							<Card.Title>
								Locale with time
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="form-group">
								<InputGroup className="input-group">
									<InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
									<DatePicker
										selected={startDate5}
										onChange={handleDateChange5}
										locale="pt-BR"
										showTimeSelect
										timeFormat="p"
										timeIntervals={15}
										dateFormat="Pp"
									/>
								</InputGroup>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Time Picker with Limits
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="form-group">
								<InputGroup className="input-group">
									<InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
									<DatePicker
										selected={startDate6}
										onChange={handleDateChange6}
										showTimeSelect
										showTimeSelectOnly
										timeIntervals={15}
										timeCaption="Time"
										dateFormat="h:mm aa"
									/>
								</InputGroup>
							</div>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={3}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Month Picker
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<div className="form-group">
								<InputGroup className="input-group">
									<InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
									<DatePicker
										selected={startDate}
										onChange={handleDateChange}
										dateFormat="MM/yyyy"
										showMonthYearPicker
									/>
								</InputGroup>
							</div>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col xl={6}>
					<Row>
						<Col xl={12}>
							<Card className="custom-card">
								<Card.Header>
									<Card.Title>
										Inline Time Picker
									</Card.Title>
								</Card.Header>
								<div className="card-body overflow-auto">
									<div className="form-group mb-0">

										<DatePicker className="ti-form-input focus:z-10" selected={startDate7} onChange={(date) =>
											setStartDate7(date)} inline showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
									</div>
								</div>
							</Card>
						</Col>
					</Row>
				</Col>
				<Col xl={6}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Inline Calendar
							</Card.Title>
						</Card.Header>
						<div className="card-body overflow-auto">
							<div className="form-group">

								<DatePicker selected={startDatei} onChange={(date) => setStartDatei(date)} inline />
							</div>
						</div>
					</Card>
				</Col>
			</Row>
		</Fragment>
	)
}
Datatimepicker.layout = "Contentlayout"

export default Datatimepicker;