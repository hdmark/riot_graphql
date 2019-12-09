// we setup the qcoins query to search for coins
// this returns 1 or more of the coins (chances or 1 or all)
// each coin then fires off resolvers

const Summoner_Resolver = {
  Query: {
    async summoner(parent, args, { dataSources }, info) {
      return dataSources.Summoner_Data.getSummoner(args.name);
    },
  },
  Summoner: {
    matchList(parent, args, { dataSources }, info) {
      return dataSources.Match_Data.getMatchesByAccount(parent.accountId);
    },
  },
  Player: {
    // summoner(parent, args, { dataSources }, info) {
    //   return dataSources.Summoner_Data.getSummoner(parent.summonerName);
    // },
  },
  ParticipantTimeline: {
    csDiffPerMinDeltas(parent, args, ctx, info) {
      return JSON.stringify(parent.csDiffPerMinDeltas);
    },
  },
};
export { Summoner_Resolver as default };
