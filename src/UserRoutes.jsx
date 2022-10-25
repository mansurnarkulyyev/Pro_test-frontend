import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PublicRoute from "./shared/components/PublicRoute/PublicRoute.jsx";
import PrivateRoute from "./shared/components/PrivateRoute/PrivateRoute.jsx";

import TeamRegisterPage from "./pages/TeamRegisterPage/TeamRegisterPage";
// import Question from "./modules/Question";

const HomePage = lazy(() => import("./pages/HomePage"));
const TestPage = lazy(() => import("./pages/TestPage"));
const MaterialsPage = lazy(() => import("./pages/MaterialsPage"));
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
        <Route path="/register" element={<TeamRegisterPage />} />
        <Route path="/diagram/:kind" element={<PieRechartComponent />} /> 
      <Route path="/diagram/:kind" element={<DiagramPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/test/:kind" element={<TestPage />} />
       // <Route path="/diagram" element={<DiagramPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<TeamRegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes> */}

      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/" exact={true} element={<HomePage />} />
          <Route path="/diagram/:kind" element={<DiagramPage />} />
          <Route path="/test/:kind" element={<TestPage />} />
          <Route path="/useful-info" element={<MaterialsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/team" element={<TeamRegisterPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />

        {/*//           <Route path="/register" element={<RegisterPage />} />*/}
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
