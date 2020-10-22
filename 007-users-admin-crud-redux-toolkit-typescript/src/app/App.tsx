import React from "react";
import "./App.less";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import LoginPage from '../features/login/LoginPage';
import UsersPage from '../features/admin/users/UsersPage';
import UsersAddForm from "../features/admin/users/UsersAddForm";
import UsersEditForm from "../features/admin/users/UsersEditForm";


function App() {
  return (
     <Router>

      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>

        <Route exact path="/users">
          <UsersPage />
        </Route>

        <Route exact path="/users/add">
          <UsersAddForm />
        </Route>

        <Route exact path="/users/edit/:id">
          <UsersEditForm />
        </Route>

       
      </Switch>
    </Router>
  );
}

export default App;
