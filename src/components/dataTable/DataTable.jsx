import { useNavigate } from "react-router-dom";
import "./dataTable.scss";
import { userColumns, userRows } from "../../datableSrc";

import { DataGrid } from "@mui/x-data-grid";

export default function DataTable() {
  const router = useNavigate();

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <button
              className="viewButton"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                //nije najsrecnije resenje
                router(
                  `/users/${e.currentTarget.parentElement.parentElement.parentElement.getAttribute(
                    "data-id"
                  )}`
                );
              }}
            >
              View
            </button>
            <button
              className="deleteButton"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("DELETE");
              }}
            >
              Delete
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="dataTable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
}
