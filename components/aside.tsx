import Image from "next/image";
import Icon from "@mdi/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { mdiViewDashboard, mdiBarcode, mdiHanger } from "@mdi/js";

const aside = () => {
  const { asPath } = useRouter();

  const ActiveLink = ({ children, href }) => {
    const active = asPath === href;

    return (
      <Link href={href}>
        <div className={`aside-item  ${active ? "text-blue-500" : "text-gray-900"}`}>{children}</div>
      </Link>
    );
  };

  return (
    <aside className="w-64 border-r min-h-screen px-3 flex-shrink-0" aria-label="Sidebar">
      <div className="text-center mb-2">
        <Image src="/logo.png" alt="me" width="92" height="92" />
      </div>

      <ul className="space-y-2">
        <li>
          <ActiveLink href="/admin">
            <Icon path={mdiViewDashboard} size={1} />
            <span className="ml-4">Dashboard</span>
          </ActiveLink>
          <ActiveLink href="/admin/product">
            <Icon path={mdiHanger} size={1} />
            <span className="ml-4">Product</span>
          </ActiveLink>
          <ActiveLink href="/admin/model">
            <Icon path={mdiBarcode} size={1} />
            <span className="ml-4">Models</span>
          </ActiveLink>
        </li>
      </ul>
    </aside>
  );
};

export default aside;
