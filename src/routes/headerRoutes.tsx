import React from "react";
import { TRoute } from "@/types/route.type";
import DefaultHeaderTemplate from "@/components/templates/DefaultHeader.template";

const headerRoutes: TRoute[] = [
  { path: "/*", element: <DefaultHeaderTemplate /> },
]

export default headerRoutes
