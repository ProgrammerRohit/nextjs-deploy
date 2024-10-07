import { useRef, useState, useEffect } from "react";
import { Form } from "react-bootstrap";

export default function GenericDropDown(props) {
    const [showDropDown, setShowDropDown] = useState(false);
    const dropdownRef = useRef(null);
    const [val, setVal] = useState("");

    const handleShow = () => {
        setShowDropDown(true);
    };

    const handleSearch = (e) => {
        setVal(e.target.value);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropDown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const filterData = props?.dropdownData?.filter((item) => 
        item.name?.toLowerCase().includes(val.toLowerCase())
    );

    return (
        <div>
            <label>{props?.label}</label>
            <Form.Control
                onChange={handleSearch}
                placeholder="Search..."
                className="mb-2"
                onClick={handleShow}
            />
            {showDropDown && (
                <div ref={dropdownRef} className="position-relative">
                    <div
                        className="shadow rounded-2 position-absolute z-3 w-100"
                        style={{ top: '100%', left: 0 }}
                    >
                        <div
                            className="bg-white rounded-2 p-3 pt-0"
                            style={{ maxHeight: '150px', overflowY: 'auto' }}
                        >
                            <div className="custom-scrollbar">
                                {filterData?.map((item, index) => (
                                    <div
                                        key={index}
                                        style={{ cursor: 'pointer', background: "#fff" }}
                                        onClick={() => props?.handleClick(item)}
                                    >
                                        <input
                                            style={{ cursor: 'pointer' }}
                                            type="checkbox"
                                            className="form-check-input me-2"
                                            checked={props?.selectedItems.includes(item.id)}
                                            readOnly
                                        />
                                        <b className="text-dark">{item.name}</b>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
