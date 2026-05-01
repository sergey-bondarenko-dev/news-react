import { generatePath } from "react-router-dom";

export const routes = {
  main: {
    path: "/",
    to: () => "/",
  },
  newsDetails: {
    path: "/news/:id",
    to: (id: string | number) =>
      generatePath("/news/:id", { id: String(id) }),
  },
};
