import React from "react";
import Head from "next/head";
import krafstyle from "../../styles/KrafLay.module.css";
import asd from "../../styles/KrafLay.module.css";

const KrafLay = ({ children }) => {
  return (
    <>
      <Head>
        <title>Krafton Page</title>
        <meta keyword="Krafton Page" />
        <meta content="Krafton Page" />
      </Head>
      <div style={asd.app}>{children}</div>
    </>
  );
};

export default KrafLay;
