import UserRoutes from "./UserRoutes";
import Header from "./modules/Header";
import HomePage from "./pages/HomePage";

import Notification from "./shared/components/Notification";

function App() {
  return (
    <>
      {/* <Header /> */}
      <HomePage />
      <UserRoutes />
      <Notification />
    </>
  );
}

export default App;
