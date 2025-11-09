   import React from "react";
   import ReactDOM from "react-dom/client";
   
   // const heading= React.createElement("h1",{id:"heading"},"Namaste React");

   const root=ReactDOM.createRoot(document.getElementById("root"));


   // console.log(heading);

   const jsxHeading=(<h1 className="head">
      This is a JSX syntax
      </h1>);

   root.render(jsxHeading);

   console.log(jsxHeading);


   