import React from "react";
// Styled Components
import { Container, EditButton, Grid, Image } from "./ProductList.styles";
import { useState } from "react";
// Material UI Data-Grid
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../dataGrid";
import { DeleteOutline } from "@material-ui/icons";
// React Router
import { Link } from "react-router-dom";

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 170,
      renderCell: (params) => {
        return (
          <Grid>
            <Image className="data-img" src={params.row.img} alt="jon snow" />
            {params.row.name}
          </Grid>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 170,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "price",
      headerName: "Price",
      width: 170,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <EditButton>Edit</EditButton>
            </Link>
            <DeleteOutline
              style={{ cursor: "pointer" }}
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Container>
  );
};

export default ProductList;
