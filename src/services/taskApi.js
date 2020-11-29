class Api {

    constructor(url) {
        console.debug(process.env.REACT_APP_API_URL);
    }

    getUrl() {
        return this.url;
    }
}

const ApiService = new Api();
export default ApiService;