import React, { useState } from "react";
import { readFile, utils } from "xlsx";

export default function GetColumns() {
  const [fileName, setFileName] = useState(null);
  const [columns, setColumns] = useState([]);

  const handleFile = async (e) => {
    const file = e.target.files[0];
    setFileName(file.name);

    // read file
    const data = await file.arrayBuffer();
    const workbook = readFile(data);

    // parse to json
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = utils.sheet_to_json(worksheet, {
      header: 1,
      defval: "",
    });

    // set json columns
    setColumns(jsonData[0]);
  };

  return (
    <div className="App">
      <h3>Get Spreadsheet Headers</h3>
      <h4>Upload your spreadsheet and get column headers in a dropdown menu</h4>
      <input type="file" onChange={(e) => handleFile(e)} />
      {fileName && (
        <p key={`p-${fileName}`}>
          File Name: <span>{fileName}</span>
        </p>
      )}
      <div style={{ margin: "10px" }}>
        <p>
          Columns:{" "}
          <select>
            {columns.map((col, index) => (
              <option value={col} key={index}>
                {col}
              </option>
            ))}
          </select>
        </p>
      </div>
    </div>
  );
}
