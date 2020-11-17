import React from "react";

interface HeadProps {
  columns: {
    key: number | symbol | string;
    title: string;
  }[];
}

const Head = ({ columns }: HeadProps) => {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th key={String(column.key)}>{column.title}</th>
        ))}
      </tr>
    </thead>
  );
};

export default Head;
