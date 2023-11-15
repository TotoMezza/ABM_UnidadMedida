import { Routes, Route } from 'react-router-dom';
import * as React from 'react';

const Admin = React.lazy(() => import('../pages/admin/admin'));
const Home = React.lazy(() => import('../pages/home/home'));
const Login = React.lazy(() => import('../pages/login/login'));
const PrivateRoute = React.lazy(() => import('./privateRoute'));

const Router: React.FC = () => (
    <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<PrivateRoute element={<Admin />} />} path="/admin" />
        <Route element={<Login />} path="/login" />
    </Routes>
);

export default Router;