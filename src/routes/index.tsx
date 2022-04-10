
import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { UserContext } from '../state/user/userState';

import { PublicRoute } from './Route';

import Login from '../pages/Login';

const AppRoutes: React.FC = () => {
  const { state } = useContext(UserContext);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicRoute signed={state.status.signed} />}>
          <Route path="/" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;