import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import './index.css'  




function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
      </>
  );
}

export default App;