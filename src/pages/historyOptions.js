export const historyOptions = {
    lineHeightAnnotation: {
      always: true,
      hover: false,
      lineWeight: 1.5,
    },
  
    animation: {
      duration: 2000,
    },

    responsive: true,
        maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          type: "time",
          distribution: "linear",
        },
      ],
    },
  };