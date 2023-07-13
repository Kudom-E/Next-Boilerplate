"use client";

import React, { useEffect, useState } from "react";
import DataTable from "../components/dashboard/DataTable";
import Pagination from "../components/dashboard/Pagination";
import { tableData, tableData2 } from "../dashboard/data/TableData";

const Tables = () => {
  // first table navigations
  const [activePageTable1, setActivePageTable1] = useState(0);
  const [lastDataTable1, setLastDataTable1] = useState(0);

  const pageSizeTable1 = 10;

  const firstDataTable1 = lastDataTable1 - pageSizeTable1;

  const filteredDataTable1 = tableData.data.slice(
    firstDataTable1,
    lastDataTable1
  );

  const displayDataTable1 = { ...tableData, data: filteredDataTable1 };

  const pageNumbers = Array.from(
    { length: tableData.data.length / pageSizeTable1 },
    (_, index) => index + 1
  );

  useEffect(() => {
    setLastDataTable1((activePageTable1 + 1) * pageSizeTable1);
  }, [activePageTable1]);

  // second table navigations
  const [activePageTable2, setActivePageTable2] = useState(0);
  const [lastDataTable2, setLastDataTable2] = useState(0);

  const pageSizeTable2 = 4;

  const firstDataTable2 = lastDataTable2 - pageSizeTable2;

  const filteredDataTable2 = tableData2.data.slice(
    firstDataTable2,
    lastDataTable2
  );

  const displayDataTable2 = { ...tableData2, data: filteredDataTable2 };

  const pageNumbersTable2 = Array.from(
    { length: tableData2.data.length / pageSizeTable2 },
    (_, index) => index + 1
  );

  useEffect(() => {
    setLastDataTable2((activePageTable2 + 1) * pageSizeTable2);
  }, [activePageTable2]);

  return (
    <section>
      <section>
        <div className="rounded-[6px] bg-[rgba(var(--secondary-color-rgb),1)] px-5 px-5 sm:py-10">
          <h3 className="text-2xl">Tables</h3>
          <h4 className="mt-3 text-[rgba(var(--text-color-rgb),.5)]">
            All the tables will be displayed here
          </h4>
        </div>
      </section>
      <div className="w-[100%] rounded-[6px] py-4 pb-0 sm:pt-10 sm:pb-0">
        <div className="border-[.5px] border-[rgba(var(--text-color-rgb),.5)] bg-[rgba(var(--secondary-color-rgb),1)] rounded-[6px] p-5">
          <div className="flex justify-between items-center px-2">
            <div className="text-[rgba(var(--text-color-rgb),1)]">
              <h3>Trades</h3>
            </div>
            <div>
              {/* <button className="h-full px-5 md:px-8 py-2 bg-[rgba(var(--primary-color-rgb),1)] rounded-[6px] text-white cursor-default">
                See all
              </button> */}
            </div>
          </div>
          <DataTable tableData={displayDataTable1} />
          {!(tableData.data.length <= 10) && (
            <Pagination
              pages={pageNumbers}
              activePage={activePageTable1}
              setActivePage={setActivePageTable1}
            />
          )}
        </div>
      </div>

      <div className="w-[100%] rounded-[6px] py-4 sm:py-10">
        <div className="border-[.5px] border-[rgba(var(--text-color-rgb),.5)] bg-[rgba(var(--secondary-color-rgb),1)] rounded-[6px] p-5">
          <div className="flex justify-between items-center px-2">
            <div className="text-[rgba(var(--text-color-rgb),1)]">
              <h3>Trades</h3>
            </div>
            <div>
              {/* <button className="h-full px-5 md:px-8 py-2 bg-[rgba(var(--primary-color-rgb),1)] rounded-[6px] text-white cursor-default">
                See all
              </button> */}
            </div>
          </div>
          <DataTable tableData={displayDataTable2} />
          {!(tableData.data.length <= 10) && (
            <Pagination
              pages={pageNumbersTable2}
              activePage={activePageTable2}
              setActivePage={setActivePageTable2}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Tables;
