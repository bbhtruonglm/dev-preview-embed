// src/components/Setting/helper.ts
/** Hàm gửi message vào iframe
 * @param {object} message - Message gửi vào iframe
 */
export function sendMessageToIframe(message: object) {
  const IFRAME = document.querySelector(
    "#BBH-EMBED-IFRAME"
  ) as HTMLIFrameElement | null;
  IFRAME?.contentWindow?.postMessage(message, "*");
}

/** Hàm lưu locale vào localStorage
 * @param {string} locale - Locale
 */
export function saveLocale(locale: string) {
  localStorage.setItem("locale", locale);
}
