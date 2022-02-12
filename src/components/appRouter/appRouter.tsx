import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routes from '../../modules/routes';

const AppRouter = () => (
  <Routes>
    {routes.map((route) => (
      <Route path={route.path} element={route.element} key={route.path} />
    ))}
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
);

export default AppRouter;
