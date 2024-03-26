/* eslint-disable react/no-unescaped-entities */
import { HoverEffectCard } from "@/(Components)/Hover";
import { HoverEffect } from "@/(Components)/HoverEffect";
import { FaQuoteLeft } from "react-icons/fa";

const Service = () => {
  const data = [
    {
      img: "./icon2/service.jpg",
      title: "Car Service Centres",
      description:
        "Our Thunder Profimaster Lift and related accessories are designed to suit for all kind of car service centres / Garages",
    },
    {
      img: "./icon2/shop.jpg",
      title: "Body Shops Repair",
      description:
        "Thunder Profimaster 3000 is a perfect tools to access the vehicles in different angles for all kinds of body shop works.",
    },
    {
      img: "./icon2/tyre.jpg",
      title: "Tyre Shops",
      description:
        "A substitute for the manual hydraulic floor jack by our motorised Floor jack for all kinds of tyre shop services.",
    },
    {
      img: "./icon2/accessory.jpg",
      title: "Car Spa's / Accessories Shop",
      description:
        "Suits for almost every service areas like Foiling, Polishing, Reverse Sensor Mounting and Neon Light fixing etc",
    },
  ];

  return (
    // <div className="w-full min-h-[50vh] text-center p-10 sm:p-20  rounded text-color3">
    //   <h1 className="uppercase mb-6 sm:mb-8 text-color4  font-Mont text-3xl sm:text-4xl  font-bold tracking-tighter">
    //     Suitable For
    //   </h1>
    //   <p className="text-2xl font-Mont">
    //     Thunder Profimaster 3000 suitable for the following segments
    //   </p>

    //   <HoverEffect items={data} />
    // </div>
    <div>
      <div className="flex items-start max-w-5xl mx-auto  my-6 xs:my-2 text-center p-7 sm:p-12 bg-white rounded-xl shadow-xl border border-gray-200 ">
        <FaQuoteLeft className="text-9xl text-orange-400" />
        <p className="text-xl capitalize sm:text-4xl mt-2 text-color4/90 font-bold font-Mont">
          Thunder Auto is the Pioneer in Redefining Vechicle lifting
          solutions in India.
        </p>
      </div>
      <div className="bg-gray-200 w-full px-4 py-6">
        <h1 className="pt-8 text-center mb-4 sm:mb-4 text-orange-400  font-Mont text-4xl sm:text-3xl px-4 font-bold tracking-tighter">
          Applications across the Auto Segments
        </h1>
        <p className="font-medium font-Mont text-2xl px-4 text-center">
          Harness the power of innovation for every vehicle's touchpoint.
        </p>
        <HoverEffectCard items={data} />
      </div>
    </div>
  );
};

export default Service;
