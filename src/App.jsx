import { ErrorBoundary } from "react-error-boundary";
import "./App.css";
import Header from "./Components/Header";
import TranslationContextProvider from "./Contexts/Translation.provider";
import GraphOrchestrator from "./Orchestrator/GraphOrchestrator";
import ErrorFallback from "./Components/ErrorFallback";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <TranslationContextProvider>
          <Header />
          <GraphOrchestrator />
        </TranslationContextProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
