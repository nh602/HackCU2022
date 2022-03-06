import axios from 'axios'


const UserService = {
    getVote: async function(voter) {
        try {
            const response = await axios.get();
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    getBallot: async function(location) {
        try {
            const response = await axios.get();
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    postLogin: async function(data) {
        try {
            const response = await axios.post("http://localhost:3000/api/users/", data, {withCredentials: true});
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    postBallot: async function(data) {
        try {
            const response = await axios.post("http://localhost:3000/api/votes/", {"ballotMeasures": data}, {withCredentials: true});
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;