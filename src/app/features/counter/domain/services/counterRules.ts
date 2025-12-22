import { CounterType } from "@/app/features/counter/domain/entities/CounterType.ts";

const getNextTime = ({minutes, seconds}: CounterType) => 
{
  const timerCompleted = getCountdownFinished();
  const decreasedSeconds = getDecreasedSeconds({minutes, seconds});
  const decreasedMinutes = getDecreasedMinutes(minutes);
  const isFinished = isTimerCompleted({minutes, seconds});
  
  if(isFinished) 
  {
      return timerCompleted;
  }

  if(seconds === 0) 
  {
      return decreasedMinutes;
  }

  return decreasedSeconds;
};

const isTimerCompleted = ({minutes, seconds}: CounterType) => 
{
    return minutes === 0 && seconds === 0;
}

const getCountdownFinished = () => 
{
    return { minutes: 0, seconds: 0, isFinished: true };
}

const getDecreasedMinutes = (minutes: number) => 
{
    return { minutes: minutes - 1, seconds: 59, isFinished: false };
}

const getDecreasedSeconds = ({minutes, seconds}: CounterType) =>
{
    return { minutes, seconds: seconds - 1, isFinished: false };
}

export {
    getNextTime
};
