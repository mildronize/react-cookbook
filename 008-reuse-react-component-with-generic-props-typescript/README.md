
## Reusable React Component with Generic Props (Typescript)

This app demonstrate the component for display table of the different data .

### Features
- 1 Display Table Component
- 2 Interface of data type 
- Reuse them with only one component

[Live Preview by Codesandbox](https://codesandbox.io/s/github/mildronize/react-apps/tree/master/008-reuse-react-component-with-generic-props-typescript)

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

// JSX
<Table<Post>
  objects={posts}
  columns={[
    { key: "title", title: "Title" },
    { key: "body", title: "Body" },
  ]}
/>

// key is the key of the object 
// title is the display text
```

Specially thanks: https://wanago.io/2020/03/09/functional-react-components-with-generic-props-in-typescript/


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

