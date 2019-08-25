export enum ConferenceIds {
  ACC = 'ACC',
  American = 'American',
  Big12 = 'Big 12',
  BigTen = 'Big Ten',
  CUSA = 'C-USA',
  INDEP = 'INDEP',
  MAC = 'MAC',
  MW = 'MW',
  Pac12 = 'Pac-12',
  SEC = 'SEC',
  SunBelt = 'Sun Belt'
}

export enum DivisionIds {
  East = 'East',
  West = 'West',
  Atlantic = 'Atlantic',
  Coastal = 'Coastal',
  Mountain = 'Mountain',
  North = 'North',
  South = 'South'
}

export default {
  [ConferenceIds.ACC]: {
    name: 'Atlantic Coast Conference',
    divisions: [DivisionIds.Atlantic, DivisionIds.Coastal]
  },
  [ConferenceIds.American]: {
    name: 'American Athletic Conference',
    divisions: [DivisionIds.East, DivisionIds.West]
  },
  [ConferenceIds.Big12]: {
    name: 'Big 12 Conference'
  },
  [ConferenceIds.BigTen]: {
    name: 'Big Ten Conference',
    divisions: [DivisionIds.East, DivisionIds.West]
  },
  [ConferenceIds.CUSA]: {
    name: 'Conference USA',
    divisions: [DivisionIds.East, DivisionIds.West]
  },
  [ConferenceIds.INDEP]: {
    name: 'FBS Independents'
  },
  [ConferenceIds.MAC]: {
    name: 'Mid-American Conference',
    divisions: [DivisionIds.East, DivisionIds.West]
  },
  [ConferenceIds.MW]: {
    name: 'Mountain West Conference',
    divisions: [DivisionIds.Mountain, DivisionIds.West]
  },
  [ConferenceIds.Pac12]: {
    name: 'Pac 12 Conference',
    divisions: [DivisionIds.North, DivisionIds.South]
  },
  [ConferenceIds.SEC]: {
    name: 'Southeastern Conference',
    divisions: [DivisionIds.East, DivisionIds.West]
  },
  [ConferenceIds.SunBelt]: {
    name: 'Sun Belt Conference',
    divisions: [DivisionIds.East, DivisionIds.West]
  }
};
