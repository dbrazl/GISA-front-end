
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
import ServiceProviders from '../pages/Mobile/ServiceProviders';

const DESKTOP_RESOLUTION = 1024;

const AppRoutes: React.FC = () => {
  const { state } = useContext(UserContext);
  const isMobile = window.screen.width < DESKTOP_RESOLUTION;
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute signed={state.status.signed} />}>
          <Route path="/" element={<Login />} />
        </Route>
        <Route path="/dashboard" element={<PrivateRoute signed={state.status.signed} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/dashboard/associateds" element={<PrivateRoute signed={state.status.signed && isMobile} />}>
          <Route path="/dashboard/associateds" element={<Associateds />} />
        </Route>
        <Route path="/dashboard/providers" element={<PrivateRoute signed={state.status.signed && isMobile} />}>
          <Route path="/dashboard/providers" element={<ServiceProviders />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;