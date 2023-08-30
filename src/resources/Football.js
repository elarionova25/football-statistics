import axios from "axios";

class FootballData {
    static async competitions() {
        const {data} = await axios.get(`/api/v4/competitions`)
        return data;
    }
}

export default FootballData;
