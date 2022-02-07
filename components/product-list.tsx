import Icon from "@mdi/react";
import { useRef, useState } from "react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";

export default function Layout({ children, subheader }) {
  const section = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const onScroll = () => {
    setShowLeft(section.current.scrollLeft > 0);
    setShowRight(section.current.scrollLeft != section.current.scrollWidth - section.current.clientWidth);
  };

  return (
    <>
      <div className="flex items-start relative group">
        <div className="mx-4">
          <span className="subheader">{subheader}</span>
        </div>
        <div ref={section} onScroll={onScroll} className="flex overflow-x-scroll scrollbar-hide scroll-smooth snap-mandatory snap-x gap-4 ">
          {children}
        </div>
        {showLeft && (
          <button
            onClick={() => {
              section.current.scrollLeft = section.current.scrollLeft - 300;
            }}
            className="group-hover:block hidden left-20 m-1 absolute top-1/2 transform -translate-y-1/2 drop-shadow-lg cursor-pointer"
          >
            <Icon path={mdiChevronLeft} size={1} className="bg-gray-800 rounded-full" color="white" />
          </button>
        )}
        {showRight && (
          <button
            onClick={() => {
              section.current.scrollLeft = section.current.scrollLeft + 300;
            }}
            className="group-hover:block hidden right-0 m-1 absolute  top-1/2 transform -translate-y-1/2 drop-shadow-lg cursor-pointer"
          >
            <Icon path={mdiChevronRight} size={1} className="bg-gray-800 rounded-full" color="white" />
          </button>
        )}
      </div>
    </>
  );
}
