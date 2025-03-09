import DataTable from "react-data-table-component";
import { data } from "./assets/data";
import "./App.css";
import { useState } from "react";

const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Director",
    selector: (row) => row.director,
  },
  {
    name: "Year",
    selector: (row) => Number(row.year),
    sortable: true,
    sortFunction: (a, b) => Number(a.year) - Number(b.year),
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

const customeStyles = {
  headCells: {
    style: {
      backgroundColor: "black",
      color: "white",
      fontSize: "17px",
      fontWeight: "bolder",
    },
  },
};

function App() {
  const [records, setRecords] = useState(data);
const handleChange = (e) => {
  let query = e.target.value;
  const newRecords = data.filter((item) =>
    item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );
  setRecords(newRecords)
};
  return (
    <div className="homeDiv">
      <div className="search">
        <h2>Movie Lists</h2>
        <input
          type="text"
          placeholder="Search by title"
          onChange={handleChange}
        />
      </div>
      <DataTable
        columns={columns}
        data={records}
        customStyles={customeStyles}
        pagination
      />
    </div>
  );
}

export default App;
