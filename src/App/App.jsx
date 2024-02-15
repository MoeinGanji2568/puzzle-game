import { useEffect, useState } from "react";
import { FcAlarmClock } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";
import { FcLinux } from "react-icons/fc";
import { FcIdea } from "react-icons/fc";
import { FcElectronics } from "react-icons/fc";
function App() {
  const [initialCards, setInitialCard] = useState([
    { id: 12, img: FcElectronics, imageId: 6 },
    { id: 1, img: FcAlarmClock, imageId: 3 },
    { id: 2, img: FcApproval, imageId: 1 },
    { id: 8, img: FcLinux, imageId: 4 },
    { id: 3, img: FcApproval, imageId: 1 },
    { id: 4, img: FcAlarmClock, imageId: 3 },
    { id: 5, img: FcDislike, imageId: 2 },
    { id: 10, img: FcIdea, imageId: 5 },
    { id: 6, img: FcDislike, imageId: 2 },
    { id: 7, img: FcLinux, imageId: 4 },
    { id: 9, img: FcIdea, imageId: 5 },
    { id: 11, img: FcElectronics, imageId: 6 },
  ]);

  const [temp1, setTemp1] = useState(null); //save id
  const [temp2, setTemp2] = useState(null);

  const [showId1, setShowId1] = useState(null); //for show image
  const [showId2, setShowId2] = useState(null);

  const [score, setScore] = useState(0);

  const clickHandler = (cardId, imageId) => {
    if (cardId === showId1) {
      setTemp1(null);
      setShowId1(null);
    } else {
      if (!temp1) {
        setTemp1(imageId);
        setShowId1(cardId);
      } else {
        setTemp2(imageId);
        setShowId2(cardId);
      }
    }
  };

  const gameEngine = () => {
    if (temp1 && temp2) {
      setTimeout(() => {
        if (temp1 === temp2) {
          setInitialCard(initialCards.filter((item) => item.imageId !== temp1));
          setScore((prev) => prev + 1);
        }
        setTemp1(null);
        setTemp2(null);
        setShowId1(null);
        setShowId2(null);
      }, 400);
    }
  };

  console.log(temp1, temp2);

  useEffect(() => {
    gameEngine();
    if (!initialCards.length) alert("YOU WIN :)");
  }, [temp1, temp2]);

  return (
    <>
      <h2 className="text-center p-3 text-2xl">Score : {score}</h2>
      <div
        className="flex w-[750px] flex-wrap m-auto 
      items-center justify-center gap-1 px-3"
      >
        {initialCards.map((card) => {
          return (
            <div
              className="bg-slate-900 h-28 w-1/5 text-white cursor-pointer
            flex justify-center items-center rounded-sm"
              key={card.id}
              onClick={() => {
                clickHandler(card.id, card.imageId);
              }}
            >
              <div
                className={`${
                  showId1 === card.id || showId2 === card.id
                    ? "block"
                    : "hidden"
                }`}
              >
                <card.img className="text-4xl" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-center text-white my-3">
        <button
          className="p-3 bg-sky-700 rounded-sm bg-opacity-80"
          onClick={() => window.location.reload()}
        >
          Reload Game
        </button>
      </div>
      <div className="text-center py-2">Powered By Moein Mohsenzadeh Ganji</div>
    </>
  );
}

export default App;
