import axios from 'axios';

const Match_Resolver = {
  Query: {
    async match(parent, args, { dataSources }, info) {
      return await dataSources.Match_Data.getMatch(args.matchId);
    },
    async matchesByAccount(parent, args, { dataSources }, info) {
      return await dataSources.Match_Data.getMatchesByAccount(args.accountId);
    },
  },
  Match: {
    seasonId(parent, args, { dataSources }, info) {
      return parent.seasonId ? parent.seasonId : parent.season;
    },
  },
  ParticipantTimeline: {
    csDiffPerMinDeltas(parent, args, ctx, info) {
      return JSON.stringify(parent.csDiffPerMinDeltas);
    },
    goldPerMinDeltas(parent, args, ctx, info) {
      return JSON.stringify(parent.goldPerMinDeltas);
    },
    xpDiffPerMinDeltas(parent, args, ctx, info) {
      return JSON.stringify(parent.xpDiffPerMinDeltas);
    },
    creepsPerMinDeltas(parent, args, ctx, info) {
      return JSON.stringify(parent.creepsPerMinDeltas);
    },
    xpPerMinDeltas(parent, args, ctx, info) {
      return JSON.stringify(parent.xpPerMinDeltas);
    },
    damageTakenDiffPerMinDeltas(parent, args, ctx, info) {
      return JSON.stringify(parent.damageTakenDiffPerMinDeltas);
    },
    damageTakenPerMinDeltas(parent, args, ctx, info) {
      return JSON.stringify(parent.damageTakenPerMinDeltas);
    },
  },
};
export { Match_Resolver as default };
