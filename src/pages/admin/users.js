import AdminNavigation from "components/AdminNavigation";

const UsersPage = (props) => {
  const navItems = [
    { title: "Dashboard", icon: "home" },
    {
      title: "Analytics",
      icon: "analytics",
      menu: {
        entries: [
          { title: "Overview", icon: "circle-outline" },
          { title: "Products Analytics", icon: "circle-outline" },
        ],
      },
    },
    { title: "Products", icon: "products" },
    {
      title: "Users",
      icon: "users",
      menu: {
        entries: [
          { title: "List", href: "/admin/users", icon: "circle-outline" },
          { title: "Add", icon: "circle-outline" },
          { title: "Permissions", icon: "circle-outline" },
        ],
      },
    },
    { title: "Settings", icon: "settings" },
  ];
  return (
    <div>
      <AdminNavigation
        data={{ entries: navItems, activeItem: 0, activeMenu: 2 }}
      ></AdminNavigation>
    </div>
  );
};

export default UsersPage;
