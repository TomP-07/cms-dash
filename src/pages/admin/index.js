import Layout from "components/Layout";
import SearchBarNavigation from "components/SearchBarNavigation";

const AdminHome = (props) => {
  return (
    <Layout type={"admin"} data={props.data}>
        <SearchBarNavigation>
            
        </SearchBarNavigation>
    </Layout>
  );
};

import fsPromises from "fs/promises";
import path from "path";

export async function getStaticProps() {
  const navDataPath = path.join(
    process.cwd(),
    "/src/components/AdminNavigation/exampleNav.json"
  );
  const jsonData = await fsPromises.readFile(navDataPath);
  const data = JSON.parse(jsonData);
  return {
    props: {
      data: data,
    },
  };
}

export default AdminHome;
