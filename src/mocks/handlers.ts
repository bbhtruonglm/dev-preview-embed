import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("*/embed/page/read_page", ({ request }) => {
    return HttpResponse.json({
      data: { type: "landing" },
    });
  }),
];
