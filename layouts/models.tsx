import Icon from "@mdi/react";
import { useRef, useState } from "react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import { FC } from "react";

type Props = {
  children?: JSX.Element | JSX.Element[];
  subheader: string;
};

const Layout: FC<Props> = ({ children, subheader }) => {
  const section = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const onScroll = () => {
    setShowLeft(section.current.scrollLeft > 0);
    setShowRight(section.current.scrollLeft != section.current.scrollWidth - section.current.clientWidth);
  };

  return (
    <div className="models group">
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
          className="left arrow_button"
        >
          <Icon path={mdiChevronLeft} size={1} className="bg-gray-800 rounded-full" color="white" />
        </button>
      )}
      {showRight && (
        <button
          onClick={() => {
            section.current.scrollLeft = section.current.scrollLeft + 300;
          }}
          className="right arrow_button"
        >
          <Icon path={mdiChevronRight} size={1} className="bg-gray-800 rounded-full" color="white" />
        </button>
      )}
    </div>
  );
}
export default Layout;