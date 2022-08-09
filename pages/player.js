import { useState } from 'react'
import ReactPlayer from 'react-player/lazy'

import Layout from '@/components/main/Layout'

import { topics } from '../utils/constants'

// TODO: 檔案大小(由後台計算)
// TODO: 播放次數
// TODO: 影片總秒數
// TODO: 暫停次數
// TODO: 快播放次數
// TODO: 慢播放次數
export default function Player() {
  const [playerData, setPlayData] = useState({
    playCount: 0,
    duration: 0,
    pauseCount: 0,
    fastPlayCount: 0,
    slowPlayCount: 0,
  })

  const course = {
    lessons: [{ video: { Location: 'https://youtu.be/1Fmfr2Q23sk' } }],
  }

  const handlePlay = () => {
    setPlayData((pre) => {
      return { ...pre, playCount: pre.playCount + 1 }
    })
  }

  const handleDuration = (duration) => {
    setPlayData((pre) => {
      return { ...pre, duration }
    })
  }

  const handlePause = () => {
    setPlayData((pre) => {
      return { ...pre, pauseCount: pre.pauseCount + 1 }
    })
  }

  const handleOnPlaybackRateChange = (speed) => {
    const floatSpeed = parseFloat(speed)
    if (floatSpeed > 1) {
      setPlayData((pre) => {
        return { ...pre, fastPlayCount: pre.fastPlayCount + 1 }
      })

      return
    }

    if (floatSpeed < 1) {
      setPlayData((pre) => {
        return { ...pre, slowPlayCount: pre.slowPlayCount + 1 }
      })

      return
    }
    // this.setState({ playbackRate: parseFloat(speed) })
  }

  return (
    <div className=' bg-white rounded-lg w-full xl:h-[80vh] flex flex-wrap gap-6 justify-center items-center p-14 pt-6'>
      <div className='w-full'>
        <div>
          <p className='text-2xl font-bold'>React Player</p>
          <p className='text-md text-gray-400 mt-1'>
            Post a video to your account
          </p>
        </div>
        <div className=' border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center  outline-none mt-10  h-[458px] p-5 cursor-pointer hover:border-red-300 hover:bg-gray-100'>
          <ReactPlayer
            className='player'
            url={course.lessons[0].video.Location}
            width='100%'
            height='100%'
            controls
            onEnded={(e) => console.log('*** e:', e)}
            onPlay={handlePlay}
            onDuration={handleDuration}
            onPause={handlePause}
            onPlaybackRateChange={handleOnPlaybackRateChange}
          />
        </div>
      </div>
      <div className='w-full flex flex-col gap-3 pb-10'>
        <label className='text-md font-medium '>
          播放次數 {playerData.playCount} 次
        </label>
        <label className='text-md font-medium '>
          影片總秒數 {playerData.duration} 秒
        </label>
        <label className='text-md font-medium '>
          暫停次數 {playerData.pauseCount} 次
        </label>
        <label className='text-md font-medium '>
          快速播放次數 {playerData.fastPlayCount} 次
        </label>
        <label className='text-md font-medium '>
          慢速播放次數 {playerData.slowPlayCount} 次
        </label>
      </div>
    </div>
  )
}

Player.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
