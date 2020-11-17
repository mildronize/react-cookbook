import React from "react";
import Head from "./Head";

export interface ColumnType<ObjectType> {
  key: keyof ObjectType;
  title: string;
}

export interface Props<ObjectType> {
  rows: ObjectType[];
  columns: ColumnType<ObjectType>[];
  setData: Function;
}


const EditableCell = ({
  value: initialValue,
  row: { rowIndex, rowKey },
  column: { columnKey },
  updateMyData,
}: any) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue)

  const onChange = (e: any) => {
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(rowIndex, columnKey, value, rowKey)
  }

  // If the initialValue is changed external, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <input className="editableCell" value={value} onChange={onChange} onBlur={onBlur} />
}



function Table<ObjectType>({ rows, columns, setData}: Props<ObjectType>) {

  const updateMyData = (rowIndex: any, columnId: any, value: any, rowKey: any) => {
    setData((old: any) =>
      old.map((row: any, index: any) => {
        if (index === rowIndex) {
          console.log(`Updating Row ID: ${rowKey} at data[${rowIndex}][${columnId}] = ${value}`);
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  };

  return (
    <div>
      <table >
        <Head columns={columns} />

        <tbody>
          {rows.map((row: any, index: any) => (
            <tr>
              {columns.map((column) => (
                <td key={String(column.key)} >
                   <EditableCell
                      value={row[column.key]}
                      row={{ rowIndex: index, rowKey: row.id }}
                      column={{ columnKey: column.key }}
                      updateMyData={updateMyData}
                    />
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
