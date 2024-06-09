import "./App.css";
import Header from "./Components/Header";
import TranslationContextProvider from "./Contexts/Translation.provider";
import GraphOrchestrator from "./Orchestrator/GraphOrchestrator";

function App() {
  return (
    <>
      <TranslationContextProvider>
        <Header />
        <GraphOrchestrator />
      </TranslationContextProvider>
    </>
  );
}

export default App;
