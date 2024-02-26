import React from 'react'

function ProjectCard(props) {
  return (
    <div className="container mx-auto py-[50px]">
      <div className="flex flex-col items-center justify-center">
        {/* Cards */}
        <div className="bg-secondary w-[380px] h-[320px] rounded-[20px] lg:w-[1000px] lg:h-[400px] shadow-lg transition duration-300 transform hover:shadow-2xl filter hover:brightness-90">
          <div className="flex flex-col lg:flex-row text-white text-center">
            {/* Image */}
            <div className="lg:px-5 lg:py-[50px] ">
              
            </div>
</div>
<div className="flex flex-col justify-center lg:pr-4 text-white">
              {/* Title */}
              <div className="font-bold text-primaryTextColor text-[30px] lg:mt-[0px] mt-[30px]">
                <h1>Test</h1>
              </div>

              {/* Description */}
              <div className="mt-[10px] text-[20px]">
                <p>Test</p>
              </div>
              </div>
</div>
</div>

     </div>       
   
  );
}

export default ProjectCard