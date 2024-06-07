import './App.css'
import AdvertiserContextProvider from './Contexts/Advertiser.context'
import CountriesContextProvider from './Contexts/Countries.context'
import GraphOrchestrator from './Orchestrator/GraphOrchestrator'

function App() {

  return (
    <>
      <AdvertiserContextProvider>
        <CountriesContextProvider>
          <GraphOrchestrator />
        </CountriesContextProvider>
      </AdvertiserContextProvider>
    </>
  )
}

export default App
