import React from "react";
import Layout from "@theme/Layout";

export default function Hello() {
  return (
    <Layout title="new Demo Page" description="Hello React Page">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>
          A new demo page created and save to reload.
        </p>
      </div>
    </Layout>
  );
}