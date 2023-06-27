import React from "react";
import { useEffect } from "react";
import "../App.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Home({ page, setPage }) {
  function findPage() {
    setPage("home");
  }
  console.log("pagee", page);
  useEffect(() => {
    findPage();
  }, []);
  return (
    <>
      <div className="home">
        <div className="home-textContainer">
          <div className="home-textContainer">
            <p className="job-text">
              Find the job that is <br />
              perfect for <b>you</b>
            </p>

            <div>
              <a style={{ textDecoration: "none" }} href="/basicDetails">
                <Button variant="primary" className="regbtn">
                  Register
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="add"></div>
      <div
        style={{ marginTop: "70px", justifyContent: "space-around" }}
        className="d-flex flex-wrap "
      >
        <Card style={{ width: "18rem", height: "15rem" }}>
          <a
            href="/zuno/"
            target="_blank"
            class="container"
            style={{ textDecoration: "none" }}
          >
            <Card.Img
              variant="top"
              className="cardImg "
              src="https://media.foundit.in/trex/public/theme_3/src/assets/images/landing-page/banner-section/zuno.svg"
            />
            <Card.Body>
              <Card.Title>A Platform For Freshers</Card.Title>
            </Card.Body>
          </a>
        </Card>

        <Card style={{ width: "18rem", height: "15rem" }}>
          <a
            href="/career-services"
            target="_blank"
            class="container"
            style={{ textDecoration: "none" }}
          >
            <Card.Img
              variant="top"
              className="cardImg "
              src="https://media.foundit.in/trex/public/theme_3/src/assets/images/landing-page/banner-section/search.svg"
            />
            <Card.Body>
              <Card.Title>Give Your Job Hunt A Boost</Card.Title>
            </Card.Body>
          </a>
        </Card>

        <Card style={{ width: "18rem", height: "15rem" }}>
          <a
            href="/basicDetails"
            target="_blank"
            class="container"
            style={{ textDecoration: "none" }}
          >
            <Card.Img
              variant="top"
              className="img"
              src="https://www.shutterstock.com/image-vector/we-hiring-now-banner-job-260nw-1550054042.jpg"
            />
            <Card.Body>
              <Card.Title>Create Job Alert</Card.Title>
            </Card.Body>
          </a>
        </Card>
      </div>
    </>
  );
}

export default Home;
