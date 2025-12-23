export const RecommendationLoader = () => 
{
  const dotDelays = [0, 150, 300];

  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
        <span className="recommendation-message mb-3 md:mr-2">
            Waiting to get a recommendation
        </span>

        <div className="recommendation-message flex items-end gap-1">
            {dotDelays.map(delay => (
                <span
                    key={delay}
                    className="w-1.5 h-1.5 bg-black rounded-full animate-bounce opacity-70"
                    style={{ animationDelay: `${delay}ms` }}
                />
            ))}
        </div>
    </div>
  );
};
