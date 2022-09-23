import React, { useState } from "react";
import { read, utils } from "xlsx";

export default function ParseExcel() {
  const [fileName, setFileName] = useState(null);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    // display the file name
    setFileName(file.name);

    // read entire excel
    const data = await file.arrayBuffer();
    const workbook = read(data);

    // parse to json
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = utils.sheet_to_json(worksheet);

    // log
    console.log("json data: ", jsonData);
  };

  return (
    <div className="App">
      <h3>Parse Your Excel File</h3>
      <h4>Upload your spreadsheet and display its contents.</h4>
      <input type="file" onChange={(e) => handleFile(e)} />
      {fileName && (
        <p key={`p-${fileName}`}>
          File Name: <span>{fileName}</span>
        </p>
      )}
    </div>
  );
}
