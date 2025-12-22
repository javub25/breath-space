
import { Countdown } from '@/app/features/counter/ui/Countdown.tsx';
import {CounterControls} from "@/app/features/counter/ui/CounterControls.tsx";
import { useCountdownTimer } from '@/app/features/counter/hooks/useCountdownTimer.ts';
import {render} from '@testing-library/react';

const CounterMock = () => 
{
    useCountdownTimer();

    return (
      <>
        <Countdown />
        <CounterControls />
      </>
    );
};

const renderCounter = () => 
{
    render(<CounterMock />);
}

export {
    renderCounter
};