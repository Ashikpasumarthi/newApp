// import React, { useState, useEffect } from "react";
// // import axios from "axios";

// const App = () => {
//   const [jsonData, setJsonData] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:3001/book').then(response => response.json()).then(result => { setJsonData(result) }).catch(error => {
//       console.error('Error fetching data:', error);
//     });
//   }, []);
//   // .then(response => {
//   //   // const data = JSON.parse(jsonData);
//   //   setJsonData(JSON.parse(response));
//   // })


//   return (
//     <div>
//       { jsonData.length > 0 ? (
//         <div>
//           { jsonData.map((item, index) => (
//             <div key={ index }>
//               { item.title }
//             </div>
//           )) }
//         </div>
//       ) : (
//         <div>Loading...</div>
//       ) }
//       <div>
//         Hello Kaushik !!
//       </div>
//     </div>
//     // <div>Hello Kaushik !!</div>

//   );
// }
// export default App;


import React, { useState, useEffect } from "react";

const App = () => {
  const [jsonData, setJsonData] = useState([]);
  // const [trail, setTrail] = useState([{ "name": "ashik", "age": "25", "city": "kathmandu" }]);

  useEffect(() => {
    fetch('http://localhost:3001/book')
      .then(response => response.json())
      .then(result => {
        console.log('Data from server:', result);
        setJsonData(result);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      { jsonData.length > 0 ? (
        <div>
          { jsonData.map((item, id) => (
            <div key={ id }>{ item.item.title }</div>
          )) }
        </div>
      ) : (
        <div>Loading...</div>
      ) }
      {/* <div>Hello Kaushik !!</div>
      <div>{
        trail.map((item, id) => (
          <div key={ id }>{ item.name }</div>
        ))
      }</div> */}
    </div>
  );
};

export default App;
