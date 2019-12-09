import axios from 'axios';

const leagueURL = 'https://na1.api.riotgames.com';
const baseURL = `${leagueURL}/lol/summoner/v4/summoners/by-name/`;
const Summoner_Data = {
  getSummoner: url => {
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
};

export { Summoner_Data as default };
