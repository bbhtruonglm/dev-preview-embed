// Import các hàm test cần thiết từ vitest
import { beforeEach, describe, expect, it, vi } from "vitest";
// Import 2 hàm cần test từ helper
import { saveLocale, sendMessageToIframe } from "./helper";

/**
 * Nhóm test cho hàm saveLocale
 */
describe("saveLocale", () => {
  /**
   * Setup chạy trước mỗi test case
   * - Reset lại tất cả mock (vi.restoreAllMocks())
   * - Clear dữ liệu localStorage để tránh ảnh hưởng giữa các test
   */
  beforeEach(() => {
    vi.restoreAllMocks();
    localStorage.clear();
  });

  /**
   * Test: kiểm tra xem saveLocale có lưu đúng giá trị vào localStorage không
   */
  it("should save locale to localStorage", () => {
    saveLocale("en"); // Gọi hàm saveLocale với giá trị 'en'
    expect(localStorage.getItem("locale")).toBe("en"); // Mong đợi localStorage lưu đúng giá trị
  });
});

/**
 * Nhóm test cho hàm sendMessageToIframe
 */
describe("sendMessageToIframe", () => {
  /**
   * Setup chạy trước mỗi test case
   * - Reset tất cả mock
   * - Render iframe giả trong DOM
   */
  beforeEach(() => {
    vi.restoreAllMocks();
    document.body.innerHTML = `
        <iframe id="BBH-EMBED-IFRAME"></iframe>
      `; // Chèn một iframe vào document.body để test
  });

  /**
   * Test: kiểm tra sendMessageToIframe có gửi message đúng không
   */
  it("should send a message to iframe", () => {
    const iframe = document.querySelector(
      "#BBH-EMBED-IFRAME"
    ) as HTMLIFrameElement; // Lấy iframe từ DOM

    /**
     * Tạo hàm postMessage giả để kiểm tra
     */
    const postMessageMock = vi.fn();

    /**
     * Trick: Mock getter `contentWindow` của iframe
     * - Vì contentWindow là readonly, nên không gán trực tiếp được
     * - Phải dùng vi.spyOn để "bắt" getter và trả về object giả có postMessage
     */
    vi.spyOn(iframe, "contentWindow", "get").mockReturnValue({
      postMessage: postMessageMock, // Gán postMessage thành mock function
    } as unknown as Window);

    const message = { test: "message" }; // Dữ liệu cần gửi
    sendMessageToIframe(message); // Gọi hàm cần test

    /**
     * Kiểm tra: postMessage đã được gọi với đúng message và targetOrigin là "*"
     */
    expect(postMessageMock).toHaveBeenCalledWith(message, "*");
  });
});
