import axios from "axios";

class FootballData {
    static async competitions() {
        const {data} = await axios.get(`https://api.football-data.org/v4/competitions/`)
        return data;
    }
}

FootballData.url = 'https://api.football-data.org/v4';
export default FootballData;
