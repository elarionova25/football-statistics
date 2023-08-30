import axios from "axios";

class FootballData {
    static async competitions() {
        const {data} = await axios.get(`api/v4/competitions`, this.config);
        return data;
    }

    static async teams() {
        const {data} = await axios.get(`api/v4/teams`, this.config);
        return data;
    }

    static async getAllCompetitionMatches(id) {
        const {data} = await axios.get(`api/v4/competitions/{id}/matches`, this.config);
        return data;
    }
}
FootballData.token = '6783c28aa01c46119c51f90e43534c03'
FootballData.config = {
    headers: {
        'X-Auth-Token': FootballData.token
    }
};

export default FootballData;
