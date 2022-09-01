import React, { useState } from "react";
import "./upload.scss";
import ReactModal from "react-modal";
import upload from "../../images/svgs/image-upload.svg";
import { useLocation, Link } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { uploadImage } from "../../features/cats/catSlice";

const Upload = () => {
  const dispatch = useDispatch();
  let isOpen = false;
  const parentSelector = () => document.querySelector(".main-wrapper");
  const pathname = useLocation().pathname;
  pathname === "/gallery/upload" ? (isOpen = true) : (isOpen = false);
  const [file, setFile] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      setFile(
        Object.assign(acceptedFiles[0], {
          preview: URL.createObjectURL(acceptedFiles[0]),
        })
      );
    },
  });

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const image = file.prewiew;
  const fileName = !!file.name
    ? `Image File Name: ${file.name}`
    : "No file selected";
    //upload to server doesn't work, probably backend error;
  const uploadImageHandler = async (file) => {
    const encodedFile = await convertToBase64(file);
    dispatch(uploadImage({ file: encodedFile, sub_id: "my-user-7390" }));
  };
  console.log(image, file);
  return (
    <div className="main-section">
      <ReactModal
        isOpen={isOpen}
        className={"upload-modal"}
        overlayClassName={"overlay"}
        parentSelector={parentSelector}
      >
        <Link className="cancel" to="/gallery">
          <div>
            <span></span>
          </div>
        </Link>
        <h2>Upload a .jpg or .png Cat Image</h2>
        <p>
          Any uploads must comply with the{" "}
          <a href="https://thecatapi.com/privacy" target="blank">
            upload guidelines
          </a>{" "}
          or face detection.
        </p>
        <div className="upload-field-container">
          <div className="upload-field" {...getRootProps()}>
            <div className="uploaded-image-container">
              <input {...getInputProps()} />
              <img
                src={file?.preview || upload}
                alt=""
                className={file?.preview ? "img-preview" : ""}
              />
              <p>
                <span>Drag here</span> your file or{" "}
                <span className="clickable">Click here</span> to upload
              </p>
            </div>
          </div>
          <p>{fileName}</p>
          {file.preview && (
            <button
              className="upload-btn"
              onClick={() => uploadImageHandler(file)}
            >
              UPLOAD PHOTO
            </button>
          )}
        </div>
      </ReactModal>
    </div>
  );
};

export default Upload;
