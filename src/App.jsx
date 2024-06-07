import "./App.css";
import TranslationContextProvider from "./Contexts/Translation.provider";
import GraphOrchestrator from "./Orchestrator/GraphOrchestrator";

function App() {
  return (
    <>
      <TranslationContextProvider>
        <GraphOrchestrator />
      </TranslationContextProvider>
    </>
  );
}

export default App;
