import LanguageDetector from "i18next-browser-languagedetector";
import { en } from "./lang/en";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { vn } from "./lang/vn";

/** Cấu hình i18next */
i18n
  /** Sử dụng LanguageDetector để lấy ngôn ngữ từ URL */
  .use(LanguageDetector)
  /** Kết nối với React */
  .use(initReactI18next)
  /** Khởi tạo i18next với các cấu hình */
  .init({
    /** Sử dụng bản dịch từ mã nguồn */
    resources: {
      en: en,
      us: en,
      vi: vn,
      vn: vn,
      // cn: zh,
      // zh: zh,
      // th: th,
      // ja: ja,
      // jp: ja,
      // ko: ko,
      // kr: ko,
    },
    /** Ngôn ngữ dự phòng là 'vn' nếu không tìm thấy ngôn ngữ khác */
    fallbackLng: "vn",
    /**
     * Ngôn ngữ mặc định là 'vn'
     */
    interpolation: {
      /** React đã xử lý việc escape XSS */
      escapeValue: false,
    },
    detection: {
      /**  Cấu hình lấy ngôn ngữ từ URL (query parameter)*/
      /** Chỉ lấy từ URL và localStorage và navigator */
      order: ["querystring", "localStorage", "navigator"],
      /** Query string để lấy ngôn ngữ, ví dụ: ?lng=vi */
      lookupQuerystring: "locale",

      /** Custom logic: Hợp nhất các giá trị 'vn' và 'vi' thành 'vi' */
      /** Hợp nhất các giá trị 'vn' và 'vi' thành 'vi' */
      lookupFromPathIndex: 0,
      //   checkWhitelist: true,
    },
    // allowedLngs: ['en', 'vi', 'us', 'vn'], // Chỉ chấp nhận 'en' và 'vi'
  });

export default i18n;
