"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function Menu() {
  const router = useRouter();
  const pathname = usePathname();
  const [delAffFromMan, setDelFromMan] = useLocalStorage<string>(
    "delAffFromMan",
    ""
  );
  const [del6months, setdel6months] = useLocalStorage<string>("del6months", "");
  const [tablesadded, settablesadded] = useLocalStorage<string>(
    "tablesadded",
    ""
  );

  const isRootSelected = pathname === "/" ? "underline" : "";
  const isAnualAllowanceSelected =
    pathname === "/set-anual-allowance" ? "underline" : "";
  const isAnualAllowance0Selected =
    pathname === "/set-anual-allowance-0" ? "underline" : "";
  const isAllDelCourierSelected =
    pathname === "/all-del-courier" ? "underline" : "";
  const isResetDelSelected = pathname === "/reset-del" ? "underline" : "";

  const isDeliverySelected = pathname === "/delivery" ? "underline" : "";
  const isSetPhoneSelected =
    pathname === "/set-phone-number" ? "underline" : "";
  const isResetPhoneSelected =
    pathname === "/reset-phone-number" ? "underline" : "";

  const isOrderItemsSelected = pathname === "/order-items" ? "underline" : "";
  const isDaysSelected = pathname === "/days" ? "underline" : "";
  const isSetSundaySelected =
    pathname === "/set-sunday-closed" ? "underline" : "";
  const isReSetSundaySelected = pathname === "/reset-sunday" ? "underline" : "";

  const isCompanySelected = pathname === "/company" ? "underline" : "";
  const isServicesSelected = pathname === "/services" ? "underline" : "";
  const is6ServicesSelected =
    pathname === "/list-6-months-services" ? "underline" : "";
  const isDEleteRecorsSelected =
    pathname === "/delete-record-added" ? "underline" : "";
  const isNewRecordsSelected =
    pathname === "/new-record-tables" ? "underline" : "";
  const isOrdersSelected = pathname === "/orders" ? "underline" : "";
  const isCountStocksSelected =
    pathname === "/count-products-in-stock" ? "underline" : "";
  const isSetOnSpecialSelected =
    pathname === "/set-product-category" ? "underline" : "";
  const isStocksSelected = pathname === "/stocks" ? "underline" : "";
  const isDelAloFromManSelected =
    pathname === "/delete-all-from-manufacturer" ? "underline" : "";
  const isResetFromManSelected =
    pathname === "/reset-from-manu" ? "underline" : "";
  const isResetProductSelected =
    pathname === "/reset-product" ? "underline" : "";
  const isLowestSalarySelected =
    pathname === "/user-by-salary-low" ? "underline" : "";
  const isCosumersSelected = pathname === "/costumers" ? "underline" : "";
  const isCFindWroadSelected = pathname === "/find-w-road" ? "underline" : "";
  const isAdmToofcSelected =
    pathname === "/adm-to-office-worker" ? "underline" : "";
  const isOfcToAdmSelected =
    pathname === "/office-worker-to-adm" ? "underline" : "";
  const isResetSeoSelected = pathname === "/reset-ceo" ? "underline" : "";
  const isSetSeoSelected = pathname === "/set-ceo" ? "underline" : "";
  const isMoreThan4Selected = pathname === "/more-than-4" ? "underline" : "";

  const isSetProcessingSelected =
    pathname === "/set-orders-proccessing" ? "underline" : "";

  const isSetPayedShipedSelected =
    pathname === "/set-payed-shiped" ? "underline" : "";

  const deleteOrderSixSelected =
    pathname === "/delete-order-6-old" ? "underline" : "";

  const resetOrdersSelected = pathname === "/reset-orders" ? "underline" : "";

  const usersByLeastDAysSelected =
    pathname === "/days-off-ordered" ? "underline" : "";
  const usersBySalarySelected =
    pathname === "/users-by-salary" ? "underline" : "";
  return (
    <div className="flex flex-wrap">
      <div className="text-sm ">
        <div className="p-3 font-medium  text-yellow-600 ">USERS TABLE</div>

        <>
          <div
            onClick={() => router.push(`/?${tablesadded}`)}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600  ${isRootSelected}`}
          >
            SHOW ALL
          </div>
          <div
            onClick={() => router.push(`/set-anual-allowance?${tablesadded}`)}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600  ${isAnualAllowanceSelected}`}
          >
            SET ANUAL ALLOWANCE TO 29
          </div>
          <div
            onClick={() => router.push(`/set-anual-allowance-0?${tablesadded}`)}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600  ${isAnualAllowance0Selected}`}
          >
            SET ANUAL ALLOWANCE TO RANDOM
          </div>
          <div
            onClick={() => router.push(`/users-by-salary?${tablesadded}`)}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600  ${usersBySalarySelected}`}
          >
            ORDER BY HIGHEST SALARY
          </div>
          <div
            onClick={() => router.push(`/user-by-salary-low?${tablesadded}`)}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600  ${isLowestSalarySelected}`}
          >
            ORDER BY LOWEST SALARY
          </div>
          <div
            onClick={() => router.push(`/days-off-ordered?${tablesadded}`)}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600  ${usersByLeastDAysSelected}`}
          >
            ORDER BY LEAST DAYS OFF
          </div>
          <div
            onClick={() => router.push(`/adm-to-office-worker?${tablesadded}`)}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600  ${isAdmToofcSelected}`}
          >
            ADM TO OFFICE WORKER
          </div>
          <div
            onClick={() => router.push(`/office-worker-to-adm?${tablesadded}`)}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600  ${isOfcToAdmSelected}`}
          >
            OFFICE WORKER TO ADM
          </div>
          <div
            onClick={() => router.push(`/more-than-4?${tablesadded}`)}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600  ${isMoreThan4Selected}`}
          >
            MORE THAN 4 YRS WORKING
          </div>
          <div
            onClick={() => router.push(`/set-ceo?${tablesadded}`)}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600  ${isSetSeoSelected}`}
          >
            SET CEO MICHAEL DEAN
          </div>
          <div
            onClick={() => router.push(`/reset-ceo?${tablesadded}`)}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600  ${isResetSeoSelected}`}
          >
            RESET CEO
          </div>
        </>
      </div>
      <div className="text-sm ">
        <div className={`p-3 font-medium text-yellow-600 `}>
          COSTUMERS TABLE
        </div>
        <>
          <div
            onClick={() => router.push(`/costumers?${tablesadded}`)}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isCosumersSelected}`}
          >
            SHOW ALL
          </div>
          <div
            onClick={() => router.push("/find-w-road")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isCFindWroadSelected}`}
          >
            FIND ALL WITH ROAD
          </div>
        </>
      </div>

      <div className="text-sm ">
        <div className={`p-3 font-medium text-yellow-600 `}>ORDERS TABLE</div>

        <>
          <div
            onClick={() =>
              router.push(`/orders?${del6months}${del6months ? "&" : ""}`)
            }
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isOrdersSelected}`}
          >
            SHOW ALL
          </div>
          <div
            onClick={() =>
              router.push(
                `/set-orders-proccessing?${del6months}${del6months ? "&" : ""}`
              )
            }
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isSetProcessingSelected}`}
          >
            SET ALL PROCCESSING
          </div>
          <div
            onClick={() =>
              router.push(
                `/set-payed-shiped?${del6months}${del6months ? "&" : ""}`
              )
            }
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isSetPayedShipedSelected}`}
          >
            SET PAYED SHIPED
          </div>
          <div
            onClick={() => {
              setdel6months("DEL_6_MONTHS=true");
              router.replace(`/delete-order-6-old?DEL_6_MONTHS=true`);
            }}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${deleteOrderSixSelected}`}
          >
            DELETE MORE THAN 6 MONTHS OLD
          </div>
          <div
            onClick={() => {
              setdel6months("DEL_6_MONTHS=false");
              router.replace(`/reset-orders?DEL_6_MONTHS=false`);
            }}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${resetOrdersSelected}`}
          >
            RESET ORDERS
          </div>
        </>
      </div>

      <div className="text-sm ">
        <div className={`p-3 font-medium text-yellow-600 `}>PRODUCTS TABLE</div>
        <>
          <div
            onClick={() =>
              router.push(`/stocks?${delAffFromMan}${delAffFromMan ? "&" : ""}`)
            }
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isStocksSelected}`}
          >
            SHOW ALL
          </div>
          <div
            onClick={() =>
              router.push(
                `/count-products-in-stock?${delAffFromMan}${
                  delAffFromMan ? "&" : ""
                }`
              )
            }
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isCountStocksSelected}`}
          >
            COUNT PRODUCTS
          </div>
          <div
            onClick={() =>
              router.push(
                `/set-product-category?${delAffFromMan}${
                  delAffFromMan ? "&" : ""
                }`
              )
            }
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isSetOnSpecialSelected}`}
          >
            SET CATEGORY ON-SPECIAL
          </div>
          <div
            onClick={() =>
              router.push(
                `/reset-product?${delAffFromMan}${delAffFromMan ? "&" : ""}`
              )
            }
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isResetProductSelected}`}
          >
            RESET CATEGORY ON-SPECIAL
          </div>
          <div
            onClick={() => {
              setDelFromMan("DEL_ALL_FROM_MAN=true");
              router.replace(
                `/delete-all-from-manufacturer?DEL_ALL_FROM_MAN=true${
                  delAffFromMan ? "&" : ""
                }`
              );
            }}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isDelAloFromManSelected}`}
          >
            DELETE-ALL-FROM-{"manufacturer".toLocaleUpperCase()}
          </div>
          <div
            onClick={() => {
              setDelFromMan("DEL_ALL_FROM_MAN=false");
              router.replace(
                `/reset-from-manu?DEL_ALL_FROM_MAN=false${
                  delAffFromMan ? "&" : ""
                }`
              );
            }}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isResetFromManSelected}`}
          >
            RESET-ALL-FROM-{"manufacturer".toLocaleUpperCase()}
          </div>
        </>
      </div>

      <div className="text-sm ">
        <div className={`p-3 font-medium text-yellow-600 `}>DELIVERY TABLE</div>
        <>
          <div
            onClick={() => router.push("/delivery")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isDeliverySelected}`}
          >
            SHOW ALL
          </div>
          <div
            onClick={() => router.push("/all-del-courier")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isAllDelCourierSelected}`}
          >
            SET ALL COURIER
          </div>
          <div
            onClick={() => router.push("/reset-del")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isResetDelSelected}`}
          >
            RESET ALL
          </div>
        </>
      </div>

      <div className="text-sm ">
        <div className={`p-3 font-medium text-yellow-600 `}>
          ORDER_ITEMS TABLE
        </div>
        <>
          <div
            onClick={() => router.push("/order-items")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isOrderItemsSelected}`}
          >
            SHOW ALL
          </div>
        </>
      </div>

      <div className="text-sm ">
        <div className={`p-3 font-medium text-yellow-600 `}>DAYS</div>
        <>
          <div
            onClick={() => router.push("/days")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isDaysSelected}`}
          >
            SHOW ALL
          </div>
          <div
            onClick={() => router.push("/set-sunday-closed")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isSetSundaySelected}`}
          >
            SET SUNDAY CLOSED
          </div>{" "}
          <div
            onClick={() => router.push("/reset-sunday")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isReSetSundaySelected}`}
          >
            RESET SUNDAY
          </div>
        </>
      </div>

      <div className="text-sm ">
        <div className={`p-3 font-medium text-yellow-600 `}>
          {"company_directory".toUpperCase()} TABLE
        </div>
        <>
          <div
            onClick={() => router.push("/company")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isCompanySelected}`}
          >
            SHOW ALL
          </div>
          <div
            onClick={() => router.push("/set-phone-number")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isSetPhoneSelected}`}
          >
            SET OFFICE PHONE NUMBER
          </div>{" "}
          <div
            onClick={() => router.push("/reset-phone-number")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isResetPhoneSelected}`}
          >
            RESET OFFICE PHONE NUMBER
          </div>
        </>
      </div>
      <div className="text-sm ">
        <div className={`p-3 font-medium text-yellow-600 `}>SERVICES</div>
        <>
          <div
            onClick={() => router.push("/services")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isServicesSelected}`}
          >
            SHOW ALL
          </div>
          <div
            onClick={() => router.push("/list-6-months-services")}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${is6ServicesSelected}`}
          >
            LIST 6 MONTHS SERVICES
          </div>
        </>
      </div>
      <div className="text-sm ">
        <div className={`p-3 font-medium text-yellow-600 `}>ACTIONS</div>
        <>
          <div
            onClick={() => {
              settablesadded("SET_ADDED=true"),
                router.push("/new-record-tables");
            }}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isNewRecordsSelected}`}
          >
            {"Add one new record to each table".toUpperCase()}
          </div>
          <div
            onClick={() => {
              router.push("/delete-record-added"),
                settablesadded("SET_ADDED=false");
            }}
            className={`hover:text-blue-800 ml-8 cursor-pointer hover:underline text-blue-600 ${isDEleteRecorsSelected}`}
          >
            {"DELETE ADDED RECORS ADDED"}
          </div>
        </>
      </div>
    </div>
  );
}
