import AccountWidget from "components/Widgets/Account";
import LanguageWidget from "components/Widgets/Language";
import NotificationsWidget from "components/Widgets/Notifications";
import SearchWidget from "components/Widgets/Search";
import ThemeWidget from "components/Widgets/Theme";

const SearchBarNavigation = ({ }) => {
    return (
        <div className="flex justify-between items-center px-2 pt-3 pb-2 shadow-md shadow-slate-400 rounded-b-xl">
            <SearchWidget>
                <span className="text-text">
                    Search (Ctrl+/)
                </span>
            </SearchWidget>
            <div className="flex justify-center items-center">
                <LanguageWidget className={'mx-[4px] cursor-auto [&>*]:cursor-pointer'} />
                <ThemeWidget className={'mx-[4px] cursor-auto [&>*]:cursor-pointer'} />
                <NotificationsWidget className={'mx-[4px] cursor-auto [&>*]:cursor-pointer'} />
                <AccountWidget className={'mx-[4px] cursor-auto [&>*]:cursor-pointer'} />
            </div>
        </div>
    );
}

export default SearchBarNavigation;