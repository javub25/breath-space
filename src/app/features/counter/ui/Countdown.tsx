import { useCountdownStore } from '@/app/features/counter/hooks/useCountdownStore';

export const Countdown = () => 
{
    const countdown = useCountdownStore((state) => state.currentCountdown);
    const { minutes, seconds } = countdown;

    return (
        <span className="base-timer__label">
            {minutes}:{seconds}
        </span>
    )
}