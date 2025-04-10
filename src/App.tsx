import "./App.css";

import { Route, Routes, useParams, useSearchParams } from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import useChatbox from "./hooks/useChatbox";
import { useState } from "react";

export default function App() {
  /**
   * Lấy thông tin từ URL
   */
  const [search_params] = useSearchParams();

  /**
   * Access token từ URL hoặc localStorage
   */
  const PAGE_ID = search_params.get("page_id");
  console.log(PAGE_ID, "page_id");
  /**
   * is_chatbox_visible: Trang thai hien thi chatbox
   */
  const [is_chatbox_visible, setIsChatboxVisible] = useState(false);

  useChatbox({
    page_id: PAGE_ID, // Chỉ khởi tạo khi visible
    // userData: {
    //   name: "User Name",
    //   email: "user@example.com",
    // },
  });

  return (
    <div className="min-h-screen min-w-screen flex flex-col relative">
      <Navbar />

      <div className="flex-grow min-h-0 pt-16">
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
