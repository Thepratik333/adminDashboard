import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import TableHOC from '../charts/Table';
import { FaTrash } from "react-icons/fa";


const columns = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  }
];


const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/women/50.jpg";

function Customer() {
  const [data] = useState([
    {
      avatar: <img style={{ borderRadius: "50%" }} src={img} alt="Shoes" />,
      name: "Emily Palmer",
      email: "emily.palmer@example.com",
      gender: "female",
      role: "user",
      action: <button><FaTrash /></button>,
    },
    {
      avatar: <img style={{ borderRadius: "50%" }} src={img2} alt="Shoes" />,
      name: "May Scoot",
      email: "aunt.may@example.com",
      gender: "female",
      role: "user",
      action: <button><FaTrash /></button>,
    },
  ])

  return(
  <div className="admin-container w-[100vw]">
    <main><TableHOC columns={columns} data={data} containerClassname="dashboard-coustomer-box" heading="Customers"/></main>
  </div>
  )
}

export default Customer