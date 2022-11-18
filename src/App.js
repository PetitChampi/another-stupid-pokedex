import Navbar from "./components/navbar/navbar.component";
import Footer from "./components/footer/footer.component";

import router from "./router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main">
        <RouterProvider router={router} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
