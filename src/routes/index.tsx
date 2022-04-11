
import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { UserContext } from '../state/user/userState';

import { PrivateRoute, PublicRoute } from './Route';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';

const AppRoutes: React.FC = () => {
  const { state } = useContext(UserContext);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute signed={state.status.signed} />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<PrivateRoute signed={state.status.signed} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;