import React, { useState, useEffect } from 'react';
// import axios from 'axios';

export default function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };

useEffect(() => {
  // fetch("https://localhost:7042/api/stock")
  // .then(res=>res.json())
  // .then(res=>console.log(res))
}, [])
 

  const handleUpload = () => {
    const formData = new FormData();
    // formData.append('file', selectedFile);

    // axios.post('http://localhost:3001/upload', formData)
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.error('Error uploading file: ', error);
    //   });
  };

  return (
    <div>
      {/* <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button> */}
    </div>
  );
}