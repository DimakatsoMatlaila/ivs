import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "avatar",
    headerName: "Avatar",
    width: 130,
    renderCell: (cellData) => {
      return <Typography variant="h5">Hello</Typography>;
    },
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  {
    id: 1,
    lastName: <Typography variant="h6">Mokoena</Typography>,
    firstName: "Thabo",
    age: 35,
  },
  { id: 2, lastName: "Dlamini", firstName: "Nokuthula", age: 42 },
  { id: 3, lastName: "Nkosi", firstName: "Sipho", age: 45 },
  { id: 4, lastName: "Zulu", firstName: "Nomsa", age: 16 },
  { id: 5, lastName: "Khumalo", firstName: "Bongani", age: 30 },
  { id: 6, lastName: "Mahlangu", firstName: "Lerato", age: 28 },
  { id: 7, lastName: "Sithole", firstName: "Andile", age: 44 },
  { id: 8, lastName: "Mthembu", firstName: "Zandile", age: 36 },
  { id: 9, lastName: "Ngcobo", firstName: "Phumzile", age: 50 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 20, 30]}
        checkboxSelection
      />
    </div>
  );
}
