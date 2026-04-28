import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage/MainPage";
import { useTheme } from "./context/ThemeContext";

function App() {
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

export default App
