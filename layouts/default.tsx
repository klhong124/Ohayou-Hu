import Navbar from "@components/navbar";
import { FC } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}


export default Layout;