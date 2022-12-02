import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
import awsExports from "../src/aws-exports";
import "../styles/globals.css";

Amplify.configure({ ...awsExports, ssr: true });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Authenticator.Provider>
      <Component {...pageProps} />
    </Authenticator.Provider>
  );
}
