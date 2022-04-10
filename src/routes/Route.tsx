import React from "react";
import { Navigate, Outlet } from 'react-router-dom';

interface IRoute {
  signed: boolean;
}

export const PrivateRoute = ({  signed }: IRoute) => {
  return signed ? <Outlet /> : <Navigate to="/" />;
}

export const PublicRoute = ({ signed }: IRoute) => {
  return signed ? <Navigate to="/companies" /> : <Outlet />;
}