const Home = ({}) => {};

export async function getStaticProps(context) {
  return {
    redirect: {
      destination: "/admin",
      permanent: true,
    },
  };
}

export default Home;
