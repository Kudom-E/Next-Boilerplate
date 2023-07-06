import React from "react";
import { TableData } from "../../../../../typings";

type Props = {
  tableData: TableData;
};

const DataTable = ({ tableData }: Props) => {
  return (
    <section className="mt-8 overflow-x-auto">
      <table className="table-auto w-full bg-[rgba(var(--base-background-rgb),.5)] shadow rounded">
        <thead>
          <tr>
            {tableData.headers.map((head, index) => {
              return (
                <th
                  data-testid="header"
                  className={`pl-6 py-6 ${
                    index === tableData.headers.length - 1 ? "pr-6" : ""
                  }`}
                  key={index}
                >
                  <a
                    className="flex items-center text-xs text-[rgba(var(--text-color-rgb),1)]"
                    href="#"
                  >
                    <p>{head}</p>
                    <svg
                      className="ml-1 w-2 h-3"
                      width="9"
                      height="12"
                      viewBox="0 0 9 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.85956 7.52666L4.99956 10.3933L2.13956 7.52666C2.01403 7.40113 1.84376 7.3306 1.66623 7.3306C1.48869 7.3306 1.31843 7.40113 1.1929 7.52666C1.06736 7.6522 0.996835 7.82246 0.996835 8C0.996835 8.17753 1.06736 8.34779 1.1929 8.47333L4.52623 11.8067C4.65114 11.9308 4.82011 12.0005 4.99623 12.0005C5.17235 12.0005 5.34132 11.9308 5.46623 11.8067L8.79956 8.47333C8.86172 8.41117 8.91103 8.33738 8.94467 8.25616C8.97831 8.17495 8.99562 8.0879 8.99562 8C8.99562 7.91209 8.97831 7.82504 8.94467 7.74383C8.91103 7.66262 8.86172 7.58882 8.79956 7.52666C8.7374 7.4645 8.66361 7.4152 8.5824 7.38156C8.50118 7.34792 8.41414 7.3306 8.32623 7.3306C8.23832 7.3306 8.15128 7.34792 8.07006 7.38156C7.98885 7.4152 7.91506 7.4645 7.8529 7.52666H7.85956ZM2.13956 4.47333L4.99956 1.60666L7.85956 4.47333C7.98447 4.5975 8.15344 4.66719 8.32956 4.66719C8.50569 4.66719 8.67465 4.5975 8.79956 4.47333C8.92373 4.34842 8.99342 4.17945 8.99342 4.00333C8.99342 3.82721 8.92373 3.65824 8.79956 3.53333L5.46623 0.199997C5.40425 0.137511 5.33052 0.0879151 5.24928 0.0540694C5.16804 0.0202236 5.0809 0.00279808 4.9929 0.00279808C4.90489 0.00279808 4.81775 0.0202236 4.73651 0.0540694C4.65527 0.0879151 4.58154 0.137511 4.51956 0.199997L1.18623 3.53333C1.06158 3.65975 0.992251 3.83051 0.993501 4.00804C0.994751 4.18558 1.06648 4.35534 1.1929 4.48C1.31932 4.60465 1.49008 4.67397 1.66761 4.67272C1.84514 4.67147 2.01491 4.59975 2.13956 4.47333Z"
                        fill="#67798E"
                      ></path>
                    </svg>
                  </a>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.data.map((data, index) => {
            return (
              <tr
                data-testid="data-row"
                className={`text-xs ${
                  index % 2 == 0
                    ? "bg-[rgba(var(--base-background-rgb),1)]"
                    : "bg-[rgba(var(--base-background-rgb),.2)]"
                }`}
                key={index}
              >
                {Object.values(data).map((item, itemIndex) => {
                  return (
                    <td
                      data-testid="data-column"
                      className={`pl-6 py-6 ${
                        itemIndex === Object.values(data).length - 1
                          ? "pr-4"
                          : ""
                      }`}
                      key={itemIndex}
                    >
                      {item}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default DataTable;
