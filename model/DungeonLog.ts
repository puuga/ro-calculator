import { 
  Timestamp,
} from 'firebase/firestore'

export enum DungeonName {
  ConstellationTower = 'constellation_tower',
  OldGlastHeimChallenge = 'old_glast_heim_challenge',
  SunkenTower = 'sunken_tower',
  GeffenNightArena = 'geffen_night_arena',
}

export type Character = {
  docId?: string;
  uid: string;
  name: string;
  created_at?: Timestamp;
  checkin_constellation_tower_at?: Timestamp;
  checkin_old_glast_heim_challenge_at?: Timestamp;
  checkin_sunken_tower_at?: Timestamp;
  checkin_geffen_night_arena_at?: Timestamp;
}