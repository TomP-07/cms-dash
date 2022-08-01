import React from 'react';
import { getReactIconComponent } from 'utils/icons';

function TableList() {
  const AccountSVG = getReactIconComponent('account');
  return (
    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-lg">
      <header className="border-b border-slate-100 px-5 py-4">
        <h2 className="font-semibold text-slate-800">Table List #1</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            {/* Table header */}
            <thead className="rounded-sm bg-slate-50 text-xs uppercase text-slate-400">
              <tr>
                <th className="p-2">
                  <div className="text-left font-semibold">Source</div>
                </th>
                <th className="p-2">
                  <div className="text-center font-semibold">Data #1</div>
                </th>
                <th className="p-2">
                  <div className="text-center font-semibold">Data #2</div>
                </th>
                <th className="p-2">
                  <div className="text-center font-semibold">Profits</div>
                </th>
                <th className="p-2">
                  <div className="text-center font-semibold">Costs</div>
                </th>
                <th className="p-2">
                  <div className="text-center font-semibold">% Profit</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="divide-y divide-slate-100 text-sm font-medium">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <AccountSVG
                      className="mr-2 shrink-0 rounded-full bg-slate-300 p-1 sm:mr-3"
                      width="36"
                      height="36"
                    />
                    <div className="text-slate-800">Source #1</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.7K</div>
                </td>
                <td className="p-2">
                  <div className="text-center">327</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$7,216</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">-$1,231</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">12.7%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <AccountSVG
                      className="mr-2 shrink-0 rounded-full bg-slate-300 p-1 sm:mr-3"
                      width="36"
                      height="36"
                    />

                    <div className="text-slate-800">Source #2</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.2K</div>
                </td>

                <td className="p-2">
                  <div className="text-center">98</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$2,151</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">-$1,527</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">3.2%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <AccountSVG
                      className="mr-2 shrink-0 rounded-full bg-slate-300 p-1 sm:mr-3"
                      width="36"
                      height="36"
                    />

                    <div className="text-slate-800">Source #3</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.3K</div>
                </td>

                <td className="p-2">
                  <div className="text-center">168</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$5,212</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">-$1,107</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">9.4%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <AccountSVG
                      className="mr-2 shrink-0 rounded-full bg-slate-300 p-1 sm:mr-3"
                      width="36"
                      height="36"
                    />

                    <div className="text-slate-800">Source #4</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.0K</div>
                </td>

                <td className="p-2">
                  <div className="text-center">274</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$4,152</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">-$877</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">11.5%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <AccountSVG
                      className="mr-2 shrink-0 rounded-full bg-slate-300 p-1 sm:mr-3"
                      width="36"
                      height="36"
                    />
                    <div className="text-slate-800">Source #5</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">0.6K</div>
                </td>

                <td className="p-2">
                  <div className="text-center">58</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$1,310</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">-$987</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">1.9%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <AccountSVG
                      className="mr-2 shrink-0 rounded-full bg-slate-300 p-1 sm:mr-3"
                      width="36"
                      height="36"
                    />
                    <div className="text-slate-800">Source #6</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.7K</div>
                </td>
                <td className="p-2">
                  <div className="text-center">327</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$7,216</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">-$1,231</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">12.7%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <AccountSVG
                      className="mr-2 shrink-0 rounded-full bg-slate-300 p-1 sm:mr-3"
                      width="36"
                      height="36"
                    />
                    <div className="text-slate-800">Source #7</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">0.6K</div>
                </td>

                <td className="p-2">
                  <div className="text-center">58</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$1,310</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">-$987</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">1.9%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <AccountSVG
                      className="mr-2 shrink-0 rounded-full bg-slate-300 p-1 sm:mr-3"
                      width="36"
                      height="36"
                    />

                    <div className="text-slate-800">Source #8</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">2.3K</div>
                </td>

                <td className="p-2">
                  <div className="text-center">168</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$5,212</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">-$1,107</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">9.4%</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <AccountSVG
                      className="mr-2 shrink-0 rounded-full bg-slate-300 p-1 sm:mr-3"
                      width="36"
                      height="36"
                    />

                    <div className="text-slate-800">Source #9</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">1.2K</div>
                </td>

                <td className="p-2">
                  <div className="text-center">98</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">$2,151</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">-$1,527</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">3.2%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableList;
