"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter();
  const pathname = usePathname();
  const isRootSelected = pathname === "/" ? "underline" : "";
  const isRolesSelected = pathname === "/" ? "underline" : "";

  return (
    <div className="flex">
      <div className="text-sm ">
        <div className="p-3 font-medium  text-blue-600 ">USERS TABLE</div>

        <>
          <div
            onClick={() => router.push("/")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600  ${isRootSelected}`}
          >
            SHOW ALL
          </div>
        </>
      </div>
      <div className="text-sm ">
        <div className={`p-3 font-medium text-blue-600 `}>ROLES TABLE</div>

        <>
          <div
            onClick={() => router.push("/roles")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isRolesSelected}}`}
          >
            SHOW ALL
          </div>
        </>
      </div>
    </div>
  );
}
