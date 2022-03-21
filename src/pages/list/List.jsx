import { Link } from "react-router-dom";
import DataTable from "../../components/dataTable/DataTable";
import "./list.scss";

const List = () => {
  return (
    <div className="list">
      <header className="listTitle">
        <h1>users list</h1>
        <Link to="/users/new">
          <span>+</span> Add New
        </Link>
      </header>
      <DataTable />
    </div>
  );
};

export default List;
