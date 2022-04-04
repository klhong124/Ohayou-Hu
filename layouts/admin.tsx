import Navbar from "../components/navbar";
import Aside from "../components/aside";

export default function Layout({ children }) {
  return (
    <>
      <main className="flex">
        <Aside />
        <div className="mx-auto">{children}</div>
      </main>
    </>
  );
}
