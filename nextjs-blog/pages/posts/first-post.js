import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          // strategy, controls when the third-party script should load. A value of lazyOnload tells Next.js to load this particular script lazily during browser idle time
          strategy="lazyOnload"
          // onLoad is used to run any JavaScript code immediately after the script has finished loading. In this example, we log a message to the console that mentions that the script has loaded correctly
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </Head>
      <Image src="/images/profile.jpg" alt="profile" height={400} width={350} />
      <h1>First Post</h1>
      <Link href="/">Back to home</Link>
    </Layout>
  );
}
