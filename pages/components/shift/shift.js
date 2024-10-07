import { baseUrl } from "@/baseurl/baseUrl";
import { fetchData } from "@/redux/thunk/dataThunk";
import { BasicTable } from "@/shared/data/tables/datatablesdata";
import Pageheader from "@/shared/layout-components/pageheader/pageheader";
import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import GenericModal from "../genericcomponent/GenericModal";
import { Toaster,toast } from "react-hot-toast";
import GenericConfirmation from "../genericcomponent/GenericConfirmationModal";

export default function Shift() {
    const [openModal, setOpenModal] = useState(false);
    const [allShiftData, setAllShiftData] = useState([]);
    const [authToken, setAuthToken] = useState(null);
    const dispatch = useDispatch();
    const [timeIn, setTimeIn] = useState(new Date());
    const [timeOut, setTimeOut] = useState(new Date());
    const apiErr = useSelector((state) => state?.apiData?.error);
    const [shiftId, setShiftId] = useState(false);
    const inputState = { name: '', time_in: timeIn, time_out: timeOut };
    const [formData, setFormData] = useState(inputState);
    const [errors, setErrors] = useState({});
    const [isEditing, setIsEditing] = useState(false)
    const [openConfirmationModal,setOpenConfirmationModal] = useState(false)
    const [selectId,setSelectId] = useState(false)

    const COLUMNS = [
        {
            Header: "Shift",
            accessor: "name",
        },
        {
            Header: "Time In",
            accessor: "time_in",
        },
        {
            Header: "Time Out",
            accessor: "time_out",
        },
    ];

    const fetchAllShift = () => {
        dispatch(fetchData({
            method: "GET",
            endpoint: `${baseUrl.allBase}all_shift`,
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        })).then((res) => {
            if (res?.payload?.status === true) {
                setAllShiftData(res?.payload?.data);
            } else if (apiErr) {
                toast.error(apiErr?.message);
            }
        });
    };

    useEffect(() => {
        // Only run this in the browser
        if (typeof window !== 'undefined') {
            const token = localStorage.getItem("token");
            setAuthToken(token);
        }
    }, []);

    useEffect(() => {
        if (authToken) {
            fetchAllShift();
        }
    }, [authToken]);

    const handleClick = () => {
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
        setFormData(inputState);
        setTimeIn(new Date());
        setTimeOut(new Date());
        setErrors(inputState);
    };

    const handleChange = (e, type) => {
        if (type === "time") {
            const newTime = e;
            setTimeIn(e);
            setFormData(prevData => ({ ...prevData, time_in: newTime }));
        } else if (type === "timeOut") {
            const newTime = e;
            setTimeOut(newTime);
            setFormData(prevData => ({ ...prevData, time_out: newTime }));
        } else {
            const { name, value } = e.target;
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
            setFormData(prevData => ({ ...prevData, [name]: value }));
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        setOpenModal(false)
        console.log(5695, 'success')
        let editPayload = {
            ...formData,
            shift_id: shiftId
        }
        dispatch(fetchData({
            method: "POST",
            endpoint: isEditing ? `${baseUrl.allBase}update_shift` : `${baseUrl.allBase}add_shift`,
            data: isEditing ? editPayload : formData,
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        })).then((res) => {
            setOpenModal(false)
            if (res?.payload?.status === true) {
                // setShift("");
                toast.success(res?.payload?.message)
                setIsEditing(false)
                fetchAllShift()
                // setShift("")
                // setTimeIn(new Date())
                // settimeOut(new Date())
                setFormData(inputState)
            }

            else {
                const errorMessage = res?.payload?.message;
                toast.error(errorMessage);
              }
        })
    }
    const handleEdit = (item) => {
        // console.log(54444444, item)
        console.log(52222222222, item, allShiftData)
        setOpenModal(true)
        setIsEditing(true)
        setFormData({ name: item?.values?.name, time_in: new Date(item.values.time_in), time_out: new Date(item.values.time_out) })
        setShiftId(item?.original?.id)
    }

    const handleDelete = (row) => {
        setOpenConfirmationModal(true)
        setSelectId(row.original.id);
    }

   
    const onDelete = () => {
        let payload = {
            shift_id: selectId,
        };
        setOpenConfirmationModal(false);
        dispatch(
            fetchData({
                method: "POST",
                endpoint: `${baseUrl.allBase}delete_shift`,
                data: payload,
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            })
        ).then((res) => {
            if (res?.payload?.status === true) {
                let resData = res?.payload?.data || [];
                setAllShiftData(resData);
                toast.success(res?.payload?.message);
                fetchAllShift()
            } 
            
            else {
                const errorMessage = res?.payload?.message;
                toast.error(errorMessage);
              }
        });
    };
    return (
        <div>
            <Pageheader title="Shift" heading="Home" handleClick={handleClick} active="Shift" btn="Add Shift" />
            <Card className="p-4">
                <BasicTable actions handleDeleteClick={handleDelete} openEditModal={handleEdit} dataTable={allShiftData} column={COLUMNS} />
            </Card>
            {openModal && (
                <GenericModal
                    pagination={false}
                    mainTitle={"Shift"}
                    openModal={openModal}
                    closeModal={handleClose}
                    inputs={[
                        {
                            label: "Add Shift *",
                            name: 'name',
                            type: 'text',
                            placeholder: "Add Shift",
                            value: formData.name,
                            error: errors.name,
                            colClass: 'col-12',
                            onChange: handleChange,
                        },
                        {
                            label: "Time In",
                            name: 'time_in',
                            value: formData.time_in,
                            type: 'datePicker',
                            placeholder: "Time In",
                            colClass: 'col-12',
                            onChange: (e) => handleChange(e, "time"),
                            dateFormat: "HH:mm"
                        },
                        {
                            label: "Time Out",
                            name: 'time_out',
                            type: 'datePicker',
                            placeholder: "Time Out",
                            value: formData.time_out,
                            colClass: 'col-12',
                            onChange: (e) => handleChange(e, "timeOut"),
                            dateFormat: "HH:mm"
                        }
                    ]}
                    onSubmit={handleSubmit}
                />
            )}
            <GenericConfirmation
                openConfirmation={openConfirmationModal}
                closeConfirmModal={() => setOpenConfirmationModal(false)}
                onDelete={onDelete}
            />
                  <Toaster position="top-right"/>
        </div>
    );
}

Shift.layout = "Contentlayout";
