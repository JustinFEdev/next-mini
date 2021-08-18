import React from "react";
import KrafLay from "../../components/layout/KrafLay";
import Link from "next/link";
import krafstyle from "../../styles/KrafLay.module.css";
import styled from "styled-components";

const Kraf = () => {
  // const goBack = ({ history }) => {
  //   history.push("/");
  // };

  const KrafLayout = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: lightyellow;
  `;
  return (
    <>
      <KrafLayout>
        <div
          style={{
            height: "15%",
            border: "1px solid",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Krafton Web Site</h1>
          <Link href="/" style={{ position: "absolute", float: "right" }}>
            <a>
              <button>뒤로</button>
            </a>
          </Link>
        </div>
        <div>asd</div>
      </KrafLayout>
    </>
  );
};

export default Kraf;
