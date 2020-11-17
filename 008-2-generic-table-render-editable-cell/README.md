
## Editable Cell: Reusable React Component with Generic Props (Typescript)

This app demonstrate the component for display table of the different data .

### Features
- 1 Display Table Component
- 2 Interface of data type 
- Reuse them with only one component
- Editable Cell

[Live Preview by Codesandbox](https://codesandbox.io/s/github/mildronize/react-apps/tree/master/008-2-generic-table-render-editable-cell)

### Screenshot
![](preview.png)

<!-- more -->

### Usage

```ts
interface Post {
  id: number;
  title: string;
  body: string;
}

const posts: Post[] = [
  { id: 0, title: "Post 1", body: "Post content 1" },
  { id: 1, title: "Post 2", body: "Post content 2" },
];

// useState Hook
const [data, setData] = React.useState(() => users); 

// JSX
<Table<Post>
  setData={setData}
  rows={data}
  columns={[
    { key: "title", title: "Title" },
    { key: "body", title: "Body" },
  ]}
/>

// key is the key of the object 
// title is the display text
```

Specially thanks: https://wanago.io/2020/03/09/functional-react-components-with-generic-props-in-typescript/

Inspire from https://react-table.tanstack.com/docs/examples/editable-data

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

