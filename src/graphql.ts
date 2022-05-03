import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LegacyPlayer = {
  __typename?: 'LegacyPlayer';
  Acceleration: Scalars['Int'];
  Age: Scalars['Int'];
  Aggression: Scalars['Int'];
  Agility: Scalars['Int'];
  Attack: Scalars['Int'];
  Balance: Scalars['Int'];
  ConditionFitness: Scalars['Int'];
  Consistency: Scalars['Int'];
  Defence: Scalars['Int'];
  DribbleAccuracy: Scalars['Int'];
  DribbleSpeed: Scalars['Int'];
  DribblingStyle: Scalars['Int'];
  DropKickStyle: Scalars['Int'];
  Foot: Scalars['String'];
  FootSide: Scalars['String'];
  FreeKickAccuracy: Scalars['Int'];
  FreeKickStyle: Scalars['Int'];
  GKSkills: Scalars['Int'];
  Heading: Scalars['Int'];
  Height: Scalars['String'];
  Image: Scalars['String'];
  InjuryTolerance: Scalars['String'];
  Jump: Scalars['Int'];
  LongPassAccuracy: Scalars['Int'];
  LongPassSpeed: Scalars['Int'];
  Mentality: Scalars['Int'];
  Name: Scalars['String'];
  Nationality: Scalars['String'];
  PenaltyStyle: Scalars['Int'];
  PlayerID: Scalars['ID'];
  Positions: Scalars['String'];
  RegistredPosition: Scalars['String'];
  Response: Scalars['Int'];
  ShortPassAccuracy: Scalars['Int'];
  ShortPassSpeed: Scalars['Int'];
  ShotAccuracy: Scalars['Int'];
  ShotPower: Scalars['Int'];
  ShotTechnique: Scalars['Int'];
  SpecialAbilities: Scalars['String'];
  Speed: Scalars['Int'];
  Stamina: Scalars['Int'];
  Swerve: Scalars['Int'];
  TeamWork: Scalars['Int'];
  Technique: Scalars['Int'];
  WeakFootAccuracy: Scalars['Int'];
  WeakFootFrequency: Scalars['Int'];
  Weight: Scalars['Int'];
};

