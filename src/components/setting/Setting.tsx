import CheckboxNew from "../checkbox/CheckboxNew";
import CustomSelectSearch from "../select/CustomSelectSearch";
import DividerY from "../Divider/DividerY";
import { t } from "i18next";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const Setting = () => {
  /** Mock Ngôn ngữ */
  const LANGUAGES = [
    { key: "Tiếng Việt", value: "vi" },
    { key: "Tiếng Anh", value: "en" },
    { key: "Tiếng Hàn", value: "kr" },
    { key: "Tiếng Nhật", value: "jp" },
    { key: "Tiếng Trung", value: "cn" },
  ];
  /**
   * Lấy thông tin từ URL
   */
  const [search_params] = useSearchParams();
  /** checkbox Thẻ hội thoại */
  const [reset_conversation, setResetConversation] = useState(false);
  /** Thêm locale từ localStorage */
  const LOCALE = localStorage.getItem("locale") || "vi";
  /**
   * Ngôn ngữ
   */
  const [locale, setLocale] = useState<string | number>(LOCALE);
  /** Embed Iframe */
  const IFRAME = document.querySelector(
    "#BBH-EMBED-IFRAME"
  ) as HTMLIFrameElement;

  /**
   * Access token từ URL hoặc localStorage
   */
  const PAGE_ID = search_params.get("page_id");
  console.log(PAGE_ID, "page_id");

  /** Hàm confirm */
  const handleConfirm = () => {
    /** Lưu locale vào localStorage */
    localStorage.setItem("locale", locale.toString());
    /** Gửi message xuống SDK */
    if (IFRAME?.contentWindow) {
      IFRAME.contentWindow.postMessage(
        {
          from: "parent-app-preview",
          reset_conversation: reset_conversation,
          locale: locale,
          reset_page_id: PAGE_ID,
        },
        "*"
      );
    }
  };
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col gap-y-2 p-4 border bg-white border-gray-300 md:rounded-lg w-full md:w-1/2">
        <div className="flex flex-shrink-0 h-10 justify-end w-full">
          <button
            onClick={() => {
              /**
               *  Lưu cuộc hội thoại
               */
              handleConfirm();

              setResetConversation(false);
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {t("save")}
          </button>
        </div>
        <DividerY />
        <div className="flex flex-col gap-y-2">
          <CheckboxNew
            checked={reset_conversation}
            label={t("reset_conversation")}
            onChange={(e) => {
              setResetConversation(e);
            }}
          />
          <DividerY />
          <div className="flex gap-y-2 gap-x-4 items-center">
            <span className="text-sm font-medium flex-shrink-0 ">
              {t("select_language")}
            </span>
            <CustomSelectSearch
              label={t("language")}
              data={LANGUAGES}
              selected={LANGUAGES.find((e) => e.value === locale)}
              value={locale}
              setSelected={(e) => {
                setLocale && setLocale(e.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
