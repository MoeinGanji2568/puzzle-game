import { useState } from "react";
import { FcAlarmClock } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";

function App() {
  const [initialCards, setInitialCard] = useState([
    { id: 1, img: <FcAlarmClock />, imageId: 3 },
    { id: 2, img: <FcApproval />, imageId: 1 },
    { id: 3, img: <FcApproval />, imageId: 1 },
    { id: 4, img: <FcAlarmClock />, imageId: 3 },
    { id: 5, img: <FcDislike />, imageId: 2 },
    { id: 6, img: <FcDislike />, imageId: 2 },
  ]);

  const [score, setScore] = useState(0);

  return (
    <>
      <span>{score}</span>
      <div className="flex w-[250px] flex-wrap m-auto bg-slate-400">
        {initialCards.map((card) => {
          return (
            <div
              className="bg-slate-900 h-14 w-14 m-1 text-white cursor-pointer
            flex justify-center items-center rounded-sm"
              key={card.id}
            >
              <div>{card.img}</div>
            </div>
          );
        })}
      </div>
      <div>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </div>
    </>
  );
}

export default App;
