import PropTypes from 'prop-types';
import { getReactIconComponent } from 'utils/icons';

const AccountWidget = ({ className, children }) => {
  const Icon = getReactIconComponent('account');
  return (
    <button role={'button'} className={className + ' flex cursor-pointer items-center text-gray-400'}>
      <div className="rounded-full p-2 hover:bg-gray-200">
        <Icon className={'h-6 w-6 fill-text'} />
      </div>
      {children}
    </button>
  );
};

AccountWidget.propTypes = {
  children: PropTypes.node,
};

export default AccountWidget;
