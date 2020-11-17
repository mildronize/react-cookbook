import React from "react";
import Head from "./Head";

interface Props<ObjectType> {
  objects: ObjectType[];
  columns: {
    key: keyof ObjectType;
    title: string;
  }[];
}

function Table<ObjectType>({ objects, columns }: Props<ObjectType>) {
  return (
    <div>
      <table >
        <Head columns={columns} />

        <tbody>
          {objects.map((object) => (
            <tr>
              {columns.map((column) => (
                <td key={String(column.key)} >
                  {object[column.key]}
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
