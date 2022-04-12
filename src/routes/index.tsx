
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
import Associateds from '../pages/Mobile/Associateds';

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
        <Route path="/dashboard/associateds" element={<PrivateRoute signed={state.status.signed && window.screen.width < 1024} />}>
          <Route path="/dashboard/associateds" element={<Associateds />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;