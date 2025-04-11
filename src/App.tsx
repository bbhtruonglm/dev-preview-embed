import "./App.css";

import { Route, Routes, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import useChatbox from "./hooks/useChatbox";

export default function App() {
  /**
   *  Lay params từ url
   */
  const [search_params] = useSearchParams();
  /**
   *  Lay page_id tu url
   */
  const PAGE_ID = search_params.get("page_id");
  /**
   * Lay locale tu localStorage
   */
  const [locale, setLocale] = useState(
    () => localStorage.getItem("locale") || "vi"
  );

  /** Cập nhật lại locale khi localStorage thay đổi (nếu bạn đổi ở Setting) */
  useEffect(() => {
    /**
     * Cập nhật locale từ local storage nếu có thay đổi
     */
    const handleStorage = () => {
      const NEW_LOCALE = localStorage.getItem("locale") || "vi";
      setLocale(NEW_LOCALE);
      console.log(NEW_LOCALE, "new locale");
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  /**
   * GỌi hook chatbox
   */
  useChatbox({
    page_id: PAGE_ID,
    locale: locale,
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
