import "./App.css";
import Home from "./Page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Login from "./Page/Login";
import Service from "./Page/Service";
import Pagenot from "./Page/Pagenot";
import Protected from "./Page/Protected";
import Form from "./Form";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<Pagenot />} />
          <Route path="/" element={<Protected Component={Home} />} />
          <Route path="/about" element={<Protected Component={About} />} />
          <Route path="/contact" element={<Protected Component={Contact} />} />
          <Route path="/service" element={<Protected Component={Service} />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
