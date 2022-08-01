import Link from 'next/link';
import PropTypes from 'prop-types';
import { Component } from 'react';
import { getReactIconComponent, MaterioLogo } from 'utils/icons';
import classNames from 'classnames';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Image from 'next/image';
import LogoImageSrc from '/public/static/images/DashLogo.png';

/*
    /// Depends on Tailwind, Global Style Sheet CSS & Framer Motion Library ///
*/

class AdminNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true, // Whether the Navigation Sidebar is expanded or not.
      fixMode: true,
      actItem: 0, // Which Nav Entry is active.
      actItemMenu: undefined, // Which Menu is active based on current Nav Entry (Depends on actItem).
      expItemMenu: false, // Whether the ItemMenu is expanded.
      actMenu: undefined, // Which Menu is active based on user interaction (Depends on User Click/Touch).
    };
  }

  render() {
    let isExpanded = this.state.expanded;
    return (
      <LazyMotion features={domAnimation} strict>
        {/* For Animation */}
        <m.div
          id="AdminNavWrapper"
          animate={{ minWidth: this.state.fixMode ? '16rem' : '4.4rem' }}
          initial={false}
          className={'hidden lg:block'}>
          {/* Background overlay */}
          <div className="fixed hidden h-full w-full bg-[#3a3541] !opacity-0 opacity-50 transition-opacity"></div>
          {/* Content */}
          <m.div
            onHoverStart={() => this.setExpanded(true)}
            onHoverEnd={() => this.setExpanded(false)}
            animate={{ minWidth: isExpanded ? '16rem' : '4.4rem' }}
            initial={false}
            className="fixed h-[100vh] w-[5rem] overflow-hidden bg-base-500 py-4 shadow-lg shadow-slate-400 transition-transform">
            {/* Content Header (Logo, Title ...) */}
            {this.renderHeader(isExpanded)}
            {/* Navigation */}
            {this.renderNavigation(isExpanded)}
          </m.div>
        </m.div>
      </LazyMotion>
    );
  }

  setExpanded(newState) {
    this.setState({
      actMenu: undefined,
      expanded: this.state.fixMode ? true : newState,
    });
  }

  toggleFixMode() {
    this.setState({ fixMode: !this.state.fixMode });
  }

  renderHeader(isExpanded) {
    return (
      <div
        className={`${
          this.state.expanded ? 'justify-start' : 'max-w-[5rem] justify-center'
        } header relative mb-0 mt-0 flex`}>
        <Link href={'/admin'}>
          <a className={`${isExpanded ? 'ml-7' : 'ml-0 justify-center'} flex cursor-pointer items-center p-1`}>
            <div className={`${isExpanded ? 'mr-4' : '-ml-3'} w-[25px]`}>
              <Image className="w-[]" src={LogoImageSrc} />
              {/* <MaterioLogo /> */}
            </div>
            <span className={`${isExpanded ? '' : 'hidden'} title text-xl font-bold uppercase`}>Company</span>
          </a>
        </Link>
        {isExpanded && (
          <button
            onClick={() => this.toggleFixMode()}
            className="absolute right-6 top-1/2 flex -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border-2 border-[#3a3541de] p-[8px]"
            role="button">
            {this.state.fixMode && (
              <span className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full border-[3px] border-[#3a3541de]"></span>
            )}
          </button>
        )}
      </div>
    );
  }

  renderNavigation(isExpanded) {
    return (
      <nav className="h-full overflow-y-scroll scrollbar scrollbar-track-transparent scrollbar-thumb-scrollBar hover:scrollbar-thumb-scrollBar">
        <ul id="AdminNavList" className={`${isExpanded ? 'mr-5' : 'mr-1'}`}>
          {/* Navigation Items */}
          {this.props.data.entries.map((item, index) => {
            return this.renderNavigationEntry({ id: index, ...item }, isExpanded);
          })}
        </ul>
      </nav>
    );
  }

  ChevronRightSvg = getReactIconComponent('chevron-right');
  renderNavigationEntry(entry, isExpanded) {
    const ID = entry.id;
    const isMenu = entry.menu ? true : false;
    const isOpen =
      isExpanded && isMenu && (this.state.actMenu == ID || (this.state.actItemMenu == ID && this.state.expItemMenu));

    let itemClass = classNames({
      menu: isMenu,
      'menu-open': isOpen,
      selected: this.state.actItem == ID || this.state.actItemMenu == ID || this.state.actMenu == ID,
    });
    return (
      <li key={ID} className={`${itemClass} navItem my-2 flex flex-col justify-center`}>
        {this.renderNavEntryContent({
          title: entry.title,
          icon: entry.icon,
          onItemClick: () => {
            this.handleEntryClick(ID, isMenu ? ID : undefined);
          },
          isMenu,
          isOpen,
        })}
        {isMenu && (
          <m.ul
            className="menu-content h-0 min-h-0 overflow-hidden"
            animate={{ height: isOpen ? 'auto' : 0 }}
            initial={true}
            transition={{ type: 'tween', delay: 0 }}>
            {entry.menu.entries.map(subEntry => {
              const subID = subEntry.title;
              itemClass = classNames({
                selected: this.state.actItem == subID,
              });
              return (
                <li key={subID} className={`${itemClass} navItem`}>
                  {this.renderNavEntryContent({
                    title: subEntry.title,
                    icon: subEntry.icon,
                    href: subEntry.href,
                    onItemClick: () => {
                      this.handleEntryClick(subID, ID);
                    },
                  })}
                </li>
              );
            })}
          </m.ul>
        )}
      </li>
    );
  }

  renderNavEntryContent({ title, href = '/admin', icon, onItemClick, isMenu = false, isOpen = false }) {
    const IconSvg = getReactIconComponent(icon); // Gets the icon component from the predefined icons
    return (
      <Link href={href}>
        <a
          onClick={onItemClick}
          className={`link relative my-[5px] flex w-full cursor-pointer items-center rounded-tr-full rounded-br-full py-2 
          ${this.state.expanded ? 'pl-5 pr-9' : 'flex items-center justify-center pl-0 pr-0'}`}>
          {/* Render Nav Entry Icon */}
          <div className={`${this.state.expanded ? 'mr-3' : 'mr-0'} icon flex w-min items-center justify-center`}>
            <IconSvg className="h-6 w-6  fill-[#3a3541de]" />
          </div>
          {/* Render Nav Entry Title */}
          <span className={`${this.state.expanded ? '' : 'hidden'} entry truncate text-[#3a3541de]`}>{title}</span>
          {/* Render Menu Arrow Icon SVG */}
          {isMenu && (
            <m.div
              initial={{ translateY: '-50%' }}
              animate={{ rotateZ: isOpen ? 90 : 0 }}
              className={`${this.state.expanded ? '' : 'hidden'} menu-icon absolute right-3 top-1/2`}>
              <this.ChevronRightSvg width={30} height={30} className="h-6 w-6 fill-[#3a3541de]" />
            </m.div>
          )}
        </a>
      </Link>
    );
  }

  // !TODO reduce newState build.
  handleEntryClick = (ID, menuID = undefined) => {
    let newState = {};
    if (menuID) {
      if (menuID == ID) {
        if (this.state.actItemMenu == ID) {
          if (ID == this.state.actMenu)
            newState = {
              expItemMenu: !this.state.expItemMenu,
              actMenu: undefined,
            };
          else {
            newState = {
              expItemMenu: !this.state.expItemMenu,
            };
          }
        } else
          newState = {
            actMenu: ID == this.state.actMenu ? null : ID,
          };
      } else {
        newState = {
          actItem: ID,
          actItemMenu: menuID,
          expItemMenu: true,
        };
      }
    } else {
      newState = {
        actItem: ID,
        actItemMenu: undefined,
        expItemMenu: false,
      };
    }
    if (!this.state.expanded) newState.actMenu = undefined;
    this.setState(newState);
  };
}

AdminNavigation.propTypes = {
  data: PropTypes.object,
};

export default AdminNavigation;
