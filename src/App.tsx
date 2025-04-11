import "./App.css";

import { Route, Routes, useSearchParams } from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import useChatbox from "./hooks/useChatbox";

export default function App() {
  /**
   * Lấy thông tin từ URL
   */
  const [search_params] = useSearchParams();

  /**
   * Access token từ URL hoặc localStorage
   */
  const PAGE_ID = search_params.get("page_id");

  useChatbox({
    page_id: PAGE_ID, // Chỉ khởi tạo khi visible
    // userData: {
    //   name: "User Name",
    //   email: "user@example.com",
    // },
  });

  return (
    <div className="min-h-screen min-w-screen flex flex-col relative bg-custom-gradient">
      <Navbar />

      <div className="flex flex-grow min-h-0 pt-16 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
