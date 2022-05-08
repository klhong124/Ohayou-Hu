import Image from "next/image";
import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import { FC } from 'react';


type Props = {};

const Navigation: FC<Props> = () => {
  return (
    <nav>
      <div>
        <div>
          <Image className="" src="/logo.png" alt="me" width="32" height="32" />
        </div>
        <div className="flex items-center">
          <button className="mr-2 icon-button">
            <Icon path={mdiCartOutline} size={1} />
          </button>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
