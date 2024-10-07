import { baseUrl } from "@/baseurl/baseUrl";
import { fetchData } from "@/redux/thunk/dataThunk";
import { BasicTable } from "@/shared/data/tables/datatablesdata";
import Pageheader from "@/shared/layout-components/pageheader/pageheader";
import { useEffect ,useState} from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";

export default function Scheduling() {
    const [schedulingData,setShedulingData] = useState([])
    const COLUMNS = [
        {
            Header: "Child Name",
            accessor: "kid_first_name",
        },
        {
            Header: "Kid Code",
            accessor: "kid_code",
        },
        {
            Header: "Display Name",
            accessor: "kid_display_name",
        },
        {
            Header: "Days",
            accessor: "days",
        },
    ];
    const dispatch = useDispatch()
    const fetchScheduling = () => {
        const authToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;
        dispatch(fetchData({
            method: 'GET',
            endpoint: `${baseUrl.allBase}all_scheduling`,
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
        })).then((res) => {
            if (res?.payload?.status === true) {
                setShedulingData(res?.payload?.data)
            }
        })
    }

    useEffect(() => {
        fetchScheduling()
    }, [])
    
    return (
        <div>
            <Pageheader title="Scheduling" heading="Home" active="Scheduling" />
            <Card className="p-4">
                <BasicTable dataTable={schedulingData} column={COLUMNS} />
            </Card>
        </div>
    )
}
Scheduling.layout = "Contentlayout";