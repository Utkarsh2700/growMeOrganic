import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const columns: GridColDef[] = [
  { field: "userId", headerName: "User ID", width: 150 },
  { field: "id", headerName: "ID", width: 150 },
  { field: "title", headerName: "Title", width: 300 },
  { field: "body", headerName: "Body", width: 400 },
];

const FetchFromApi = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
      setPosts(response.data);
    });
  }, []);
  return (
    <Container>
      <DataGrid
        rows={posts}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5]}
        autoHeight
      />
    </Container>
  );
};

export default FetchFromApi;
