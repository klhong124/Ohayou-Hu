import Image from "next/image";
import Icon from "@mdi/react";
import { mdiAccountCircleOutline } from '@mdi/js';
import { FC } from 'react';
import Link from "next/link";


type Props = {};

const Navigation: FC<Props> = () => {
  return (
    <nav>
      <div>
        <div>
          <Image className="" src="/logo.png" alt="me" width="32" height="32" />
        </div>
        <div className="flex items-center">
          <Link href="/sign-up" passHref>
            <button className="mr-2 icon-button">
              <Icon path={mdiAccountCircleOutline} size={1} />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
