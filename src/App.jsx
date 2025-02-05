// import React from "react";
// const App=()=>{
//     return(
//         <div>
          

//         </div>
//     )
// }
// export default App;

// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
// import Sidebar1 from "./components/Sidebar1";
// import Sidebar2 from "./components/Sidebar2";
// import Footer from "./components/Footer";

// const App=()=>{
//     return(
//         <div className="app">
//             <Navbar />
//             <Main></Main>
//             <div className="sidebar">
//                 <Sidebar1/>
//                 <Sidebar2/>
//             </div>
//             <Footer/>
//         </div>
//     )
// }
// export default App;

// import React, { Component } from 'react';
// import CBCPropex1 from './props/CBCPropex1';

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <hr/>
//         <CBCPropex1
//         username="Sam"
//         age={25}
//         desig={["developer","tester"]}
//         userDetails={{city:"Hyd",area:"Kompally"}}
//         sendFun={function(){alert("Hi i'm from parent component")}}
//         />
//       </div>
//     )
//   }
// }
// export default App;


import React from 'react'
import PropsChildrenEx from './props/PropsChildrenEx';
import ChildProps from './props/ChildProps';

const App = () => {
  return (
    <div>
      <PropsChildrenEx username="Abcd" company="Meta">
        <h1>The data is passed as props children</h1>
        <ChildProps/>
      </PropsChildrenEx>
    </div>
  )
}

export default App
