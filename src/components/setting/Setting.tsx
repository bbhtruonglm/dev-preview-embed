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
  /**
   * Ngôn ngữ
   */
  const [locale, setLocale] = useState<string | number>("vi");
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
    if (IFRAME?.contentWindow) {
      IFRAME.contentWindow.postMessage(
        {
          from: "parent-app",
          reset_conversation: reset_conversation,
          locale: locale,
        },
        "*"
      );
    }
  };
  return (
    <div className="flex h-full w-full">
      <div className="flex flex-col justify-between p-4 border bg-white border-gray-300 rounded-lg w-1/2">
        <div className="flex flex-col gap-y-4">
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
      </div>
    </div>
  );
};

export default Setting;
