import { useTheme } from "@/shared/theme";
import { Header } from "@/widgets/header";
import { Outlet } from "react-router-dom";

function BaseLayout() {
  const { isDark } = useTheme();

  return (
    <div className="app" data-theme={isDark ? 'dark' : 'light'}>
      <Header />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default BaseLayout;
