import axios from "axios";

class FootballData {
    static async competitions() {
        const {data} = await axios.get(`api/v4/competitions`, this.config);
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