export type Player = {
  __typename?: 'Player';
  AMF: Scalars['String'];
  Acceleration: Scalars['Int'];
  AccentedName: Scalars['String'];
  AcrobaticClear: Scalars['Int'];
  AcrobaticFinishing: Scalars['Int'];
  AerialSuperiority: Scalars['Int'];
  Age: Scalars['String'];
  Aggression: Scalars['Int'];
  Balance: Scalars['Int'];
  BallControl: Scalars['Int'];
  BallWinning: Scalars['Int'];
  BaseContractCost: Scalars['Int'];
  Blocker: Scalars['Int'];
  CB: Scalars['String'];
  CF: Scalars['String'];
  CMF: Scalars['String'];
  Captaincy: Scalars['Int'];
  ChipShotControl: Scalars['Int'];
  Club: Scalars['Int'];
  Commentary: Scalars['String'];
  Condition: Scalars['Int'];
  Continent: Scalars['Int'];
  ContractExpiryDate: Scalars['String'];
  CornerKick: Scalars['Int'];
  Country: Scalars['String'];
  Country2: Scalars['Int'];
  CrossOverTurn: Scalars['Int'];
  Curl: Scalars['Int'];
  CutBehindTurn: Scalars['Int'];
  DMF: Scalars['String'];
  DataPackOneChange: Scalars['String'];
  DataPackTwoChange: Scalars['String'];
  DefensiveAwareness: Scalars['Int'];
  DefensiveEngagement: Scalars['Int'];
  DippingShot: Scalars['Int'];
  DoubleTouch: Scalars['Int'];
  DribbleMotion: Scalars['Int'];
  Dribbling: Scalars['Int'];
  DribblingArmMovement: Scalars['Int'];
  DribblingHunching: Scalars['Int'];
  EarlyCross: Scalars['Int'];
  FightingSpirit: Scalars['Int'];
  Finishing: Scalars['Int'];
  FirstTimeShot: Scalars['Int'];
  FlipFlap: Scalars['Int'];
  Form: Scalars['Int'];
  FreeKick: Scalars['Int'];
  GK: Scalars['String'];
  GKAwareness: Scalars['Int'];
  GKCatching: Scalars['Int'];
  GKClearing: Scalars['Int'];
  GKHighPunt: Scalars['Int'];
  GKLongThrow: Scalars['Int'];
  GKLowPunt: Scalars['Int'];
  GKPenaltySaver: Scalars['Int'];
  GKReach: Scalars['Int'];
  GKReflexes: Scalars['Int'];
  Gamesmanship: Scalars['Int'];
  GoalCelebration: Scalars['Int'];
  Heading: Scalars['Int'];
  Height: Scalars['String'];
  HellTrick: Scalars['Int'];
  HiddenPlayer: Scalars['Int'];
  Image: Scalars['String'];
  IncisiveRun: Scalars['Int'];
  InjuryResistance: Scalars['Int'];
  Interception: Scalars['Int'];
  JapName: Scalars['String'];
  Jump: Scalars['Int'];
  KickingPower: Scalars['Int'];
  KnuckleShot: Scalars['Int'];
  LB: Scalars['String'];
  LMF: Scalars['String'];
  LWF: Scalars['String'];
  LeagueID: Scalars['Int'];
  LeagueName: Scalars['String'];
  LevelCap: Scalars['Int'];
  LoanExpiryDate: Scalars['String'];
  LoftedPass: Scalars['Int'];
  LongBallExpert: Scalars['Int'];
  LongRange: Scalars['Int'];
  LongRangeDrive: Scalars['Int'];
  LongRangeShooting: Scalars['Int'];
  LongThrow: Scalars['Int'];
  LowLoftedPass: Scalars['Int'];
  LowPass: Scalars['Int'];
  MAXAcceleration: Scalars['Int'];
  MAXAggression: Scalars['Int'];
  MAXBalance: Scalars['Int'];
  MAXBallControl: Scalars['Int'];
  MAXBallWinning: Scalars['Int'];
  MAXCurl: Scalars['Int'];
  MAXDefensiveAwareness: Scalars['Int'];
  MAXDefensiveEngagement: Scalars['Int'];
  MAXDribbling: Scalars['Int'];
  MAXFinishing: Scalars['Int'];
  MAXGKAwareness: Scalars['Int'];
  MAXGKCatching: Scalars['Int'];
  MAXGKClearing: Scalars['Int'];
  MAXGKReach: Scalars['Int'];
  MAXGKReflexes: Scalars['Int'];
  MAXHeading: Scalars['Int'];
  MAXJump: Scalars['Int'];
  MAXKickingPower: Scalars['Int'];
  MAXLoftedPass: Scalars['Int'];
  MAXLowPass: Scalars['Int'];
  MAXOffensiveAwareness: Scalars['Int'];
  MAXOverallAMF: Scalars['Int'];
  MAXOverallCB: Scalars['Int'];
  MAXOverallCF: Scalars['Int'];
  MAXOverallCMF: Scalars['Int'];
  MAXOverallDMF: Scalars['Int'];
  MAXOverallGK: Scalars['Int'];
  MAXOverallLB: Scalars['Int'];
  MAXOverallLMF: Scalars['Int'];
  MAXOverallLWF: Scalars['Int'];
  MAXOverallRB: Scalars['Int'];
  MAXOverallRMF: Scalars['Int'];
  MAXOverallRWF: Scalars['Int'];
  MAXOverallSS: Scalars['Int'];
  MAXPhysicalContact: Scalars['Int'];
  MAXPlaceKicking: Scalars['Int'];
  MAXSpeed: Scalars['Int'];
  MAXStamina: Scalars['Int'];
  MAXTightPossession: Scalars['Int'];
  ManMarking: Scalars['Int'];
  MarketValue: Scalars['Int'];
  MarseilleTurn: Scalars['Int'];
  MaxContractCost: Scalars['Int'];
  MazingRun: Scalars['Int'];
  Name: Scalars['String'];
  Nation: Scalars['String'];
  NationalTeamCaps: Scalars['Int'];
  New: Scalars['Int'];
  NoLookPass: Scalars['Int'];
  OffensiveAwareness: Scalars['Int'];
  OneTouchPass: Scalars['Int'];
  OutsideCurler: Scalars['Int'];
  Overall: Scalars['Int'];
  OverallPotential: Scalars['Int'];
  OwnerClub: Scalars['Int'];
  PenaltyKick: Scalars['Int'];
  PenaltySpecialist: Scalars['Int'];
  PhysicalContact: Scalars['Int'];
  PinpointCrossing: Scalars['Int'];
  PlaceKicking: Scalars['Int'];
  PlayerID: Scalars['ID'];
  PlayerType: Scalars['Int'];
  PlayingAttitude: Scalars['Int'];
  PlayingStyles: Scalars['String'];
  Position: Scalars['String'];
  RB: Scalars['String'];
  RMF: Scalars['String'];
  RWF: Scalars['String'];
  Rabona: Scalars['Int'];
  RegisteredPosition: Scalars['String'];
  Reputation: Scalars['Int'];
  RisingShots: Scalars['Int'];
  RunningArmMovement: Scalars['Int'];
  RunningHunching: Scalars['Int'];
  SS: Scalars['String'];
  ScissorsFeint: Scalars['Int'];
  ScotchMove: Scalars['Int'];
  Shirt: Scalars['String'];
  ShirtNational: Scalars['String'];
  SlidingTackle: Scalars['Int'];
  Sombrero: Scalars['Int'];
  Speed: Scalars['Int'];
  SpeedingBullet: Scalars['Int'];
  Stamina: Scalars['Int'];
  StepOnSkillControl: Scalars['Int'];
  StrongerFoot: Scalars['String'];
  SuperSub: Scalars['Int'];
  TeamName: Scalars['String'];
  ThroughPassing: Scalars['Int'];
  TightPossession: Scalars['Int'];
  TrackBack: Scalars['Int'];
  Trickster: Scalars['Int'];
  WeakFootAccuracy: Scalars['Int'];
  WeakFootUsage: Scalars['Int'];
  Weight: Scalars['String'];
  WeightedPass: Scalars['Int'];
  WinnerofGoldenBall: Scalars['Int'];
  YouthClubID: Scalars['Int'];
  overallAMF: Scalars['Int'];
  overallCB: Scalars['Int'];
  overallCF: Scalars['Int'];
  overallCMF: Scalars['Int'];
  overallDMF: Scalars['Int'];
  overallGK: Scalars['Int'];
  overallLB: Scalars['Int'];
  overallLMF: Scalars['Int'];
  overallLWF: Scalars['Int'];
  overallRB: Scalars['Int'];
  overallRMF: Scalars['Int'];
  overallRWF: Scalars['Int'];
  overallSS: Scalars['Int'];
  sHeading: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  allPlayers: Array<Player>;
  legacyPlayerStats: Array<LegacyPlayer>;
  searchPlayer: Array<Player>;
};


