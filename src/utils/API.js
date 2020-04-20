import axios from "axios";

export default {
    search: function() {
        return axios.get("http://hn.algolia.com/api/v1/search_by_date?query=");
    }
}