import { createSlice } from '@reduxjs/toolkit'
/**
 * Interface của state loading
 */
const INITIAL_STATE = {
  /** Dùng để đếm số API đang chạy */
  loadingCounter: 0,
}
/**
 * Slice của loading
 */
const LOADING_SLICE = createSlice({
  name: 'loading',
  initialState: INITIAL_STATE,
  reducers: {
    /**
     *  Action khi bắt đầu loading
     * @param state  State hiện tại
     */
    startLoading: (state) => {
      /** Mỗi khi có API call bắt đầu, tăng counter */
      state.loadingCounter += 1
    },
    /**
     * Action khi kết thúc loading
     * @param state State hiện tại
     */
    stopLoading: (state) => {
      /**
       * Kiểm tra nếu counter > 0
       */
      if (state.loadingCounter > 0) {
        /** Mỗi khi API call kết thúc, giảm counter */
        state.loadingCounter -= 1
      }
    },
  },
})
/**
 *  Export action và reducer
 */
export const { startLoading, stopLoading } = LOADING_SLICE.actions

/** True khi có ít nhất một API call */
export const selectLoading = (state) => state.loading.loadingCounter > 0
/**
 *  Lấy ra số API đang chạy
 * @param state State hiện tại
 * @returns Số API đang chạy
 */
export const selectLoadingCounter = (state) => state.loading.loadingCounter
/**
 *  Export reducer
 */
export default LOADING_SLICE.reducer
