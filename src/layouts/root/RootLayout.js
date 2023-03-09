import { Outlet, useNavigation } from "react-router-dom";
import Loader from "../../components/Loader";

import MainNav from "../../components/MainNav";

function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <MainNav />
      {navigation.state === "loading" && <Loader />}
      <Outlet />
    </>
  );
}

export default RootLayout;