export type QueryAllPlayersArgs = {
  endPagination?: InputMaybe<Scalars['Int']>;
  initPagination?: InputMaybe<Scalars['Int']>;
};


export type QueryLegacyPlayerStatsArgs = {
  PlayerID?: InputMaybe<Scalars['String']>;
};


export type QuerySearchPlayerArgs = {
  NationName?: InputMaybe<Scalars['String']>;
  PlayerID?: InputMaybe<Scalars['String']>;
  PlayerName?: InputMaybe<Scalars['String']>;
  TeamName?: InputMaybe<Scalars['String']>;
};

export type LegacyPlayerStatsQueryVariables = Exact<{
  PlayerID: Scalars['String'];
}>;


export type LegacyPlayerStatsQuery = { __typename?: 'Query', legacyPlayerStats: Array<{ __typename?: 'LegacyPlayer', Name: string, Acceleration: number, Age: number, Agility: number, Attack: number, Balance: number, Defence: number, DribbleAccuracy: number, Foot: string, FootSide: string, Height: string, Image: string, InjuryTolerance: string, Nationality: string, PlayerID: string, Positions: string, RegistredPosition: string, Response: number, ShortPassSpeed: number, ShortPassAccuracy: number, Speed: number, Stamina: number, Weight: number, LongPassAccuracy: number, LongPassSpeed: number, ShotAccuracy: number, ShotPower: number, ShotTechnique: number, FreeKickAccuracy: number, Heading: number, Jump: number, Swerve: number, Technique: number, Aggression: number, Mentality: number, GKSkills: number, TeamWork: number, Consistency: number, ConditionFitness: number, WeakFootAccuracy: number, FreeKickStyle: number, DribbleSpeed: number, DribblingStyle: number, DropKickStyle: number, PenaltyStyle: number, WeakFootFrequency: number, SpecialAbilities: string }> };

