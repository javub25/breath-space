type CounterType = 
{
    minutes: number,
    seconds: number
}

type CountdownUpdater = 
{
    (currentCountdown: CounterType): CounterType
}

type CountdownStoreType = {
    currentCountdown: CounterType,
    isCounting: boolean,
    updateCountdown: (updater: CountdownUpdater) => void;
    startCountdown: () => void,
    stopCountdown: () => void,
};

type AdvanceCountdownType = Pick<CountdownStoreType, 'updateCountdown'> & {
    counterInterval: number
}


export {
    CounterType,
    CountdownUpdater,
    CountdownStoreType,
    AdvanceCountdownType,
}