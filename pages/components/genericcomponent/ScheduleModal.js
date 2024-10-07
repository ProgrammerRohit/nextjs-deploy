import { baseUrl } from '@/baseurl/baseUrl';
import { fetchData } from '@/redux/thunk/dataThunk';
import { addDays, startOfWeek, startOfDay, endOfWeek, isWithinInterval, isSameDay, isAfter, isBefore } from 'date-fns';
import React, { useEffect, useState, useRef, forwardRef } from "react";
import { Button, Form, Modal, Row, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div>
        <button
            className="custom-date-input"
            onClick={(e) => {
                e.stopPropagation();
                onClick();
            }}
            ref={ref}
            data-tip="Edit Time"
        >
            {value || "Select Dates"}
        </button>
    </div>
));

CustomInput.displayName = 'CustomInput';

 function ScheduleModal(props) {
    const [selectedDatesSch, setSelectedDatesSch] = useState([]);
    const [hoveredDate, setHoveredDate] = useState(null);
    const [editingDate, setEditingDate] = useState(null);
    const [schTimeIn, setSchTimeIn] = useState(new Date());
    const [schTimeOut, setSchTimeOut] = useState(new Date());

    const radioOptions = [
        { value: '1', label: 'Daily' },
        { value: '2', label: 'Weekly' },
        { value: '3', label: 'Monthly' },
        { value: '4', label: 'Quaterly' },
        { value: '5', label: 'Half Yearly' },
        { value: '6', label: 'Yearly' },

    ];
    const [selectedOption, setSelectedOption] = useState('');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };
    console.log(57777777777, selectedOption)


    const currentDate = new Date();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const start = currentDate;
    const end = addDays(startOfWeek(currentDate, { weekStartsOn: 1 }), 12);
    const oneWeekFromNow = addDays(startOfDay(new Date()), 7);

    const isDateDisabled = (date) => {
        const dateToCheck = new Date(date);
        dateToCheck.setHours(0, 0, 0, 0);
        return dateToCheck < today;
    };

    const handleDateChangeM = (date) => {
        const dateExists = selectedDatesSch.some(
            (selectedDate) => selectedDate.date.getTime() === date.getTime()
        );

        if (dateExists) {
            setSelectedDatesSch(selectedDatesSch.filter((d) => d.date.getTime() !== date.getTime()));
        } else {
            setSelectedDatesSch([...selectedDatesSch, { date, timeIn: '', timeOut: '' }]);
        }
    };

    const handleTimeInChange = (date) => {
        setSchTimeIn(date);
        if (editingDate) {
            updateTimeForDate('timeIn', date);
        } else {
            setSelectedDatesSch(selectedDatesSch.map(entry => ({
                ...entry,
                timeIn: date.toLocaleTimeString(),
            })));
        }
    };

    const handleTimeOutChange = (date) => {
        setSchTimeOut(date);
        if (editingDate) {
            updateTimeForDate('timeOut', date);
        } else {
            setSelectedDatesSch(selectedDatesSch.map(entry => ({
                ...entry,
                timeOut: date.toLocaleTimeString(),
            })));
        }
    };

    const handleEditTime = (e, date) => {
        e.stopPropagation();

        setEditingDate(date);

        // Delay access to updated state due to the asynchronous nature of state updates
        setTimeout(() => {
            const dateInfo = selectedDatesSch.find(d => d.date.getTime() === date.getTime());

            if (dateInfo) {
                // Use a default time format of "HH:mm" for parsing
                const timeFormat = '1970-01-01T';
                // Validate and parse timeIn
                const timeInString = dateInfo.timeIn || '00:00'; // Default to '00:00' if not set
                const timeInDate = new Date(`${timeFormat}${timeInString}`);
                if (isNaN(timeInDate.getTime())) {
                    console.error('Invalid Time In:', timeInString);
                    setSchTimeIn(new Date()); // Default to current time if parsing fails
                } else {
                    setSchTimeIn(timeInDate);
                }

                // Validate and parse timeOut
                const timeOutString = dateInfo.timeOut || '00:00'; // Default to '00:00' if not set
                const timeOutDate = new Date(`${timeFormat}${timeOutString}`);
                if (isNaN(timeOutDate.getTime())) {
                    console.error('Invalid Time Out:', timeOutString);
                    setSchTimeOut(new Date()); // Default to current time if parsing fails
                } else {
                    setSchTimeOut(timeOutDate);
                }
            } else {
                // Default to current time if no dateInfo is found
                setSchTimeIn(new Date());
                setSchTimeOut(new Date());
            }
        }, 0); // Use setTimeout to ensure the state is updated before accessing it
    };


    const updateTimeForDate = (field, date) => {
        const updatedDates = selectedDatesSch.map((entry) => {
            if (entry.date.getTime() === editingDate.getTime()) {
                return {
                    ...entry,
                    [field]: date.toLocaleTimeString(),
                };
            }
            return entry;
        });
        setSelectedDatesSch(updatedDates);
    };

    const isSelected = (day, date) => {
        const currentDay = new Date(date);
        currentDay.setDate(day);
        return selectedDatesSch.some(d => d.date.getTime() === currentDay.getTime());
    };

    const isHovered = (day) => {
        return hoveredDate && day.getTime() === hoveredDate.getTime();
    };

    const renderDayContents = (day, date) => {
        const currentDay = new Date(today);
        currentDay.setDate(day);

        const dayStyle = {
            color: isDateDisabled(currentDay) ? "#b2bec3" : "#000",
            borderRadius: '50%',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: isDateDisabled(currentDay) ? 'not-allowed' : 'pointer',
            position: 'relative'
        };

        return (
            <div
                style={dayStyle}
                onMouseEnter={() => !isDateDisabled(currentDay) && setHoveredDate(currentDay)}
                onMouseLeave={() => !isDateDisabled(currentDay) && setHoveredDate(null)}
                onClick={() => !isDateDisabled(currentDay) && handleDateChangeM(currentDay)}
            >
                {day}
                {isSelected(day, currentDay) && isHovered(currentDay) && (
                    <div
                        style={{
                            position: 'absolute',
                            backgroundColor: '#C1ECE4',
                            color: '#000',
                            padding: '5px 10px',
                            borderRadius: '4px',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            whiteSpace: 'nowrap',
                            zIndex: '1'
                        }}
                        onClick={(e) => handleEditTime(e, currentDay)}
                    >
                        Edit Time
                    </div>
                )}
            </div>
        );
    };

    const dispatch = useDispatch()
    const [shiftfData, setShiftData] = useState([])
    // const apiErr = useSelector((state) => state.apiData.error)

    const authToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    useEffect(() => {
        dispatch(fetchData({
            method: "GET",
            endpoint: `${baseUrl.allBase}all_shift`,
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        })).then((res) => {
            if (res?.payload.status === true) {
                setShiftData(res?.payload?.data)
            }
        })
    }, [])

    console.log(855555555555, shiftfData)
    const handleSchedule = (e) => {
        const value = e.target.value;
        setSelectedShift(value); // Update selected shift state

        const selectedItem = shiftfData.find(option => option.name === value);
        if (selectedItem) {
            setSelectedDatesSch(selectedDatesSch.map(entry => ({
                ...entry,
                timeIn: selectedItem.time_in,
                timeOut: selectedItem.time_out,
            })));
        } else {
            setSelectedDatesSch(selectedDatesSch.map(entry => ({
                ...entry,
                timeIn: new Date().toLocaleTimeString(), // Set default time
                timeOut: new Date().toLocaleTimeString() // Set default time
            })));
        }
    };
    const [selectedShift, setSelectedShift] = useState('');

    console.log(52222222222, selectedDatesSch)
    useEffect(() => {
        if (props?.editData) {
            setSelectedDatesSch(JSON.parse(props?.editData?.dates))
        }
    }, [props?.editData])
    console.log(52222222222, selectedDatesSch)


    const handleSubmit = () => {
        let payload = {
            kid_id: props?.kidId,
            dates: JSON.stringify(selectedDatesSch),
            days: "monday",
            time_in: "11:00",
            time_out: "12:00",
            repeat_id: selectedOption
        }
        dispatch(fetchData({
            method: "POST",
            endpoint: `${baseUrl.allBase}add_scheduling`,
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
            data: payload
        })).then((res) => {
            if (res?.payload?.status === true) {
                toast.success(res?.payload?.message)
                props?.handleCloseScheule()
            }
        })
    }


    return (
     <>
<Modal show={props?.show} onHide={props?.handleCloseScheule} size='lg' className="custom-modal">
    <Modal.Header closeButton className="modal-header border-0">
        <h3 className="w-100 fw-bold">Schedule Selection</h3>
    </Modal.Header>
    <Modal.Body className="p-3">
        <Row>
           
            <Col md={5} className="mb-4">
                <h5 className='fw-bold mb-4'>Select multiple dates within this week</h5>
                <DatePicker
                    renderDayContents={(day) => renderDayContents(day)}
                    minDate={today}
                    selected={null}
                    onChange={handleDateChangeM}
                    filterDate={(date) => !isDateDisabled(date)}
                    customInput={<CustomInput value={selectedDatesSch.map(entry => entry.date.toDateString()).join(', ')} />}
                    placeholderText="Select a date"
                    dateFormat="yyyy/MM/dd"
                    highlightDates={selectedDatesSch.map(entry => entry.date)}
                    inline
                    className="form-control shadow"
                />
            </Col>
            <Col md={7}>
            <h5 className='mb-4 fw-bold'>Choose Time From Shift</h5>
                <select onChange={handleSchedule} value={selectedShift} className="form-select mb-3 shadow-sm">
                    <option value="">Select a shift</option>
                    {shiftfData?.map((item, index) => (
                        <option key={index} value={item.name}>{item.name}</option>
                    ))}
                </select>
                <div className="mb-3">
                    <Form.Label>Time In *</Form.Label>
                    <DatePicker
                        selected={schTimeIn}
                        onChange={handleTimeInChange}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        dateFormat="HH:mm"
                        placeholderText="Set Time In"
                        className="form-control shadow-sm"
                    />
                </div>
                <div>
                    <Form.Label>Time Out *</Form.Label>
                    <DatePicker
                        selected={schTimeOut}
                        onChange={handleTimeOutChange}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={15}
                        dateFormat="HH:mm"
                        placeholderText="Set Time Out"
                        className="form-control shadow-sm"
                    />
                </div>
            </Col>
           
            <Col xs={12} className='mb-3'>
                <Form>
                    <h4>Repeat</h4>
                    <Form.Group className='d-flex align-items-center'>
                        {radioOptions.map((option) => (
                            <Form.Check
                                key={option.value}
                                type="radio"
                                id={option.value}
                                name="options"
                                value={option.value}
                                label={option.label}
                                checked={selectedOption === option.value}
                                onChange={handleChange}
                                className='me-3'
                            />
                        ))}
                    </Form.Group>
                </Form>
            </Col>
            <Col xs={12} >
            <h4 className='fw-bold me-4'>SUMMARY</h4>
                <ul className="list-unstyled">
                    {selectedDatesSch.map((entry, index) => (
                        <li key={index} className="p-3 border rounded shadow-sm bg-light">
                            <strong>{entry.date.toDateString()}</strong>
                            <br />
                            Time In: {entry.timeIn || 'Not Set'}
                            <br />
                            Time Out: {entry.timeOut || 'Not Set'}
                        </li>
                    ))}
                </ul>
            </Col>
        </Row>
    </Modal.Body>
    <Modal.Footer className="d-flex justify-content-end border-0">
        <Button variant="outline-secondary" className="me-2 px-4" onClick={props?.handleCloseScheule}>Cancel</Button>
        <Button variant="primary" className="px-4" onClick={handleSubmit}>Submit</Button>
    </Modal.Footer>
</Modal>

<style jsx>{`
    .custom-modal {
        border-radius: 15px;
        background-color: #f9f9f9;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    }
    .modal-header {
        padding: 1.5rem;
    }
    .modal-title {
        font-size: 1.5rem;
        font-weight: 600;
    }
    .form-control, .form-select {
        border-radius: 0.375rem;
    }
    .list-unstyled li {
        margin-bottom: 1rem;
    }
    .shadow-sm {
        box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    }
    .btn-outline-secondary {
        border-color: #6c757d;
    }
    .btn-primary {
        background-color: red;
    }
   
`}</style>



     </>
    )
}
ScheduleModal.displayName = 'ScheduleModal'
export default ScheduleModal;
