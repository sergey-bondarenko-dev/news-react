import { useTheme } from "@/shared/theme";
import { Header } from "@/widgets/header";
import { MainPage } from "@/pages/main";

function BaseLayout() {
  const { isDark } = useTheme();

  return (
    <div className="app" data-theme={isDark ? 'dark' : 'light'}>
      <Header />
      <div className="container">
        <MainPage />
      </div>
    </div>
  )
}

export default BaseLayout;
