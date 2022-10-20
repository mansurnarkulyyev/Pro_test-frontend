import UserRoutes from "./UserRoutes";
import Header from "./modules/Header";
import Footer from "./modules/Footer";

import Notification from "./shared/components/Notification";

function App() {
  return (
    <>
      {/* <Header /> */}
      <UserRoutes />
      <Notification />
      <Footer />
    </>
  );
}

export default App;
