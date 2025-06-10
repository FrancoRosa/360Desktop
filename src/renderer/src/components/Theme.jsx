import { useEffect, useState } from 'react'
import { MonitorIcon, MoonIcon, SunIcon } from 'lucide-react'
import ButtonIcon from './elements/ButtonIcon'

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.theme || 'light')

  const handleLight = () => {
    setTheme('light')
  }

  const handleDark = () => {
    setTheme('dark')
  }

  const handleToggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  useEffect(() => {
    const html = document.documentElement
    html.setAttribute('data-theme', theme)
    localStorage.theme = theme
  }, [theme])

  useEffect(() => {
    document.documentElement.requestFullscreen()
  }, [])

  return (
    <div className="flex w-full justify-end gap-1 pt-2">
      {theme === 'light' ? (
        <ButtonIcon onClick={handleDark} title="Dark theme">
          <MoonIcon />
        </ButtonIcon>
      ) : (
        <ButtonIcon onClick={handleLight} title="Light theme">
          <SunIcon />
        </ButtonIcon>
      )}

      <ButtonIcon onClick={handleToggleFullScreen} title="Full screen">
        <MonitorIcon />
      </ButtonIcon>
    </div>
  )
}

export default Theme
