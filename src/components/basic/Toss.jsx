import { useState } from "react";
import '../dash.css'

const Toss = () => {
  const [angle, setAngle] = useState(0);

  const flipCoin = () => {
    if (Math.random() > 0.5) setAngle((prev) => prev + 180);
    else setAngle((prev) => prev + 360);
  };

  return (
    <div className="admin-container w-full ">
    <h1 className="text-[40px] mx-[50px] my-[10px]">Toss</h1>
      <main className="dashboard-app-container flex items-center justify-center h-[70%] w-full">
        <section>
          <article
            className="tosscoin"
            onClick={flipCoin}
            style={{
              transform: `rotateY(${angle}deg)`,
            }}
          >
            <div></div>
            <div></div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Toss;
