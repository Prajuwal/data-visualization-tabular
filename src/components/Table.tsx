import React from "react";
import "../style/table.css"; 


interface TableProps {
  data: Array<{
    classNumber: number;
    mean: string;
    median: string;
    mode: string;
  }>;
  title: string;
}

const Table: React.FC<TableProps> = ({ data, title }) => {
  return (
    <div className="table-container">
      <div className="custom-table">
        <h2>{title}</h2>
        <table>
          <thead>
            <tr>
              <th>Measure</th>
              {data.map((row, index) => (
                <th key={index}>Class  {row.classNumber}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Mean</th>
              {data.map((row, index) => (
                <td key={index}>{row.mean}</td>
              ))}
            </tr>
            <tr>
              <th>Median</th>
              {data.map((row, index) => (
                <td key={index}>{row.median}</td>
              ))}
            </tr>
            <tr>
              <th>Mode</th>
              {data.map((row, index) => (
                <td key={index}>{row.mode}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;