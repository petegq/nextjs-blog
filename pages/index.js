import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey, I'm Peter, a software engineer from the UK. You can connect with
          me on{" "}
          <a href="https://twitter.com/heypetegq" target="_blank">
            Twitter
          </a>
          .
        </p>
        <p>
          This is a sample website - you can build a site like this by following
          the <a href="https://nextjs.org/learn">Next.js tutorial</a>.
        </p>
      </section>
    </Layout>
  );
}
