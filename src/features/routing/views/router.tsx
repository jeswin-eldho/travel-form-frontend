import React from "react";

import { createBrowserRouter } from "react-router-dom";

import { Form, Submissions } from "@features/form/views/";
import { NotFound } from "@features/routing/views/not-found";
import { Root } from "@features/routing/views/root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "form-data",
        element: <Submissions />,
      },
    ],
  },
]);
