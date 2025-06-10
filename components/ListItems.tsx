import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

type ListItemProps = {
  title: string;
  dependency: string | number;
  href?: string;
  index: number;
};

export default function ListItems({
  title,
  dependency,
  href,
  index,
}: ListItemProps) {
  return (
    <li
      key={title}
      className={`flex justify-between items-center ${index !== 0 && "mt-4"}`}
    >
      <p className="tracking-wider">{title}</p>

      {href ? (
        <Link
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-[#80ebff] italic cursor-pointer hover:text-white transition-all duration-200"
        >
          {dependency.toString().slice(0, 25)}
          <LinkIcon className="w-5 ml-1" />
        </Link>
      ) : (
        <span className="text-[#80ebff] italic">
          {dependency.toString().slice(0, 25)}
        </span>
      )}
    </li>
  );
}
