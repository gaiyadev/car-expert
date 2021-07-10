import React from "react";
import Navbar from "../../components/default/navbar/navbar";
import Footer from "../../components/default/footer/footer";
import Container from "@material-ui/core/Container";

const Default = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        <Container>
          {children}
        </Container>
          {/* <Footer /> */}
      </main>
    </>
  );
};

export default Default;
