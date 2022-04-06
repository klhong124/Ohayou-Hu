const Tag = ({ title, onClick }) => {
  return (
    <>
      <button className="tag" onClick={onClick}>
        {title}
      </button>
    </>
  );
};

export default Tag;
