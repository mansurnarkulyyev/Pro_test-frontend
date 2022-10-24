import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PublicRoute from './shared/components/PublicRoute/PublicRoute.jsx';
import PrivateRoute from './shared/components/PrivateRoute/PrivateRoute.jsx';

import RegisterPage from "./pages/RegisterPage";
// import Question from "./modules/Question";

const HomePage = lazy(() => import("./pages/HomePage"));
const TestPage = lazy(() => import("./pages/TestPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const DiagramPage = lazy(() => import("./pages/DiagramPage/DiagramPage"));
const SignIn = lazy(() => import("./pages/SignInPage"));
const SignUp = lazy(() => import("./pages/SignUpPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading page</p>}>
      {/* <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/diagram/:kind" element={<PieRechartComponent />} /> 
      <Route path="/diagram/:kind" element={<DiagramPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/test/:kind" element={<TestPage />} />
       // <Route path="/diagram" element={<DiagramPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}

      <Routes>   
        <Route element={<PublicRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
                
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/diagram/:kind" element={<DiagramPage />} />
          <Route path="/test/:kind" element={<TestPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>       
                
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
