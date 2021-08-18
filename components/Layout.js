import React from "react";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Front Page</title>
        <meta keyword="Blog powered by Next.js" />
        <meta content="practice Next.js" />
      </Head>
      <div>{children}</div>
    </>
  );
};

export default Layout;
