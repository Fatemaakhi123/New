// import React from 'react'
// const data=[
//     {
//       image:"./assets/images/counter/1.png",
//       num:"$712488",
//       def:"Average Monthly Compensation To Customers Since January Of 2022"
//     },
//     {
//       image:"./assets/images/counter/2.png",
//       num:"$9262348",
//       def:"Total Compensation To Customers Since 2022"
//     }, 
//     {
//       image:"./assets/images/counter/3.png",
//       num:"$18834",
//       def:"Total Price Action (PA's) Funded In The Last Month"
//     }
    
//     ]
// const Counter = () => {
//   return (
//     <div>
//  {data.map((curElem)=>{
//       return(
// <div classNameName="counter">
//       <div classNameName="container">
//         <div classNameName="row g-4">
//           <div classNameName="col-lg-4 col-md-4 col-12">
//             <div classNameName="counter_item">
//               <div classNameName="counter_item-inner">
//                 <div classNameName="counter_icon">
//                   <img src={curElem.image} alt="counter_icon"/>
//                 </div>
//                 <div classNameName="counter_content">
//                   <h4>{curElem.num}</h4>
//                   <p>{curElem.def}</p>
//                 </div>
//               </div>
//             </div>
//           </div>
          
//         </div>
//       </div>
//     </div>
//       )})}

      

//     </div>
//   )
// }

// export default Counter

import React from 'react'

const Counter = () => {
  return (
    <div>
<div className="counter">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-4 col-12">
            <div className="counter_item">
              <div className="counter_item-inner">
                <div className="counter_icon">
                  <img src="./assets/images/counter/1.png" alt="counter_icon"/>
                </div>
                <div className="counter_content">
                  <h4>$712488</h4>
                  <p>Average Monthly Compensation To Customers Since January Of 2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="counter_item">
              <div className="counter_item-inner">
                <div className="counter_icon">
                  <img src="./assets/images/counter/2.png" alt="counter_icon"/>
                </div>
                <div className="counter_content">
                  <h4>$9262348</h4>
                  <p>Total Compensation To Customers Since 2022</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-12">
            <div className="counter_item">
              <div className="counter_item-inner">
                <div className="counter_icon">
                  <img src="./assets/images/counter/3.png" alt="counter_icon"/>
                </div>
                <div className="counter_content">
                  <h4>$18834</h4>
                  <p>Total Price Action (PA's) Funded In The Last Month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>






    </div>
  )
}

export default Counter


