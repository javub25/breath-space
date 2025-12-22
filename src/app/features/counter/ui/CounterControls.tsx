import play from '@/app/features/counter/assets/svg/play.svg'
import stop from '@/app/features/counter/assets/svg/stop.svg'
import { useCountdownStore } from '@/app/features/counter/hooks/useCountdownStore.ts'

export const CounterControls = () => 
{   
    const startCountdown = useCountdownStore((state) => state.startCountdown);
    const stopCountdown = useCountdownStore((state) => state.stopCountdown);

    return (
        <ul className="flex items-center justify-center gap-4 mt-6">
            <li>
                <button 
                    type="button" 
                    className="base-controls__buttons" 
                    data-testid="playCountdown"
                    onClick={startCountdown}>
                    <img src={play} alt="play icon" className="w-5 h-5" />
                </button>
            </li>

            <li>
                <button 
                    type="button" 
                    className="base-controls__buttons" 
                    data-testid="stopCountdown"
                    onClick={stopCountdown}>
                    <img src={stop} alt="stop icon" className="w-5 h-5" />
                </button>
            </li>
        </ul>
    )
}