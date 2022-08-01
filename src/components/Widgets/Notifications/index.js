import PropTypes from 'prop-types';
import { getReactIconComponent } from 'utils/icons';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const NotificationsWidget = ({ className, children }) => {
  const Icon = getReactIconComponent('notifications');

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.preventDefault();
          console.log("Clicked")
          setDropdownOpen(!dropdownOpen)
        }}
        ref={trigger}
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
        role={'button'}
        className={className + ' flex cursor-pointer items-center text-gray-400'}>
        <div className={`rounded-full p-2 hover:bg-gray-200 ${dropdownOpen ? '!bg-primary-500' : ''}`}>
          <Icon className={`h-6 w-6 fill-text ${dropdownOpen ? 'fill-gray-100' : ''}`} />
        </div>
        {children}
      </button>

      <div
        className={`${dropdownOpen ? '' : 'hidden'
          } absolute top-full right-0 z-10 -mr-48 mt-1 min-w-[28rem] origin-top-right overflow-hidden rounded border border-slate-200 bg-white py-1.5 shadow-lg sm:mr-0`}>
        <div ref={dropdown} onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)}>
          <div className="px-4 pt-1.5 pb-2 text-xs font-semibold uppercase text-slate-400">Notifications</div>
          <ul>
            <li className="border-b border-slate-200 last:border-0">
              <Link href="/admin">
                <a className="block py-2 px-4 hover:bg-slate-50" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <span className="mb-2 block text-sm">
                    🥳 Phasellus et justo ante. Pellentesque rutrum, ante vitae varius posuere, lectus libero dictum
                    ipsum, consectetur sagittis magna lectus feugiat urna. Nam ornare dignissim magna, non placerat
                    tellus vulputate vel.
                  </span>
                  <span className="block text-xs font-medium text-slate-400">Today</span>
                </a>
              </Link>
            </li>
            <li className="border-b border-slate-200 last:border-0">
              <Link href="/admin">
                <a className="block py-2 px-4 hover:bg-slate-50" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <span className="mb-2 block text-sm">
                    👍 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a ullamcorper nulla. Etiam vel
                    facilisis ante, id ultricies lorem.
                  </span>
                  <span className="block text-xs font-medium text-slate-400">Yesterday</span>
                </a>
              </Link>
            </li>
            <li className="border-b border-slate-200 last:border-0">
              <Link href="/admin">
                <a className="block py-2 px-4 hover:bg-slate-50" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <span className="mb-2 block text-sm">
                    👍 Tincidunt enim. Curabitur non purus neque. Donec varius ut urna eu dignissim.
                  </span>
                  <span className="block text-xs font-medium text-slate-400">July 29</span>
                </a>
              </Link>
            </li>
            <li className="border-b border-slate-200 last:border-0">
              <Link href="/admin">
                <a className="block py-2 px-4 hover:bg-slate-50" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  <span className="mb-2 block text-sm">
                    😡 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a ullamcorper nulla. Etiam vel
                    facilisis ante, id ultricies lorem.
                  </span>
                  <span className="block text-xs font-medium text-slate-400">July 27</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

NotificationsWidget.propTypes = {
  children: PropTypes.node,
};

export default NotificationsWidget;
