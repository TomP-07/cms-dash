import PropTypes from 'prop-types';
import { getReactIconComponent } from 'utils/icons';

const LanguageWidget = ({ className, children }) => {
  const Icon = getReactIconComponent('language');
  return (
    <button role={'button'} className={className + ' flex cursor-pointer items-center text-gray-400'}>
      <div className="rounded-full p-2 hover:bg-gray-200">
        <Icon className={'h-6 w-6 fill-text'} />
      </div>
      {children}
    </button>
  );
};

LanguageWidget.propTypes = {
  children: PropTypes.node,
};

export default LanguageWidget;
