import React from 'react';
import image from '../assets/overviewgodrejyela.jpg';
import Button from '../components/button/buttonMain';
import { useLeadTracking, LEAD_SOURCES } from '../hooks/useLeadTracking';

// Overview Component
export const Overview = ({ openContactModal }) => {
  const { trackButtonClick } = useLeadTracking();
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
          <span className="font-body font-bold text-xs md:text-lg ">
            Purva Esplanade – Contemporary Living at KIADB
          </span>
          <br />
          
          <span>
            <br /> 
            <p> 
             Purva Esplanade is a large-scale residential enclave by Puravankara, set across 24.5 acres at KIADB. Designed with 8+ high-rise towers rising up to 30 floors with 2 basement levels, the project offers 2,725 thoughtfully planned homes in 2, 3, and 4 BHK configurations, catering to modern urban lifestyles. <p />
            <br/>
            <p> The community features 35+ premium lifestyle amenities, anchored by two expansive clubhouses with a combined area of 1 lakh sq. ft. From wellness and recreation to social spaces, every detail is curated for elevated living. With strong connectivity to key growth corridors and employment hubs, Purva Esplanade presents an ideal blend of comfort, convenience, and long-term value.</p>
            
            </p>

            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => {
                  trackButtonClick(LEAD_SOURCES.OVERVIEW, 'enquire_now', 'Overview Section CTA');
                  openContactModal(LEAD_SOURCES.OVERVIEW);
                }}
              />
          
        </div>

        {/* Image and Download Button Section */}
        <div className="hidden md:flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full h-auto flex justify-center border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Prestige Autumn Leaves"
              className=" w-[420px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
