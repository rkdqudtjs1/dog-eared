import "@/styles/globals.css";

import AppleHead from "@/components/Meta/AppleHead";
import Manifest from "@/components/Meta/Manifest";
import GlobalNavigation from "@/components/Navigation/GlobalNavigation";
import QueryClientProvider from "@/components/Provider/QueryClientProvider";
import { ReactNode } from "react";

export const MODAL_ROOT_ID = "modal-root" as const;

type RootLayoutProps = { children: ReactNode };

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="ko">
      <head>
        <Manifest />
        <AppleHead />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <QueryClientProvider>
          <div className="flex flex-col">
            <div className="flex-1 pb-16">{children}</div>
            <GlobalNavigation />
            <div id={MODAL_ROOT_ID} />
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
