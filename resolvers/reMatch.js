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
};
export { Match_Resolver as default };
