import { useState, useEffect } from 'react'
import ReactPlayer from 'react-player/lazy'

import Layout from '@/components/main/Layout'

// url: "http://34.111.168.133/01/538262340028387?Expires=1660137947&KeyName=cdnkey&Signature=w_1ic_0sM4T6P_ModQTVpwRLe9Q="
// TODO: 檔案大小(由後台計算)
// TODO: 播放次數
// TODO: 影片總秒數
// TODO: 暫停次數
// TODO: 快播放次數
// TODO: 慢播放次數
// TODO: 拖拉時間軸(次數與位置)
export default function Player() {
  const [playerData, setPlayData] = useState({
    buffer: false,
    playing: false,
    playCount: 0,
    duration: 0,
    pauseCount: 0,
    fastPlayCount: 0,
    slowPlayCount: 0,
    playedArray: [],
  })

  const course = {
    lessons: [
      {
        video: {
          Location: 'https://youtu.be/1Fmfr2Q23sk',
        },
      },
    ],
  }

  const handlePlay = (e) => {
    console.log('*** Play:', e)
    setPlayData((pre) => {
      return { ...pre, playing: true, playCount: pre.playCount + 1 }
    })
  }

  const handleDuration = (duration) => {
    setPlayData((pre) => {
      return { ...pre, duration }
    })
  }

  const handlePause = (e) => {
    console.log('*** Pause:', e)
    setPlayData((pre) => {
      return { ...pre, playing: false, pauseCount: pre.pauseCount + 1 }
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
  }

  const handleProgress = ({ playedSeconds, played }) => {
    // console.log('onProgress')
    // console.log('playing', playerData.playing)

    if (!playerData.playing) {
      console.log('*** 暫停中...紀錄')
      setPlayData((pre) => {
        return {
          ...pre,
          playedArray: [
            ...pre.playedArray,
            { playedSeconds, played, playing: pre.playing },
          ],
        }
      })

      return
    }

    if (playerData.playing && playerData.buffer) {
      console.log('*** 播放中...紀錄')
      setPlayData((pre) => {
        return {
          ...pre,
          buffer: false,
          playedArray: [
            ...pre.playedArray,
            {
              playedSeconds,
              played,
              playing: pre.playing,
            },
          ],
        }
      })

      return
    }
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
            progressInterval={2000}
            onPlay={handlePlay}
            onDuration={handleDuration}
            onBuffer={(e) => {
              console.log('*** Buffer:', e)
              setPlayData((pre) => {
                return { ...pre, buffer: true }
              })
            }}
            onPause={handlePause}
            onPlaybackRateChange={handleOnPlaybackRateChange}
            onProgress={handleProgress}
            onSeek={(e) => console.log('seek')}
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
        <label className='text-md font-medium '>
          拖拉時間軸(次數與位置) {playerData.playedArray.length} 次
          <p>{JSON.stringify(playerData.playedArray)}</p>
        </label>
      </div>
    </div>
  )
}

Player.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
