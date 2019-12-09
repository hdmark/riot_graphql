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
          'X-Riot-Token': 'RGAPI-926ce681-d37a-4df6-90bf-de1eab79efbe',
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
          'X-Riot-Token': 'RGAPI-926ce681-d37a-4df6-90bf-de1eab79efbe',
        },
      })
      .then(res => res.data.matches);
  },
};

export { Match_Data as default };
