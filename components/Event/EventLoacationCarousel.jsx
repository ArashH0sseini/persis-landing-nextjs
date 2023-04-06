import React, { useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const MAX_VISIBILITY = 3;

function EventLoacationCarousel({ children }) {
  const [active, setActive] = useState(1);
  const count = React.Children.count(children);

  return (
    <div className="carousel perspective-5">
      {active > 0 && (
        <button
          className="nav left shadow-lg"
          onClick={() => setActive((i) => i - 1)}
        >
          <ChevronLeftIcon className="w-12 p-1 bg-[#FF821E] rounded-full border-[2px] shadow-lg" />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className="nav right shadow-lg"
          onClick={() => setActive((i) => i + 1)}
        >
          <ChevronRightIcon className="w-12 p-1 bg-[#FF821E] rounded-full border-[2px] shadow-lg" />
        </button>
      )}
    </div>
  );
}

export default EventLoacationCarousel;
