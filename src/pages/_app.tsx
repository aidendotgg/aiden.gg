import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  let router = useRouter();

  return (
    <>
      <NextSeo
        title={"Aiden.gg"}
        description={"Aiden's personal site"}
        canonical={`https://aiden.gg${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`}
        themeColor={"#2563eb"}
        openGraph={{
          url: `https://aiden.gg${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`,
          title: "Aiden.gg",
          description: "Aiden's personal site",
          images: [
            {
              url: "/me.jpeg",
              alt: "aidendotgg",
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
