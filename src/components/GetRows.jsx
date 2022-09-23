import React, { useState } from "react";
import { readFile, utils } from "xlsx";

export default function GetRows() {
  const [fileName, setFileName] = useState(null);
  const [numRows, setNumRows] = useState(0);

  const getRows = (e) => {
    setNumRows(e.target.value);
  };

  const handleFile = async (e) => {
    const file = e.target.files[0];
    // display the file name
    if (!file || file.length === 0) return;
    setFileName(file.name);

    // read four rows
    const data = await file.arrayBuffer();
    // const workbook = readFile(data, { sheetRows: 5 });
    const workbook = readFile(data, { sheetRows: numRows });

    // parse to json
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = utils.sheet_to_json(worksheet);

    // log
    console.log("json data: ", jsonData);
  };

  return (
    <div className="App">
      <h3>Get Spreadsheet Rows</h3>
      <h4>
        Enter the number of rows to retreive (header included) then pload your
        spreadsheet
      </h4>
      {fileName && (
        <p key={`p-${fileName}`}>
          File Name: <span>{fileName}</span>
        </p>
      )}
      <input
        type="number"
        placeholder="number of rows"
        onChange={(e) => getRows(e)}
      />
      <input type="file" onChange={(e) => handleFile(e)} />
    </div>
  );
}
