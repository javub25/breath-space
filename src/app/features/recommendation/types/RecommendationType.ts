type DescriptionType = string;


interface EnergyType {
    [EnergyLevelKey: string]: DescriptionType;
}

interface DurationType {
    durations: {
        [DurationKey: string]: EnergyType
    }
}

interface RecommendationModelsType {
    [ActivityKey: string]: DurationType;
}

export {
    RecommendationModelsType,
}

