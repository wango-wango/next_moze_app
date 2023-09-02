import { Fragment, useEffect } from "react";
import MainHeader from "./MainHeader";
import MainHeader2 from "./MainHeader2";
import { useDispatch } from "react-redux";
import { init } from "src/store/reducer/calendarReducer";
import axios from "axios";

function Layout({ children }: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/assets/data/fakeData.json");
        const data = response.data;
        dispatch(init(data));
      } catch (error) {
        console.error("Error fetching global data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      {/* <MainHeader /> */}
      <MainHeader2 />
      <main>{children}</main>
    </Fragment>
  );
}

export default Layout;
