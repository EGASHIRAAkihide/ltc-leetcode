'use client'

import { Problem } from "@/app/_mock/problems";
import { XCircleIcon } from '@heroicons/react/24/outline'
import YouTube from 'react-youtube';

import { CheckCircleIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  data: Problem[];
}

export function TableBody({
  data
}: Props) {
  const [youTubePlayer, setYouTubePlayer] = useState({
    isOpen: false,
    videoId: ''
  })

  const closeModal = () => {
    setYouTubePlayer({
      isOpen: false,
      videoId: ''
    })
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleEsc)

    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <>
      <tbody className='text-white'>
        {data.map((d, index) => {
          const difficultyColor =
            d.difficulty === 'Easy'
              ? 'text-dark-green-s'
              : d.difficulty === 'Medium'
                ? 'text-dark-yellow'
                : 'text-dark-pink'

          return (
            <tr key={d.id} className={`${index % 2 === 1 ? 'bg-dark-layer-1' : ''}`}>
              <th className='px-2 py-4 font-medium whitespace-nowrap text-dark-green-s'>
                <div className='w-[18px] h-[18px]'>
                  <CheckCircleIcon />
                </div>
              </th>
              <td className='px-6 py-4'>
                <Link className='hover:text-blue-600 cursor-pointer' href={`/problems/${d.id}`}>
                  {d.title}
                </Link>
              </td>
              <td className={`px-6 py-4 ${difficultyColor}`}>
                {d.difficulty}
              </td>
              <td className='px-6 py-4'>
                {d.category}
              </td>
              <td className='px-6 py-4'>
                {d.videoId ? (
                  <div className='w-[24px] h-[24px] cursor-pointer hover:text-red-600'
                    onClick={() => setYouTubePlayer({
                      isOpen: true,
                      videoId: d.videoId as string
                    })}>
                    <PlayCircleIcon />
                  </div>
                ) : (
                  <p className='text-gray-400'>coming soon...</p>
                )}
              </td>
            </tr>
          )
        })}
      </tbody> 
      {youTubePlayer.isOpen && (
        <tfoot className='fixed top-0 left-0 h-screen w-screen flex items-center justify-center'>
					<div className='bg-black z-10 opacity-70 top-0 left-0 w-screen h-screen absolute' onClick={closeModal}></div>
					<div className='w-full z-50 h-full px-6 relative max-w-4xl'>
						<div className='w-full h-full flex items-center justify-center relative'>
							<div className='w-full relative'>
                <div className='w-5 h-5 ml-auto' onClick={closeModal}>
                  <XCircleIcon />
                </div>
								<YouTube
									videoId={youTubePlayer.videoId}
									loading='lazy'
									iframeClassName='w-full min-h-[500px]'
								/>
							</div>
						</div>
					</div>
				</tfoot>
      )}
    </>
  )
}