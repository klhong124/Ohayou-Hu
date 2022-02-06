export default function Layout({ children, subheader }) {
  return (
    <>
      <div className="flex items-start">
        <div className="mx-4">
          <span className="subheader">{subheader}</span>
        </div>
        <div className="slide-group__wrapper">{children}</div>
      </div>
    </>
  );
}
