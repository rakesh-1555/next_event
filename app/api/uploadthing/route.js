import { createRouteHandler } from "uploadthing/next";
import { UTRouter } from "./core";

export const { GET, POST } = createRouteHandler({
  router: UTRouter,
});
