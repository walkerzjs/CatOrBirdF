import React, { useState } from "react";
import styled from "styled-components";
import ImageLoader from "./imageLoader";
import axios from "axios";
import Spinner from "./spinner";
const UploadC = styled.div`
  color: white;
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 50px 20px;
  border-radius: 30px;
  @media screen and (max-width: 925px) {
    top: 400px;
  }
  @media screen and (max-width: 600px) {
    width: 350px;
    top: 450px;
  }
  @media screen and (max-width: 390px) {
    width: 100vw;
  }
  @media screen and (max-width: 300px) {
    top: 500px;
    padding-left: 0;
    padding-right: 0;
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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
  }
`;

const ImageC = styled.img`
  width: 224px;
  height: 224px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  visibility: ${(props) => (props.selected === true ? "visible" : "hidden")};

  @media screen and (max-width: 224px) {
    width: 100vw;
    height: 100vw;
  }
`;

const HomePage = (props) => {
  const [imageName, setImageName] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const onUpload = (e) => {
    if (e.target.files[0]) {
      setImageName(e.target.files[0].name);
      setImage(e.target.files[0]);
      setImageUrl(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("image", image);
    if (image && isLoading !== true) {
      setIsLoading(true);
      axios
        .post("https://d25otuver0t3le.cloudfront.net/catOrBird", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          setResult(response.data.message);
          setIsLoading(false);
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
        <ImageC
          selected={imageUrl === "" ? false : true}
          className="selected"
          src={imageUrl}
          alt="selected one"
        />
        {resultMessage}
        <ImageLoader onChange={onUpload} imageName={imageName} />

        <button onClick={onSubmit}>Submit</button>
      </form>
    </UploadC>
  );
};

export default HomePage;
