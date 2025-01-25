export enum Floor {
  First = "1st Floor",
  Second = "2nd Floor",
  Third = "3rd Floor",
  Fourth = "4th Floor",
  Fifth = "5th Floor",
}

export enum Managers {
  Reception = "reception",
  MTAs = "mtas",
  Consultants = "consultants",
  Registrar = "registrar",
}

export type RoomResource = {
  id: string;
  floor: Floor;
  title: string;
  notes: string;
  managedBy: Managers;
  calendarId: string;
};

export const RESOURCES: RoomResource[] = [
  {
    id: "101",
    floor: Floor.First,
    title: "CIT 101",
    notes: "25 / No Machines",
    managedBy: Managers.Reception,
    calendarId:
      "brown.edu_435343495452524f4f4d3130313138303831373135333333373637355f42524f574e454455@resource.calendar.google.com",
  },
  {
    id: "102",
    floor: Floor.First,
    title: "CIT 102",
    notes: "10 / No Machines",
    managedBy: Managers.Reception,
    calendarId:
      "brown.edu_435343495452524f4f4d3130323138303831373135333633353534325f42524f574e454455@resource.calendar.google.com",
  },
  {
    id: "143",
    floor: Floor.First,
    title: "CIT 143 (Sunlab)",
    notes: "135 / Linux",
    managedBy: Managers.Consultants,
    calendarId: "brown.edu_435343495453756e6c6162@resource.calendar.google.com",
  },
  {
    id: "165",
    floor: Floor.First,
    title: "CIT 165 (Motorola)",
    notes: "73 / Lecture Hall",
    managedBy: Managers.Registrar,
    calendarId:
      "c_3ed16b28fb52803ef187a1b5098e89d5f1b256949ac7e8d7dbf4d6bf77356d1f@group.calendar.google.com",
  },
  {
    id: "167",
    floor: Floor.First,
    title: "CIT 167 (MSLab)",
    notes: "22 / Linux & Mac",
    managedBy: Managers.Consultants,
    calendarId: "brown.edu_43534349544d534c6162@resource.calendar.google.com",
  },
  {
    id: "201",
    floor: Floor.Second,
    title: "CIT 201 (SATLab)",
    notes: "4 / Linux",
    managedBy: Managers.MTAs,
    calendarId:
      "c_c60c30904a6ede56e6422871a4651923b17b7f529380f9a3154bc80e209463f9@group.calendar.google.com",
  },
  {
    id: "203",
    floor: Floor.Second,
    title: "CIT 203",
    notes: "3 / Linux",
    managedBy: Managers.MTAs,
    calendarId:
      "c_5230fe91318eb08d328430ea3b18d4a49b1bde03def701c78019b60cc0f63b39@group.calendar.google.com",
  },
  {
    id: "205",
    floor: Floor.Second,
    title: "CIT 205",
    notes: "4 / Linux, Whiteboards",
    managedBy: Managers.MTAs,
    calendarId:
      "c_97716fc018294e495072e7c962d5bba6da5f439bd67a774422c4304ed3230a40@group.calendar.google.com",
  },
  {
    id: "207",
    floor: Floor.Second,
    title: "CIT 207 (Nook)",
    notes: "2 / Whiteboards",
    managedBy: Managers.MTAs,
    calendarId:
      "c_1c91bd671e03ab4a0ba710e8f33250090aea517ab586f6e1aa965aca76d197a8@group.calendar.google.com",
  },
  {
    id: "209",
    floor: Floor.Second,
    title: "CIT 209",
    notes: "5 TAs",
    managedBy: Managers.MTAs,
    calendarId:
      "c_f68c1cc435424ea61551754ecfd068f9e2162438ae5710962e1750797d165b84@group.calendar.google.com",
  },
  {
    id: "210",
    floor: Floor.Second,
    title: "CIT 210",
    notes: "18 / Swipe, Whiteboards",
    managedBy: Managers.Reception,
    calendarId: "c_18829ci003j5qjtsnfp28e8gakdv0@resource.calendar.google.com",
  },
  {
    id: "219",
    floor: Floor.Second,
    title: "CIT 219 (Outback)",
    notes: "45 / Whiteboards",
    managedBy: Managers.Registrar,
    calendarId:
      "c_54550b1ab3bb4506a3c7e6eabc6746c8c8c8b193d8ec9d63ad7329773228458e@group.calendar.google.com",
  },
  {
    id: "227",
    floor: Floor.Second,
    title: "CIT 227 (Moonlab)",
    notes: "45 / Whiteboards",
    managedBy: Managers.Registrar,
    calendarId:
      "c_65576be3a25bee54021b2310fe9b6c35a4acd817effa38efc970ee148b277f43@group.calendar.google.com",
  },
  {
    id: "241",
    floor: Floor.Second,
    title: "CIT 241 (Swig)",
    notes: "45 / Seminar Room",
    managedBy: Managers.Reception,
    calendarId:
      "brown.edu_435343495452434f4e463234313138313032393132333632373535335f42524f574e454455@resource.calendar.google.com",
  },
  {
    id: "265",
    floor: Floor.Second,
    title: "CIT 265",
    notes: "25 / Seminar Room",
    managedBy: Managers.MTAs,
    calendarId:
      "c_bc6afcb3083f58ff0dccd2bc9204a3d1691f8cc8caaf3627b149a273e3d55e16@group.calendar.google.com",
  },
  {
    id: "269",
    floor: Floor.Second,
    title: "CIT 269",
    notes: "30 / Seminar Room",
    managedBy: Managers.MTAs,
    calendarId:
      "c_edca34404bb08c706b2314217a26e1ad5d2480f52c22bbd4d874ec1bd039a485@group.calendar.google.com",
  },
  {
    id: "316",
    floor: Floor.Third,
    title: "CIT 316",
    notes: "25 / Meeting Room",
    managedBy: Managers.Reception,
    calendarId:
      "brown.edu_4353434954526f6f6d333435@resource.calendar.google.com",
  },
  {
    id: "348",
    floor: Floor.Third,
    title: "CIT 348 (B-Lab)",
    notes: "10 / TA Lab",
    managedBy: Managers.MTAs,
    calendarId:
      "c_10814c39c02cb34561720a6f19faa3ff275913abaa6850486915d64576a2ad3c@group.calendar.google.com",
  },
  {
    id: "367",
    floor: Floor.Third,
    title: "CIT 367 (J-Lab)",
    notes: "15 / TA Lab",
    managedBy: Managers.MTAs,
    calendarId:
      "c_07d3c8ed88db5b970ac0b863b88d730b450aef46002ce9fdbc4262c881ff8d20@group.calendar.google.com",
  },
  {
    id: "368",
    floor: Floor.Third,
    title: "CIT 368",
    notes: "56 / Classroom",
    managedBy: Managers.Reception,
    calendarId:
      "brown.edu_4353434954526f6f6d333638@resource.calendar.google.com",
  },
  {
    id: "atrium3",
    floor: Floor.Third,
    title: "Atrium",
    notes: "",
    managedBy: Managers.Reception,
    calendarId:
      "brown.edu_435343495441545249554d33@resource.calendar.google.com",
  },
  {
    id: "410",
    floor: Floor.Fourth,
    title: "CIT 410 (Library)",
    notes: "25 / Conference",
    managedBy: Managers.Reception,
    calendarId:
      "brown.edu_43534349544c696272617279@resource.calendar.google.com",
  },
  {
    id: "477",
    floor: Floor.Fourth,
    title: "CIT 477 (Lubrano)",
    notes: "45 / Classroom, Whiteboards",
    managedBy: Managers.Reception,
    calendarId:
      "brown.edu_43534349544c756272616e6f@resource.calendar.google.com",
  },
  {
    id: "atrium4",
    floor: Floor.Fourth,
    title: "Atrium",
    notes: "",
    managedBy: Managers.Reception,
    calendarId:
      "brown.edu_435343495441545249554d34@resource.calendar.google.com",
  },
  {
    id: "506",
    floor: Floor.Fifth,
    title: "CIT 506",
    notes: "30 / Conference, Whiteboards",
    managedBy: Managers.Reception,
    calendarId:
      "brown.edu_4353434954526f6f6d353036@resource.calendar.google.com",
  },
  {
    id: "508",
    floor: Floor.Fifth,
    title: "CIT 508",
    notes: "4 / Meeting Room",
    managedBy: Managers.Reception,
    calendarId:
      "c_e0pjcm1r393ikntc6tju7g2a2k@group.calendar.google.com",
  },
  {
    id: "510",
    floor: Floor.Fifth,
    title: "CIT 510",
    notes: "4 / Meeting Room",
    managedBy: Managers.Reception,
    calendarId:
      "c_2p7g2rqlrvk9d1rouoo4n2qeh0@group.calendar.google.com",
  },
  {
    id: "512",
    floor: Floor.Fifth,
    title: "CIT 512",
    notes: "4 / Meeting Room",
    managedBy: Managers.Reception,
    calendarId:
      "c_df9j2h02o8tkb7ifoghmhc80pk@group.calendar.google.com",
  },
];
