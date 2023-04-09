//  USEEFFECT AND USESTATE HOOKS USING API :=>
// building Mars Rover image project using Api :=>

function App(){
    const[mars, setMars] = useState({photos:[]});
  
    useEffect(() => {
      fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
      .then(response => response.json())
      .then(data => {
        setMars(data)
      })
    },[])
  
    return(
      <div className="container-fluid">
  <h1 className='d-flex justify-content-center'>Mars Planet Information</h1>
  
  <table className='table table-hover'>
    <thead>
      <tr>
        <th>Photo Id</th>
        <th>Image</th>
        <th>Camera Name</th>
        <th>Rover Name</th>
        <th>Rover Landing Date</th>
      </tr>
    </thead>
    <tbody>
        {
          mars.photos.map((item) => 
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <img width="200" height="200" src={item.img_src}/>
                </td>
                <td>{item.camera.full_name}</td>
                <td>{item.rover.name}</td>
                <td>{item.rover.landing_date}</td>
              </tr>
          )
        }
    </tbody>
  </table>
  
  
      </div>
    )
  }
  export default App;

// Another project on Mars rover using Api :=>
//   import { useState, useEffect } from "react";
// import "./nasa.component.css";

// function NasaComponent()
// {
//     const [mars, setMars] = useState({photos:[]});

//     useEffect(()=>{
//         fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
//         .then(response=> response.json())
//         .then(data=> {
//             setMars(data);
//         })
//     },[])

//     return(
//         <div className="container-fluid">
//             <h2>Mars Rover Photos  </h2>
//             <div className="d-flex flex-wrap">
//                 {
//                     mars.photos.map((item)=>
//                       <div key={item.id} className="card m-2 p-2">
//                          <img src={item.img_src} height="200" className="card-img-top" />
//                          <div className="card-body">
//                             <dl>
//                                 <dt>Camera Name</dt>
//                                 <dd>{item.camera.full_name}</dd>
//                                 <dt>Rover Name</dt>
//                                 <dd>{item.rover.name}</dd>
//                             </dl>
//                          </div>
//                       </div>
//                     )
//                 }
//             </div>
//         </div>
//     )
// }

// export default NasaComponent;