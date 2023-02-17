import React from "react";

import { QueryClient, QueryClientProvider } from "react-query";

import { ThemedApp } from "@src/application/themed-app";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemedApp />
    </QueryClientProvider>
  );
};
