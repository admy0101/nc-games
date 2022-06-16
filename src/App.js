import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ReviewCard from "./components/Review-card";
import Reviews from "./components/Reviews";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/categories/:category" element={<Reviews />} />
          <Route path ="/reviews/:review_id" element={<ReviewCard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
