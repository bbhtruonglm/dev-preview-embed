import { PayloadAction, createSlice } from '@reduxjs/toolkit'

/** Định nghĩa kiểu dữ liệu cho trạng thái của toast */
interface ToastState {
  /**
   * Thông điệp cần hiển thị
   */
  message: string
  /**
   * Loại toast
   */
  type: 'success' | 'error' | 'info' | 'warning' | null
}

/** Khởi tạo trạng thái ban đầu cho toast */
const INITIAL_STATE: ToastState = {
  message: '',
  type: null,
}

/** Tạo slice cho toast với các reducer để hiển thị và ẩn toast */
const TOAST_SLICE = createSlice({
  /** Tên của slice */
  name: 'toast',
  /** Trạng thái ban đầu */
  initialState: INITIAL_STATE,
  /** Các reducers */
  reducers: {
    /** Hiển thị toast với thông điệp và loại được cung cấp */
    showToast: (state, action: PayloadAction<ToastState>) => {
      /**
       * Gán thông điệp và loại từ action
       */
      state.message = action.payload.message
      /**
       * Gán loại từ action
       */
      state.type = action.payload.type
    },
    /** Ẩn toast bằng cách đặt lại thông điệp và loại */
    hideToast: (state) => {
      /**
       * Đặt thông điệp và loại về rỗng
       */
      state.message = ''
      /**
       * Đặt loại về null
       */
      state.type = null
    },
  },
})

/** Xuất các action để sử dụng trong các component */
export const { showToast, hideToast } = TOAST_SLICE.actions
/** Xuất reducer để tích hợp vào store */
export default TOAST_SLICE.reducer
