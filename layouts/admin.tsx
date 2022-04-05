import Aside from "../components/aside";

export default function Layout({ children }) {
  return (
    <>
      <main className="flex">
        <Aside />
        <div className="mx-auto w-full">{children}</div>
      </main>
    </>
  );
}
