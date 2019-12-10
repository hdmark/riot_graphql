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
          'X-Riot-Token': process.env.RIOT_API,
        },
      })
      .then(res => res.data)
      .catch(err => {});
  },
};

export { Summoner_Data as default };
