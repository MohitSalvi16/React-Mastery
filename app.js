   import React from "react";
   import ReactDOM from "react-dom/client";
   
   // const heading= React.createElement("h1",{id:"heading"},"Namaste React");

   const root=ReactDOM.createRoot(document.getElementById("root"));


   // console.log(heading);

const elem=<span>React Element</span>;

const Title=()=>(

<h1 className="head">
{elem}
This is a JSX syntax

</h1>
);

const data=10000;

const HeadingComponent=()=>(
    <div>

      <Title/>
      <Title></Title>
      {Title()}
   <h1 id="container" className="new">This is a Function componet</h1>
    </div>
);

   root.render(<HeadingComponent/>);

   console.log(jsxHeading);


   