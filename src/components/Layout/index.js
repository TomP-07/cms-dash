import PropTypes from "prop-types";
import AdminNavigation from "components/AdminNavigation";

const Layout = ({ type, data = {}, children }) => {
  let layout;
  switch (type) {
    case "admin":
      layout = (
        <div className="flex">
          <AdminNavigation data={data} />
          <div className="px-5 w-full max-w-[1450px] mx-auto">{children}</div>
        </div>
      );
      break;
    default:
      layout = <div className=""></div>;
  }
  return layout;
};

Layout.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
  children: PropTypes.node,
};

export default Layout;
