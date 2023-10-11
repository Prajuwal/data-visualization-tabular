import '../style/table.css'
const  Table=()=> {
  return (
    <div className="table-container">
      <table className="data-table">
        <tbody>
          {Array.from({ length: 5 }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: 4 }, (_, columnIndex) => (
                <td key={columnIndex} className="cell">
                  Row {rowIndex + 1}, Col {columnIndex + 1}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
