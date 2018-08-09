import React, {Component} from "react";
import API from "./../utils/API";
import "./pages.css";
import { List} from "./List";
//import MapWithAMarker from "./map.js";
import { Link } from "react-router-dom";
import moment from "moment";

class SearchForm extends Component {
    state = {
        offers: [],
        origin: "",
        destination: "",
        avaiable: "",
        seats: "",
        date: "",
        time:""
       
       
    };

    componentDidMount() {
        this.loadOffers();
    //    this.loadMap();
      }
    
      loadOffers = () => {
        API.getOffers()
          .then(res =>
            this.setState({ offers: res.data,
                origin: "",
                destination: "",                
                avaiable: "",
                seats: "",
                date: "",
                time: "", })
          )
          .catch(err => console.log(err));
      
      };

updateOffer = (offer) => {
    //let id = offer._id;
   
    let updatedUsernameR = offer.usernameR;    
   updatedUsernameR = updatedUsernameR.push(this.props.user.username);    
     API.updateOffer(offer, {
      //  $set: {avaiable: updatedAvaiable},
      //  $push: {usernameR: this.props.user.username}
     })
        .then(res => this.loadOffers())
            .catch(err => console.log(err));
};

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value

    });
  };


render() {
            let userRider = this.props.user.username;
            let today =  moment().format("YYYY-DD-MM");

    //console.log("search",this.props);
    return (
        <div className="container">
                <div className="col-md-12" id = "offerArea">
                    <form>
                        <div className="row">
                                <div className ="col-md-3"> 
                                    <label>
                                        Origin:
                                    </label>
                                
                                        <input
                                            value={this.state.origin}
                                            onChange={this.handleInputChange}
                                            name="origin"               
                                            required/>
                                    
                                </div>
                        
                                <div className ="col-md-4 "> 
                                    <label>
                                        Destination:
                                    </label>
                                
                                        <input
                                            value={this.state.destination}
                                            onChange={this.handleInputChange}
                                            name="destination"               
                                            required/>                             
                                </div>

                                 <div className ="col-md-3 "> 
                                    <label>
                                        Date:
                                    </label>
                                
                                        <input
                                            value={this.state.date}
                                            type = "date"
                                            onChange={this.handleInputChange}
                                            name="destination"               
                                            required/>                             
                                </div>
                                              
                                <div className ="col-md-2">
                                    <button
                                            disabled={!(this.state.origin 
                                                && this.state.destination
                                                && this.state.seats
                                                && this.state.time
                                                && this.state.date)}
                                            onClick={this.handleFormSubmit}
                                        
                                        >
                                            Search Ride Offer
                                    </button>
                                </div>                        
                        </div>

                    </form>
                </div>

                <div className="availableOffer col-md-12 ">

                    <h1>Availabe Ride Offers</h1>

                                               
                        <div className="col-md-10 col-md-offset-1">                        
                             {this.state.offers.length ? (
                                <List>
                                    
                                    <ol>
                                    {/* const result = words.filter(word => word.length > 6); */}
                                    
                                        {this.state.offers.filter(offer =>
                                            //  !((moment(offer.date)).isBefore(today)))
                                             offer.date === offer.date)
                                                .map(offer => (
                                            <div key={offer._id}>
                                           
                                    
                                                
                                                        <li className ="searchResult">
                                                            {"Origin: "+offer.origin+","} 
                                                            {" Destination: " +offer.destination+","}
                                                            {" Available Seats: " + (parseInt(offer.seats)-(offer.usernameR.length))+","}
                                                            {" Date: "+ offer.date+","}
                                                            {" Start Time: "+offer.time +"  "}

                                                            { offer.usernameO === this.props.user.username ? (
                                                                 <button> Your Offer</button>): offer.usernameR.find(function(element){
                                                                     return element === userRider
                                                                 }) ?(
                                                                    <button >Ride Requested</button>
                                                                 ) :
                                                                 offer.seats==offer.usernameR.length  ?(
                                                                   <button >Reserved</button>
                                                                ) : (
                                                                    <button id ="requestButton" onClick={() => this.updateOffer(offer)}>Request this ride </button> 
                                                                    )}
                                                            {/* array1.forEach(function(element) {
                                                    console.log(element);
                                                    }); */}
                                                          
                                                               
                                                           
                                                             
                                                              
                                                            
                                                        </li><br/>
                                   
                                    
                                                {/* </Link> */}
                                            </div>
                            
                            
                                          ))}
                                    </ol>
                                    
                                </List>
                            ) : (
                            <h3>No Results to Display</h3>
                            )}
                        </div>

                         
                          

                </div>
                
        </div>
    );
}
}


export default SearchForm;
