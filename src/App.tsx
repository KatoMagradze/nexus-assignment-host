import './App.css'
// @ts-ignore
import RemoteComponent from "remoteApp/RemoteComponent"


function App() {

  return (
    <div className={"App"}>
      <h1 className={"host-heading"}>Host app</h1>
      <RemoteComponent/>
    </div>
  )
}

export default App
