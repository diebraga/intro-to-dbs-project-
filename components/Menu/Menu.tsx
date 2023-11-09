"use client";
import React, { useState } from "react";
import { ApiNameType } from "../HomeWrapper/HomeWrapper";

export default function Menu({
  setApiName,
  apiName,
}: {
  setApiName: React.Dispatch<React.SetStateAction<ApiNameType>>;
  apiName: ApiNameType;
}) {
  const isShowAllUsersActive = apiName === "getAllUsers" ? "underline" : "";
  const isShowAllRolesActive = apiName === "getAllRoles" ? "underline" : "";

  return (
    <div className="flex">
      <div className="text-sm ">
        <div className="p-3 font-medium  text-blue-600 ">USERS TABLE</div>

        <>
          <div
            onClick={() => setApiName("getAllUsers")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isShowAllUsersActive}`}
          >
            SHOW ALL
          </div>
        </>
      </div>
      <div className="text-sm ">
        <div className={`p-3 font-medium text-blue-600 `}>ROLES TABLE</div>

        <>
          <div
            onClick={() => setApiName("getAllRoles")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isShowAllRolesActive}`}
          >
            SHOW ALL
          </div>
        </>
      </div>
    </div>
  );
}
