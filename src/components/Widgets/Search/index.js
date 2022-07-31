import PropTypes, { func } from 'prop-types'
import { getReactIconComponent } from "utils/icons";
import React, { useRef, useEffect, useState } from 'react';
import { m } from 'framer-motion'

function SearchWidget({ className, children }) {
    const Icon = getReactIconComponent('search')
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const keyHandler = ({ keyCode, ctrlKey }) => {
            if (modalOpen || !ctrlKey || keyCode !== 191) return;
            setModalOpen(!modalOpen);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    return (
        <>
            <button onClick={(e) => {
                e.preventDefault();
                setModalOpen(!modalOpen);
                return;
            }} role={'button'} className={className + ' cursor-pointer flex items-center text-gray-400'}>
                <div className="mr-2 p-2 rounded-full hover:bg-gray-200">
                    <Icon className={'fill-text w-6 h-6'} />
                </div>
                {children}
            </button>
            <SearchWidgetModal searchId={"SearchWidget"} modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </>

    );
}


SearchWidget.propTypes = {
    children: PropTypes.node
}

export default SearchWidget;


import Link from 'next/link';

function SearchWidgetModal({ searchId, modalOpen, setModalOpen }) {

    const modalContent = useRef(null);
    const searchInput = useRef(null);

    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!modalOpen || keyCode !== 27) return;
            setModalOpen(!modalOpen);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        modalOpen && searchInput.current.focus();
    }, [modalOpen]);

    return (
        <>
            <m.div onClick={() => setModalOpen(!modalOpen)} className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-50 ${modalOpen ? "" : "hidden"}`}>

            </m.div>
            {/* <m.div className="w-min fixed inset-0 z-50 overflow-hidden flex items-start top-20 mb-4 justify-center px-4 sm:px-6"> */}
            <div ref={modalContent} className={`bg-white fixed top-20 left-1/2 -translate-x-1/2 inset-0 z-50 overflow-auto  mb-4 max-w-2xl w-full max-h-full h-min rounded shadow-lg ${modalOpen ? "" : "hidden"}`}>
                {/* Search form */}
                <form className="border-b border-slate-200">
                    <div className="relative">
                        <label htmlFor={searchId} className="sr-only">Search</label>
                        <input id={searchId} className="outline-none w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4" type="search" placeholder="Search Anything…" ref={searchInput} />
                        <button className="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                            <svg className="w-4 h-4 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-4 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                                <path d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                            </svg>
                        </button>
                    </div>
                </form>
                <div className="py-4 px-2">
                    {/* Recent searches */}
                    <div className="mb-3 last:mb-0">
                        <div className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">Recent searches</div>
                        <ul className="text-sm">
                            <li>
                                <Link href="/admin">
                                    <a
                                        className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                                            <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                                        </svg>
                                        <span>Entry #1</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin">
                                    <a
                                        className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                                            <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                                        </svg>
                                        <span>Entry #2</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin">
                                    <a
                                        className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                                            <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                                        </svg>
                                        <span>Entry #3</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin">
                                    <a
                                        className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                                            <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                                        </svg>
                                        <span>Entry #4</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin">
                                    <a
                                        className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                                            <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                                        </svg>
                                        <span>Entry #5</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin">
                                    <a
                                        className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                                            <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                                        </svg>
                                        <span>Entry #6</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Recent pages */}
                    <div className="mb-3 last:mb-0">
                        <div className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">Recent pages</div>
                        <ul className="text-sm">
                            <li>
                                <Link href="/admin">
                                    <a
                                        className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                                            <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                                        </svg>
                                        <span>Page Entry #1</span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin">
                                    <a
                                        className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                                        onClick={() => setModalOpen(!modalOpen)}
                                    >
                                        <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3" viewBox="0 0 16 16">
                                            <path d="M14 0H2c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h8l5-5V1c0-.6-.4-1-1-1zM3 2h10v8H9v4H3V2z" />
                                        </svg>
                                        <span>Page Entry #2</span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}