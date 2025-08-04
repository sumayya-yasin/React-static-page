import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <div style={{ flexGrow: 1 }}>
        <Main />
      </div>      
      <Footer />
    </div>
  );
}
