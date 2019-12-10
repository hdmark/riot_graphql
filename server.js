// Import the installed modules.
const express = require('express');
const cors = require('cors');
const port = 3001;
const app = express();
require('dotenv').config()

// --------------------EXPRESS SETUP--------------------
app.use(cors()); // ignores the cross header origin bs

// ==============DEV SETUP ON MARKS MACHINE===========

// --------------------APOLLO SERVER (GRAPHQL) ----------------------
const { ApolloServer } = require('apollo-server-express');
import typeDefs from './schema';
import Summoner_Resolver from './resolvers/reSummoner';
import Match_Resolver from './resolvers/reMatch';
import Summoner_Data from './datasources/Summoner';
import Match_Data from './datasources/Match';

// --------------------DATA SOURCES ----------------------
// set up any dataSources our resolvers need
// this is where database queries are run
// const dataSources = () => ({
//   accountsAPI: new AccountsAPI({ cachedQuery }),
//   coinsAPI: new CoinsAPI({ cachedQuery }),
// });
const dataSources = () => ({
  Match_Data,
  Summoner_Data,
});

// --------------------RESOLVERS----------------------
// add up the resolvers
let resolvers = [Summoner_Resolver, Match_Resolver];

// --------------------APOLLO SERVER (GRAPHQL) ----------------------
const server = new ApolloServer({
  typeDefs,
  dataSources,
  resolvers,
});
server.applyMiddleware({ app, path: '/graphql' });

app.get('/api', (req, res) => {
  res.send('hi');
});
// --------------------SERVER START--------------------
app.listen(port, () => {
  console.log('Server listening on port: ', port);
});

// # Write your query or mutation here
// query {
//   match(matchId: "3229470328") {
//     gameId
//     champion
//     seasonId
//     role
//     # participantIdentities {
//     #   participantId
//     #   player {
//     #     summonerName
//     #     accountId
//     #   }
//     # }
//     participants {
//       participantId
//       runes {
//         runeId
//       }
//       masteries{
//         rank
//       }
//       highestAchievedSeasonTier
//     }
//   }
//   summoner(name: "crotchetyoldman") {
//     id
//     name
//     summonerLevel
//     revisionDate
//     profileIconId
//     puuid
//     accountId
//     matchList {
//       gameId
//       champion
//       seasonId
//       role
//       lane
//     }
//   }
//   # matchesByAccount(
//   #   accountId: "d9ftcj69FoTrcXySC54ezZQTdBmsM_sgiFp7L1tqGxUrSDk"
//   # ) {
//   #   gameId
//   # }
// }
