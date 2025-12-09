const storeList = [
  // 24 May 2024
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [88.4, 15.0] },
    properties: {
      date: "2024-05-24",
      timeUTC: "00:00",
      ciNumber: 1.5,
      centralPressure_hPa: 996,
      maxWind_kt: 25,
      pressureDrop_hPa: 3,
      grade: "D",
      phase:"Preparedness Phase"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [88.7, 15.5] },
    properties: {
      date: "2024-05-24",
      timeUTC: "03:00",
      ciNumber: 1.5,
      centralPressure_hPa: 996,
      maxWind_kt: 25,
      pressureDrop_hPa: 3,
      grade: "D",
      phase:"Preparedness Phase"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [88.9, 15.8] },
    properties: {
      date: "2024-05-24",
      timeUTC: "06:00",
      ciNumber: 1.5,
      centralPressure_hPa: 996,
      maxWind_kt: 25,
      pressureDrop_hPa: 3,
      grade: "D",
      phase:"Preparedness Phase"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [89.1, 16.2] },
    properties: {
      date: "2024-05-24",
      timeUTC: "12:00",
      ciNumber: 1.5,
      centralPressure_hPa: 995,
      maxWind_kt: 25,
      pressureDrop_hPa: 3,
      grade: "D",
      phase:"Preparedness Phase"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [89.4, 16.8] },
    properties: {
      date: "2024-05-24",
      timeUTC: "18:00",
      ciNumber: 1.5,
      centralPressure_hPa: 995,
      maxWind_kt: 25,
      pressureDrop_hPa: 3,
      grade: "D",
      phase:"Preparedness Phase"
    }
  },
  // 25 May 2024
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [89.7, 17.6] },
    properties: {
      date: "2024-05-25",
      timeUTC: "00:00",
      ciNumber: 2.0,
      centralPressure_hPa: 993,
      maxWind_kt: 30,
      pressureDrop_hPa: 4,
      grade: "DD",
      phase:"Anticipatory Action"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [89.7, 18.0] },
    properties: {
      date: "2024-05-25",
      timeUTC: "03:00",
      ciNumber: 2.0,
      centralPressure_hPa: 992,
      maxWind_kt: 30,
      pressureDrop_hPa: 5,
      grade: "DD",
      phase:"Anticipatory Action"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [89.7, 18.2] },
    properties: {
      date: "2024-05-25",
      timeUTC: "06:00",
      ciNumber: 2.0,
      centralPressure_hPa: 991,
      maxWind_kt: 30,
      pressureDrop_hPa: 5,
      grade: "DD",
      phase:"Anticipatory Action"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [89.4, 18.8] },
    properties: {
      date: "2024-05-25",
      timeUTC: "12:00",
      ciNumber: 2.5,
      centralPressure_hPa: 990,
      maxWind_kt: 35,
      pressureDrop_hPa: 6,
      grade: "CS",
      phase:"Anticipatory Action"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [89.5, 19.1] },
    properties: {
      date: "2024-05-25",
      timeUTC: "15:00",
      ciNumber: 2.5,
      centralPressure_hPa: 989,
      maxWind_kt: 35,
      pressureDrop_hPa: 7,
      grade: "CS",
      phase:"Anticipatory Action"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [89.4, 18.8] },
    properties: {
      date: "2024-05-25",
      timeUTC: "18:00",
      ciNumber: 2.5,
      centralPressure_hPa: 987,
      maxWind_kt: 40,
      pressureDrop_hPa: 8,
      grade: "CS",
      phase:"Anticipatory Action"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [89.4, 19.4] },
    properties: {
      date: "2024-05-25",
      timeUTC: "21:00",
      ciNumber: 2.5,
      centralPressure_hPa: 986,
      maxWind_kt: 45,
      pressureDrop_hPa: 10,
      grade: "CS",
      phase:"Anticipatory Action"
    }
  },

  // 26 May 2024
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [88.7, 20.9] },
    properties: {
      date: "2024-05-26",
      timeUTC: "00:00",
      ciNumber: 3.0,
      centralPressure_hPa: 984,
      maxWind_kt: 55,
      pressureDrop_hPa: 12,
      grade: "SCS",
      phase:"Anticipatory Action"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [89.3, 19.8] },
    properties: {
      date: "2024-05-26",
      timeUTC: "03:00",
      ciNumber: 3.0,
      centralPressure_hPa: 984,
      maxWind_kt: 50,
      pressureDrop_hPa: 12,
      grade: "SCS",
      phase:"Anticipatory Action"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [88.9, 20.4] },
    properties: {
      date: "2024-05-26",
      timeUTC: "06:00",
      ciNumber: 3.5,
      centralPressure_hPa: 980,
      maxWind_kt: 55,
      pressureDrop_hPa: 13,
      grade: "SCS",
      phase:"Anticipatory Action"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [88.7, 20.9] },
    properties: {
      date: "2024-05-26",
      timeUTC: "12:00",
      ciNumber: 3.5,
      centralPressure_hPa: 978,
      maxWind_kt: 55,
      pressureDrop_hPa: 18,
      grade: "SCS",
      phase:"Anticipatory Action"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [88.5, 21.4] },
    properties: {
      date: "2024-05-26",
      timeUTC: "15:00",
      ciNumber: 3.5,
      centralPressure_hPa: 978,
      maxWind_kt: 60,
      pressureDrop_hPa: 18,
      grade: "SCS",
      phase:"Anticipatory Action"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [88.4, 21.7] },
    properties: {
      date: "2024-05-26",
      timeUTC: "18:00",
      ciNumber: 3.5,
      centralPressure_hPa: 978,
      maxWind_kt: 54,
      pressureDrop_hPa: 18,
      grade: "SCS",
      phase:"Anticipatory Action"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [88.4, 22.0] },
    properties: {
      date: "2024-05-26",
      timeUTC: "21:00",
      ciNumber: 3.5,
      centralPressure_hPa: 980,
      maxWind_kt: 60,
      pressureDrop_hPa: 16,
      grade: "SCS",
      phase:"Landfall"
    }
  },

  // 27 May 2024
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [88.8, 22.4] },
    properties: {
      date: "2024-05-27",
      timeUTC: "00:00",
      ciNumber: 3.5,
      centralPressure_hPa: 982,
      maxWind_kt: 54,
      pressureDrop_hPa: 14,
      grade: "CS",
      phase:"Landfall"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [89.2, 22.8] },
    properties: {
      date: "2024-05-27",
      timeUTC: "03:00",
      ciNumber: 3.5,
      centralPressure_hPa: 984,
      maxWind_kt: 40,
      pressureDrop_hPa: 12,
      grade: "CS",
      phase:"Landfall"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [89.3, 23.1] },
    properties: {
      date: "2024-05-27",
      timeUTC: "06:00",
      ciNumber: 3.5,
      centralPressure_hPa: 985,
      maxWind_kt: 35,
      pressureDrop_hPa: 11,
      grade: "CS",
      phase:"Rapid Need Assessment and Rescue"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [89.3, 23.3] },
    properties: {
      date: "2024-05-27",
      timeUTC: "09:00",
      ciNumber: 3.5,
      centralPressure_hPa: 986,
      maxWind_kt: 35,
      pressureDrop_hPa: 10,
      grade: "CS",
      phase:"Rapid Need Assessment and Rescue"

    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [89.9, 23.7] },
    properties: {
      date: "2024-05-27",
      timeUTC: "12:00",
      ciNumber: 3.5,
      centralPressure_hPa: 987,
      maxWind_kt: 35,
      pressureDrop_hPa: 9,
      grade: "DD",
      phase:"Rapid Need Assessment and Rescue"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [90.2, 23.8] },
    properties: {
      date: "2024-05-27",
      timeUTC: "15:00",
      ciNumber: 3.5,
      centralPressure_hPa: 988,
      maxWind_kt: 30,
      pressureDrop_hPa: 8,
      grade: "DD",
      phase:"Rapid Need Assessment and Rescue"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [90.4, 24.2] },
    properties: {
      date: "2024-05-27",
      timeUTC: "18:00",
      ciNumber: 3.5,
      centralPressure_hPa: 990,
      maxWind_kt: 30,
      pressureDrop_hPa: 6,
      grade: "DD",
      phase:"Rapid Need Assessment and Rescue"
    }
  },

  // 28 May 2024
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [91.1, 24.4] },
    properties: {
      date: "2024-05-28",
      timeUTC: "00:00",
      ciNumber: 3.5,
      centralPressure_hPa: 991,
      maxWind_kt: 20,
      pressureDrop_hPa: 5,
      grade: "D",
      phase:"Rapid Need Assessment and Rescue"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [91.5, 24.7] },
    properties: {
      date: "2024-05-28",
      timeUTC: "03:00",
      ciNumber: 3.5,
      centralPressure_hPa: 992,
      maxWind_kt: 20,
      pressureDrop_hPa: 4,
      grade: "D",
      phase:"Rapid Need Assessment and Rescue"
    }
  },
  {
    type: "Feature",
    geometry: { type: "Point", coordinates: [91.8, 25.1] },
    properties: {
      date: "2024-05-28",
      timeUTC: "06:00",
      ciNumber: 3.5,
      centralPressure_hPa: 993,
      maxWind_kt: 20,
      pressureDrop_hPa: 3,
      grade: "D",
      phase:"Rapid Need Assessment and Rescue"
    }
  }
];
  
  