import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar";

export default function IndexLayout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}
