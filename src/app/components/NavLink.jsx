"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ label, herf }) {
  const pathName = usePathname();
  return (
    <Link
      href={herf}
      className={` ${pathName === herf ? "border-black" : "border-transparent"} border-b-3 duration-300`}
    >
      {label}
    </Link>
  );
}
