import PropTypes from "prop-types";

import HomeSvg from "/public/static/svg/home-outline.svg";
import AnalyticsSvg from "/public/static/svg/poll.svg";
import ProductsSvg from "/public/static/svg/shopping.svg";
import UsersSvg from "/public/static/svg/account-supervisor.svg";
import SettingsSvg from "/public/static/svg/cog-outline.svg";
import ChevronRightSvg from "/public/static/svg/chevron-right.svg";
import CircleOutline from "/public/static/svg/circle-outline.svg";
import Magnify from "/public/static/svg/magnify.svg";
import Language from "/public/static/svg/translate.svg";
import Theme from "/public/static/svg/theme-light-dark.svg";
import Notifications from "/public/static/svg/bell-outline.svg";
import Account from "/public/static/svg/account.svg";

export function getReactIconComponent(icon) {
  switch (icon) {
    case "home":
      return HomeSvg;
    case "analytics":
      return AnalyticsSvg;
    case "products":
      return ProductsSvg;
    case "users":
      return UsersSvg;
    case "settings":
      return SettingsSvg;
    case "chevron-right":
      return ChevronRightSvg;
    case "circle-outline":
      return CircleOutline;
    case "search":
      return Magnify;
    case "language":
      return Language;
    case "theme":
      return Theme;
    case "notifications":
      return Notifications;
    case "account":
      return Account;
    default:
      return HomeSvg;
  }
}

getReactIconComponent.propTypes = {
  icon: PropTypes.string,
};

export const MaterioLogo = (props) => {
  return (
    <svg
      width={30}
      height={25}
      viewBox="0 0 30 23"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        transform="translate(-95 -51) translate(95 50)"
        fill="none"
        fillRule="evenodd"
      >
        <path
          fill="#9155FD"
          d="M30 21.392a2 2 0 01-3.027 1.716l-3.258-1.95a2 2 0 01-.973-1.716l-.001-6.7L15 17.178l-7.742-4.434v6.7a2 2 0 01-.973 1.715l-3.258 1.95A2 2 0 010 21.392V3.585l.005-.15L0 3.572a2 2 0 013.045-1.706L15 9.194l11.955-7.328A2 2 0 0130 3.572z"
        />
        <path
          opacity={0.077704}
          fill="#000"
          d="M0 8.58870968L7.25806452 12.7505183 7.25806452 16.8305646z"
        />
        <path
          opacity={0.077704}
          fill="#000"
          d="M0 8.58870968L7.25806452 12.6445567 7.25806452 15.1370162z"
        />
        <path
          opacity={0.077704}
          fill="#000"
          transform="matrix(-1 0 0 1 52.742 0)"
          d="M22.7419355 8.58870968L30 12.7417372 30 16.9537453z"
        />
        <path
          opacity={0.077704}
          fill="#000"
          transform="matrix(-1 0 0 1 52.742 0)"
          d="M22.7419355 8.58870968L30 12.6409734 30 15.2601969z"
        />
        <path
          fillOpacity={0.15}
          fill="#FFF"
          d="M3.045 1.866L15 9.194v7.983L0 8.587V3.571a2 2 0 013.045-1.706z"
        />
        <path
          fillOpacity={0.35}
          fill="#FFF"
          transform="matrix(-1 0 0 1 45 0)"
          d="M18.045 1.866L30 9.194v7.983l-15-8.59V3.571a2 2 0 013.045-1.706z"
        />
      </g>
    </svg>
  );
};
