import { useEffect, useState } from "react";
import { ArrowPathIcon, ClockIcon } from '@heroicons/react/24/outline'

export function TimerButton() {
  const [isShowTimer, setIsShowTimer] = useState<boolean>(false);
  const [time, setTime] = useState<number>(0);

  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `
      ${hours < 10 ? "0" + hours : hours}:
      ${minutes < 10 ? "0" + minutes : minutes}:
      ${seconds < 10 ? "0" + seconds : seconds}
    `};

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (isShowTimer) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isShowTimer]);

  return (
    <div>
      {isShowTimer ? (
        <div className='flex items-center space-x-2 bg-dark-fill-3 p-1.5 cursor-pointer rounded hover:bg-dark-fill-2'>
          <div>{formatTime(time)}</div>
          <ArrowPathIcon className='w-4 h-4' onClick={() => {
            setIsShowTimer(false)
            setTime(0)
          }}/>
        </div>
      ) : (
        <div className='flex items-center p-1 h-8 hover:bg-dark-fill-3 rounded cursor-pointer' onClick={() => setIsShowTimer(true)}>
          <ClockIcon className='w-6 h-6' />
        </div>
      )}
    </div>
  )
}