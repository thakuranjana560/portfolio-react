import { Routes , Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import GlobalStyle from "./globalStyles";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./organisms/Themes";
import Loading from "./atoms/Loading";

//Components
const Main = lazy(() => import("./organisms/Main"));
const AboutPage = lazy(() => import("./organisms/AboutPage"));
const MySkillsPage = lazy(() => import("./organisms/MySkillsPage"));

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Suspense fallback={<Loading />}>
          <AnimatePresence exitBeforeEnter>
            <Routes>
              <Route  path="/" element={<Main/>} />

              <Route  path="/about" element={<AboutPage/>} />
              <Route  path="/skills" element={<MySkillsPage/>} />
            </Routes >
          </AnimatePresence>
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
