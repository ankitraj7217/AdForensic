import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Header from "./Components/Header";
import TranslationContextProvider from "./Contexts/Translation.provider";
import ErrorFallback from "./Components/ErrorFallback";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <TranslationContextProvider>
          <Header />
          <HomePage />
        </TranslationContextProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
