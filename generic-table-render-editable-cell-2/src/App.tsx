import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";

interface User {  
  id: number;
  name: string;
  age: number;
  email: string;
}

const users: User[] = [
  { id: 100, name: "Thada", age: 27, email: "mildronize@gmail.com" },
  { id: 200, name: "Sompong", age: 35, email: "sompong@thongmeee.com" },
  { id: 300, name: "Manee", age: 35, email: "admin@manee.com" },
];

function App() {

  const [data, setData] = React.useState(() => users); 

  return (
    <div className="container">

      <p>------------------</p>
      <br />
      <h1>User Interface</h1>
      <Table<User>
        setData={setData}
        rows={data}
        columns={[
          { key: "id", title: "ID" },
          { key: "name", title: "Name" },
          { key: "age", title: "Age" },
          { key: "email", title: "E-mail" },
        ]}
      />

      <p>
        See the editing cell in the console
      </p>

    </div>
  );
}

export default App;
