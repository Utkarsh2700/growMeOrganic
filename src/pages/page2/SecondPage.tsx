import { Container } from "@mui/material";
import FetchFromApi from "../../components/userDataTable/UserDataTable";
import DepartmentList from "../../components/departmentList/DepartmentList";

const SecondPage = () => {
  return (
    <Container>
      <FetchFromApi />
      <DepartmentList />
    </Container>
  );
};

export default SecondPage;
