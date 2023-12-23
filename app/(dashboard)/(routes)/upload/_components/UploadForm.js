"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Upload } from "lucide-react";
import AlertMessage from "./AlertMessage";
import FilePreview from "./FilePreview";

const UploadForm = () => {
  const [file, setFile] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const onFileSelect = (file) => {
    if (file && file.size > 2 * 1024 * 1024) {
      setErrorMsg("Maximum File Upload Size is 2MB");
      return;
    }
    setErrorMsg(null);
    setFile(file);
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center w-full">
        <label
          for="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Upload size={40} className="text-primary pb-2" />
            <p className="mb-2 text-sm text-gray-500">
              <span className="font-semibold">Click to upload</span> or{" "}
              <strong className="text-primary">drag</strong> and
              <strong className="text-primary"> drop</strong>
            </p>
            <p className="text-xs text-gray-500">
              SVG, PNG, JPG or GIF (Max Size: 2MB)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(event) => onFileSelect(event.target.files[0])}
          />
        </label>
      </div>
      {errorMsg ? <AlertMessage msg={errorMsg} /> : ""}
      {file ? <FilePreview file={file} removeFile={() => setFile(null)}/> : "" }
      <button
        disabled={!file}
        className="p-2 bg-primary text-white w-[30%] rounded-full m-5 disabled:bg-gray-500"
      >
        Upload
      </button>
    </div>
  );
};

export default UploadForm;
