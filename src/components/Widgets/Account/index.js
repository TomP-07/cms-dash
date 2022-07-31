import PropTypes from 'prop-types'
import { getReactIconComponent } from "utils/icons";

const AccountWidget = ({className, children}) => {
    const Icon = getReactIconComponent('account')
    return (
        <button role={'button'} className={className + ' cursor-pointer flex items-center text-gray-400'}>
            <div className="p-2 rounded-full hover:bg-gray-200">
                <Icon className={'fill-text w-6 h-6'}/>
            </div>
            {children}
        </button>
    );
}


AccountWidget.propTypes = {
    children: PropTypes.node
}

export default AccountWidget;