import React, { useState } from "react";
import Link from "next/link";
import stlyes from "../styles/Landing.module.css";
import Head from "next/head";
// import styled from "styled-components";

const Product = () => {
  const info = [
    { name: "Krafton", link: "Kraf", id: 1 },
    { name: "Nexon", link: "Nexon", id: 2 },
    { name: "Kakao", link: "Kakao", id: 3 },
  ];
  const stlyeUrl = stlyes.item_text;
  const [click, setClick] = useState(false);

  info.map((info) => {
    console.log(info);
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100vh",
          with: "100vh",
          padding: "10%",
        }}
      >
        {info.map((info) => (
          <>
            <div
              className={stlyes.item_layout}
              onClick={() => setClick(!click)}
            >
              <Link
                as={`/sample/${info.link}`}
                href={`/sample/${info.link}`}
                key={info.id}
              >
                <a>
                  <h1
                    className={
                      info.id === 1
                        ? stlyes.item_text1
                        : info.id === 2
                        ? stlyes.item_text2
                        : info.id === 3
                        ? stlyes.item_text3
                        : ""
                    }
                  >
                    {info.name}
                  </h1>
                </a>
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
};

export default Product;
