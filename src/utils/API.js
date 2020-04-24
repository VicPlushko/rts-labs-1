import axios from "axios";

export default {
    search: function(searchTerm) {
        return axios.get("https://hn.algolia.com/api/v1/search_by_date?query=" + searchTerm + "&tags=story");
    }
}