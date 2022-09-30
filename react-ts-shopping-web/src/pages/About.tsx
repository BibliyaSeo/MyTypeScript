import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";

const About = () => {
  const headers = {
    headers: {
      "Content-type": "application/json",
    },
  };
  const callAxios = () => {
    axios
      .get(
        "http://1.255.4.104:9090/ajax/recruit/member/getExamSelectAjax.do?lang=KR&type=HIRE_LANGUAGE_TYPE10&val=1",
        headers
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <>
      <h1>About</h1>
      <Button onClick={callAxios}>Click</Button>
    </>
  );
};

export default About;
