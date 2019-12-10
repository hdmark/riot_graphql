// Coin object
import { gql } from 'apollo-server-express';
const typeDefs = gql`
  type Query {
    summoner(name: String): Summoner
    match(matchId: String): Match
    matchesByAccount(accountId: String): [Match]
  }

  type Summoner {
    id: String
    summonerLevel: Int
    name: String
    revisionDate: Float
    profileIconId: Int
    puuid: String
    accountId: String
    matchList: [Match]
  }

  type Match {
    seasonId: Int
    queueId: Int
    gameId: Float
    participantIdentities: [ParticipantIdentity]
    gameVersion: String
    platformId: String
    gameMode: String
    mapId: Int
    gameType: String
    champion: Int
    teams: [TeamStats]
    participants: [Participant]
    gameDuration: Int
    gameCreation: Int
    role: String
    queue: Int
    lane: String
    timestamp: Float
  }

  type Player {
    currentPlatformId: String
    summonerName: String
    matchHistoryUri: String
    platformId: String
    currentAccountId: String
    profileIcon: Int
    summonerId: String
    accountId: String
  }
  type TeamStats {
    firstDragon: Boolean #Flag indicating whether or not the team scored the first Dragon kill.
    firstInhibitor: Boolean #Flag indicating whether or not the team destroyed the first inhibitor.
    bans: [TeamBans] #If match queueId has a draft, contains banned champion data, otherwise empty.
    baronKills: Int #Number of times the team killed Baron.
    firstRiftHerald: Boolean #Flag indicating whether or not the team scored the first Rift Herald kill.
    firstBaron: Boolean #Flag indicating whether or not the team scored the first Baron kill.
    riftHeraldKills: Int #Number of times the team killed Rift Herald.
    firstBlood: Boolean #Flag indicating whether or not the team scored the first blood.
    teamId: Int #100 for blue side. 200 for red side.
    firstTower: Boolean #Flag indicating whether or not the team destroyed the first tower.
    vilemawKills: Int #Number of times the team killed Vilemaw.
    inhibitorKills: Int #Number of inhibitors the team destroyed.
    towerKills: Int #Number of towers the team destroyed.
    dominionVictoryScore: Int #For Dominion matches, specifies the points the team had at game end.
    win: String #String #indicating whether or not the team won. There are only two values visibile in public match history. (Legal values: Fail, Win)
    dragonKills: Int #Number of times the team killed Dragon.
  }
  type TeamBans {
    pickTurn: Int #Turn during which the champion was banned.
    championId: Int #Banned championId.
  }
  type Participant {
    stats: ParticipantStats #	Participant statistics.
    participantId: Int
    runes: [Rune]
    timeline: ParticipantTimeline #	Participant timeline data.
    teamId: Int
    spell2Id: Int
    masteries: [Mastery]
    highestAchievedSeasonTier: String
    spell1Id: Int
    championId: Int
  }
  type ParticipantIdentity {
    participantId: Int
    player: Player
  }
  type Rune {
    runeId: Int
    rank: Int
  }
  type Mastery {
    masteryId: Int
    rank: Int
  }
  type ParticipantStats {
    firstBloodAssist: Boolean
    visionScore: Float
    magicDamageDealtToChampions: Float
    damageDealtToObjectives: Float
    totalTimeCrowdControlDealt: Int
    longestTimeSpentLiving: Int
    perk1Var1: Int #Post game rune stats.
    perk1Var3: Int #Post game rune stats.
    perk1Var2: Int #Post game rune stats.
    tripleKills: Int
    perk3Var3: Int #Post game rune stats.
    nodeNeutralizeAssist: Int
    perk3Var2: Int #Post game rune stats.
    playerScore9: Int
    playerScore8: Int
    kills: Int
    playerScore1: Int
    playerScore0: Int
    playerScore3: Int
    playerScore2: Int
    playerScore5: Int
    playerScore4: Int
    playerScore7: Int
    playerScore6: Int
    perk5Var1: Int #Post game rune stats.
    perk5Var3: Int #Post game rune stats.
    perk5Var2: Int #Post game rune stats.
    totalScoreRank: Int
    neutralMinionsKilled: Int
    damageDealtToTurrets: Float
    physicalDamageDealtToChampions: Float
    nodeCapture: Int
    largestMultiKill: Int
    perk2Var2: Int #Post game rune stats.
    perk2Var3: Int #Post game rune stats.
    totalUnitsHealed: Int
    perk2Var1: Int #Post game rune stats.
    perk4Var1: Int #Post game rune stats.
    perk4Var2: Int #Post game rune stats.
    perk4Var3: Int #Post game rune stats.
    wardsKilled: Int
    largestCriticalStrike: Int
    largestKillingSpree: Int
    quadraKills: Int
    teamObjective: Int
    magicDamageDealt: Float
    item2: Int
    item3: Int
    item0: Int
    neutralMinionsKilledTeamJungle: Int
    item6: Int
    item4: Int
    item5: Int
    perk1: Int #Primary path rune.
    perk0: Int #Primary path keystone rune.
    perk3: Int #Primary path rune.
    perk2: Int #Primary path rune.
    perk5: Int #Secondary path rune.
    perk4: Int #Secondary path rune.
    perk3Var1: Int #Post game rune stats.
    damageSelfMitigated: Float
    magicalDamageTaken: Float
    firstInhibitorKill: Boolean
    trueDamageTaken: Float
    nodeNeutralize: Int
    assists: Int
    combatPlayerScore: Int
    perkPrimaryStyle: Int #Primary rune path
    goldSpent: Int
    trueDamageDealt: Float
    participantId: Int
    totalDamageTaken: Float
    physicalDamageDealt: Float
    sightWardsBoughtInGame: Int
    totalDamageDealtToChampions: Float
    physicalDamageTaken: Float
    totalPlayerScore: Int
    win: Boolean
    objectivePlayerScore: Int
    totalDamageDealt: Float
    item1: Int
    neutralMinionsKilledEnemyJungle: Int
    deaths: Int
    wardsPlaced: Int
    perkSubStyle: Int #Secondary rune path
    turretKills: Int
    firstBloodKill: Boolean
    trueDamageDealtToChampions: Float
    goldEarned: Int
    killingSprees: Int
    unrealKills: Int
    altarsCaptured: Int
    firstTowerAssist: Boolean
    firstTowerKill: Boolean
    champLevel: Int
    doubleKills: Int
    nodeCaptureAssist: Int
    inhibitorKills: Int
    firstInhibitorAssist: Boolean
    perk0Var1: Int #Post game rune stats.
    perk0Var2: Int #Post game rune stats.
    perk0Var3: Int #Post game rune stats.
    visionWardsBoughtInGame: Int
    altarsNeutralized: Int
    pentaKills: Int
    totalHeal: Float
    totalMinionsKilled: Int
    timeCCingOthers: Float
  }
  type ParticipantTimeline {
    lane: String #Participant's calculated lane. MID and BOT are legacy values. (Legal values: MID, MIDDLE, TOP, JUNGLE, BOT, BOTTOM)
    participantId: Int
    csDiffPerMinDeltas: String #Creep score difference versus the calculated lane opponent(s) for a specified period.
    goldPerMinDeltas:	String	#Gold for a specified period.
    xpDiffPerMinDeltas:	String	#Experience difference versus the calculated lane opponent(s) for a specified period.
    creepsPerMinDeltas:	String	#Creeps for a specified period.
    xpPerMinDeltas:	String	#Experience change for a specified period.
    role: String #Participant's calculated role. (Legal values: DUO, NONE, SOLO, DUO_CARRY, DUO_SUPPORT)
    damageTakenDiffPerMinDeltas:	String	#Damage taken difference versus the calculated lane opponent(s) for a specified period.
    damageTakenPerMinDeltas:	String	#Damage taken for a specified period.
  }
  type ParticipantTimeLineData {
    timeframe: String
    value: Float
  }
`;

export { typeDefs as default };
