"use client";

import { ReactNode, useState } from "react";
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "react-query";

type QueryClientProviderProps = {
  children: ReactNode;
};

const QueryClientProvider = ({ children }: QueryClientProviderProps) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: { refetchOnWindowFocus: false },
      },
    })
  );

  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  );
};

export default QueryClientProvider;
