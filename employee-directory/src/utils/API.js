import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=10";
// const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

export default {
  search: function(query) {
    return axios.get(BASEURL);
  }
};

// $.ajax({
//   url: "https://randomuser.me/api/",
//   dataType: "json",
//   success: function(data) {
//     console.log(data);
//   }
// });
