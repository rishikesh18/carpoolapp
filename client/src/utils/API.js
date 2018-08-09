import axios from "axios";


export default {

  //get directions from google mpas
  getMap: function(getmap) {
    return axios.get("https://www.google.com/maps/dir/Pokhara/Kathmandu", getmap
  );
  },
  
  // Gets all saved ride offers
  getOffers: function(getData) {
    return axios.get("http://localhost:3001/api/offers", getData, { headers: {"Content-Type": "application/json"} });
  },
 
  // Saves an offer to the database
  saveOffer: function(offerData) {
    //console.log(offerData);
    return axios.post("http://localhost:3001/api/offers", offerData, { headers: {"Content-Type": "application/json"} });
  
  },

  deleteOffer: function(id) {
    return axios.delete("/api/offers/" + id);
  },
 
  //update an offer in the database
  updateOffer: function(offerData) {
    console.log("this", offerData);
    return axios.put("http://localhost:3001/api/offers/"+offerData._id, offerData, { headers: {"Content-Type": "application/json"} });
   // console.log("that", id);
  },

  //remove an entry in the database
  removeOffer: function(offerData) {
    console.log("this", offerData);
    return axios.put("http://localhost:3001/api/offers/"+offerData._id, offerData, { headers: {"Content-Type": "application/json"} });
   // console.log("that", id);
  }

};
