import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'
import useLocal from './js/storage'
import Cam from './components/CamDetection'
import { useState } from 'react'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')
  const resolution = {
    width: 1280,
    height: 720
    // width: 640,
    // height: 480,
  }
  const [lines, setLines] = useLocal('lines', {
    vt1: resolution.width / 4,
    vt2: (3 * resolution.width) / 4,
    ht: resolution.height / 4,
    vb1: resolution.width / 4,
    vb2: (3 * resolution.width) / 4,
    hb: (3 * resolution.height) / 4
  })
  const [page, setPage] = useState('main') //main, config, reports
  const [config, setConfig] = useLocal('config', {
    beep: false,
    detection: true,
    mirror: false,
    camera: 'single'
  })
  const [person, setPerson] = useState(false)
  const [gps, setGPS] = useState({})

  return (
    <>
      <Cam
        {...{
          resolution,
          lines,
          page,
          config,
          setPerson,
          gps
        }}
      />
    </>
  )
}

export default App
