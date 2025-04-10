import { useEffect } from "react";

declare global {
  interface Window {
    BBH?: {
      init: (config: { page_id: string; config?: Record<string, any> }) => void;
    };
  }
}

interface UseChatboxOptions {
  page_id: string | null;
  userData?: {
    name?: string;
    email?: string | undefined;
    phone?: string;
    clientId?: string;
  };
  onLoaded?: () => void;
  onError?: (error: Error) => void;
}

const useChatbox = ({
  page_id,
  userData,
  onLoaded,
  onError,
}: UseChatboxOptions) => {
  console.log(page_id, "ưtff");
  useEffect(() => {
    if (!page_id) {
      const error = new Error("page_id is required");
      onError?.(error);
      console.error(error.message);
      return;
    }

    const existingScript = document.querySelector(
      'script[src*="botbanhang.vn"]'
    );
    if (existingScript) {
      initializeBBH();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://chatbox-embed-sdk.botbanhang.vn/dist/sdk.min.js";
    script.async = true;

    script.onload = () => initializeBBH();
    script.onerror = () => {
      const error = new Error("Failed to load BBH script");
      onError?.(error);
      console.error(error.message);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };

    function initializeBBH() {
      try {
        if (!window.BBH) {
          throw new Error("BBH global object not found");
        }

        window.BBH.init({
          page_id: page_id || "",
          config: {},
        });

        console.log("BBH initialized with page_id:", page_id);
        onLoaded?.();

        sendUserData();
      } catch (error) {
        const err =
          error instanceof Error
            ? error
            : new Error("Failed to initialize BBH");
        onError?.(err);
        console.error(err.message);
      }
    }

    function sendUserData() {
      setTimeout(() => {
        const iframe = document.querySelector(
          "#BBH-EMBED-IFRAME"
        ) as HTMLIFrameElement;
        if (iframe?.contentWindow && userData) {
          iframe.contentWindow.postMessage(
            {
              from: "parent-app",
              user_name: userData.name,
              user_email: userData.email,
              user_phone: userData.phone,
              client_id: userData.clientId,
            },
            "*"
          );
          console.log("User data sent to iframe");
        }
      }, 1000);
    }
  }, [page_id]);
};

export default useChatbox;
