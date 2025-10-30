   import React from "react";
   import ReactDOM from "react-dom/client";
   
   const parent=React.createElement("div",
      {id: "Parent"},
      [React.createElement("div",{id: "child"}, 
         [React.createElement("h1",{}, "this is changed line"),
            React.createElement("h2",{}, "I'm a h2 tag")])],

      [React.createElement("div",{id: "child"}, 
         [React.createElement("h1",{}, "I'm a h1 tag"),
            React.createElement("h2",{}, "I'm a h2 tag")]),])
   
   //const heading=React.createElement("h1", {id: "heading"},"This is a React test");

   const root=ReactDOM.createRoot(document.getElementById("root"));

   console.log(parent);
   root.render(parent);