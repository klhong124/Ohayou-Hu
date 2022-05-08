import { FC } from 'react';

type Props = {
  title: string,
  onClick: Function
};

const Tag: FC<Props> = ({ title, onClick }) => {
  return (
    <>
      <button className="tag" onClick={() => onClick}>
        {title}
      </button>
    </>
  );
};

export default Tag;
