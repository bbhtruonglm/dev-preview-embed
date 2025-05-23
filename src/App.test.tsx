import { BrowserRouter, MemoryRouter } from "react-router-dom";
import { HttpResponse, http } from "msw";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { render, screen, waitFor } from "@testing-library/react";

import App from "./App";
import { server } from "./mocks/setup";
import useChatbox from "./hooks/useChatbox";

// Mock custom hook useChatbox
vi.mock("./hooks/useChatbox", () => ({
  default: vi.fn(),
}));

describe("App", () => {
  beforeAll(() => server.listen());
  afterEach(() => {
    server.resetHandlers();
    vi.clearAllMocks();
    localStorage.clear();
  });
  afterAll(() => server.close());

  it("renders Home page by default", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // Giả sử Home component hiển thị text "Home"
    expect(screen.getByText(/home/i)).toBeInTheDocument();
  });

  it("renders About page when navigating to /about", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>
    );
    // Giả sử About component hiển thị text "About"
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  it("renders NotFound page for invalid route", () => {
    render(
      <MemoryRouter initialEntries={["/invalid"]}>
        <App />
      </MemoryRouter>
    );
    // Giả sử NotFound component hiển thị text "Not Found"
    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });

  it("fetches page info when page_id is present in URL", async () => {
    render(
      <MemoryRouter initialEntries={["/?page_id=123"]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(useChatbox).toHaveBeenCalledWith(
        expect.objectContaining({
          page_id: "123",
          page_type: "landing",
        })
      );
    });
  });

  it("updates locale from localStorage", async () => {
    localStorage.setItem("locale", "en");

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const storageEvent = new Event("storage");
    localStorage.setItem("locale", "fr");
    window.dispatchEvent(storageEvent);

    await waitFor(() => {
      expect(useChatbox).toHaveBeenCalledWith(
        expect.objectContaining({
          locale: "fr",
        })
      );
    });
  });

  it("handles fetch error gracefully", async () => {
    server.use(
      http.get("*/embed/page/read_page", () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    render(
      <MemoryRouter initialEntries={["/?page_id=123"]}>
        <App />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Failed to fetch public info:",
        expect.any(Error)
      );
    });

    consoleErrorSpy.mockRestore();
  });

  it("calls useChatbox with correct initial parameters", () => {
    localStorage.setItem("locale", "vi");

    render(
      <MemoryRouter initialEntries={["/?page_id=123"]}>
        <App />
      </MemoryRouter>
    );

    expect(useChatbox).toHaveBeenCalledWith(
      expect.objectContaining({
        page_id: "123",
        locale: "vi",
        page_type: "",
      })
    );
  });
});
