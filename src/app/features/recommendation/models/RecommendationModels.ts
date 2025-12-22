import { RecommendationModelsType } from "@/app/features/recommendation/types/RecommendationType";

const recommendationModels: RecommendationModelsType =  
{
    "Heavy Screen Use":  {
        durations: 
        {
            "2 minutes": {
               High: "Look at something far away for 2 minutes",
               Medium: "Look away from the screen, relax your jaw, blink slowly",
               Low: "Close your eyes and breathe slowly",
            },
            "3 minutes": {
                High: "Look at distant objects, move your eyes in circles",
                Medium:"Look away from screen",
                Low: "Close your eyes and gently cover them with your hands",
            },
      }   
    },


    "Long Time Sitting": 
    {
        durations: 
        {
            "2 minutes": {
                High: "Stand up and stretch your arms up for 2 minutes",
                Medium: "Stand up and lightly stretch your back and legs",
                Low:"Sit straight and slowly move your hips and back",
            },
            "3 minutes": {
                High: "Stand up, walk in place, stretch your arms and back",
                Medium: "Stand and do gentle stretches for your legs and spine",
                Low: "Sit up straight and slowly rotate your shoulders and neck",
            },
        }
    },

    "Mental work": {
        durations: 
        {
          "2 minutes": {
             High: "Inhale deeply, exhale fast 3 times",
             Medium: "Inhale 4s, exhale 6s for 1 minute",
             Low: "Close eyes and breathe naturally",
          },
          "3 minutes": {
             High: "Breathe in deeply, hold 2s, breathe out slowly, repeat",
             Medium: "Breathe in for 4 seconds, breathe out for 6 seconds, repeat",
             Low: "Close your eyes, breathe naturally, relax your mind",
          },
      }
    },

    "Many Meetings": 
    {
       durations: 
        {
            "2 minutes": {
                High: "Drop your shoulders and take one deep breath",
                Medium: "Breathe slowly and relax your face",
                Low: "Sit quietly and breathe slowly",
            },
            "3 minutes": {
                High: "Close your eyes, drop your shoulders, breathe deeply",
                Medium: "Sit quietly, relax your jaw and face, breathe slowly",
                Low: "Close your eyes and breathe calmly without thinking",
            },
        }
    },


    "Intense exercise": {

      durations: 
         {
            "2 minutes": {
                High: "Breathe in through your nose, breathe out slowly through your mouth",
                Medium: "Breathe in deeply, breathe out slowly",
                Low: "Breathe normally without effort",
            },
            "3 minutes": {
                High: "Walk slowly and stretch your arms and legs gently",
                Medium: "Breathe deeply and do light stretches",
                Low: "Breathe calmly and do very gentle movements",
            },
         }
    },
};


export {
    recommendationModels
}