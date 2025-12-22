import {screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import { renderCounter} from '@/app/features/counter/ui/Counter.mock.tsx';

import {
  updateInitialCountdown,
  advanceOneSecond,
  getUserEventWithoutDelay
} from '@/app/features/counter/ui/Counter.mock.utils.ts';


beforeAll(() => 
{
  jest.useFakeTimers();
  updateInitialCountdown();
});

afterAll(() => 
{
  jest.clearAllTimers();
  jest.useRealTimers();
});


test('should decrease seconds by one when the counter is started', async () => 
{
    const {user} = getUserEventWithoutDelay();

    renderCounter();

    const playButton = screen.getByTestId("playCountdown");

    await user.click(playButton);

    advanceOneSecond(); 

    const decreasedTime = await screen.findByText("0:1");

    expect(decreasedTime).toBeInTheDocument();
});