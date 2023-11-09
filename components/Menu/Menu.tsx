"use client";
import React, { useState } from "react";

export default function Menu() {
  return (
    <div className="text-blue-600 text-sm ">
      <div className="p-3 font-medium cursor-pointer hover:text-blue-800 hover:underline">
        USERS TABLE
      </div>

      <>
        <div className="hover:text-blue-800 ml-8 cursor-pointer hover:underline">
          SHOW ALL
        </div>
      </>
    </div>
  );
}
