import axios from "axios";

export default {
    search: function(searchTerm) {
        console.log("axios GET query", searchTerm);
        return axios.get("http://hn.algolia.com/api/v1/search_by_date?query=" + searchTerm + "&tags=story");
    }
}