import React from "react";
import styled from "styled-components";

const ImageLoaderC_ = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  font-size: 18px;
  & label {
    display: inline-block;
    padding: 5px 10px;
    background-color: skyblue;
    color: black;
    border: none;
    border-radius: 10px;

    cursor: pointer;
    transition: all 0.1s ease-out;
    &:hover {
      background-color: #3bb8eb;
    }
    &:active {
      background-color: #1cabe6;
    }
  }
  & span {
    margin-left: 10px;
    display: inline-block;
  }
`;

const ImageLoader = (props) => {
  return (
    <ImageLoaderC_>
      <label htmlFor="image">Select an image</label>
      <input
        type="file"
        id="image"
        name="image"
        onChange={props.onChange}
        accept=".png,.jpg,.jpeg"
      />
      <span>{props.imageName}</span>
    </ImageLoaderC_>
  );
};

export default ImageLoader;
