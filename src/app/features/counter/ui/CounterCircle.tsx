export const CounterCircle = () => 
{
    return (
        <svg className="shrink-0 md:w-80 h-80 w-full" 
            viewBox="0 0 100 100" 
            xmlns="http://www.w3.org/2000/svg">
            <g className="base-timer__circle">
                <circle className="base-timer__path-background" cx="50" cy="50" r="45"></circle>
                <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            </g>
        </svg>
    )
}