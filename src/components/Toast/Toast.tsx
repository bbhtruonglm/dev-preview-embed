import "react-toastify/dist/ReactToastify.css";
/** Import CSS tùy chỉnh nếu cần */
import "./styles.css";

import { AppDispatch, RootState } from "@/stores";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { hideToast } from "@/stores/toastSlice";

const Toast: React.FC = () => {
  /**
   * Dispatch action từ store
   */
  const dispatch = useDispatch<AppDispatch>();
  /** Tin nhắn và type từ store */
  const { message, type } = useSelector((state: RootState) => state.toast);

  useEffect(() => {
    /**
     * Nếu có message và type thì hiển thị toast
     */
    if (message && type) {
      /** Hiển thị toast mới mỗi khi có thông điệp mới */
      /** Tự động đóng sau 1 giây */
      toast(message, { type, autoClose: 3000 });

      /** Tự động ẩn toast sau 1 giây */
      setTimeout(() => {
        /**
         * Ẩn toast
         */
        dispatch(hideToast());
      }, 3000);
    }
  }, [message, type, dispatch]);

  return (
    <ToastContainer
      position="top-right"
      closeButton={true} // Bật bỏ nút "close"
    />
  );
};

export default Toast;
