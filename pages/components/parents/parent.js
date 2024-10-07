import { BasicTable } from "@/shared/data/tables/datatablesdata";
import { Button, Card } from "react-bootstrap";
import Pageheader from "@/shared/layout-components/pageheader/pageheader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchData } from "@/redux/thunk/dataThunk";
import { baseUrl } from "@/baseurl/baseUrl";
import GenericModal from "../genericcomponent/GenericModal";
import { Toaster, toast } from "react-hot-toast";
import GenericConfirmation from "../genericcomponent/GenericConfirmationModal";


export default function Parent() {
  const dispatch = useDispatch();
  const [parentData, setParentData] = useState([]);
  const [openModal, setOpenModal] = useState(false)
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false)
  const [allRelation, setAllRelation] = useState([]);
  const [selectId, setSelectId] = useState(null);
  const authToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const inputState = {
    legal_guardian: "",
    first_name: "",
    last_name: "",
    display_name: "",
    relationship: "",
    dob: "",
    gender: "",
    ethnicity: "",
    email: "",
    contact_no: "",
    address: "",
    employer_name: "",
    // password: '',
    // password_confirmation: '',
    govt_significance: false,
    // significance: "",
    comments: "",
    password: "",
    password_confirmation: "",
  };
  const ethData = [
    {
      id: "1",
      value: "white",
    },
    {
      id: "1",
      value: "brown",
    },
    {
      id: "1",
      value: "black",
    },
  ];

  const genderData = [
    {
      id: 1,
      value: "Male",
    },
    {
      id: 2,
      value: "Female",
    },
  ];
  const [formData, setFormData] = useState(inputState);
  const status = useSelector((state) => state.apiData?.status);
  if (status === "loading") {
    console.log(6346346, 'Status is loading', status);
  }

  const fetchAllParent = () => {
    dispatch(
      fetchData({
        method: "GET",
        endpoint: `${baseUrl.allBase}all_parents`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
    ).then((res) => {
      if (res?.payload?.status === true) {
        let resData = res?.payload?.data || [];
        setParentData(resData);
      } else {
        const apiErr = res?.payload?.error;
        toast.error(apiErr?.message);
      }
    });
  };

  const fetchAllRelation = () => {
    dispatch(
      fetchData({
        method: "GET",
        endpoint: `${baseUrl.allBase}all_relationship`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
    ).then((res) => {
      if (res?.payload?.status === true) {
        let resData = res?.payload?.data || [];
        setAllRelation(resData);
      }
    });
  };

  useEffect(() => {
    fetchAllParent();
    fetchAllRelation();
  }, []);
  

  const mother = allRelation?.filter((item) => item.name === "Mother");
  const father = allRelation?.filter((item) => item.name === "Father");
  const sliceItem = allRelation.slice(0, allRelation.length - 2);

  const handleChange = (e, type, arr) => {
    const { name, value, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (type === "relationId") {
      const relation = arr?.find((item) => item.name === value);
      if (relation) {
        setFormData((prevData) => ({
          ...prevData,
          relationship: relation.id,
        }));
      }
    }
    if (type === "parent") {
      const parent = arr?.find((item) => item.name);
      if (parent) {
        console.log(3434, parent.id);
        setFormData((prevData) => ({
          ...prevData,
          relationship: parent.id,
        }));
      }
    }
  };

  const COLUMNS = [
    {
      Header: "First Name",
      accessor: "first_name",
    },
    {
      Header: "Last Name",
      accessor: "last_name",
    },
    {
      Header: "Mobile No",
      accessor: "mobile_no",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Display Name",
      accessor: "display_name",
    },
  ];
  const handleModal = () => {
    setOpenModal(true)
  }
  console.log(855555555, openModal)


  const handleParentSubmit = (e) => {
    e.preventDefault();
    let payload = {
      ...formData,
      parent_id: selectId,
    };

    dispatch(
      fetchData({
        method: "POST",
        endpoint: isEditing
          ? `${baseUrl.allBase}update_parent`
          : `${baseUrl.allBase}parent_register`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        data: payload,
      })
    ).then((res) => {
      if (res?.payload?.status === true) {
        toast.success(res?.payload?.message);
        setOpenModal(false);
        setFormData(inputState);
        fetchAllParent();
      } else {
        const errorMessage = res?.payload?.message;
        toast.error(errorMessage);
      }
    })
  };

  const closeModal = () => {
    setOpenModal(false)
    setIsediting(false);
    setOpenConfirmationModal(false)
  }

  const handleDeleteClick = (row) => {

    setOpenConfirmationModal(true)
    console.log(324234, row.original.id)
    setSelectId(row.original.id);
  }

  const [isEditing, setIsediting] = useState(false);

  const handleEditClick = (row) => {
    setIsediting(true)
    setOpenModal(true)
    setFormData({ ...row.original, contact_no: row.original.mobile_no })
    setSelectId(row.original.id);
  }


  const onDelete = () => {
    let payload = {
      parent_id: selectId,
    };
    setOpenConfirmationModal(false);
    dispatch(
      fetchData({
        method: "POST",
        endpoint: `${baseUrl.allBase}delete_parent`,
        data: payload,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
    ).then((res) => {
      if (res?.payload?.status === true) {
        let resData = res?.payload?.data || [];
        setParentData(resData);
        toast.success(res?.payload?.message);
        fetchAllParent();
      } else {
        const errorMessage = res?.payload?.message;
        toast.error(errorMessage);
      }
    });
  };



  return (
    <div>
      <Pageheader title="Parents" btn="Register Parent" handleClick={handleModal} />
      <Card className="p-4">
        <BasicTable
          dataTable={parentData}
          column={COLUMNS}
          actions={true}
          handleDeleteClick={handleDeleteClick}
          openEditModal={handleEditClick} />
      </Card>
      <GenericModal
        isEditing={isEditing}
        mainTitle="PARENT"
        onSubmit={handleParentSubmit}
        // showPassword={showPassword}
        openModal={openModal}
        closeModal={closeModal}
        // validationError={errors}
        // pagination props
        // handleNext={handleNext}
        // handlePrev={handlePrevious}
        // startIndex={startIndex}
        // endIndex={endIndex}
        // currentPage={currentPage}
        // inputPerPage={inputPerPage}
        // totalFields={totalFields}
        modalSize={"xl modal-dialog-parent"}
        modalMaxWidth={"modal-content-lg"}
        inputs={[
          {
            label: "Parent / CLG *",
            name: "legal_guardian",
            type: "text",
            placeholder: "Parent / CLG  *",
            value: formData.legal_guardian,
            // error: errors.legal_guardian,
            colClass: "col-12 col-md-3",
            onChange: handleChange,
          },
          {
            label: "First Name *",
            name: "first_name",
            type: "text",
            placeholder: "First Name",
            value: formData.first_name,
            // error: errors.first_name,
            colClass: "col-12 col-md-3",
            onChange: handleChange,
          },
          {
            label: "Last Name *",
            name: "last_name",
            type: "phone",
            placeholder: "Last Name *",
            value: formData.last_name,
            // error: errors.last_name,
            colClass: "col-12 col-md-3",
            onChange: handleChange,
          },
          {
            label: "Display Name *",
            name: "display_name",
            type: "text",
            placeholder: "Display Name *",
            value: formData.display_name,
            // error: errors.display_name,
            colClass: "col-12 col-md-3",
            onChange: (e) => handleChange(e),
          },
          // {
          //   label: "Relationship *",
          //   name: "relationship",
          //   type: "radio",
          //   placeholder: "Repeat *",
          //   // value: formData.relationship,
          //   // options: mother,
          //   // error: errors.relationship,
          //   colClass: "col-6",
          //   // onChange: (e) => handleChange(e, "parent", mother),
          // },
          // {
          //   name: "relationship",
          //   type: "radio",
          //   placeholder: "Repeat *",
          //   // value: formData.relationship,
          //   // options: father,
          //   // error: errors.relationship,
          //   colClass: "col-6",
          //   // onChange: (e) => handleChange(e, "parent", father),
          // },
          {
            label: "Relationship *",
            name: "relationship",
            type: "radio",
            placeholder: "Repeat *",
            value: formData.relationship,
            options: mother,
            // error: errors.relationship,
            colClass: "col-12 col-md-2",
            onChange: (e) => handleChange(e, "parent", mother),
          },
          {
            name: "relationship",
            type: "radio",
            placeholder: "Repeat *",
            value: formData.relationship,
            options: father,
            // error: errors.relationship,
            colClass: "col-12 col-md-2",
            onChange: (e) => handleChange(e, "parent", father),
          },
          {
            name: "relationship",
            type: "dropdown",
            placeholder: "Ethnicity *",
            value: formData.relationship,
            // error: errors.relationship,
            options: sliceItem,
            colClass: "col-12 col-md-2",
            onChange: (e) => handleChange(e, "relationId", sliceItem),
          },
          {
            label: "Ethnicity *",
            name: "ethnicity",
            type: "dropdown",
            placeholder: "Ethnicity *",
            value: formData.ethnicity,
            // error: errors.ethnicity,
            options: ethData,
            colClass: "col-12 col-md-3",
            onChange: (e) => handleChange(e, "eth"),
          },
          {
            label: "Date of Birth *",
            name: "dob",
            type: "date",
            placeholder: "Date of Birth *",
            value: formData.dob,
            // error: errors.dob,
            colClass: "col-12 col-md-3",
            onChange: (e) => handleChange(e, "dob"),
          },
          {
            label: "Gender *",
            name: "gender",
            type: "dropdown",
            placeholder: "Gender *",
            value: formData.gender,
            options: genderData,
            // error: errors.gender,
            colClass: "col-12 col-md-3",
            onChange: (e) => handleChange(e, "gender"),
          },
          {
            label: "Mobile No *",
            name: "contact_no",
            type: "phone",
            placeholder: "Mobile No *",
            value: formData.contact_no,
            // error: errors.contact_no,
            colClass: "col-12 col-lg-3",
            onChange: handleChange,
          },
          {
            label: "Email *",
            name: "email",
            type: "text",
            placeholder: "Email *",
            value: formData.email,
            // error: errors.email,
            colClass: "col-12 col-lg-3",
            onChange: handleChange,
          },

          {
            label: "Employer Name*",
            name: "employer_name",
            type: "text",
            placeholder: "Employer Name*",
            value: formData.employer_name,
            // error: errors.employer_name,
            colClass: "col-12 col-lg-3",
            onChange: handleChange,
          },
          // {
          //   label: "Ethnicity *",
          //   name: "ethnicity",
          //   type: "dropdown",
          //   placeholder: "Ethnicity *",
          //   value: formData.ethnicity,
          //   // error: errors.ethnicity,
          //   options: ethData,
          //   colClass: "col-12 col-md-3",
          //   onChange: (e) => handleChange(e, "eth"),
          // },
          {
            label: "Enter Password *",
            name: "password",
            type: "password",
            placeholder: "Enter your password",
            value: formData.password,
            // error: errors.password,
            colClass: "col-12 col-lg-6",
            onChange: handleChange,
          },
          {
            label: "Confirm Password *",
            name: "password_confirmation",
            type: "password",
            placeholder: "confirm your password",
            value: formData.password_confirmation,
            // error: errors.password_confirmation,
            colClass: "col-12 col-lg-6",
            onChange: handleChange,
          },

          // {
          //   label: 'Serving Armed Govt.Significances *',
          //   name: 'govt_significance',
          //   type: 'checkbox',
          //   placeholder: 'Serving Armed Govt.Significances *',
          //   value: formData.govt_significance || false,
          //   error: errors.govt_significance,
          //   colClass: 'col-3',
          //   onChange: (e) => handleChange(e, "govt_significance"),
          // },
          // {
          //   label: 'Of Other Government significance  *',
          //   name: 'significance',
          //   type: 'dropdown',
          //   placeholder: 'Of Other Government significance  *',
          //   value: formData.significance,
          //   error: errors.significance,
          //   options: signifyData,
          //   colClass: 'col-lg-6',
          //   onChange: (e) => handleChange(e, "significance"),
          // },
          {
            label: "Address *",
            name: "address",
            type: "textarea",
            placeholder: "Address *",
            value: formData.address,
            // error: errors.address,
            colClass: "col-12 col-lg-6",
            onChange: handleChange,
          },
          {
            label: "Comments *",
            name: "comments",
            type: "textarea",
            placeholder: "comments *",
            value: formData.comments,
            // error: errors.comments,
            // options: signifyData,
            colClass: "col-12 col-lg-6",
            onChange: (e) => handleChange(e, "comments"),
          },
        ]}
        pagination={false}
      />
      <GenericConfirmation
        openConfirmation={openConfirmationModal}
        closeConfirmModal={closeModal}
        onDelete={onDelete}
      />
      <Toaster position="top-right" />
    </div>
  );
}

Parent.layout = "Contentlayout";


{/* <Pageheader title="Parents" btn="Register Parent" handleClick={handleModal} />
<Card className="p-4">
  <BasicTable dataTable={parentData} column={COLUMNS} />
</Card> */}