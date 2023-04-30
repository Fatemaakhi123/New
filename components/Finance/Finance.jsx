import React from 'react'
const dataone=[
{
    image:"./assets/images/financing/1.png",
    des:"One Easy Step",
    desc:"You can qualify if you reach your profit goal before you experience your maximum drawdown after seven trading days."
},
{
    image:"./assets/images/financing/2.png",
    des:"Minimum Trading",
    desc:"You can qualify after just seven trading days. A trade day is defined as 6 PM on one day and 5 PM on the following. Holidays with half a trade day count toward the following day."
},{
    image:"./assets/images/financing/3.png",
    des:"Trailing Threshold",
    desc:"ou never have to be concerned about daily drawdown because to our live trailing threshold. This may be followed in real time using the rtrader software we give you."
},{
    image:"./assets/images/financing/4.png",
    des:"Trade 24 hours a day, every day.",
    desc:"From 6 p.m. ET to 4:59 p.m. ET on holidays and throughout the news, you can trade. The deadline for closing trades and canceling pending orders is 4:59 PM ET."
},{
    image:"./assets/images/financing/5.png",
    des:"Position Size Limit",
    desc:"Trading up to the maximum position size is acceptable. Your positions are limited by our system, so you will never be barred from trading additional contracts in funded or evaluation accounts."
},{
    image:"./assets/images/financing/6.png",
    des:"Trading While News",
    desc:"Because you switched from your regular daily system during a news announcement, you won't fail! The use of directional, multi-directional, or pre-news entries for any form of windfall is not permitted in news trading techniques."
},



]
const Finance = () => {
  return (
    <div>
    
    <section className="financing section-padding-bottom">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6 col-md-12 col-12">
            <div className="section-title">
              <h2>Our Trader Financing Program's <span>Advantages</span></h2>
              <p>Traders receive financing after completing one of our evaluation programs successfully. We work hard to give you the best chance to get finance through our own company. This is for traders who don't have the necessary funds or don't want to put their investments at risk.</p>
            </div>
          </div>
          {dataone.map((curElem,index)=>{
        return(
          <div className="col-lg-3 col-md-6 col-12" key={index}>
            <div className="financing_box">
              <div className="financing_icon">
                <img src={curElem.image} alt="financing_icon"/>
              </div>
              <div className="financing_content">
                <h4>{curElem.des}</h4>
                <p>{curElem.desc}</p>
              </div>
            </div>
          </div>)
         })}
       
      
  
 
        </div>
      </div>
    </section>


   )
</div>
  ) 
}

export default Finance;