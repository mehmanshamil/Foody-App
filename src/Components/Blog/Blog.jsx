// Blog.js
import React from "react";
import Box from "./Box";



const Blog = () => {
  let boxs=[
    {
      enjoy:"ENJOY EATING",
      icon:"FaFish",
      text:"A small river named Duden flows by their place and supplies itwith the necessary regelialia."
    },
    {
      enjoy:"ENJOY EATING",
      icon:"FaBowlFood",
      text:"A small river named Duden flows by their place and supplies itwith the necessary regelialia."
    },
    {
      enjoy:"ENJOY EATING",
      icon:"IoFastFoodSharp",
      text:"A small river named Duden flows by their place and supplies itwith the necessary regelialia."
    },
    {
      enjoy:"ENJOY EATING",
      icon:"SiIfood",
      text:"A small river named Duden flows by their place and supplies itwith the necessary regelialia."
    },

  ]
  return (
    <>
      <div className="container">
        <div className="row my-5">
          {
            boxs.map((item,id)=>(
              <div className="col-xl-3 col-md-6 col-sm-12" key={id}>
                <Box enjoy={item.enjoy} icon={item.icon} text={item.text}/>
              </div>
            ))
          }
       {/* <Box enjoy={"ENJOY EATING"} icon={"FaFish"} text={"A small river named Duden flows by their place and supplies itwith the necessary regelialia."} />
       <Box enjoy={"ENJOY EATING"} icon={"FaBowlFood"} text={"A small river named Duden flows by their place and supplies itwith the necessary regelialia."} />
       <Box enjoy={"ENJOY EATING"} icon={"IoFastFoodSharp"} text={"A small river named Duden flows by their place and supplies itwith the necessary regelialia."} />
       <Box enjoy={"ENJOY EATING"} icon={"SiIfood"} text={"A small river named Duden flows by their place and supplies itwith the necessary regelialia."} /> */}
        </div>
      </div>
    </>
  );
};

export default Blog;
