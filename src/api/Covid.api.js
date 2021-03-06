import axios from 'axios'

export const CovidApi = {
    FullStatistics() {
        return axios({
            url: `https://covid19.mathdro.id/api`,
            method: 'get'
        })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                return error
            })
    },
    EveryDayStatistics() {
        return axios({
            url: `https://covid19.mathdro.id/api/daily`,
            method: 'get'
        })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                return error
            })
    },
    Countries() {
        return axios({
            url: `https://covid19.mathdro.id/api/countries`,
            method: 'get'
        })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                return error
            })
    },
    Country(country) {
        return axios({
            url: `https://covid19.mathdro.id/api/countries/${country}`,
            method: 'get'
        })
            .then(function (response) {
                return response.data;
            })
            .catch(function (error) {
                return error
            })
    }
}