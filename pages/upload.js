import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import axios from 'axios'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

import { UPLOAD_URL } from '@/config/index'

import Layout from '@/components/main/Layout'
// import useAuthStore from '../store/authStore'
// import { BASE_URL } from '../utils'
// import { client } from '../utils/client'
import { topics } from '../utils/constants'

export default function Upload() {
  const [caption, setCaption] = useState('')
  const [topic, setTopic] = useState(topics[0].name)
  const [loading, setLoading] = useState(false)
  const [savingPost, setSavingPost] = useState(false)
  const [videoAsset, setVideoAsset] = useState()
  const [progress, setProgress] = useState(0)
  const [wrongFileType, setWrongFileType] = useState(false)

  // const userProfile = useAuthStore((state) => state.userProfile)
  const router = useRouter()

  // 權限
  // useEffect(() => {
  //   if (!userProfile) router.push('/')
  // }, [userProfile, router])

  const uploadVideo = async (e) => {
    try {
      const selectedFile = e.target.files[0]
      const fileTypes = ['video/mp4', 'video/webm', 'video/ogg']

      // uploading asset to google
      if (fileTypes.includes(selectedFile.type)) {
        setWrongFileType(false)
        setLoading(true)

        const videoData = new FormData()
        videoData.append('file', selectedFile)
        videoData.append('fileName', 'file001')

        const { data } = await axios.post(
          `${UPLOAD_URL}/UploadFile`,
          videoData,
          {
            onUploadProgress: (e) => {
              setProgress(Math.round((100 * e.loaded) / e.total))
            },
          }
        )

        setVideoAsset(data)
        setLoading(false)

        // client.assets
        //   .upload('file', selectedFile, {
        //     contentType: selectedFile.type,
        //     filename: selectedFile.name,
        //   })
        //   .then((data) => {
        //     setVideoAsset(data)
        //     setLoading(false)
        //   })
      } else {
        setLoading(false)
        setWrongFileType(true)
      }
    } catch (err) {
      setLoading(false)
      toast('Video upload failed')
    }
  }

  const handlePost = async () => {
    if (caption && videoAsset?._id && topic) {
      setSavingPost(true)

      const doc = {
        _type: 'post',
        caption,
        video: {
          _type: 'file',
          asset: {
            _type: 'reference',
            _ref: videoAsset?._id,
          },
        },
        userId: userProfile?._id,
        postedBy: {
          _type: 'postedBy',
          _ref: userProfile?._id,
        },
        topic,
      }

      // await axios.post(`${BASE_URL}/api/post`, doc)

      router.push('/')
    }
  }

  const handleDiscard = () => {
    setSavingPost(false)
    setVideoAsset(undefined)
    setCaption('')
    setTopic('')
  }

  return (
    <div className=' bg-white rounded-lg xl:h-[80vh] flex gap-6 flex-wrap justify-center items-center p-14 pt-6'>
      <div>
        <div>
          <p className='text-2xl font-bold'>Upload Video</p>
          <p className='text-md text-gray-400 mt-1'>
            Post a video to your account
          </p>
        </div>
        <div className=' border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center  outline-none mt-10 w-[260px] h-[458px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100'>
          {loading ? (
            <>
              <p className='text-center text-3xl text-red-400 font-semibold'>
                Uploading...{progress}%
              </p>
              <div className='w-full mt-2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700'>
                <div
                  className='bg-blue-600 h-2.5 rounded-full'
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </>
          ) : (
            <div>
              {!videoAsset ? (
                <label className='cursor-pointer'>
                  <div className='flex flex-col items-center justify-center h-full'>
                    <div className='flex flex-col justify-center items-center'>
                      <p className='font-bold text-xl'>
                        <FaCloudUploadAlt className='text-gray-300 text-6xl' />
                      </p>
                      <p className='text-xl font-semibold'>
                        Select video to upload
                      </p>
                    </div>

                    <p className='text-gray-400 text-center mt-10 text-sm leading-10'>
                      MP4 or WebM or ogg <br />
                      720x1280 resolution or higher <br />
                      Up to 10 minutes <br />
                      Less than 2 GB
                    </p>
                    <p className='bg-indigo-500 text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none'>
                      Select file
                    </p>
                  </div>
                  <input
                    type='file'
                    name='upload-video'
                    onChange={(e) => uploadVideo(e)}
                    className='w-0 h-0'
                  />
                </label>
              ) : (
                <div className=' rounded-3xl w-[300px]  p-4 flex flex-col gap-6 justify-center items-center'>
                  <video
                    className='rounded-xl h-[462px] mt-16 bg-black'
                    controls
                    loop
                    src={videoAsset?.url}
                  />
                  <div className=' flex justify-between gap-20'>
                    <p className='text-lg'>{videoAsset.originalFilename}</p>
                    <button
                      type='button'
                      className=' rounded-full bg-gray-200 text-red-400 p-2 text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out'
                      onClick={() => setVideoAsset(undefined)}
                    >
                      <MdDelete />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {wrongFileType && (
          <p className='text-center text-xl text-red-400 font-semibold mt-4 w-[260px]'>
            Please select an video file (mp4 or webm or ogg)
          </p>
        )}
      </div>
      <div className='flex flex-col gap-3 pb-10'>
        <label className='text-md font-medium '>Caption</label>
        <input
          type='text'
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className='rounded lg:after:w-650 outline-none text-md border-2 border-gray-200 p-2'
        />
        <label className='text-md font-medium '>Choose a topic</label>

        <select
          onChange={(e) => {
            setTopic(e.target.value)
          }}
          className='outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer'
        >
          {topics.map((item) => (
            <option
              key={item.name}
              className=' outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300'
              value={item.name}
            >
              {item.name}
            </option>
          ))}
        </select>
        <div className='flex gap-6 mt-10'>
          <button
            onClick={handleDiscard}
            type='button'
            className='border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none'
          >
            Discard
          </button>
          <button
            disabled={videoAsset?.url ? false : true}
            onClick={handlePost}
            type='button'
            className='bg-indigo-500 text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none'
          >
            {savingPost ? 'Posting...' : 'Post'}
          </button>
        </div>
      </div>
    </div>
  )
}

Upload.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
