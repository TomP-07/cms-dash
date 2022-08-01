import React from 'react';

function TimeList() {
  return (
    <div className="col-span-full rounded-sm border border-slate-200 bg-white shadow-lg xl:col-span-6">
      <header className="border-b border-slate-100 px-5 py-4">
        <h2 className="font-semibold text-slate-800">Time-Ordered List #1</h2>
      </header>
      <div className="p-3">
        {/* Card content */}
        {/* "Today" group */}
        <div>
          <header className="rounded-sm bg-slate-50 p-2 text-xs font-semibold uppercase text-slate-400">Today</header>
          <ul className="my-1">
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-indigo-500">
                <svg className="h-9 w-9 fill-current text-indigo-50" viewBox="0 0 36 36">
                  <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                </svg>
              </div>
              <div className="flex grow items-center border-b border-slate-100 py-2 text-sm">
                <div className="flex grow justify-between">
                  <div className="self-center">Message-Like Notification Example #1</div>
                  <div className="ml-2 shrink-0 self-end">
                    <a className="font-medium text-primary-500 hover:text-primary-700" href="#0">
                      View<span className="hidden sm:inline"> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-green-500">
                <svg className="h-9 w-9 fill-current text-green-50" viewBox="0 0 36 36">
                  <path d="M15 13v-3l-5 4 5 4v-3h8a1 1 0 000-2h-8zM21 21h-8a1 1 0 000 2h8v3l5-4-5-4v3z" />
                </svg>
              </div>
              <div className="flex grow items-center py-2 text-sm">
                <div className="flex grow justify-between">
                  <div className="self-center">Success / Confirmation Notification Example #1</div>
                  <div className="ml-2 shrink-0 self-end">
                    <a className="font-medium text-primary-500 hover:text-primary-700" href="#0">
                      View<span className="hidden sm:inline"> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-rose-500">
                <svg className="h-9 w-9 fill-current text-rose-50" viewBox="0 0 36 36">
                  <path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z" />
                </svg>
              </div>
              <div className="flex grow items-center border-b border-slate-100 py-2 text-sm">
                <div className="flex grow justify-between">
                  <div className="self-center">Error / Danger Action Notification Example #1</div>
                  <div className="ml-2 shrink-0 self-end">
                    <a className="font-medium text-primary-500 hover:text-primary-700" href="#0">
                      View<span className="hidden sm:inline"> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        {/* "Yesterday" group */}
        <div>
          <header className="rounded-sm bg-slate-50 p-2 text-xs font-semibold uppercase text-slate-400">
            Yesterday
          </header>
          <ul className="my-1">
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-sky-500">
                <svg className="h-9 w-9 fill-current text-sky-50" viewBox="0 0 36 36">
                  <path d="M23 11v2.085c-2.841.401-4.41 2.462-5.8 4.315-1.449 1.932-2.7 3.6-5.2 3.6h-1v2h1c3.5 0 5.253-2.338 6.8-4.4 1.449-1.932 2.7-3.6 5.2-3.6h3l-4-4zM15.406 16.455c.066-.087.125-.162.194-.254.314-.419.656-.872 1.033-1.33C15.475 13.802 14.038 13 12 13h-1v2h1c1.471 0 2.505.586 3.406 1.455zM24 21c-1.471 0-2.505-.586-3.406-1.455-.066.087-.125.162-.194.254-.316.422-.656.873-1.028 1.328.959.878 2.108 1.573 3.628 1.788V25l4-4h-3z" />
                </svg>
              </div>
              <div className="flex grow items-center border-b border-slate-100 py-2 text-sm">
                <div className="flex grow justify-between">
                  <div className="self-center">Message-Like Notification Example #2</div>
                  <div className="ml-2 shrink-0 self-end">
                    <a className="font-medium text-primary-500 hover:text-primary-700" href="#0">
                      View<span className="hidden sm:inline"> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-indigo-500">
                <svg className="h-9 w-9 fill-current text-indigo-50" viewBox="0 0 36 36">
                  <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                </svg>
              </div>
              <div className="flex grow items-center py-2 text-sm">
                <div className="flex grow justify-between">
                  <div className="self-center">Message-Like Notification Example #3</div>
                  <div className="ml-2 shrink-0 self-end">
                    <a className="font-medium text-primary-500 hover:text-primary-700" href="#0">
                      View<span className="hidden sm:inline"> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-indigo-500">
                <svg className="h-9 w-9 fill-current text-indigo-50" viewBox="0 0 36 36">
                  <path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" />
                </svg>
              </div>
              <div className="flex grow items-center py-2 text-sm">
                <div className="flex grow justify-between">
                  <div className="self-center">Message-Like Notification Example #4</div>
                  <div className="ml-2 shrink-0 self-end">
                    <a className="font-medium text-primary-500 hover:text-primary-700" href="#0">
                      View<span className="hidden sm:inline"> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <header className="rounded-sm bg-slate-50 p-2 text-xs font-semibold uppercase text-slate-400">July 29</header>
          <ul className="my-1">
            {/* Item */}
            <li className="flex px-2">
              <div className="my-2 mr-3 h-9 w-9 shrink-0 rounded-full bg-green-500">
                <svg className="h-9 w-9 fill-current text-green-50" viewBox="0 0 36 36">
                  <path d="M15 13v-3l-5 4 5 4v-3h8a1 1 0 000-2h-8zM21 21h-8a1 1 0 000 2h8v3l5-4-5-4v3z" />
                </svg>
              </div>
              <div className="flex grow items-center py-2 text-sm">
                <div className="flex grow justify-between">
                  <div className="self-center">Success / Confirmation Notification Example #2</div>
                  <div className="ml-2 shrink-0 self-end">
                    <a className="font-medium text-primary-500 hover:text-primary-700" href="#0">
                      View<span className="hidden sm:inline"> -&gt;</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TimeList;
