/** API HOST THEO 3 MÔI TRƯỜNG */
export const API_HOST: { [index: string]: { [index: string]: string } } = {
  /** môi trường development */
  development: {
    chatbox: "https://bbh-embed-chat-sdk.vercel.app",
  },
  /** môi trường production */
  production: {
    chatbox: "https://chatbox-embed-sdk.botbanhang.vn",
  },
};
