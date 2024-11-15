// src/data/mockData.js

export const mockPieData = [
    {
        id: 'Windows',
        label: 'Windows',
        value: 60,
        color: 'hsl(220, 70%, 50%)',
    },
    {
        id: 'Linux',
        label: 'Linux',
        value: 30,
        color: 'hsl(120, 70%, 50%)',
    },

    {
        id: 'Other',
        label: 'Other',
        value: 50,
        color: 'hsl(0, 70%, 50%)',
    },
];

export const mockBarData = [
    {
        category: 'HR Management',
        vulnerability: 5,
        SOC: 10,
        
    },
    {
        category: 'CRM',
        vulnerability: 5,
        SOC: 10,
        
      
    },
    {
        category: 'Website',
        vulnerability: 5,
        SOC: 10,
    },
    // More data can be added here
];

// src/data/mockData.js

export const mockGroupedBarData = [
    {
      category: 'HR Management',
      2021: 100,
      
    },
    {
      category: 'CRM',
      2021: 80,
      2022: 100,
      
    },
    {
      category: 'Websites',
      2021: 200,
     
    },
    
  ];
  