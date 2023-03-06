import { Outlet, useNavigation } from "react-router-dom";

import MainNav from "../../components/MainNav";

function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <MainNav />
      {navigation.state === "loading" && <p>Loading...</p>}
      <Outlet />
    </>
  );
}

export default RootLayout;
