
// import React from "react";
// // import Image from "next/image";
// import first from "../Images/services/image-cont.png"
// import second from "../Images/services/image-cont-1.png"
// import thurd from "../Images/services/image-cont-2.png"

// import { animatedCounter } from "@/utils";


// const Hello = () => {

//   React.useEffect(() => {
//     const projectsCount = document.getElementById("projectsCount");
//     const clientsCount = document.getElementById("clientsCount");
//     const countriesCount = document.getElementById("countriesCount");
//     if (projectsCount) {
//       animatedCounter(projectsCount, 1000, 500, 0);
//     }
//     if (clientsCount) {
//       animatedCounter(clientsCount, 450, 500, 0);
//     }
//     if (countriesCount) {
//       animatedCounter(countriesCount, 30, 500, 0);
//     }
//   });

//   return (
//     <div className="min-w-full flex flex-col justify-center items-center py-8 px-10 md:py-16 md:px-20">
//       <div className="flex flex-row justify-between items-center w-full  sm:w-[90%] h-auto bg-background rounded-[10px] shadow-[0px_16px_16px_0_rgba(0,120,255,0.06)] px-2 sm:px-10 py-4  md:px-20 md:py-9">
//         <div className="inline-flex gap-2 sm:gap-4 md:gap-6 lg:gap-9">
//           {/* <Image
//             src={"../Images/services/Frame.png"}
//             alt="icon"
//             width={55}
//             height={55}
//             className=" w-8 h-8 md:w-10 md:10 lg:w-14 lg:h-14"
//           /> */}
//           <img src={first} alt="" />
//           <div className="flex flex-col justify-center items-start">
//             <span id="clientsCount" className="text-base sm:text-lg md:xl lg:text-2xl font-bold"></span>
//             <span className="text-highlight text-xs md:text-sm lg:text-base">Clients</span>
//           </div>
//         </div>
//         <span className=" h-14 sm:h-16 md:h-20 lg:h-28 w-[1px] md:w-[2px] bg-gray-100" />
//         <div className="inline-flex gap-2 sm:gap-4 md:gap-6 lg:gap-9">
//           {/* <Image
//             src={"../Images/services/Frame.png"}
//             alt="icon"
//             width={55}
//             height={55}
//             className=" w-8 h-8 md:w-10 md:10 lg:w-14 lg:h-14"
//           /> */}
//           <img src={second} alt="" />
//           <div className="flex flex-col justify-center items-start">
//             <span id="countriesCount" className="text-base sm:text-lg md:xl lg:text-2xl font-bold"></span>
//             <span className="text-highlight text-xs md:text-sm lg:text-base">Countries</span>
//           </div>
//         </div>
//         <span className=" h-14 sm:h-16 md:h-20 lg:h-28 w-[1px] md:w-[2px] bg-gray-100" />
//         <div className="inline-flex gap-2 sm:gap-4 md:gap-6 lg:gap-9">
//           {/* <Image
//             src={"../Images/services/Frame.png"}
//             alt="icon"
//             width={55}
//             height={55}
//             className=" w-8 h-8 md:w-10 md:10 lg:w-14 lg:h-14"
//           /> */}
//           <img src={thurd} alt="" />
//           <div className="flex flex-col justify-center items-start">
//             <span id="projectsCount" className="text-base sm:text-lg md:xl lg:text-2xl font-bold"></span>
//             <span className="text-highlight text-xs md:text-sm lg:text-base">Projects</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hello;
