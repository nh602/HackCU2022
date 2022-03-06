import axios from 'axios'

export default {
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
            // const response = await axios.post(/api/users/, data);
            // return response.data;
            console.log(data);
            return {success: true};
        } catch (error) {
            throw error;
        }
    },

    postBallot: async function(data) {
        try {
            const response = await axios.post();
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}