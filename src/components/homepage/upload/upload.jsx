import React, { useState } from "react";
import styled from "styled-components";
import ImageLoader from "./imageLoader";
import axios from "axios";
import Spinner from "./spinner";
const UploadC = styled.div`
  color: white;
  /* padding-top: 400px; */
  position: absolute;
  top: 500px;
  left: 50%;
  transform: translateX(-50%);
  /* width: 180px; */
  width: 500px;

  @media screen and (max-width: 600px) {
    width: 200px;
    max-width: 300px;
    top: 300px;
  }

  & form {
    display: flex;
    flex-direction: column;
  }

  & button {
    display: inline-block;
    margin-top: 30px;
    border: none;
    background-color: skyblue;
    color: black;
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
    padding: 5px 10px;
    border-radius: 10px;

    &:hover {
      background-color: #3bb8eb;
    }

    &:active {
      background-color: #1cabe6;
    }
  }
  & .result {
    font-size: 20px;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 20px;
  }
`;

const HomePage = (props) => {
  const [imageName, setImageName] = useState("");
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const onUpload = (e) => {
    setImageName(e.target.files[0] ? e.target.files[0].name : "");
    setImage(e.target.files[0]);
    console.log("selected file: ", e.target.value, e.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submiting the file");
    let formData = new FormData();
    formData.append("image", image);
    if (image) {
      setIsLoading(true);
      axios
        .post("http://127.0.0.1:5000/catOrBird", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setResult(response.data.message);
          setIsLoading(false);
          console.log("response: ", response);
        })
        .catch((error) => {
          console.log("error: ", error);
          setIsLoading(false);
        });
    }
  };

  let resultMessage = <span className="result">{result}</span>;
  if (isLoading === true) {
    resultMessage = <Spinner />;
  }

  return (
    <UploadC>
      <form>
        {/* <Spinner /> */}
        {resultMessage}
        <ImageLoader onChange={onUpload} imageName={imageName} />

        <button onClick={onSubmit}>Submit</button>
      </form>
    </UploadC>
  );
};

export default HomePage;
