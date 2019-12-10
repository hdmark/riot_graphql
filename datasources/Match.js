import axios from 'axios';
const leagueURL = 'https://na1.api.riotgames.com';
const baseURL = `${leagueURL}/lol/match/v4/matches/`;
const matchListURL = `${leagueURL}/lol/match/v4/matchlists/by-account/`;
const Match_Data = {

  getMatch: url => {
    return axios
      .request({
        url: `${baseURL}${url}`,
        headers: {
          method: 'GET',
          'X-Riot-Token': process.env.RIOT_API,
        },
      })
      .then(res => res.data);
  },
  getMatchesByAccount: url => {
    return axios
      .request({
        url: `${matchListURL}${url}`,
        headers: {
          method: 'GET',
          'X-Riot-Token': process.env.RIOT_API,
        },
      })
      .then(res => res.data.matches);
  },
};

export { Match_Data as default };
