import PropTypes from 'prop-types'
import { getReactIconComponent } from "utilties/icons";

const ThemeWidget = ({className, children}) => {
    const Icon = getReactIconComponent('theme')
    return (
        <button role={'button'} className={className + ' cursor-pointer flex items-center text-gray-400'}>
            <div className="p-2 rounded-full hover:bg-gray-200">
                <Icon className={'fill-text w-6 h-6'}/>
            </div>
            {children}
        </button>
    );
}


ThemeWidget.propTypes = {
    children: PropTypes.node
}

export default ThemeWidget;