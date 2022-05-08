import Image from "next/image";
import { FC } from "react";

type Props = {};


const Cover: FC<Props> = () => {
    return (
        <div className="cover">
            <Image src="/cover-image.jpeg" layout="fill" objectFit="cover" />
            <div>見字食早餐</div>
        </div>
    );
};

export default Cover;
