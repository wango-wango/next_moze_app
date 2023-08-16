import { Fragment } from "react";
import MainHeader from "./MainHeader";
import MainHeader2 from "./MainHeader2";

function Layout({ children }: any) {
  return (
    <Fragment>
      {/* <MainHeader /> */}
      <MainHeader2 />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
