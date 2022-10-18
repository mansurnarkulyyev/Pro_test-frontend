import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));

const PieRechartComponent = lazy(() => import("./pages/RechartPage/RechartPage"));

const SignIn = lazy(() => import("./pages/SignInPage"));
const SignUp = lazy(() => import("./pages/SignUpPage"));

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading page</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diagram" element={<PieRechartComponent />} />
        <Route path="*" element={<NotFoundPage />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
