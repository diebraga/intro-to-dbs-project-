"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Menu() {
  const router = useRouter();
  const pathname = usePathname();
  const isRootSelected = pathname === "/" ? "underline" : "";
  const isRolesSelected = pathname === "/roles" ? "underline" : "";
  const isAnualAllowanceSelected =
    pathname === "/set-anual-allowance" ? "underline" : "";
  const isAnualAllowance0Selected =
    pathname === "/set-anual-allowance-0" ? "underline" : "";
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
          <div
            onClick={() => router.push("/set-anual-allowance")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600  ${isAnualAllowanceSelected}`}
          >
            SET ANUAL ALLOWANCE TO 29
          </div>
          <div
            onClick={() => router.push("/set-anual-allowance-0")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600  ${isAnualAllowance0Selected}`}
          >
            SET ANUAL ALLOWANCE TO 0
          </div>
        </>
      </div>
      <div className="text-sm ">
        <div className={`p-3 font-medium text-blue-600 `}>ROLES TABLE</div>

        <>
          <div
            onClick={() => router.push("/roles")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isRolesSelected}`}
          >
            SHOW ALL
          </div>
        </>
      </div>
      <div className="text-sm ">
        <div className={`p-3 font-medium text-blue-600 `}>COSTUMERS TABLE</div>

        <>
          <div
            onClick={() => router.push("/costumers")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isRolesSelected}`}
          >
            SHOW ALL
          </div>
        </>
      </div>
      <div className="text-sm ">
        <div className={`p-3 font-medium text-blue-600 `}>ORDERS TABLE</div>

        <>
          <div
            onClick={() => router.push("/orders")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isRolesSelected}`}
          >
            SHOW ALL
          </div>
        </>
      </div>
    </div>
  );
}
