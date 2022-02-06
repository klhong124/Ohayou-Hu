import Image from "next/image";
import Icon from "@mdi/react";
import { mdiCartOutline, mdiMenu } from "@mdi/js";

const navigation = () => {
  return (
    <nav className="flex justify-between px-6">
      <button className="">
        <Icon path={mdiMenu} size={1} />
      </button>

      <Image className="" src="/logo.png" alt="me" width="92" height="92" />

      <button className="">
        <Icon path={mdiCartOutline} size={1} />
      </button>
    </nav>
  );
};

export default navigation;
