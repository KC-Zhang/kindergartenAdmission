import { FC, useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Student } from "../../src/interfaces";
import { columns } from "./common";

const OutputDataGrid: FC<{ students: Student[]; title: string }> = ({
  students,
  title,
}) => {
  const columnsWithAge = [
    ...columns,
    {
      field: 'age',
      headerName: 'Age',
      width: 50,
      editable: false,
      sortable: true,
    }
  ]

  console.log(students)
  return (
    <Box sx={{ height: 400, width: "100%", marginBottom: 20 }}>
      <header style={{ height: 80, width: "50%", fontSize: "xxx-large" }}>
        {title}{" "}
      </header>
      <DataGrid
        rows={students}
        columns={columnsWithAge}
        pageSize={30}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
};

export default OutputDataGrid;
