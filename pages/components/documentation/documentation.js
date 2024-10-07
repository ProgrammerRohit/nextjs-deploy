import { useState } from 'react';
import { BasicTable } from "@/shared/data/tables/datatablesdata";
import { Button, Card, Form } from "react-bootstrap";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Tooltip from '@mui/material/Tooltip';
import Pageheader from "@/shared/layout-components/pageheader/pageheader";
import { useRouter } from 'next/router';
import DraftsIcon from '@mui/icons-material/Drafts';
import SaveIcon from '@mui/icons-material/Save';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Summary from './summary';
import ReviewIcon from '@mui/icons-material/RateReview';
import FoodModal from './food';

export default function Documentation() {
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState('today');
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    const [reviewed,setReviewed] = useState(false) 


    const [openSummaryModal,setOpenSummaryModal] = useState(false)
    const closeModal = () =>{
        setOpenSummaryModal(false)
    }
    const COLUMNS = [
        {
             accessor: "childName",  
             Header: "Child Name",
        },
        {
            accessor:"status",
            Header:"Status"
        },
        {
            accessor:"pdf",
            Header:"Pdf"
        },
        { Header: "Food", accessor: "food" },
        { Header: "Drink", accessor: "drink" },
        { Header: "Nappy", accessor: "nappy" },
        { Header: "Sleep", accessor: "sleep" },
        { Header: "Individual Activity", accessor: "individualActivity" },
        { Header: "Group Activity", accessor: "groupActivity" },
        { Header: "Curriculum", accessor: "curriculum" },
        { Header: "Incident Report", accessor: "incidentReport" },
        { Header: "Other", accessor: "other" },
    ];

    // const handleRoute = (type) =>{
    //     if(type === "food"){
    //         router.push("/components/documentation/food")
    //     }
    //     else if(type === "dr")
    // }
    const handleClickSummary = () =>{
        setOpenSummaryModal(true)
    }
    const handleReview = () => {
        setReviewed(true)
        setOpenSummaryModal(false)
    }
    const [openDocsModal,setDocsModal] = useState(false)

    const handleOpenModal = () =>{
        setDocsModal(true)
    }
    const handleCloseDocs = () =>{
        setDocsModal(false)
    }

    const DataTable = [
        {
            childName: (
                <div style={{display:"flex",justifyContent:"spaceAround",alignItems:"center",cursor:"pointer"}}>
                    <img src="https://t4.ftcdn.net/jpg/07/11/42/37/360_F_711423781_XdjsUQPB2HwBd54Ot7XsrTanuXYUD5r9.jpg" class="rounded-circle"   style={{ objectFit: "cover" }}  height={45} width={45}/>
                    <h6 style={{marginTop:"8px",marginLeft:"5px"}}>Child 1</h6>
                </div>
            ),
            status:(
                    <div>
                        <span > {!reviewed && <DraftsIcon style={{cursor:"pointer",color:"dark"}} onClick={handleClickSummary}/>  }   {reviewed &&   <ReviewIcon onClick={handleClickSummary} style={{ cursor: 'pointer' ,color:"burlywood"}} />}</span>
                    </div>
            ),
            pdf:(
                <div>
                    <PictureAsPdfIcon sx={{cursor:"pointer",color:"red"}}/>
                </div>
            ),
            food: (
                <div style={{ display: 'flex', justifyContent: 'center' }}  onClick={handleOpenModal}>
                    <Tooltip title="Apple, Banana, Carrot" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            drink: (
                <div style={{ display: 'flex', justifyContent: 'center' }}  onClick={() => window.open("/components/documentation/drink", "_blank")}>
                    <Tooltip title="Milk, Juice" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            nappy: (
                <div style={{ display: 'flex', justifyContent: 'center' }} onClick={() => window.open("/components/documentation/nappy", "_blank")}>
                    <Tooltip title="Clean, Dirty" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            sleep: (
                <div style={{ display: 'flex', justifyContent: 'center' }}   onClick={() => window.open("/components/documentation/sleep", "_blank")}>
                    <Tooltip title="1 hour, 2 hours" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            individualActivity: (
                <div style={{ display: 'flex', justifyContent: 'center' }} onClick={() => window.open("/components/documentation/individual", "_blank")}>
                    <Tooltip title="Drawing, Reading" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            groupActivity: (
                <div style={{ display: 'flex', justifyContent: 'center' }}  onClick={() => window.open("/components/documentation/group", "_blank")}>
                    <Tooltip title="Playtime, Singing" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            curriculum: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="Math, Science" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            incidentReport: (
                <div style={{ display: 'flex', justifyContent: 'center' }} onClick={() => window.open("/components/documentation/incident", "_blank")}>
                    <Tooltip title="None, Minor Scrape" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            other: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="Toys, Books" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
        },
        {
            childName: (
                <div style={{display:"flex",justifyContent:"spaceAround",alignItems:"center",cursor:"pointer"}}>
                    <img src="https://t4.ftcdn.net/jpg/07/11/42/37/360_F_711423781_XdjsUQPB2HwBd54Ot7XsrTanuXYUD5r9.jpg" class="rounded-circle"   style={{ objectFit: "cover" }}  height={45} width={45}/>
                    <h6 style={{marginTop:"8px",marginLeft:"5px"}}>Child 2</h6>
                </div>
            ),
            status:(
                <div>
                    <span>D / R</span>
                </div>
        ),
        pdf:(
            <div>
                <PictureAsPdfIcon sx={{cursor:"pointer",color:"red"}}/>
            </div>
        ),
            food: (
                <div style={{ display: 'flex', justifyContent: 'center' }} onClick={() => router.push("/documentation/food")}>
                    <Tooltip title="Apple, Banana, Carrot" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            drink: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="Milk, Juice" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            nappy: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="Clean, Dirty" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            sleep: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="1 hour, 2 hours" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            individualActivity: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="Drawing, Reading" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            groupActivity: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="Playtime, Singing" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            curriculum: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="Math, Science" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            incidentReport: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="None, Minor Scrape" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            other: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="Toys, Books" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
        },
        {
            childName: (
                <div style={{display:"flex",justifyContent:"spaceAround",alignItems:"center",cursor:"pointer"}}>
                <img src="https://t4.ftcdn.net/jpg/07/11/42/37/360_F_711423781_XdjsUQPB2HwBd54Ot7XsrTanuXYUD5r9.jpg" class="rounded-circle"   style={{ objectFit: "cover" }}  height={45} width={45}/>
                <h6 style={{marginTop:"8px",marginLeft:"5px"}}>Child 3</h6>
            </div>
            ),
            status:(
                <div>
                    <span>D / R</span>
                </div>
        ),
            food: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="Apple, Banana, Carrot" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            pdf:(
                <div>
                    <PictureAsPdfIcon sx={{cursor:"pointer",color:"red"}}/>
                </div>
            ),
            drink: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="Milk, Juice" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            nappy: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="Clean, Dirty" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            sleep: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="1 hour, 2 hours" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            individualActivity: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="Drawing, Reading" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            groupActivity: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="Playtime, Singing" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            curriculum: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="Math, Science" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            incidentReport: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="None, Minor Scrape" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
            other: (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="Toys, Books" arrow>
                        <VisibilityIcon sx={{ color: "#6C5FFC", cursor: "pointer" }} />
                    </Tooltip>
                </div>
            ),
        },
    ];

    const handleCellOne = () =>{
        router.push("/components/documentation/kidDocs")
    }



    return (
        <div>  
            <Pageheader title="Documentation"  />
            <Form className="mb-3 d-flex" >
            <Form.Check 
                className='ms-1'
                    type="radio" 
                    label="Today" 
                    value="today"
                    checked={selectedOption === 'today'} 
                    onChange={handleOptionChange} 
                    name="scheduleOptions"
                    style={{ 
                        transform: 'scale(1.2)', // Adjust the scale for size
                        marginRight: '8px', // Add some spacing between the radio and the label
                    }}
                />
                <Form.Check 
                className='ms-4'
                    type="radio" 
                    label="Scheduled" 
                    value="scheduled"
                    checked={selectedOption === 'scheduled'} 
                    onChange={handleOptionChange} 
                    name="scheduleOptions"
                    style={{ 
                        transform: 'scale(1.2)', // Adjust the scale for size
                        marginRight: '20px', // Add some spacing between the radio and the label
                    }}
                />
                <Form.Check 
                    type="radio" 
                    className='ms-4'
                    label="Un-Scheduled" 
                    value="unscheduled"
                    checked={selectedOption === 'unscheduled'} 
                    onChange={handleOptionChange} 
                    name="scheduleOptions"
                    style={{ 
                        transform: 'scale(1.2)',
                    }}
                />
                <Form.Check 
                    type="radio" 
                    className='ms-4'
                    label="All" 
                    value="all"
                    checked={selectedOption === 'all'} 
                    onChange={handleOptionChange} 
                    name="scheduleOptions"
                    style={{ 
                        transform: 'scale(1.2)', // Adjust the scale for size
 // Add some spacing between the radio and the label
                    }}
                />
            </Form>
            <Card className="p-4">
                <BasicTable column={COLUMNS} handleCellOne={handleCellOne} dataTable={DataTable} />
            </Card>
            {openSummaryModal && <Summary open={handleClickSummary} handleReview={handleReview} close={closeModal}/>}
            {openDocsModal && <FoodModal showModal={openDocsModal} handleClose={handleCloseDocs}/>}
        </div>
    );
}

Documentation.layout = "Contentlayout";


// if data table is coming from API ----
// import { useEffect, useState } from "react";
// import { BasicTable } from "@/shared/data/tables/datatablesdata";
// import { Card } from "react-bootstrap";
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import Tooltip from '@mui/material/Tooltip';

// export default function Documentation() {
//     const [dataTable, setDataTable] = useState([]);
//     const [loading, setLoading] = useState(true);
    
//     const COLUMNS = [
//         {
//             Header: "Child",
//             accessor: "child",
//             Cell: ({ cell: { value } }) => (
//                 <div style={{ display: 'flex', alignItems: 'center' }}>
//                     <img 
//                         src={value.image} 
//                         alt={value.name} 
//                         style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '8px' }} 
//                     />
//                     <span>{value.name}</span>
//                 </div>
//             ),
//         },
//         { Header: "Food", accessor: "food" },
//         { Header: "Nappy", accessor: "nappy" },
//         { Header: "Sleep", accessor: "sleep" },
//         { Header: "Individual Activity", accessor: "individualActivity" },
//         { Header: "Group Activity", accessor: "groupActivity" },
//         { Header: "Curriculum", accessor: "curriculum" },
//         { Header: "Incident Report", accessor: "incidentReport" },
//         { Header: "Other", accessor: "other" },
//     ];

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch("https://api.example.com/children"); // Replace with your API URL
//                 const data = await response.json();

//                 // Transform data if necessary to match the expected structure
//                 const transformedData = data.map(child => ({
//                     child: { name: child.name, image: child.imageUrl },
//                     food: (
//                         <div style={{ display: 'flex', justifyContent: 'center' }}>
//                             <Tooltip title={child.food.join(", ")} arrow>
//                                 <VisibilityIcon sx={{ color: "blue", cursor: "pointer" }} />
//                             </Tooltip>
//                         </div>
//                     ),
//                     nappy: (
//                         <div style={{ display: 'flex', justifyContent: 'center' }}>
//                             <Tooltip title={child.nappyStatus} arrow>
//                                 <VisibilityIcon sx={{ color: "blue", cursor: "pointer" }} />
//                             </Tooltip>
//                         </div>
//                     ),
//                     sleep: (
//                         <div style={{ display: 'flex', justifyContent: 'center' }}>
//                             <Tooltip title={child.sleepDuration} arrow>
//                                 <VisibilityIcon sx={{ color: "blue", cursor: "pointer" }} />
//                             </Tooltip>
//                         </div>
//                     ),
//                     individualActivity: (
//                         <div style={{ display: 'flex', justifyContent: 'center' }}>
//                             <Tooltip title={child.individualActivities.join(", ")} arrow>
//                                 <VisibilityIcon sx={{ color: "blue", cursor: "pointer" }} />
//                             </Tooltip>
//                         </div>
//                     ),
//                     groupActivity: (
//                         <div style={{ display: 'flex', justifyContent: 'center' }}>
//                             <Tooltip title={child.groupActivities.join(", ")} arrow>
//                                 <VisibilityIcon sx={{ color: "blue", cursor: "pointer" }} />
//                             </Tooltip>
//                         </div>
//                     ),
//                     curriculum: (
//                         <div style={{ display: 'flex', justifyContent: 'center' }}>
//                             <Tooltip title={child.curriculum.join(", ")} arrow>
//                                 <VisibilityIcon sx={{ color: "blue", cursor: "pointer" }} />
//                             </Tooltip>
//                         </div>
//                     ),
//                     incidentReport: (
//                         <div style={{ display: 'flex', justifyContent: 'center' }}>
//                             <Tooltip title={child.incidentReport} arrow>
//                                 <VisibilityIcon sx={{ color: "blue", cursor: "pointer" }} />
//                             </Tooltip>
//                         </div>
//                     ),
//                     other: (
//                         <div style={{ display: 'flex', justifyContent: 'center' }}>
//                             <Tooltip title={child.other} arrow>
//                                 <VisibilityIcon sx={{ color: "blue", cursor: "pointer" }} />
//                             </Tooltip>
//                         </div>
//                     ),
//                 }));

//                 setDataTable(transformedData);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>; // Display a loading indicator while fetching data
//     }

//     return (
//         <div>
//             Documentation
//             <Card className="p-4">
//                 <BasicTable column={COLUMNS} dataTable={dataTable} />
//             </Card>
//         </div>
//     );
// }

// Documentation.layout = "Contentlayout";

