import React from "react";
import TableHOC from "../components/charts/Table.jsx";

const columns = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];

const DashboardTable = ({ data = [] }) => {
  return <TableHOC columns={columns} data={data} containerClassname="transaction-box" heading="Top Transaction" />;
};

export default DashboardTable;
