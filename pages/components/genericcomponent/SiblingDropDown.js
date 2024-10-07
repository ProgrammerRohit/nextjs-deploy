import { useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";

export default function SiblingDropDown(props) {
    const [showItemDrop, setShowItemDrop] = useState(false);
    const [checked, setChecked] = useState(false);
    const [val, setVal] = useState("");

    const optionItem = props?.item?.value;
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (optionItem && optionItem.length === 1) {
            setShowItemDrop(true);
        } else {
            setShowItemDrop(false);
            setChecked(false);
        }
    }, [optionItem]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowItemDrop(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleCheckChange = () => {
        setChecked(!checked);
    };

    const handleSearch = (e) => {
        setVal(e.target.value);
    };

    const handleClick = (item, index) => {
        // Toggle item selection
        props?.item?.handleClick(item, index, optionItem);
    };
    const filterData = props?.item?.dropdownData?.filter((item) => item.name?.includes(val))
    console.log(7888888888,filterData)
    return (
        <div>
            <Form.Select
                className='text-dark select-field'
                placeholder="Select an option"
                as="select"
                value={props?.item?.value || "default"}
                onChange={(e) => props?.item?.onChange(e, optionItem)}
                name={props?.item?.name}
                style={{ cursor: 'pointer' }}
            >
                <option value="default">Select an option</option>
                {props?.item?.options?.map((option, optIndex) => (
                    <option key={optIndex} className='select-option py-2' value={option.parent_id || option.value}>
                        {option.value || option.name}
                    </option>
                ))}
            </Form.Select>

            {showItemDrop && (
                <div ref={dropdownRef} className="position-relative">
                    <div
                        style={{ top: '100%', left: 0 }}
                        className={`${showItemDrop ? 'bg-white shadow' : ''} rounded-2 position-absolute z-3 p-2 w-100`}
                    >
                        <div className='d-flex justify-content-center p-2 gap-3 rounded-2 align-items-start'>
                            <div className="d-flex mt-1 flex-column align-items-center">
                                <input
                                className="form-check-input"
                                    style={{ cursor: 'pointer' }}
                                    placeholder="Search"
                                    type="checkbox"
                                    checked={checked}
                                    onChange={handleCheckChange}
                                />
                            </div>
                            <small className="text-dark fw-bold">Have Your Sibling in the Same Nursery</small>
                        </div>
                        <div
                            className="bg-white rounded-2 shadow position-absolute w-100 start-0 bg-white p-3 pt-0"
                            style={{ width: "100%" }}
                        >
                            {checked && (
                                <Form.Control
                                    value={val}
                                    onChange={handleSearch}
                                    placeholder="Search..."
                                    className="mb-2"
                                />
                            )}
                            {checked && (
                                <div className="custom-scrollbar" style={{maxHeight:'150px'}}>
                                    {filterData?.map((item, index) => {
                                        const isDisabled = props?.item?.selectedItems.length >= Number(optionItem) && !props?.item?.selectedItems.includes(item.id);

                                        return (
                                            <div
                                                key={index}
                                                style={{ cursor: isDisabled ? 'not-allowed' : 'pointer', zIndex: "1000", background: "#fff" }}
                                                onClick={() => {
                                                    if (!isDisabled) {
                                                        handleClick(item, index);
                                                    }
                                                }}
                                            >
                                                <input
                                                    style={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}
                                                    type="checkbox"
                                                    className="form-check-input me-2"
                                                    checked={props?.item?.selectedItems.includes(item.id)}
                                                    disabled={isDisabled}
                                                    readOnly
                                                />
                                                <b className="text-dark">{item.name}</b>
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

