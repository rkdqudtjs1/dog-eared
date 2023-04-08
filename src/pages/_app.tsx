import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalNavigation from "@/components/Navigation/GlobalNavigation";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col">
        <div className="flex-1 pb-16">
          <Component {...pageProps} />
        </div>
        <GlobalNavigation />
      </div>
    </QueryClientProvider>
  );
}
