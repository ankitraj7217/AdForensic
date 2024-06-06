import './App.css'
import Advertiser from './Components/Advertiser'
import FlieUpload from './Components/FileUpload'
import LineGraph from './Components/LineGraph'
import AdvertiserContextProvider from './Contexts/Advertiser.context'
import CountriesContextProvider from './Contexts/Countries.context'

function App() {

  return (
    <>
      <AdvertiserContextProvider>
        <CountriesContextProvider>
          <FlieUpload />
          <Advertiser />
        </CountriesContextProvider>
      </AdvertiserContextProvider>
    </>
  )
}

export default App
