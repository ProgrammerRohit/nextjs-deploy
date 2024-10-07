import { Selectmaxoption, Selectoption1, Selectoption2, Selectoption3, Selectoption4, Selectoption5 } from '@/shared/data/forms/select2data';
import Pageheader from '@/shared/layout-components/pageheader/pageheader';
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap';
const Select = dynamic(() => import('react-select'), { ssr: false });


const Select2 = () => {

	const [selectedOptions, setSelectedOptions] = useState(null);

	const handleSelectChange = (selected) => {
		// Define your maximum selection limit (e.g., 2 in this example)
		const maxSelections = 3;

		if (selected && selected.length <= maxSelections) {
			setSelectedOptions(selected);
		}
	};

	const [singleSelectValue, setSingleSelectValue] = useState(null);
	const [multiSelectValue, setMultiSelectValue] = useState([]);
	const [isSelectDisabled, setSelectDisabled] = useState(false);

	const options = [
		{ value: 's-1', label: 'Selection-1' },
		{ value: 's-2', label: 'Selection-2' },
		{ value: 's-3', label: 'Selection-3' },
		{ value: 's-4', label: 'Selection-4' },
		{ value: 's-5', label: 'Selection-5' },
	];

	const handleSingleSelectChange = (selectedOption) => {
		setSingleSelectValue(selectedOption);
	};

	const handleMultiSelectChange = (selectedOptions) => {
		setMultiSelectValue(selectedOptions);
	};

	const disableSelect = () => {
		setSelectDisabled(true);
	};

	const enableSelect = () => {
		setSelectDisabled(false);
	};

	return (
		<Fragment>
			<Seo title="Select2" />
			<Pageheader title="Select2" heading="Forms" active="Select2" />
			<Row>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Basic Select2
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select name="state" options={Selectoption1} className="basic-multi-select " isSearchable
								menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption1[0]]}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Multiple Select
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select isMulti name="states[]" options={Selectoption2} className="js-example-basic-multiple w-full custom-multi" isSearchable
								menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption2[0]]}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Single Select With Placeholder
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select name="state" options={Selectoption3} className="js-example-placeholder-single js-states" isClearable
								menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption3[0]]}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Multiple Select With Placeholder
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select isMulti name="state" options={Selectoption4} className="js-example-placeholder-multiple w-full js-states"
								menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectoption4[0]]}
							/>
						</Card.Body>
					</Card>
				</Col><Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Templating
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select
								name="state"
								options={Selectoption5}
								className="js-example-templating js-persons basic-custom-select"
								menuPlacement="auto"
								classNamePrefix="Select2"
								defaultValue={[Selectoption5[0]]}
							/>
						</Card.Body>
					</Card>
				</Col>
				<Col xl={4}>
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Templating Selection
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select
								name="state"
								options={Selectoption5}
								className="basic-multi-select basic-custom-select"
								menuPlacement="auto"
								classNamePrefix="Select2"
								defaultValue={[Selectoption5[0]]}
							/>
						</Card.Body>
					</Card>
				</Col>
			</Row>
			<Row>
				<div className="col-xl-6">
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Max Selections Limiting
							</Card.Title>
						</Card.Header>
						<Card.Body>
							<Select
							isMulti
								name="state"
								options={Selectmaxoption}
								className="basic-multi-select basic-custom-select"
								menuPlacement="auto"
								classNamePrefix="Select2"
								defaultValue={[Selectmaxoption[0]]}
							/>
						</Card.Body>
					</Card>
				</div>
				<div className="col-xl-6">
					<Card className="custom-card">
						<Card.Header>
							<Card.Title>
								Disabling a Select2 control
							</Card.Title>
						</Card.Header>
						<Card.Body className=" vstack gap-3">
							<Select
								className="mb-3"
								options={options}
								classNamePrefix="Select2"
								value={singleSelectValue}
								onChange={handleSingleSelectChange}
								isDisabled={isSelectDisabled}
							/>
							<Select 
							 defaultValue={[options[0]]}
								className="js-example-disabled-multi"
								options={options}
								value={multiSelectValue}
								classNamePrefix="Select2"
								onChange={handleMultiSelectChange}
								isMulti
								isDisabled={isSelectDisabled}
								isClearable={!isSelectDisabled}
							/>
							<div>
								<Button variant='primary-light' className="btn me-2" onClick={enableSelect}>
									Enable
								</Button>
								<Button variant='primary' className="btn" onClick={disableSelect}>
									Disable
								</Button>
							</div>
						</Card.Body>
					</Card>
				</div>
			</Row>
		</Fragment>
	)
}
Select2.layout = "Contentlayout"

export default Select2;