export type SearchPlayerQueryVariables = Exact<{
  PlayerName?: InputMaybe<Scalars['String']>;
  TeamName?: InputMaybe<Scalars['String']>;
  NationName?: InputMaybe<Scalars['String']>;
  PlayerID?: InputMaybe<Scalars['String']>;
}>;


export type SearchPlayerQuery = { __typename?: 'Query', searchPlayer: Array<{ __typename?: 'Player', Name: string, Age: string, TeamName: string, Nation: string, Position: string, Image: string, PlayerID: string }> };


export const LegacyPlayerStatsDocument = gql`
    query LegacyPlayerStats($PlayerID: String!) {
  legacyPlayerStats(PlayerID: $PlayerID) {
    Name
    Acceleration
    Age
    Agility
    Attack
    Balance
    Defence
    DribbleAccuracy
    Foot
    FootSide
    Height
    Image
    InjuryTolerance
    Nationality
    PlayerID
    Positions
    RegistredPosition
    Response
    ShortPassSpeed
    ShortPassAccuracy
    Speed
    Stamina
    Weight
    LongPassAccuracy
    LongPassSpeed
    ShotAccuracy
    ShotPower
    ShotTechnique
    FreeKickAccuracy
    Heading
    Jump
    Swerve
    Technique
    Aggression
    Mentality
    GKSkills
    TeamWork
    Consistency
    ConditionFitness
    WeakFootAccuracy
    FreeKickStyle
    DribbleSpeed
    DribblingStyle
    DropKickStyle
    PenaltyStyle
    WeakFootFrequency
    SpecialAbilities
  }
}
    `;

export function useLegacyPlayerStatsQuery(options: Omit<Urql.UseQueryArgs<LegacyPlayerStatsQueryVariables>, 'query'>) {
  return Urql.useQuery<LegacyPlayerStatsQuery>({ query: LegacyPlayerStatsDocument, ...options });
};
export const SearchPlayerDocument = gql`
    query SearchPlayer($PlayerName: String, $TeamName: String, $NationName: String, $PlayerID: String) {
  searchPlayer(
    PlayerName: $PlayerName
    TeamName: $TeamName
    NationName: $NationName
    PlayerID: $PlayerID
  ) {
    Name
    Age
    TeamName
    Nation
    Position
    Image
    PlayerID
  }
}
    `;

export function useSearchPlayerQuery(options?: Omit<Urql.UseQueryArgs<SearchPlayerQueryVariables>, 'query'>) {
  return Urql.useQuery<SearchPlayerQuery>({ query: SearchPlayerDocument, ...options });
};