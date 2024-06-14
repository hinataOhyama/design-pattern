
// import { useState } from "react";

// export const useObserver = () => {
//   const [observers, setObservers] = useState([]);
//   interface Data {
//     textLeft: string;
//     textRight: string;
//   }

//   const subscribe = () => {
//     setObservers();
//   };

//   const unsubscribe = (f) => {
//     setObservers(observers.filter((o) => o !== f));
//   };

//   const notify = () => {
//     console.log("User clicked button!")
//   };

//   return {
//     observers,
//     subscribe,
//     unsubscribe,
//     notify
//   };
// };