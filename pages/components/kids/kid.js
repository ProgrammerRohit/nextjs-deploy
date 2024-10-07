import { baseUrl } from "@/baseurl/baseUrl";
import { fetchData } from "@/redux/thunk/dataThunk";
import { BasicTable } from "@/shared/data/tables/datatablesdata";
import Pageheader from "@/shared/layout-components/pageheader/pageheader";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import GenericModal from "../genericcomponent/GenericModal";
import { Toaster,toast } from "react-hot-toast";
import GenericConfirmation from "../genericcomponent/GenericConfirmationModal";
import ScheduleModal from "../genericcomponent/ScheduleModal";

export default function Kid() {
  const authToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const inputState = {
    parent_id: '',
    first_name: "",
    last_name: "",
    display_name: "",
    dob: "",
    gender: "",
    email: '',
    contact_no: '',
    ethnicity: "",
    sponsorship: '',
    curriculum: '',
    siblings: '',
    position: '',
    parents_marital_status: '',
    mother_tongue: '',
    other_language: '',
    address: "",
    comments: "",
    documents: "",
  };
  const dropdownData = ["Hindi", "English", "Marathi"]
  const [checkedItems, setCheckedItems] = useState({});
  const [kidId, setKidId] = useState(false)
  const [kidIdSchedule,setKidIdSchedule] = useState(false) 
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState(inputState) 
  const [selectedItemsLang, setSelectedItemsLang] = useState([]);
  const [parentIdMain, setParentIdMain] = useState("")
  const [selectedItems, setSelectedItems] = useState([]);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false)
  const [selectId, setSelectId] = useState(null);
  const [checkItem, setCheckItem] = useState(false)
  const [parentData, setParentData] = useState([])
  const dispatch = useDispatch()
  const [kidsData, setkidsData] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [scheduleModal,setScheduleModal] = useState(false)
  const [isEditing,setIsEditing] = useState(false)
  const handleClickLang = (item, index) => {
    // Toggle item selection
    setSelectedItemsLang(prevSelectedItems =>
      prevSelectedItems.includes(item)
        ? prevSelectedItems.filter(selectedItem => selectedItem !== item)
        : [...prevSelectedItems, item]
    );

    // Update formData with the new selected items
    setFormData(prevFormData => ({
      ...prevFormData,
      other_language: selectedItemsLang
    }));
  };
  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles(selectedFiles);

    // Update formData with selected files
    setFormData(prevState => ({
      ...prevState,
      documents: selectedFiles
    }));
  };


  const COLUMNS = [
    {
      Header: "Child Id",
      accessor: "kid_code",
    },
    {
      Header: "Child Name",
      accessor: "first_name", 
    },
    {
      Header: "Parent Name",
      accessor: "parent_first_name",
    },
    {
      Header: "Display Name",
      accessor: "display_name",
    },
  ];
  // const authToken = localStorage.getItem("token")

  const fetchKidsData = () => {
    dispatch(
      fetchData({
        method: "GET",
        endpoint: `${baseUrl.allBase}my_parents_kids`,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
    ).then((res) => {
      if (res?.payload?.status === true) {
        let resData = res?.payload?.data || [];
        setkidsData(resData);
      } 
      else {
        const errorMessage = res?.payload?.message;
        toast.error(errorMessage);
      }
    });
  };
  const handleClick = (item, index, optionItem) => {
    // Toggle item selection
    setSelectedItems(prevSelectedItems =>
      prevSelectedItems.includes(item.id)
        ? prevSelectedItems.filter(selectedItem => selectedItem !== item.id)
        : [...prevSelectedItems, item.id]
    );
  };


  useEffect(() => {
    fetchKidsData()
  }, [])
  console.log(85555555, kidsData)
  
  useEffect(() => {
    dispatch(fetchData({
      method: "GET",
      endpoint: `${baseUrl.allBase}all_parents`,
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })).then((res) => {
      if (res?.payload?.status === true) {
        setParentData(res?.payload?.data)
        console.log(14545, res?.payload?.data)
      }
      else {
        const errorMessage = res?.payload?.message;
        toast.error(errorMessage);
      }
    })
  }, [])
  console.log(888888, parentData)

  const handleClickModal = () => {
    setOpenModal(true)
  }
  const closeModal = () => {
    setOpenModal(false)
    setIsEditing(false)
    setFormData(inputState)
  }
  const genderData = [
    {
      id: 1,
      value: "Male"
    }, {
      id: 2,
      value: "Female"
    }
  ]
  const ethData = [
    {
      id: "1",
      value: "white"
    },
    {
      id: "1",
      value: "brown"
    },
    {
      id: "1",
      value: "black"
    }
  ]
  const childData = [
    { id: '1', name: 'Rahul' },
    { id: '2', name: 'Deepak' },
    { id: '3', name: 'Riya' },
    { id: '4', name: 'Leo' },
    { id: '5', name: 'Mukesh' },
    { id: '6', name: 'Ramesh' },
    { id: '7', name: 'Suraj' },
    { id: '8', name: 'Ayush' },
    { id: '9', name: 'Aman' },
    { id: '10', name: 'Pandey' },
  ]
  const handleCheckChg = (e, itemVal) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }));

  }
  const curriculumData = [
    {
      id: 1,
      value: "curriculum 1"
    }, {
      id: 2,
      value: "curriculum 2"
    }]

  const siblingData = [
    {
      id: 1,
      value: 1
    },
    {
      id: 2,
      value: 2
    },
    {
      id: 2,
      value: 3
    },
    {
      id: 2,
      value: 4
    },
    {
      id: 2,
      value: 5
    }
  ]

  const handleKidsSubmit = (e) => {
    e.preventDefault();
    // const { isValid, errors: newErrors } = validateForm(formData, validationRules);

    // setHandleOpenKids(false);
    const formToSubmit = new FormData();

    // Append non-file fields
    formToSubmit.append('parent_id', Number(parentIdMain));
    formToSubmit.append('first_name', formData.first_name);
    formToSubmit.append('last_name', formData.last_name);
    formToSubmit.append('display_name', formData.display_name);
    formToSubmit.append('dob', formData.dob);
    formToSubmit.append('gender', formData.gender);
    formToSubmit.append('address', formData.address);
    formToSubmit.append('email', formData.email);
    formToSubmit.append('contact_no', formData.contact_no);
    formToSubmit.append('ethnicity', formData.ethnicity);
    formToSubmit.append('sponsorship', formData.sponsorship);
    formToSubmit.append('curriculum', formData.curriculum);
    formToSubmit.append('siblings', formData.siblings);
    formToSubmit.append('position', formData.position);
    formToSubmit.append('parents_marital_status', formData.parents_marital_status);
    formToSubmit.append('mother_tongue', formData.mother_tongue);
    formToSubmit.append('other_language', selectedItemsLang?.map(item => item).join(","));
    formToSubmit.append('comments', formData.comments);
    formToSubmit.append('documents', formData.comments);

    Object.keys(formData).forEach(key => {
      if (key !== 'documents') {
        formToSubmit.append(key, formData[key]);
      }
    });

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        formToSubmit.append('documents[]', files[i]);
      }
    }

    for (let [key, value] of formToSubmit.entries()) {
      console.log(66565, `${key}:`, value);
    }


    console.log(1222, 'ID ff:', parentIdMain)

    let editKidPayload ={
      ...formData,
      kid_id:kidId
    }
    dispatch(fetchData({
      method: "POST",
      endpoint: isEditing ?  `${baseUrl.allBase}update_kid` : `${baseUrl.allBase}add_kid`,
      headers: {
        'Authorization': `Bearer ${authToken}`
      },
      data: isEditing ? editKidPayload : formToSubmit,
    }))
      .then((res) => {
        if (res?.payload?.status === true) {
          toast.success(res?.payload?.message);
          setFormData(inputState);
          setOpenModal(false)
          fetchKidsData()
        }
        else {
          const errorMessage = res?.payload?.message;
          toast.error(errorMessage);
        }
      })
  }


  const transformedArr = parentData && parentData.map(item => ({
    value: item.first_name,
    parent_id: item.id,
  }));

  const handleChange = (e, type, arr) => {
    const { name, value } = e.target;
    // setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    setFormData(prevData => ({ ...prevData, [name]: value }));
    // Additional type-based logic
    if (type === "gender") {
      setFormData(prevData => ({ ...prevData, gender: value }));
    } else if (type === "eth") {
      setFormData(prevData => ({ ...prevData, ethnicity: value }));
    } else if (type === "lang") {
      // Handle multiselect type
      return { ...prevData, other_language: selectedItems };
    } else if (type === "parentId") {
      const id = arr?.find((item) => item.id === value.id)
      setParentIdMain(id.parent_id)
      console.log(1222, 'ID:', parentIdMain)
    }


    console.log(524523, formData)
  }
  const positionData = [
    {
      id: "1",
      value: "white"
    },
    {
      id: "1",
      value: "brown"
    },
    {
      id: "1",
      value: "black"
    }
  ]
  const parents_marita = [
    {
      id: "1",
      value: "Married"
    },
    {
      id: "1",
      value: "Unmarried"
    }
  ]
  const motherTongue = [
    {
      id: "1",
      value: "Hindi"
    },
    {
      id: "1",
      value: "English"
    }
  ]

  const handleDelete = (row) => {
    setOpenConfirmationModal(true)
    console.log(324234, row.original.id)
    setSelectId(row.original.id);
  }

  const onDelete = () => {
    let payload = {
      kid_id: selectId,
    };
    setOpenConfirmationModal(false);
    dispatch(
      fetchData({
        method: "POST",
        endpoint: `${baseUrl.allBase}delete_kid`,
        data: payload,
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
    ).then((res) => {
      if (res?.payload?.status === true) {
        let resData = res?.payload?.data || [];
        setkidsData(resData);
        toast.success(res?.payload?.message);
        fetchKidsData();
      } 
      else {
        const errorMessage = res?.payload?.message;
        toast.error(errorMessage);
      }
    });
  };

  const closeModalConfirmation = () => {
    setOpenModal(false)
    // setIsediting(false);
    setOpenConfirmationModal(false)
  }

  const handleEditClick =  (item) =>{
    setOpenModal(true)
    setIsEditing(true)
    setKidId(item?.original?.id)
    console.log(6777777,item)
    setFormData({...item.original, contact_no:item.original.parent_mobile_no,email:item.original.parent_email})
  }

  const handleScheduleModal = (item) =>{
    setScheduleModal(true)
     setKidIdSchedule(item?.original?.id)
     console.log(456665, item)
  }
  const handleCloseScheule  = () =>{
    setScheduleModal(false)
  }



  return (
    <div>
      <Pageheader title="Children List" handleClick={handleClickModal} heading="Home" btn="Add Children" active="Children List" />
      <Card className="p-4">
        <BasicTable actions addSchedule={handleScheduleModal} openEditModal={handleEditClick} handleDeleteClick={handleDelete} dataTable={kidsData} column={COLUMNS} />
      </Card>
      {openModal && (
        <GenericModal
        pagination={false}
          extraBtn={"Add Sibling"}
          saveClassName={true}
          mainTitle="KIDS"
          openModal={openModal}
          closeModal={closeModal}
          onSubmit={handleKidsSubmit}
          // validationError={errors}
          // handleNext={handleNext}
          // handlePrev={handlePrevious}
          // startIndex={startIndex}
          // endIndex={endIndex}
          // currentPage={currentPage}
          // inputPerPage={inputPerPage}
          // totalFields={totalFields}
          modalSize={'xl'}
          // modalMaxWidth={'modal-content-lg'}
          inputs={[
            {
              label: "Parent ID *",
              name: 'parent_id',
              type: 'dropdown',
              placeholder: "Enter Parent ID *",
              value: formData.parent_id,
              // error: errors.parent_id,
              options: transformedArr,
              colClass: 'col-12 col-md-3',
              onChange: (e) => handleChange(e, "parentId", transformedArr),
            },
            {
              label: "First Name *",
              name: 'first_name',
              type: 'text',
              placeholder: "Enter First Name *",
              value: formData.first_name,
              // error: errors.first_name,
              colClass: 'col-12 col-md-3',
              onChange: handleChange,
            },
            {
              label: "Last Name *",
              name: 'last_name',
              type: 'text',
              placeholder: "Enter Last Name *",
              value: formData.last_name,
              // error: errors.last_name,
              colClass: 'col-12 col-md-3',
              onChange: handleChange,
            },
            {
              label: "Display Name *",
              name: 'display_name',
              type: 'text',
              placeholder: "Enter Display Name *",
              value: formData.display_name,
              // error: errors.display_name,
              colClass: 'col-12 col-md-3',
              onChange: handleChange,
            },
            {
              label: 'Date of Birth *',
              name: 'dob',
              type: 'date',
              placeholder: 'Date of Birth *',
              value: formData.dob,
              // error: errors.dob,
              colClass: 'col-12 col-md-3',
              onChange: (e) => handleChange(e, 'dob'),
            },
            {
              label: 'Gender *',
              name: 'gender',
              type: 'dropdown',
              placeholder: 'Gender *',
              value: formData.gender,
              options: genderData,
              // error: errors.gender,
              colClass: 'col-12 col-md-3',
              onChange: (e) => handleChange(e, 'gender'),
            },

            {
              label: 'Email *',
              name: 'email',
              type: 'text',
              placeholder: 'Email *',
              value: formData.email,
              // error: errors.email,
              colClass: 'col-12 col-md-3',
              onChange: handleChange,
            },
            {
              label: 'Mobile No *',
              name: 'contact_no',
              type: 'text',
              placeholder: 'Mobile No *',
              value: formData.contact_no,
              // error: errors.contact_no,
              colClass: 'col-12 col-md-3',
              onChange: handleChange,
            },
            {
              label: 'Ethnicity *',
              name: 'ethnicity',
              type: 'dropdown',
              placeholder: 'Ethnicity *',
              value: formData.ethnicity,
              // error: errors.ethnicity,
              options: ethData,
              colClass: 'col-12 col-md-3',
              onChange: (e) => handleChange(e, "eth"),
            },
            {
              label: 'Sponsorship *',
              name: 'sponsorship',
              type: 'text',
              placeholder: 'Enter Sponsorship *',
              value: formData.sponsorship,
              // error: errors.sponsorship,
              colClass: 'col-12 col-md-3',
              onChange: handleChange,
            },
            {
              label: 'Curriculum *',
              name: 'curriculum',
              type: 'dropdown',
              placeholder: 'Curriculum *',
              value: formData.curriculum,
              options: curriculumData,
              // error: errors.curriculum,
              colClass: 'col-12 col-md-3',
              onChange: (e) => handleChange(e, 'curriculum'),
            },
            {
              label: 'Siblings *',
              name: 'siblings',
              type: 'siblingDropdown',
              placeholder: 'Siblings *',
              selectedItems: selectedItems,
              disabled: selectedItems.length >= Number(formData.siblings) && !selectedItems.includes(checkItem),
              handleClick: handleClick,
              dropdownData: childData,
              value: formData.siblings,
              options: siblingData,
              // error: errors.siblings,
              colClass: 'col-12 col-md-3',
              onChange: handleCheckChg,
            },
            {
              label: 'Position In The Family *',
              name: 'position',
              type: 'dropdown',
              placeholder: 'Position *',
              value: formData.position,
              options: positionData,
              // error: errors.position,
              colClass: 'col-12 col-md-3',
              onChange: (e) => handleChange(e, 'position'),
            },
            {
              label: 'Parents Marital Status *',
              name: 'parents_marital_status',
              type: 'dropdown',
              placeholder: 'Position *',
              value: formData.parents_marital_status,
              options: parents_marita,
              // error: errors.parents_marital_status,
              colClass: 'col-12 col-md-3',
              onChange: (e) => handleChange(e, 'parents'),
            },
            {
              label: 'Mother Tongue *',
              name: 'mother_tongue',
              type: 'dropdown',
              placeholder: 'Position *',
              value: formData.mother_tongue,
              options: motherTongue,
              // error: errors.mother_tongue,
              colClass: 'col-12 col-md-3',
              onChange: (e) => handleChange(e, 'mother Tongue'),
            },
            // {
            //   label: 'Other Languages *',
            //   name: 'other_language',
            //   type: 'dropdown',
            //   placeholder: 'Position *',
            //   value: formData.other_language,
            //   options: otherTongue,
            //   error: errors.other_language,
            //   colClass: 'col-12 col-md-3',
            //   onChange: (e) => handleChange(e, 'other Tongue'),
            // },
            {
              label: 'Other Language *',
              name: 'lang',
              type: 'multiselect',
              placeholder: 'lang *',
              selectedItems: selectedItemsLang,
              handleClick: handleClickLang,
              dropdownData: dropdownData,
              // handleToggle:handleToggle,
              checkedItems: checkedItems,
              handleCheckboxChange: (name) => handleCheckboxChange(name),

              value: formData.Other_language,
              // error: errors.Other_language,
              colClass: 'col-12 col-md-3',
              onChange: (e) => handleChange(e, 'lang'),
            },
            {
              label: 'Address *',
              name: 'address',
              type: 'textarea',
              placeholder: 'Address *',
              value: formData.address,
              // error: errors.address,
              colClass: 'col-12 col-md-6',
              onChange: handleChange,
            },
            {
              label: 'Comments *',
              name: 'comments',
              type: 'textarea',
              placeholder: 'comments *',
              value: formData.comments,
              // error: errors.comments,
              colClass: 'col-12 col-md-6',
              onChange: (e) => handleChange(e, "comments"),
            },
            {
              label: ' Upload Documents *',
              name: 'documents',
              type: 'file',
              placeholder: 'documents *',
              value: formData.documents,
              // error: errors.documents,
              colClass: 'col-12 col-md-6',
              onChange: handleFileChange,
            },

          ]}
        />
      )}
      <Toaster position="top-right" />
      <GenericConfirmation
        openConfirmation={openConfirmationModal}
        closeConfirmModal={closeModalConfirmation}
        onDelete={onDelete}
      />
      {scheduleModal && <ScheduleModal show={scheduleModal} kidId={kidIdSchedule} handleCloseScheule={handleCloseScheule}/> }
    </div>
  )
}
Kid.layout = "Contentlayout";