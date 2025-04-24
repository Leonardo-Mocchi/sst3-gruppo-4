const travels = [
  {
    id: 1,
    destination: "Paris",
    start_trip: "2023-10-01",
    end_trip: "2023-10-05",
    note: null,
    image: "https://example.com/paris.jpg",
    partecipants: [
      {
        id: 1,
        name: "Alice",
        surname: "Dupont",
        fiscal_code: "DPNLCA82B51D612E",
        email: "alice@alice.it",
        phone: "1234567890"
      },
      {
        id: 2,
        name: "Bob",
        surname: "Martin",
        fiscal_code: "MRTBBA85C01H501Z",
        email: "bob@example.it",
        phone: "0987654321"
      },
      {
        id: 3,
        name: "Charlie",
        surname: "Brown",
        fiscal_code: "BRWCHR90D15F205X",
        email: "charlie.brown@example.com",
        phone: "1122334455"
      },
      {
        id: 4,
        name: "Diana",
        surname: "Prince",
        fiscal_code: "PRNDNA88E20G303Y",
        email: "diana.prince@example.com",
        phone: "2233445566"
      },
      {
        id: 5,
        name: "Eve",
        surname: "Adams",
        fiscal_code: "ADMEVE91F25H404Z",
        email: "eve.adams@example.com",
        phone: "3344556677"
      }
    ]
  },
  {
    id: 2,
    destination: "Rome",
    start_trip: "2023-11-10",
    end_trip: "2023-11-15",
    note: "Visit historical sites",
    image: "https://example.com/rome.jpg",
    partecipants: [
      {
        id: 6,
        name: "Frank",
        surname: "Smith",
        fiscal_code: "SMTFRK92G30I505A",
        email: "frank.smith@example.com",
        phone: "4455667788"
      },
      {
        id: 7,
        name: "Grace",
        surname: "Johnson",
        fiscal_code: "JHNGRK93H15J606B",
        email: "grace.johnson@example.com",
        phone: "5566778899"
      },
      {
        id: 8,
        name: "Hank",
        surname: "Williams",
        fiscal_code: "WLHHNK94I20K707C",
        email: "hank.williams@example.com",
        phone: "6677889900"
      },
      {
        id: 9,
        name: "Ivy",
        surname: "Taylor",
        fiscal_code: "TYLIVY95J25L808D",
        email: "ivy.taylor@example.com",
        phone: "7788990011"
      },
      {
        id: 10,
        name: "Jack",
        surname: "Davis",
        fiscal_code: "DVSJCK96K30M909E",
        email: "jack.davis@example.com",
        phone: "8899001122"
      }
    ]
  },
  {
    id: 3,
    destination: "Tokyo",
    start_trip: "2024-01-05",
    end_trip: "2024-01-12",
    note: "Explore Japanese culture",
    image: "https://example.com/tokyo.jpg",
    partecipants: [
      {
        id: 11,
        name: "Karen",
        surname: "Lee",
        fiscal_code: "LEEKRN97L15N010F",
        email: "karen.lee@example.com",
        phone: "9900112233"
      },
      {
        id: 12,
        name: "Leo",
        surname: "Garcia",
        fiscal_code: "GRCLLE98M20O111G",
        email: "leo.garcia@example.com",
        phone: "0011223344"
      },
      {
        id: 13,
        name: "Mia",
        surname: "Hernandez",
        fiscal_code: "HRNMIA99N25P212H",
        email: "mia.hernandez@example.com",
        phone: "1122334455"
      },
      {
        id: 14,
        name: "Noah",
        surname: "Martinez",
        fiscal_code: "MRNNOA00O30Q313I",
        email: "noah.martinez@example.com",
        phone: "2233445566"
      },
      {
        id: 15,
        name: "Olivia",
        surname: "Lopez",
        fiscal_code: "LPZOLV01P35R414J",
        email: "olivia.lopez@example.com",
        phone: "3344556677"
      }
    ]
  },
  {
    id: 4,
    destination: "New York",
    start_trip: "2024-03-15",
    end_trip: "2024-03-20",
    note: "Attend a conference",
    image: "https://example.com/newyork.jpg",
    partecipants: [
      {
        id: 16,
        name: "Paul",
        surname: "Walker",
        fiscal_code: "WLKPL02Q40S515K",
        email: "paul.walker@example.com",
        phone: "4455667788"
      },
      {
        id: 17,
        name: "Quinn",
        surname: "Evans",
        fiscal_code: "EVNQNN03R45T616L",
        email: "quinn.evans@example.com",
        phone: "5566778899"
      },
      {
        id: 18,
        name: "Rachel",
        surname: "Moore",
        fiscal_code: "MRRCHL04S50U717M",
        email: "rachel.moore@example.com",
        phone: "6677889900"
      },
      {
        id: 19,
        name: "Steve",
        surname: "Clark",
        fiscal_code: "CLRKST05T55V818N",
        email: "steve.clark@example.com",
        phone: "7788990011"
      },
      {
        id: 20,
        name: "Tina",
        surname: "Hall",
        fiscal_code: "HLLTNA06U60W919O",
        email: "tina.hall@example.com",
        phone: "8899001122"
      }
    ]
  },
  {
    id: 5,
    destination: "Sydney",
    start_trip: "2024-05-10",
    end_trip: "2024-05-18",
    note: "Enjoy the beaches",
    image: "https://example.com/sydney.jpg",
    partecipants: [
      {
        id: 21,
        name: "Uma",
        surname: "King",
        fiscal_code: "KNGUMA07V65X020P",
        email: "uma.king@example.com",
        phone: "9900112233"
      },
      {
        id: 22,
        name: "Victor",
        surname: "Scott",
        fiscal_code: "SCTVCT08W70Y121Q",
        email: "victor.scott@example.com",
        phone: "0011223344"
      },
      {
        id: 23,
        name: "Wendy",
        surname: "Adams",
        fiscal_code: "ADMWND09X75Z222R",
        email: "wendy.adams@example.com",
        phone: "1122334455"
      },
      {
        id: 24,
        name: "Xavier",
        surname: "Bennett",
        fiscal_code: "BNNXVR10Y80A323S",
        email: "xavier.bennett@example.com",
        phone: "2233445566"
      },
      {
        id: 25,
        name: "Yara",
        surname: "Collins",
        fiscal_code: "CLNYRA11Z85B424T",
        email: "yara.collins@example.com",
        phone: "3344556677"
      }
    ]
  }
];