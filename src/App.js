import { useEffect, useState } from 'react'
import useSound from 'use-sound'
import parov from './assets/Parov.mp3'
import './App.css'
import Player from './components/Player'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [play, { pause, duration, sound }] = useSound(parov)

  const playingButton = () => {
    if (isPlaying) {
      pause()
      setIsPlaying(false)
    } else {
      play()
      setIsPlaying(true)
    }
  }
  console.log(parov)

  return (
    <>
      <Player isPlaying={isPlaying} playingButton={playingButton} parov />
    </>
  )
}

export default App
