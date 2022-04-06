import Image from "next/image";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";

const navigation = () => {
  return (
    <nav className="bg-white border-b border-gray-200 fixed z-30 w-full">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <Image className="" src="/logo.png" alt="me" width="32" height="32" />
          </div>
          <div className="flex items-center">
            <button className="mr-2 icon-button">
              <Icon path={mdiCartOutline} size={1} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default navigation;
