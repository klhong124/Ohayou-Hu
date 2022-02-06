export default function Layout({ children, subheader }) {
  return (
    <>
      <div className="flex items-start ">
        <div className="mx-4">
          <div className="subheader">{subheader}</div>
        </div>
        <div className="flex overflow-hidden ">{children}</div>
      </div>
    </>
  );
}
