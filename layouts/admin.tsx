import Aside from "../components/aside";

export default function Layout({ children }) {
  return (
    <>
      <main className="flex">
        <Aside />
        <div className="mx-auto p-4 grow">
          <div className="relative">{children}</div>
        </div>
      </main>
    </>
  );
}
