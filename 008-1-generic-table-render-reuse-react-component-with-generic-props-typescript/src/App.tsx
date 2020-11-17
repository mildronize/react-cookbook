import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
}

const posts: Post[] = [
  { id: 0, title: "Post 1", body: "Post content 1" },
  { id: 1, title: "Post 2", body: "Post content 2" },
];

const users: User[] = [
  { id: 0, name: "Thada", age: 27, email: "mildronize@gmail.com" },
  { id: 1, name: "Sompong", age: 35, email: "sompong@thongmeee.com" },
];

function App() {
  return (
    <div className="container">
      <h1>Post Interface</h1>
      <Table<Post>
        objects={posts}
        columns={[
          { key: "title", title: "Title" },
          { key: "body", title: "Body" },
        ]}
      />
      
      <br />
      <p>------------------</p>
      <br />
      <h1>User Interface</h1>
      <Table<User>
        objects={users}
        columns={[
          { key: "name", title: "Name" },
          { key: "age", title: "Age" },
          { key: "email", title: "E-mail" },
        ]}
      />
    

    </div>
  );
}

export default App;
