import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import styled from "styled-components";
import img from "./images.png";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 80%;
  margin-top: 10px;

  .header {
    position: relative;
    display: flex;
    flex-direction: row;

    .head {
      position: absolute;
      left: 0px;
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 1px;
    }

    .button {
      position: absolute;
      right: 0px;
      padding: 2px 12px 2px;
      color: white;
      font-weight: 600;
      background-color: #0a094f;
    }
  }

  .cardholder {
    display: flex;
    margin-top: 40px;
    border-radius: 20px;
    padding: 10px;
    background-color: #e9ebee;
  }

  @media screen and (max-width: 786px){
    .cardholder{
      flex-direction: column;
    }
  }
`;

function App() {
  return (
    <div className="app">
      <center>

      <FlexContainer>
        <div className="header">
          <div className="head">Suggested Topics</div>
          <div className="button">More</div>
        </div>
        <div className="cardholder">
          <Card
            topic="Geography"
            ques="10 Questions"
            image={img}
            time="2 Hr 30 Min"
          ></Card>
          <Card
            topic="Economics"
            ques="10 Questions"
            image={img}
            time="2 Hr"
          ></Card>
          <Card
            topic="History"
            ques="10 Questions"
            image={img}
            time="2 Hr"
          ></Card>
          <Card
            topic="Politics"
            ques="10 Questions"
            image={img}
            time="2 Hr 30 Min"
          ></Card>
        </div>
      </FlexContainer>
      </center>
      <center>
      <FlexContainer>
        <div className="header">
          <div className="head">Modules</div>
          <div className="button">More</div>
        </div>
        <div className="cardholder">
          <Card
            topic="Computer Graphics"
          ></Card>
          <Card
            topic="Communication System"
          ></Card>
          <Card
            topic="Database Management System"
          ></Card>
          <Card
            topic="Computer Architecture"
          ></Card>
        </div>
      </FlexContainer>
      </center>
      <center>
      <FlexContainer>
        <div className="header">
          <div className="head">Flash Cards</div>
          <div className="button">More</div>
        </div>
        <div className="cardholder">
          <Card
            topic="Chemistry"
          ></Card>
          <Card
            topic="Physics"
          ></Card>
          <Card
            topic="Biology"
          ></Card>
          <Card
            topic="Mathematics"
          ></Card>
        </div>
      </FlexContainer>
      </center>
    </div>
  );
}

export default App;
