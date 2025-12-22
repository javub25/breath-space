import {act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useCountdownStore } from '@/app/features/counter/hooks/useCountdownStore';


const updateInitialCountdown = () => {
    useCountdownStore.setState({
        currentCountdown: { minutes: 0, seconds: 2 },
        isCounting: false,
    });
};

const advanceOneSecond = () => 
{
    act(() => 
    {
        const oneSecondToMiliseconds = 1000;
        jest.advanceTimersByTime(oneSecondToMiliseconds);
    })
};

const getUserEventWithoutDelay = () => 
{
    const user = userEvent.setup({delay: null});
    return {user};
}

export {
    updateInitialCountdown,
    advanceOneSecond,
    getUserEventWithoutDelay
}