import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PublicRoute from "./shared/components/PublicRoute/PublicRoute.jsx";
import PrivateRoute from "./shared/components/PrivateRoute/PrivateRoute.jsx";

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
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/diagram/:kind" element={<DiagramPage />} />
          <Route path="/test/:kind" element={<TestPage />} />
          <Route path="/useful-info" element={<MaterialsPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
