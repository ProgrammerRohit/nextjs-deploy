import { useState, useEffect, useRef } from "react";
import { Form, Row, Col, Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import MultiDatePicker from 'react-multi-date-picker';
import SiblingDropDown from "./SiblingDropDown";

function GenericModal(props) {
    const currentPageInputs = props?.inputs?.slice(props?.startIndex, props?.endIndex);
    console.log(8888888888, currentPageInputs, props?.startIndex, props?.endIndex);
    
    const dropdownRef = useRef(null);
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowItem(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef]);
    
    const [showItem, setShowItem] = useState(false);
    
    const renderInputs = () => (
        currentPageInputs?.map((item, index) => {
            const error = item.error;
            const colClass = item.colClass || 'col';
            console.log(899999, item.type);
            
            return (
                <Col key={index} className={`${props?.saveClassName && 'position-relative'} mt-2 ${colClass}`}>
                    <Form.Group key={item.name || index} className='mt-1'>
                        {props?.isEditing && item.type === "password" ? null : <Form.Label className='fw-bold'>{item?.label}</Form.Label>}       
                        {item.type === 'dropdown' ? (
                            <Form.Select
                                className='text-dark select-field'
                                placeholder="Select an option"
                                as="select"
                                value={item?.value || "default"}
                                onChange={item?.onChange}
                                name={item?.name}
                                isInvalid={!!error}
                                style={{ cursor: 'pointer' }}
                            >
                                <option>Select an option</option>
                                {item?.options?.map((option, optIndex) => (
                                    <option key={optIndex} className='select-option py-2' value={ option.parent_id || option.value || option.id}>
                                        {
                                            console.log(434324, option.id)
                                        }
                                        {option.value || option.name}
                                    </option>
                                ))}
                            </Form.Select>
                        ) : item.type === 'radio' ? (
                            <div className="d-flex flex-wrap">
                            {
                                item?.options?.length > 0 ? item?.options?.map((option) => (
                                    <div key={option.id} className="d-flex  align-items-center gap-1">
                                        <Form.Check
                                            type="radio"
                                            name={item?.name}
                                            value={option.value}
                                            id={option.id}
                                            onChange={item?.onChange}
                                            checked={item?.value == option?.id || item?.name === option.name}
                                            className="me-2"
                                        />
                                         {
                                          console.log(698346834 , option?.id , item?.name)
                                         }
                                        <span className="me-2"><small>{option?.value || option?.name}</small></span>
                                    </div>
                                )) : null
                              }
                            </div>
                          
                        ) : item.type === 'date' ? (
                            <Form.Control
                                type="date"
                                value={item?.value}
                                onChange={item?.onChange}
                                name={item?.name}
                                isInvalid={!!error}
                            />
                        ) : item.type === 'file' ? (
                            <Form.Control
                                type="file"
                                onChange={item?.onChange}
                                name={item?.name}
                                isInvalid={!!error}
                                multiple
                                className="custom-file-input"
                            />
                        ) : item.type === "checkbox" ? (
                            <Form.Check
                                type="checkbox"
                                onChange={item?.onChange}
                                name={item?.name}
                                isInvalid={!!error}
                                className="custom-checkbox-input"
                            />
                        ) : item.type === "datePicker" ? (
                            <div className="form-group">
                                <DatePicker
                                    className="form-control"
                                    selected={item?.value}
                                    onChange={item?.onChange}
                                    placeholderText="Choose Time"
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    dateFormat="HH:mm"
                                />
                            </div>
                        ) : item.type === "textarea" ? (
                            <Form.Control
                                as="textarea"
                                onChange={item?.onChange}
                                name={item?.name}
                                isInvalid={!!error}
                                value={item?.value}
                                className="custom-textarea-input"
                            />
                        ) : item.type === "siblingDropdown" ? (
                            <SiblingDropDown item={item} key={item.name || index} />
                        ) : item.type === "multiDatePicker" ? (
                            <MultiDatePicker
                                key={item.name || index}
                                value={item?.value}
                                onChange={item?.onChange}
                                numberOfMonths={1}
                            />
                        ) : item.type === "multiselect" ? (
                            <div ref={dropdownRef} className="position-relative">
                                <Form.Control onClick={() => setShowItem(true)} placeholder={`${item?.selectedItems.length === 0 ? 'Select Language' : `${item?.selectedItems.length} Selected`}`} readOnly />
                                <div style={{ top: '100%', left: 0, background: "#fff" }} className={`${showItem === true ? 'bg-white shadow d-block' : 'd-none'} position-absolute rounded-2 z-3 p-2 w-100`}>
                                    {item?.dropdownData?.map((itemMain, index) => (
                                        showItem && (
                                            <div key={index} style={{ cursor: 'pointer' }} onClick={() => item?.handleClick(itemMain, index)}>
                                                <input style={{ cursor: 'pointer' }} type="checkbox" className="me-2" checked={item?.selectedItems.includes(itemMain)} />
                                                <b className="text-dark"> {itemMain}</b>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </div>
                        ) : (
                            props?.isEditing && item?.type === "password" ? null : <Form.Control
                                type={item.showPassword && item?.type}
                                placeholder={item?.placeholder}
                                value={item?.value}
                                onChange={item?.onChange}
                                name={item?.name}
                                isInvalid={!!error}
                            />
                        )}
                        <Form.Control.Feedback type="invalid">
                            {error}
                        </Form.Control.Feedback>
                    </Form.Group>
                </Col>
            );
        })
    );
    
    const lastFieldIndexOnCurrentPage = (props?.currentPage + 1) * props?.inputPerPage;
    const isLastPage = lastFieldIndexOnCurrentPage >= props?.totalFields;
    
    const renderFooter = () => (
        props?.pagination === false && (
            <Modal.Footer className="border-0">
                <Button type='submit' style={{ backgroundColor: '#4C2DE3' }}>
                    Save Changes
                </Button>
            </Modal.Footer>
        ) 
    );
    
    return (
        <>
            {props?.asComponent ? (
                <div>
                    <Form onSubmit={props?.onSubmit}>
                        <Row>
                            {renderInputs()}
                            {renderFooter()}
                        </Row>
                    </Form>
                </div>
            ) : (
                <Modal dialogClassName={`${props?.modalMaxWidth}`} size={props?.modalSize} show={props?.openModal} onHide={props?.closeModal}>
                    {!props?.asComponent && (
                        <>
                            <Modal.Header closeButton className='p-0 pb-3 m-3  mb-0 border-1 border-bottom border-dark'>
                                <Modal.Title className='fw-bolder'>{props?.mainTitle}</Modal.Title>
                            </Modal.Header>
                            <Modal.Body className={` py-0 px-4`}>
                                <Form onSubmit={props?.onSubmit}>
                                    <Row>
                                        {renderInputs()}
                                        {renderFooter()}
                                    </Row>
                                </Form>
                            </Modal.Body>
                        </>
                    )}
                </Modal>
            )}
        </>
    );
}

export default GenericModal;
