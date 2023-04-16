import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import GlobalNavigation from "@/components/Navigation/GlobalNavigation";
import { useRef } from "react";

export const MODAL_ROOT_ID = "modal-root" as const;

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: { refetchOnWindowFocus: false },
      },
    })
  ).current;

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col">
        <div className="flex-1 pb-16">
          <Component {...pageProps} />
        </div>
        <GlobalNavigation />
        <div id={MODAL_ROOT_ID} />
      </div>
    </QueryClientProvider>
  );
}
