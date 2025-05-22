const rawData = [
  {
    "Team": "Stanford",
    "Year": 1984,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Glassboro",
    "Year": 1984,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Massachusetts",
    "Year": 1984,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Penn",
    "Year": 1984,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Chabot Community College",
    "Year": 1984,
    "Rank": 5,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 1984,
    "Rank": 6,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Ohio",
    "Year": 1984,
    "Rank": 7,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Syracuse",
    "Year": 1984,
    "Rank": 8,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 1984,
    "Rank": 9,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Tufts",
    "Year": 1984,
    "Rank": 10,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Penn",
    "Year": 1985,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Massachusetts",
    "Year": 1985,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 1985,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "SW Missouri State",
    "Year": 1985,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 1985,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 1985,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Cal Poly SLO",
    "Year": 1985,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 1985,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "MIT",
    "Year": 1985,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 1985,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Central Florida",
    "Year": 1985,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Princeton",
    "Year": 1985,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Massachusetts",
    "Year": 1986,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 1986,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1986,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 1986,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 1986,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "SW Missouri State",
    "Year": 1986,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 1986,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "MIT",
    "Year": 1986,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "Carnegie Mellon",
    "Year": 1986,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Princeton",
    "Year": 1986,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 1986,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 1986,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Chabot Community College",
    "Year": 1987,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1987,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Cal Poly SLO",
    "Year": 1987,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 1987,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "SW Missouri State",
    "Year": 1987,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 1987,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia Tech",
    "Year": 1987,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "SUNY Purchase",
    "Year": 1987,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "Carnegie Mellon",
    "Year": 1987,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Princeton",
    "Year": 1987,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 1987,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 1987,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "East Carolina",
    "Year": 1987,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Vermont",
    "Year": 1987,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1988,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 1988,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 1988,
    "Rank": 3,
    "T_Rank": "3",
    "Division": "College Men's"
  },
  {
    "Team": "Columbia",
    "Year": 1988,
    "Rank": 4,
    "T_Rank": "4",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia Tech",
    "Year": 1988,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 1988,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Carnegie Mellon",
    "Year": 1988,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "East Carolina",
    "Year": 1988,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "Saint Louis",
    "Year": 1988,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Wesleyan",
    "Year": 1988,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Massachusetts",
    "Year": 1988,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Winona State",
    "Year": 1988,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1989,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 1989,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Carnegie Mellon",
    "Year": 1989,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 1989,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Columbia",
    "Year": 1989,
    "Rank": 5,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "East Carolina",
    "Year": 1989,
    "Rank": 6,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Florida",
    "Year": 1989,
    "Rank": 7,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Indiana",
    "Year": 1989,
    "Rank": 8,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 1989,
    "Rank": 9,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Penn",
    "Year": 1989,
    "Rank": 10,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "SUNY Purchase",
    "Year": 1989,
    "Rank": 11,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Tufts",
    "Year": 1989,
    "Rank": 12,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1990,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 1990,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "SUNY Purchase",
    "Year": 1990,
    "Rank": 3,
    "T_Rank": "3",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 1990,
    "Rank": 4,
    "T_Rank": "4",
    "Division": "College Men's"
  },
  {
    "Team": "Vermont",
    "Year": 1990,
    "Rank": 5,
    "T_Rank": "5",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Cruz",
    "Year": 1990,
    "Rank": 6,
    "T_Rank": "6",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 1990,
    "Rank": 7,
    "T_Rank": "7",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 1990,
    "Rank": 8,
    "T_Rank": "8",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 1990,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 1990,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Princeton",
    "Year": 1990,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 1990,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Cruz",
    "Year": 1991,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 1991,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1991,
    "Rank": 3,
    "T_Rank": "3",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 1991,
    "Rank": 4,
    "T_Rank": "4",
    "Division": "College Men's"
  },
  {
    "Team": "Penn",
    "Year": 1991,
    "Rank": 5,
    "T_Rank": "5",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 1991,
    "Rank": 6,
    "T_Rank": "6",
    "Division": "College Men's"
  },
  {
    "Team": "Boston College",
    "Year": 1991,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 1991,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 1991,
    "Rank": 9,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "East Carolina",
    "Year": 1991,
    "Rank": 10,
    "T_Rank": "10",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia Tech",
    "Year": 1991,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 1991,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 1992,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 1992,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 1992,
    "Rank": 3,
    "T_Rank": "3",
    "Division": "College Men's"
  },
  {
    "Team": "California",
    "Year": 1992,
    "Rank": 4,
    "T_Rank": "4",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 1992,
    "Rank": 5,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "East Carolina",
    "Year": 1992,
    "Rank": 6,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia Tech",
    "Year": 1992,
    "Rank": 7,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Oberlin",
    "Year": 1992,
    "Rank": 8,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 1992,
    "Rank": 9,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Vermont",
    "Year": 1992,
    "Rank": 10,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Wesleyan",
    "Year": 1992,
    "Rank": 11,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 1992,
    "Rank": 12,
    "T_Rank": "?",
    "Division": "College Men's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 1993,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1993,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Cruz",
    "Year": 1993,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 1993,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "East Carolina",
    "Year": 1993,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 1993,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 1993,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 1993,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "Boston College",
    "Year": 1993,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 1993,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "SUNY Albany",
    "Year": 1993,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Wesleyan",
    "Year": 1993,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "East Carolina",
    "Year": 1994,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 1994,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1994,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 1994,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 1994,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 1994,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 1994,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "Las Positas College",
    "Year": 1994,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 1994,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Penn",
    "Year": 1994,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "SUNY Binghamton",
    "Year": 1994,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 1994,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "East Carolina",
    "Year": 1995,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Cruz",
    "Year": 1995,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 1995,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 1995,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 1995,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Yale",
    "Year": 1995,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 1995,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "LSU",
    "Year": 1995,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "Oberlin",
    "Year": 1995,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Williams",
    "Year": 1995,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 1995,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Indiana",
    "Year": 1995,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1996,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 1996,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 1996,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 1996,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 1996,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 1996,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 1996,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "NC State",
    "Year": 1996,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "Wesleyan",
    "Year": 1996,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Williams",
    "Year": 1996,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Indiana",
    "Year": 1996,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Florida State",
    "Year": 1996,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1997,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 1997,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 1997,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "East Carolina",
    "Year": 1997,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 1997,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 1997,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 1997,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "Rice",
    "Year": 1997,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "Oberlin",
    "Year": 1997,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Wesleyan",
    "Year": 1997,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "LSU",
    "Year": 1997,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Yale",
    "Year": 1997,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1998,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 1998,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Brown",
    "Year": 1998,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 1998,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 1998,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 1998,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Harvard",
    "Year": 1998,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "LSU",
    "Year": 1998,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Men's"
  },
  {
    "Team": "East Carolina",
    "Year": 1998,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Iowa",
    "Year": 1998,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Rice",
    "Year": 1998,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Yale",
    "Year": 1998,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "NC State",
    "Year": 1999,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1999,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Brown",
    "Year": 1999,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 1999,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Cruz",
    "Year": 1999,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 1999,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 1999,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 1999,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 1999,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Iowa",
    "Year": 1999,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 1999,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Yale",
    "Year": 1999,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 1999,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Oberlin",
    "Year": 1999,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Rice",
    "Year": 1999,
    "Rank": 15,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Salisbury",
    "Year": 1999,
    "Rank": 16,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Brown",
    "Year": 2000,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2000,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2000,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2000,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 2000,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "NC State",
    "Year": 2000,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Salisbury",
    "Year": 2000,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 2000,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2000,
    "Rank": 9,
    "T_Rank": "9",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2000,
    "Rank": 10,
    "T_Rank": "10",
    "Division": "College Men's"
  },
  {
    "Team": "Rice",
    "Year": 2000,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Winona State",
    "Year": 2000,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Notre Dame",
    "Year": 2000,
    "Rank": 13,
    "T_Rank": "13",
    "Division": "College Men's"
  },
  {
    "Team": "Princeton",
    "Year": 2000,
    "Rank": 14,
    "T_Rank": "14",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Cruz",
    "Year": 2000,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Tufts",
    "Year": 2000,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2001,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2001,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2001,
    "Rank": 3,
    "T_Rank": "3",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 2001,
    "Rank": 4,
    "T_Rank": "4",
    "Division": "College Men's"
  },
  {
    "Team": "Brown",
    "Year": 2001,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 2001,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2001,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2001,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Harvard",
    "Year": 2001,
    "Rank": 9,
    "T_Rank": "9",
    "Division": "College Men's"
  },
  {
    "Team": "Penn",
    "Year": 2001,
    "Rank": 10,
    "T_Rank": "10",
    "Division": "College Men's"
  },
  {
    "Team": "Ohio State",
    "Year": 2001,
    "Rank": 11,
    "T_Rank": "11",
    "Division": "College Men's"
  },
  {
    "Team": "Texas A&M",
    "Year": 2001,
    "Rank": 12,
    "T_Rank": "12",
    "Division": "College Men's"
  },
  {
    "Team": "Duke",
    "Year": 2001,
    "Rank": 13,
    "T_Rank": "13",
    "Division": "College Men's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 2001,
    "Rank": 14,
    "T_Rank": "14",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 2001,
    "Rank": 15,
    "T_Rank": "15",
    "Division": "College Men's"
  },
  {
    "Team": "Tufts",
    "Year": 2001,
    "Rank": 16,
    "T_Rank": "16",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 2002,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2002,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2002,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "William & Mary",
    "Year": 2002,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2002,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2002,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 2002,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Tufts",
    "Year": 2002,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 2002,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Illinois",
    "Year": 2002,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Cruz",
    "Year": 2002,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2002,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Iowa",
    "Year": 2002,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Swarthmore",
    "Year": 2002,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "George Washington",
    "Year": 2002,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2002,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2003,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 2003,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2003,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2003,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Brown",
    "Year": 2003,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2003,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "William & Mary",
    "Year": 2003,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Illinois",
    "Year": 2003,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 2003,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2003,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "NC State",
    "Year": 2003,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Penn State",
    "Year": 2003,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Ohio State",
    "Year": 2003,
    "Rank": 13,
    "T_Rank": "13",
    "Division": "College Men's"
  },
  {
    "Team": "Penn",
    "Year": 2003,
    "Rank": 14,
    "T_Rank": "14",
    "Division": "College Men's"
  },
  {
    "Team": "Dartmouth",
    "Year": 2003,
    "Rank": 15,
    "T_Rank": "15",
    "Division": "College Men's"
  },
  {
    "Team": "Williams",
    "Year": 2003,
    "Rank": 16,
    "T_Rank": "16",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2004,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "California",
    "Year": 2004,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Brown",
    "Year": 2004,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 2004,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2004,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Iowa",
    "Year": 2004,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "NC State",
    "Year": 2004,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2004,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2004,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Tufts",
    "Year": 2004,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "George Washington",
    "Year": 2004,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "William & Mary",
    "Year": 2004,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan State",
    "Year": 2004,
    "Rank": 13,
    "T_Rank": "13",
    "Division": "College Men's"
  },
  {
    "Team": "Illinois",
    "Year": 2004,
    "Rank": 14,
    "T_Rank": "14",
    "Division": "College Men's"
  },
  {
    "Team": "Delaware",
    "Year": 2004,
    "Rank": 15,
    "T_Rank": "15",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 2004,
    "Rank": 16,
    "T_Rank": "16",
    "Division": "College Men's"
  },
  {
    "Team": "Brown",
    "Year": 2005,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2005,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2005,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 2005,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 2005,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2005,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Washington",
    "Year": 2005,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2005,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2005,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan State",
    "Year": 2005,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2005,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Harvard",
    "Year": 2005,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "British Columbia",
    "Year": 2005,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2005,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 2005,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Queen's",
    "Year": 2005,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Florida",
    "Year": 2006,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2006,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 2006,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 2006,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2006,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2006,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 2006,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2006,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2006,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan State",
    "Year": 2006,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2006,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 2006,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Harvard",
    "Year": 2006,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2006,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Brown",
    "Year": 2006,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Delaware",
    "Year": 2006,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2007,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2007,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Florida",
    "Year": 2007,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 2007,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2007,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 2007,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 2007,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2007,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Ohio State",
    "Year": 2007,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2007,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Brown",
    "Year": 2007,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Indiana",
    "Year": 2007,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 2007,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Williams",
    "Year": 2007,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Delaware",
    "Year": 2007,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 2007,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2008,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Florida",
    "Year": 2008,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2008,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2008,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Arizona",
    "Year": 2008,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 2008,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Harvard",
    "Year": 2008,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Illinois",
    "Year": 2008,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Cruz",
    "Year": 2008,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 2008,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2008,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2008,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Dartmouth",
    "Year": 2008,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2008,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Delaware",
    "Year": 2008,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "North Texas",
    "Year": 2008,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2009,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2009,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 2009,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2009,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2009,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2009,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Virginia",
    "Year": 2009,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2009,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 2009,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Williams",
    "Year": 2009,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Luther",
    "Year": 2009,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Tufts",
    "Year": 2009,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2009,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Minnesota",
    "Year": 2009,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2009,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "NC State",
    "Year": 2009,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Illinois",
    "Year": 2009,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 2009,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "California",
    "Year": 2009,
    "Rank": 19,
    "T_Rank": "T19",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 2009,
    "Rank": 20,
    "T_Rank": "T19",
    "Division": "College Men's"
  },
  {
    "Team": "Florida",
    "Year": 2010,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2010,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 2010,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2010,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "California",
    "Year": 2010,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2010,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Minnesota",
    "Year": 2010,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 2010,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2010,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Iowa",
    "Year": 2010,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Middlebury",
    "Year": 2010,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2010,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2010,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 2010,
    "Rank": 14,
    "T_Rank": "T14",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 2010,
    "Rank": 15,
    "T_Rank": "T14",
    "Division": "College Men's"
  },
  {
    "Team": "Harvard",
    "Year": 2010,
    "Rank": 16,
    "T_Rank": "16",
    "Division": "College Men's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2010,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Illinois",
    "Year": 2010,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 2010,
    "Rank": 19,
    "T_Rank": "T19",
    "Division": "College Men's"
  },
  {
    "Team": "Texas State",
    "Year": 2010,
    "Rank": 20,
    "T_Rank": "T19",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2011,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2011,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2011,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Iowa",
    "Year": 2011,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Harvard",
    "Year": 2011,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 2011,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2011,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 2011,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "British Columbia",
    "Year": 2011,
    "Rank": 9,
    "T_Rank": "9",
    "Division": "College Men's"
  },
  {
    "Team": "Tufts",
    "Year": 2011,
    "Rank": 10,
    "T_Rank": "10",
    "Division": "College Men's"
  },
  {
    "Team": "Washington",
    "Year": 2011,
    "Rank": 11,
    "T_Rank": "11",
    "Division": "College Men's"
  },
  {
    "Team": "Luther",
    "Year": 2011,
    "Rank": 12,
    "T_Rank": "12",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2011,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Virginia",
    "Year": 2011,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 2011,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Whitman",
    "Year": 2011,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Illinois",
    "Year": 2011,
    "Rank": 17,
    "T_Rank": "17",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Cruz",
    "Year": 2011,
    "Rank": 18,
    "T_Rank": "T18",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado College",
    "Year": 2011,
    "Rank": 19,
    "T_Rank": "T18",
    "Division": "College Men's"
  },
  {
    "Team": "Florida",
    "Year": 2011,
    "Rank": 20,
    "T_Rank": "T18",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2012,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2012,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 2012,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2012,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Central Florida",
    "Year": 2012,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Luther",
    "Year": 2012,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Minnesota",
    "Year": 2012,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Tufts",
    "Year": 2012,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2012,
    "Rank": 9,
    "T_Rank": "9",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2012,
    "Rank": 10,
    "T_Rank": "10",
    "Division": "College Men's"
  },
  {
    "Team": "California",
    "Year": 2012,
    "Rank": 11,
    "T_Rank": "11",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia Tech",
    "Year": 2012,
    "Rank": 12,
    "T_Rank": "12",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 2012,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Washington",
    "Year": 2012,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2012,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Minnesota-Duluth",
    "Year": 2012,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan State",
    "Year": 2012,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Ohio",
    "Year": 2012,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "UC Davis",
    "Year": 2012,
    "Rank": 19,
    "T_Rank": "T19",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 2012,
    "Rank": 20,
    "T_Rank": "T19",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2013,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Central Florida",
    "Year": 2013,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2013,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 2013,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "UC Davis",
    "Year": 2013,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Dartmouth",
    "Year": 2013,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 2013,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 2013,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2013,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Harvard",
    "Year": 2013,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2013,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2013,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Arizona",
    "Year": 2013,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 2013,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Luther",
    "Year": 2013,
    "Rank": 15,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Washington",
    "Year": 2013,
    "Rank": 16,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Florida State",
    "Year": 2013,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 2013,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Illinois",
    "Year": 2013,
    "Rank": 19,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Ohio",
    "Year": 2013,
    "Rank": 20,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2014,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 2014,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 2014,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 2014,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2014,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2014,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2014,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2014,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2014,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Central Florida",
    "Year": 2014,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Harvard",
    "Year": 2014,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Tufts",
    "Year": 2014,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2014,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Florida",
    "Year": 2014,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Florida State",
    "Year": 2014,
    "Rank": 15,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Massachusetts",
    "Year": 2014,
    "Rank": 16,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Dartmouth",
    "Year": 2014,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Eastern Michigan",
    "Year": 2014,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Rutgers",
    "Year": 2014,
    "Rank": 19,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Texas A&M",
    "Year": 2014,
    "Rank": 20,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 2015,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 2015,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Central Florida",
    "Year": 2015,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Florida State",
    "Year": 2015,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2015,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Massachusetts",
    "Year": 2015,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2015,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2015,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 2015,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Minnesota",
    "Year": 2015,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 2015,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Texas A&M",
    "Year": 2015,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Auburn",
    "Year": 2015,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Illinois",
    "Year": 2015,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Western Washington",
    "Year": 2015,
    "Rank": 15,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2015,
    "Rank": 16,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2015,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Cincinnati",
    "Year": 2015,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 2015,
    "Rank": 19,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Maryland",
    "Year": 2015,
    "Rank": 20,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Minnesota",
    "Year": 2016,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Harvard",
    "Year": 2016,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 2016,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2016,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Auburn",
    "Year": 2016,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2016,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 2016,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2016,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Massachusetts",
    "Year": 2016,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2016,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 2016,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Texas A&M",
    "Year": 2016,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2016,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Connecticut",
    "Year": 2016,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 2016,
    "Rank": 15,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Utah",
    "Year": 2016,
    "Rank": 16,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Cal Poly SLO",
    "Year": 2016,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Case Western Reserve",
    "Year": 2016,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Florida State",
    "Year": 2016,
    "Rank": 19,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Washington",
    "Year": 2016,
    "Rank": 20,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2017,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 2017,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Massachusetts",
    "Year": 2017,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 2017,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Minnesota",
    "Year": 2017,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2017,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Washington",
    "Year": 2017,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2017,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Auburn",
    "Year": 2017,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Cal Poly SLO",
    "Year": 2017,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2017,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 2017,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "British Columbia",
    "Year": 2017,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Connecticut",
    "Year": 2017,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 2017,
    "Rank": 15,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Texas A&M",
    "Year": 2017,
    "Rank": 16,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2017,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado State",
    "Year": 2017,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon State",
    "Year": 2017,
    "Rank": 19,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Virginia Tech",
    "Year": 2017,
    "Rank": 20,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 2018,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2018,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2018,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 2018,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Brown",
    "Year": 2018,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 2018,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Washington",
    "Year": 2018,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2018,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Massachusetts",
    "Year": 2018,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Minnesota",
    "Year": 2018,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Northwestern",
    "Year": 2018,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2018,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Auburn",
    "Year": 2018,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Connecticut",
    "Year": 2018,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Florida State",
    "Year": 2018,
    "Rank": 15,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "William & Mary",
    "Year": 2018,
    "Rank": 16,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Georgetown",
    "Year": 2018,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Maryland",
    "Year": 2018,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Stanford",
    "Year": 2018,
    "Rank": 19,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Victoria",
    "Year": 2018,
    "Rank": 20,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Brown",
    "Year": 2019,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 2019,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Cal Poly SLO",
    "Year": 2019,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2019,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2019,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Ohio State",
    "Year": 2019,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2019,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2019,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 2019,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Washington",
    "Year": 2019,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2019,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 2019,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Minnesota",
    "Year": 2019,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Tufts",
    "Year": 2019,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Northeastern",
    "Year": 2019,
    "Rank": 15,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Iowa State",
    "Year": 2019,
    "Rank": 16,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "NC State",
    "Year": 2019,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "California",
    "Year": 2019,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Victoria",
    "Year": 2019,
    "Rank": 19,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Rutgers",
    "Year": 2019,
    "Rank": 20,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 2021,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 2021,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Brown",
    "Year": 2021,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2021,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Washington",
    "Year": 2021,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2021,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Cal Poly SLO",
    "Year": 2021,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2021,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Ohio State",
    "Year": 2021,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 2021,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "NC State",
    "Year": 2021,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Tulane",
    "Year": 2021,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Men's"
  },
  {
    "Team": "Northeastern",
    "Year": 2021,
    "Rank": 13,
    "T_Rank": "13",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2021,
    "Rank": 14,
    "T_Rank": "14",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2021,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Utah State",
    "Year": 2021,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Illinois",
    "Year": 2021,
    "Rank": 17,
    "T_Rank": "17",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 2021,
    "Rank": 18,
    "T_Rank": "18",
    "Division": "College Men's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2021,
    "Rank": 19,
    "T_Rank": "DNF",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2021,
    "Rank": 20,
    "T_Rank": "DNF",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 2022,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Brown",
    "Year": 2022,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2022,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2022,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Minnesota",
    "Year": 2022,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "California",
    "Year": 2022,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 2022,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Cal Poly SLO",
    "Year": 2022,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Vermont",
    "Year": 2022,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Washington",
    "Year": 2022,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2022,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Auburn",
    "Year": 2022,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Utah State",
    "Year": 2022,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2022,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2022,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "NC State",
    "Year": 2022,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "William & Mary",
    "Year": 2022,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "WashU",
    "Year": 2022,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Connecticut",
    "Year": 2022,
    "Rank": 19,
    "T_Rank": "T19",
    "Division": "College Men's"
  },
  {
    "Team": "Ohio State",
    "Year": 2022,
    "Rank": 20,
    "T_Rank": "T19",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 2023,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Massachusetts",
    "Year": 2023,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Cal Poly SLO",
    "Year": 2023,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Vermont",
    "Year": 2023,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Brown",
    "Year": 2023,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 2023,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2023,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2023,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "California",
    "Year": 2023,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2023,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2023,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 2023,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "UC Santa Cruz",
    "Year": 2023,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Minnesota",
    "Year": 2023,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2023,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Washington",
    "Year": 2023,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Tufts",
    "Year": 2023,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Utah State",
    "Year": 2023,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Cornell",
    "Year": 2023,
    "Rank": 19,
    "T_Rank": "T19",
    "Division": "College Men's"
  },
  {
    "Team": "NC State",
    "Year": 2023,
    "Rank": 20,
    "T_Rank": "T19",
    "Division": "College Men's"
  },
  {
    "Team": "Brown",
    "Year": 2024,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Men's"
  },
  {
    "Team": "Cal Poly SLO",
    "Year": 2024,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Men's"
  },
  {
    "Team": "Colorado",
    "Year": 2024,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "North Carolina",
    "Year": 2024,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Men's"
  },
  {
    "Team": "Georgia",
    "Year": 2024,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Minnesota",
    "Year": 2024,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "NC State",
    "Year": 2024,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon",
    "Year": 2024,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Men's"
  },
  {
    "Team": "Massachusetts",
    "Year": 2024,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2024,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Texas",
    "Year": 2024,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Michigan",
    "Year": 2024,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Men's"
  },
  {
    "Team": "Oregon State",
    "Year": 2024,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "California",
    "Year": 2024,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Men's"
  },
  {
    "Team": "Vermont",
    "Year": 2024,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "WashU",
    "Year": 2024,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Men's"
  },
  {
    "Team": "Penn State",
    "Year": 2024,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Carleton",
    "Year": 2024,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Men's"
  },
  {
    "Team": "Alabama-Huntsville",
    "Year": 2024,
    "Rank": 19,
    "T_Rank": "T19",
    "Division": "College Men's"
  },
  {
    "Team": "Ottawa",
    "Year": 2024,
    "Rank": 20,
    "T_Rank": "T19",
    "Division": "College Men's"
  },
  {
    "Team": "Kansas",
    "Year": 1987,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "UC Davis",
    "Year": 1987,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Humboldt State",
    "Year": 1987,
    "Rank": 3,
    "T_Rank": "3",
    "Division": "College Women's"
  },
  {
    "Team": "Massachusetts",
    "Year": 1987,
    "Rank": 4,
    "T_Rank": "4",
    "Division": "College Women's"
  },
  {
    "Team": "Cornell",
    "Year": 1987,
    "Rank": 5,
    "T_Rank": "5",
    "Division": "College Women's"
  },
  {
    "Team": "Earlham",
    "Year": 1987,
    "Rank": 6,
    "T_Rank": "6",
    "Division": "College Women's"
  },
  {
    "Team": "Vermont",
    "Year": 1987,
    "Rank": 7,
    "T_Rank": "7",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1988,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "UC Davis",
    "Year": 1988,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Humboldt State",
    "Year": 1988,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 1988,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 1988,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Massachusetts",
    "Year": 1988,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Cornell",
    "Year": 1988,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Women's"
  },
  {
    "Team": "Wisconsin",
    "Year": 1988,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Women's"
  },
  {
    "Team": "Florida",
    "Year": 1988,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Kansas",
    "Year": 1988,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "UC Davis",
    "Year": 1989,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Michigan",
    "Year": 1989,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1989,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 1989,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Cornell",
    "Year": 1989,
    "Rank": 5,
    "T_Rank": "?",
    "Division": "College Women's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 1989,
    "Rank": 6,
    "T_Rank": "?",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 1989,
    "Rank": 7,
    "T_Rank": "?",
    "Division": "College Women's"
  },
  {
    "Team": "Penn",
    "Year": 1989,
    "Rank": 8,
    "T_Rank": "?",
    "Division": "College Women's"
  },
  {
    "Team": "SUNY Binghamton",
    "Year": 1989,
    "Rank": 9,
    "T_Rank": "?",
    "Division": "College Women's"
  },
  {
    "Team": "Towson",
    "Year": 1989,
    "Rank": 10,
    "T_Rank": "?",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1990,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Michigan",
    "Year": 1990,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Cornell",
    "Year": 1990,
    "Rank": 3,
    "T_Rank": "3",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 1990,
    "Rank": 4,
    "T_Rank": "4",
    "Division": "College Women's"
  },
  {
    "Team": "UC Davis",
    "Year": 1990,
    "Rank": 5,
    "T_Rank": "5",
    "Division": "College Women's"
  },
  {
    "Team": "Carnegie Mellon",
    "Year": 1990,
    "Rank": 6,
    "T_Rank": "6",
    "Division": "College Women's"
  },
  {
    "Team": "Columbia",
    "Year": 1990,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Women's"
  },
  {
    "Team": "Kansas",
    "Year": 1990,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Women's"
  },
  {
    "Team": "Penn",
    "Year": 1990,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Wesleyan",
    "Year": 1990,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1991,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "California",
    "Year": 1991,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 1991,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Cornell",
    "Year": 1991,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 1991,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Virginia",
    "Year": 1991,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Columbia",
    "Year": 1991,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Women's"
  },
  {
    "Team": "Kansas",
    "Year": 1991,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Women's"
  },
  {
    "Team": "Carnegie Mellon",
    "Year": 1991,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Tufts",
    "Year": 1991,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 1992,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 1992,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "California",
    "Year": 1992,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Columbia",
    "Year": 1992,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 1992,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Cornell",
    "Year": 1992,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Penn",
    "Year": 1992,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Kansas",
    "Year": 1992,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Brown",
    "Year": 1992,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Georgia Tech",
    "Year": 1992,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "California",
    "Year": 1993,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 1993,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 1993,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Humboldt State",
    "Year": 1993,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Columbia",
    "Year": 1993,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Cornell",
    "Year": 1993,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Indiana",
    "Year": 1993,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Penn",
    "Year": 1993,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Kansas",
    "Year": 1993,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Williams",
    "Year": 1993,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Cruz",
    "Year": 1994,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 1994,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Indiana",
    "Year": 1994,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 1994,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 1994,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Columbia",
    "Year": 1994,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Cornell",
    "Year": 1994,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Kansas",
    "Year": 1994,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "East Carolina",
    "Year": 1994,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Tufts",
    "Year": 1994,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Cruz",
    "Year": 1995,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 1995,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 1995,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 1995,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Columbia",
    "Year": 1995,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Penn",
    "Year": 1995,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Indiana",
    "Year": 1995,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Women's"
  },
  {
    "Team": "Yale",
    "Year": 1995,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 1995,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Williams",
    "Year": 1995,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 1996,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 1996,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "California",
    "Year": 1996,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 1996,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 1996,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Cornell",
    "Year": 1996,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Indiana",
    "Year": 1996,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Yale",
    "Year": 1996,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Florida State",
    "Year": 1996,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Penn",
    "Year": 1996,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 1997,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 1997,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 1997,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Rutgers",
    "Year": 1997,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Brown",
    "Year": 1997,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 1997,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Oberlin",
    "Year": 1997,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Yale",
    "Year": 1997,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Georgia",
    "Year": 1997,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Rice",
    "Year": 1997,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 1998,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 1998,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 1998,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Yale",
    "Year": 1998,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Cornell",
    "Year": 1998,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 1998,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Indiana",
    "Year": 1998,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Women's"
  },
  {
    "Team": "Rutgers",
    "Year": 1998,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Women's"
  },
  {
    "Team": "Georgia",
    "Year": 1998,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "MIT",
    "Year": 1998,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Rice",
    "Year": 1998,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Wisconsin",
    "Year": 1998,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 1999,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 1999,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Brown",
    "Year": 1999,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Georgia",
    "Year": 1999,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 1999,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UC San Diego",
    "Year": 1999,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Swarthmore",
    "Year": 1999,
    "Rank": 7,
    "T_Rank": "T7",
    "Division": "College Women's"
  },
  {
    "Team": "Yale",
    "Year": 1999,
    "Rank": 8,
    "T_Rank": "T7",
    "Division": "College Women's"
  },
  {
    "Team": "Illinois",
    "Year": 1999,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Princeton",
    "Year": 1999,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Kansas",
    "Year": 1999,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Minnesota",
    "Year": 1999,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2000,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 2000,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "UC Davis",
    "Year": 2000,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Georgia",
    "Year": 2000,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Brown",
    "Year": 2000,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2000,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2000,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Tufts",
    "Year": 2000,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Swarthmore",
    "Year": 2000,
    "Rank": 9,
    "T_Rank": "9",
    "Division": "College Women's"
  },
  {
    "Team": "Smith",
    "Year": 2000,
    "Rank": 10,
    "T_Rank": "10",
    "Division": "College Women's"
  },
  {
    "Team": "Minnesota",
    "Year": 2000,
    "Rank": 11,
    "T_Rank": "11",
    "Division": "College Women's"
  },
  {
    "Team": "Rice",
    "Year": 2000,
    "Rank": 12,
    "T_Rank": "12",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 2000,
    "Rank": 13,
    "T_Rank": "13",
    "Division": "College Women's"
  },
  {
    "Team": "Illinois",
    "Year": 2000,
    "Rank": 14,
    "T_Rank": "14",
    "Division": "College Women's"
  },
  {
    "Team": "Bucknell",
    "Year": 2000,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Notre Dame",
    "Year": 2000,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Georgia",
    "Year": 2001,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2001,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2001,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 2001,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 2001,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Brown",
    "Year": 2001,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2001,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Tufts",
    "Year": 2001,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2001,
    "Rank": 9,
    "T_Rank": "9",
    "Division": "College Women's"
  },
  {
    "Team": "Northwestern",
    "Year": 2001,
    "Rank": 10,
    "T_Rank": "10",
    "Division": "College Women's"
  },
  {
    "Team": "Bucknell",
    "Year": 2001,
    "Rank": 11,
    "T_Rank": "11",
    "Division": "College Women's"
  },
  {
    "Team": "Swarthmore",
    "Year": 2001,
    "Rank": 12,
    "T_Rank": "12",
    "Division": "College Women's"
  },
  {
    "Team": "Illinois",
    "Year": 2001,
    "Rank": 13,
    "T_Rank": "13",
    "Division": "College Women's"
  },
  {
    "Team": "MIT",
    "Year": 2001,
    "Rank": 14,
    "T_Rank": "14",
    "Division": "College Women's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2001,
    "Rank": 15,
    "T_Rank": "15",
    "Division": "College Women's"
  },
  {
    "Team": "Washington",
    "Year": 2001,
    "Rank": 16,
    "T_Rank": "16",
    "Division": "College Women's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2002,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2002,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2002,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "MIT",
    "Year": 2002,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Bucknell",
    "Year": 2002,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2002,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "North Carolina",
    "Year": 2002,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 2002,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Brown",
    "Year": 2002,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Northwestern",
    "Year": 2002,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Penn State",
    "Year": 2002,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Virginia",
    "Year": 2002,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Georgia",
    "Year": 2002,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Indiana",
    "Year": 2002,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Texas",
    "Year": 2002,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Yale",
    "Year": 2002,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2003,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "MIT",
    "Year": 2003,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Brown",
    "Year": 2003,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2003,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "California",
    "Year": 2003,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2003,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Penn State",
    "Year": 2003,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Texas",
    "Year": 2003,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Iowa",
    "Year": 2003,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2003,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Delaware",
    "Year": 2003,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Duke",
    "Year": 2003,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Michigan",
    "Year": 2003,
    "Rank": 13,
    "T_Rank": "13",
    "Division": "College Women's"
  },
  {
    "Team": "Arizona",
    "Year": 2003,
    "Rank": 14,
    "T_Rank": "T14",
    "Division": "College Women's"
  },
  {
    "Team": "Georgia",
    "Year": 2003,
    "Rank": 15,
    "T_Rank": "T14",
    "Division": "College Women's"
  },
  {
    "Team": "Notre Dame",
    "Year": 2003,
    "Rank": 16,
    "T_Rank": "T14",
    "Division": "College Women's"
  },
  {
    "Team": "UC Davis",
    "Year": 2004,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2004,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2004,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2004,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Brown",
    "Year": 2004,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "California",
    "Year": 2004,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Texas",
    "Year": 2004,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "MIT",
    "Year": 2004,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Dartmouth",
    "Year": 2004,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Iowa",
    "Year": 2004,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Claremont",
    "Year": 2004,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Illinois",
    "Year": 2004,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Penn State",
    "Year": 2004,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "NC State",
    "Year": 2004,
    "Rank": 14,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Rutgers",
    "Year": 2004,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2005,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Washington",
    "Year": 2005,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2005,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Texas",
    "Year": 2005,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Brown",
    "Year": 2005,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "California",
    "Year": 2005,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Iowa",
    "Year": 2005,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "NC State",
    "Year": 2005,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Cornell",
    "Year": 2005,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "MIT",
    "Year": 2005,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Dartmouth",
    "Year": 2005,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Northwestern",
    "Year": 2005,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Texas A&M",
    "Year": 2005,
    "Rank": 13,
    "T_Rank": "13",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2005,
    "Rank": 14,
    "T_Rank": "T14",
    "Division": "College Women's"
  },
  {
    "Team": "Purdue",
    "Year": 2005,
    "Rank": 15,
    "T_Rank": "T14",
    "Division": "College Women's"
  },
  {
    "Team": "Rutgers",
    "Year": 2005,
    "Rank": 16,
    "T_Rank": "T14",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2006,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "UCLA",
    "Year": 2006,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2006,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2006,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 2006,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UC Davis",
    "Year": 2006,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Dartmouth",
    "Year": 2006,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Florida",
    "Year": 2006,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Georgia",
    "Year": 2006,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Michigan",
    "Year": 2006,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Emory",
    "Year": 2006,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Tufts",
    "Year": 2006,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Swarthmore",
    "Year": 2006,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Texas",
    "Year": 2006,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2006,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Delaware",
    "Year": 2006,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2007,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2007,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 2007,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "UCLA",
    "Year": 2007,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "California",
    "Year": 2007,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2007,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Northwestern",
    "Year": 2007,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2007,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2007,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "NYU",
    "Year": 2007,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Delaware",
    "Year": 2007,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Tufts",
    "Year": 2007,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Florida",
    "Year": 2007,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Truman State",
    "Year": 2007,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Dartmouth",
    "Year": 2007,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Emory",
    "Year": 2007,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 2008,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2008,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "UCLA",
    "Year": 2008,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Washington",
    "Year": 2008,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2008,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Michigan",
    "Year": 2008,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Ottawa",
    "Year": 2008,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2008,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Northeastern",
    "Year": 2008,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Texas",
    "Year": 2008,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Maryland",
    "Year": 2008,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Michigan State",
    "Year": 2008,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Wake Forest",
    "Year": 2008,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 2008,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "MIT",
    "Year": 2008,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "North Carolina",
    "Year": 2008,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2009,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Washington",
    "Year": 2009,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 2009,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2009,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Ottawa",
    "Year": 2009,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Penn",
    "Year": 2009,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UCLA",
    "Year": 2009,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2009,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2009,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Michigan",
    "Year": 2009,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "North Carolina",
    "Year": 2009,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 2009,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Dartmouth",
    "Year": 2009,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Saint Louis",
    "Year": 2009,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2009,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Iowa State",
    "Year": 2009,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Northeastern",
    "Year": 2009,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "WashU",
    "Year": 2009,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Illinois",
    "Year": 2009,
    "Rank": 19,
    "T_Rank": "T19",
    "Division": "College Women's"
  },
  {
    "Team": "USC",
    "Year": 2009,
    "Rank": 20,
    "T_Rank": "T19",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 2010,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2010,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2010,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2010,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "California",
    "Year": 2010,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 2010,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "USC",
    "Year": 2010,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UCLA",
    "Year": 2010,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2010,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Washington",
    "Year": 2010,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2010,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Michigan",
    "Year": 2010,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2010,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "North Carolina",
    "Year": 2010,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Maryland",
    "Year": 2010,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "WashU",
    "Year": 2010,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Northwestern",
    "Year": 2010,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Texas",
    "Year": 2010,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Harvard",
    "Year": 2010,
    "Rank": 19,
    "T_Rank": "T19",
    "Division": "College Women's"
  },
  {
    "Team": "Middlebury",
    "Year": 2010,
    "Rank": 20,
    "T_Rank": "T19",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2011,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Michigan",
    "Year": 2011,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 2011,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2011,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado College",
    "Year": 2011,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Iowa",
    "Year": 2011,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "North Carolina",
    "Year": 2011,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UNC Wilmington",
    "Year": 2011,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Washington",
    "Year": 2011,
    "Rank": 9,
    "T_Rank": "9",
    "Division": "College Women's"
  },
  {
    "Team": "Iowa State",
    "Year": 2011,
    "Rank": 10,
    "T_Rank": "10",
    "Division": "College Women's"
  },
  {
    "Team": "California",
    "Year": 2011,
    "Rank": 11,
    "T_Rank": "11",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2011,
    "Rank": 12,
    "T_Rank": "12",
    "Division": "College Women's"
  },
  {
    "Team": "Northwestern",
    "Year": 2011,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Ottawa",
    "Year": 2011,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Florida",
    "Year": 2011,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Tufts",
    "Year": 2011,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Ohio State",
    "Year": 2011,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "WashU",
    "Year": 2011,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 2011,
    "Rank": 19,
    "T_Rank": "T19",
    "Division": "College Women's"
  },
  {
    "Team": "Virginia",
    "Year": 2011,
    "Rank": 20,
    "T_Rank": "T19",
    "Division": "College Women's"
  },
  {
    "Team": "Washington",
    "Year": 2012,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 2012,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Michigan",
    "Year": 2012,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Tufts",
    "Year": 2012,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Iowa",
    "Year": 2012,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "North Carolina",
    "Year": 2012,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Ohio State",
    "Year": 2012,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Texas",
    "Year": 2012,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "California",
    "Year": 2012,
    "Rank": 9,
    "T_Rank": "9",
    "Division": "College Women's"
  },
  {
    "Team": "Iowa State",
    "Year": 2012,
    "Rank": 10,
    "T_Rank": "10",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 2012,
    "Rank": 11,
    "T_Rank": "11",
    "Division": "College Women's"
  },
  {
    "Team": "UCLA",
    "Year": 2012,
    "Rank": 12,
    "T_Rank": "12",
    "Division": "College Women's"
  },
  {
    "Team": "Florida",
    "Year": 2012,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2012,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Sonoma State",
    "Year": 2012,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2012,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Humboldt State",
    "Year": 2012,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Virginia",
    "Year": 2012,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Delaware",
    "Year": 2012,
    "Rank": 19,
    "T_Rank": "T19",
    "Division": "College Women's"
  },
  {
    "Team": "Ottawa",
    "Year": 2012,
    "Rank": 20,
    "T_Rank": "T19",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 2013,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2013,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Iowa",
    "Year": 2013,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Ohio State",
    "Year": 2013,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 2013,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Tufts",
    "Year": 2013,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Virginia",
    "Year": 2013,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Washington",
    "Year": 2013,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Iowa State",
    "Year": 2013,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Minnesota",
    "Year": 2013,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Northwestern",
    "Year": 2013,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2013,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2013,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Ottawa",
    "Year": 2013,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2013,
    "Rank": 15,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Whitman",
    "Year": 2013,
    "Rank": 16,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Central Florida",
    "Year": 2013,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Georgia",
    "Year": 2013,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Northeastern",
    "Year": 2013,
    "Rank": 19,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Texas",
    "Year": 2013,
    "Rank": 20,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Ohio State",
    "Year": 2014,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 2014,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Central Florida",
    "Year": 2014,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Washington",
    "Year": 2014,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 2014,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2014,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Michigan",
    "Year": 2014,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Virginia",
    "Year": 2014,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2014,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado College",
    "Year": 2014,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Tufts",
    "Year": 2014,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "UCLA",
    "Year": 2014,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2014,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Kansas",
    "Year": 2014,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2014,
    "Rank": 15,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Victoria",
    "Year": 2014,
    "Rank": 16,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Cornell",
    "Year": 2014,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Northeastern",
    "Year": 2014,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Western Washington",
    "Year": 2014,
    "Rank": 19,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Whitman",
    "Year": 2014,
    "Rank": 20,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 2015,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2015,
    "Rank": 2,
    "T_Rank": "2.",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 2015,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2015,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2015,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Dartmouth",
    "Year": 2015,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Virginia",
    "Year": 2015,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Whitman",
    "Year": 2015,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Florida State",
    "Year": 2015,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Ohio State",
    "Year": 2015,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Texas",
    "Year": 2015,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Victoria",
    "Year": 2015,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Central Florida",
    "Year": 2015,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Princeton",
    "Year": 2015,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "UCLA",
    "Year": 2015,
    "Rank": 15,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Washington",
    "Year": 2015,
    "Rank": 16,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Kansas",
    "Year": 2015,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Middlebury",
    "Year": 2015,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Notre Dame",
    "Year": 2015,
    "Rank": 19,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2015,
    "Rank": 20,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2016,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Whitman",
    "Year": 2016,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 2016,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Virginia",
    "Year": 2016,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 2016,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2016,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Dartmouth",
    "Year": 2016,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UCLA",
    "Year": 2016,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Michigan",
    "Year": 2016,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Texas",
    "Year": 2016,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Washington",
    "Year": 2016,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2016,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "California",
    "Year": 2016,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Western Washington",
    "Year": 2016,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado College",
    "Year": 2016,
    "Rank": 15,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2016,
    "Rank": 16,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Central Florida",
    "Year": 2016,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Ohio State",
    "Year": 2016,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Ottawa",
    "Year": 2016,
    "Rank": 19,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "USC",
    "Year": 2016,
    "Rank": 20,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Dartmouth",
    "Year": 2017,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Texas",
    "Year": 2017,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 2017,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2017,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 2017,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2017,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "California",
    "Year": 2017,
    "Rank": 7,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2017,
    "Rank": 8,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Michigan",
    "Year": 2017,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Notre Dame",
    "Year": 2017,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2017,
    "Rank": 11,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Delaware",
    "Year": 2017,
    "Rank": 12,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "North Carolina",
    "Year": 2017,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Ohio State",
    "Year": 2017,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Connecticut",
    "Year": 2017,
    "Rank": 15,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Florida",
    "Year": 2017,
    "Rank": 16,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2017,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Tufts",
    "Year": 2017,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Dartmouth",
    "Year": 2018,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2018,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2018,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2018,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 2018,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "North Carolina",
    "Year": 2018,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 2018,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Texas",
    "Year": 2018,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2018,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Michigan",
    "Year": 2018,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "NC State",
    "Year": 2018,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Tufts",
    "Year": 2018,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2018,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Ohio State",
    "Year": 2018,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "West Chester",
    "Year": 2018,
    "Rank": 15,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Western Washington",
    "Year": 2018,
    "Rank": 16,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2018,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Cornell",
    "Year": 2018,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Florida",
    "Year": 2018,
    "Rank": 19,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Whitman",
    "Year": 2018,
    "Rank": 20,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2019,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Dartmouth",
    "Year": 2019,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "North Carolina",
    "Year": 2019,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Ohio State",
    "Year": 2019,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2019,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Western Washington",
    "Year": 2019,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2019,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Wisconsin",
    "Year": 2019,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Georgia",
    "Year": 2019,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2019,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Minnesota",
    "Year": 2019,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 2019,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Texas",
    "Year": 2019,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "UCLA",
    "Year": 2019,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Washington",
    "Year": 2019,
    "Rank": 15,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Northwestern",
    "Year": 2019,
    "Rank": 16,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2019,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Northeastern",
    "Year": 2019,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Tufts",
    "Year": 2019,
    "Rank": 19,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Cornell",
    "Year": 2019,
    "Rank": 20,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "North Carolina",
    "Year": 2021,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Washington",
    "Year": 2021,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2021,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2021,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Virginia",
    "Year": 2021,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2021,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2021,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UC Davis",
    "Year": 2021,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Western Washington",
    "Year": 2021,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2021,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Texas",
    "Year": 2021,
    "Rank": 11,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Chicago",
    "Year": 2021,
    "Rank": 12,
    "T_Rank": "T11",
    "Division": "College Women's"
  },
  {
    "Team": "Vermont",
    "Year": 2021,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Georgia",
    "Year": 2021,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Florida State",
    "Year": 2021,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Ohio",
    "Year": 2021,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Penn",
    "Year": 2021,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "SUNY Binghamton",
    "Year": 2021,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Michigan",
    "Year": 2021,
    "Rank": 19,
    "T_Rank": "T19",
    "Division": "College Women's"
  },
  {
    "Team": "Boston University",
    "Year": 2021,
    "Rank": 20,
    "T_Rank": "T19",
    "Division": "College Women's"
  },
  {
    "Team": "North Carolina",
    "Year": 2022,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2022,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2022,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2022,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 2022,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Tufts",
    "Year": 2022,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Washington",
    "Year": 2022,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Vermont",
    "Year": 2022,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UC Davis",
    "Year": 2022,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2022,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Florida State",
    "Year": 2022,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2022,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Georgia",
    "Year": 2022,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Pittsburgh",
    "Year": 2022,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "William & Mary",
    "Year": 2022,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Virginia",
    "Year": 2022,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Purdue",
    "Year": 2022,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Northeastern",
    "Year": 2022,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "SUNY Binghamton",
    "Year": 2022,
    "Rank": 19,
    "T_Rank": "T19",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado State",
    "Year": 2022,
    "Rank": 20,
    "T_Rank": "T19",
    "Division": "College Women's"
  },
  {
    "Team": "North Carolina",
    "Year": 2023,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2023,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 2023,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Vermont",
    "Year": 2023,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2023,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2023,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Tufts",
    "Year": 2023,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Washington",
    "Year": 2023,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2023,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado State",
    "Year": 2023,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Northeastern",
    "Year": 2023,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 2023,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "UCLA",
    "Year": 2023,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Virginia",
    "Year": 2023,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Chicago",
    "Year": 2023,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Victoria",
    "Year": 2023,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Georgia",
    "Year": 2023,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "SUNY Binghamton",
    "Year": 2023,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Carnegie Mellon",
    "Year": 2023,
    "Rank": 19,
    "T_Rank": "T19",
    "Division": "College Women's"
  },
  {
    "Team": "UT Dallas",
    "Year": 2023,
    "Rank": 20,
    "T_Rank": "T19",
    "Division": "College Women's"
  },
  {
    "Team": "North Carolina",
    "Year": 2024,
    "Rank": 1,
    "T_Rank": "1",
    "Division": "College Women's"
  },
  {
    "Team": "Stanford",
    "Year": 2024,
    "Rank": 2,
    "T_Rank": "2",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado",
    "Year": 2024,
    "Rank": 3,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "Vermont",
    "Year": 2024,
    "Rank": 4,
    "T_Rank": "T3",
    "Division": "College Women's"
  },
  {
    "Team": "British Columbia",
    "Year": 2024,
    "Rank": 5,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Carleton",
    "Year": 2024,
    "Rank": 6,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Oregon",
    "Year": 2024,
    "Rank": 7,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "Tufts",
    "Year": 2024,
    "Rank": 8,
    "T_Rank": "T5",
    "Division": "College Women's"
  },
  {
    "Team": "UC San Diego",
    "Year": 2024,
    "Rank": 9,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Michigan",
    "Year": 2024,
    "Rank": 10,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Penn",
    "Year": 2024,
    "Rank": 11,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Barbara",
    "Year": 2024,
    "Rank": 12,
    "T_Rank": "T9",
    "Division": "College Women's"
  },
  {
    "Team": "Colorado State",
    "Year": 2024,
    "Rank": 13,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "Western Washington",
    "Year": 2024,
    "Rank": 14,
    "T_Rank": "T13",
    "Division": "College Women's"
  },
  {
    "Team": "SUNY Binghamton",
    "Year": 2024,
    "Rank": 15,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "Washington",
    "Year": 2024,
    "Rank": 16,
    "T_Rank": "T15",
    "Division": "College Women's"
  },
  {
    "Team": "UC Santa Cruz",
    "Year": 2024,
    "Rank": 17,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Georgia",
    "Year": 2024,
    "Rank": 18,
    "T_Rank": "T17",
    "Division": "College Women's"
  },
  {
    "Team": "Utah",
    "Year": 2024,
    "Rank": 19,
    "T_Rank": "T19",
    "Division": "College Women's"
  },
  {
    "Team": "Victoria",
    "Year": 2024,
    "Rank": 20,
    "T_Rank": "T19",
    "Division": "College Women's"
  }
];

export default rawData;