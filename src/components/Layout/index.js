import PropTypes from 'prop-types';
import AdminNavigation from 'components/AdminNavigation';
import SearchBarNavigation from 'components/SearchBarNavigation';
import classNames from 'classnames';

const Layout = ({ type, data = {}, className, children }) => {
  let layout;
  switch (type) {
    case 'admin':
      layout = (
        <div className="flex">
          <AdminNavigation data={data} />
          <div className="mx-auto w-full max-w-[1450px] px-5">
            <header>
              <SearchBarNavigation></SearchBarNavigation>
            </header>
            <div className={classNames('', className)}>{children}</div>
          </div>
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
