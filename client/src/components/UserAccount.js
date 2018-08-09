import React, {Component} from "react";
import API from "./../utils/API";
import "./pages.css";
import { List, ListItem } from "./List";
//import Map from "./../components/map.jsx";
import { Link } from "react-router-dom";
import moment from "moment";

class UserForm extends Component {
    state = {
        offers: [],
        origin: "",
        destination: "",
        seats: "",
        date: "",
        time:""
       
    };

    componentDidMount() {
        this.loadOffers();
      }
    
      loadOffers = () => {
        API.getOffers()
          .then(res =>
            this.setState({ offers: res.data,
                origin: "",
                destination: "",
                seats: "",
                date: "",
                time: "", })
          )
          .catch(err => console.log(err));
      
      };
    
deleteOffer = id => {
    API.deleteOffer(id)
          .then(res => this.loadOffers())
          .catch(err => console.log(err));
      };

  updateOffer = (offer) => {
    //let id = offer._id;
   
    let updatedUsernameR = offer.usernameR; 
    let index = updatedUsernameR.indexOf(this.props.user.username);
    if (index > -1) {
        updatedUsernameR.splice(index, 1);
    }
   updatedUsernameR = updatedUsernameR;    
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
    let today =  moment().format("YYYY-DD-MM");
    return (
        <div className="container mainContainer">
                

                <div className="availableOffer col-md-6">

                    <h1>Your Ride Offers</h1>

                                               
                        <div className="col-md-12">                        
                             {this.state.offers.length ? (
                                <List>
                                    <ol>
                                    {/* const result = words.filter(word => word.length > 6); */}
                                    
                                        {this.state.offers.filter(offer => offer.usernameO === this.props.user.username
                                                                        &&
                                                                        //  !((moment(offer.date)).isBefore(today)))
                                                                         offer.date === offer.date)
                                                                         .map(offer => (
                                            <div key={offer._id}>
                                                {/* <Link to={"/api/offers/" + offer._id}> */}
                                    
                                                
                                                        <li className ="myOffers">
                                                            {"Origin: "+offer.origin+","} 
                                                            {" Destination: " +offer.destination+","}
                                                            {" Available Seats: "+offer.seats+","}
                                                            {" Date: "+ offer.date+","}
                                                            {" Start Time: "+offer.time +"  "}
                                                            {" Requested by: "+offer.usernameR +"  "}  
                                                            <button onClick={() => this.deleteOffer(offer._id)}>Cancel Offfer </button>   
                                                            
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

                 <div className="myRequestOffer col-md-6">

                        <h1>Your Ride Requests</h1>

                           
                                    <div className="col-md-12 requestedOffer">                        
                                        {this.state.offers.length ? (
                                            <List>
                                                <ol>
                                                     {this.state.offers.filter((result) =>{
                                                                                             return (result.usernameR.indexOf(this.props.user.username) >=0 
                                                                                             &&
                                                                                            //  !((moment(result.date)).isBefore(today)) )
                                                                                             result.date === result.date)
                                                                                         })
                                                                                        
                                                    .map(offer => (
                                                        <div key={offer._id} >
                                                            {/* <Link to={"/api/offers/" + offer._id}> */}
                                                
                                                            
                                                                    <li className ="myRequests">
                                                                        {"Origin: "+offer.origin+","} 
                                                                        {" Destination: " +offer.destination+","}
                                                                        {" Available Seats: "+offer.seats+","}
                                                                        {" Date: "+ offer.date+","}
                                                                        {" Start Time: "+offer.time +"  "}
                                                                        {" Offered by: "+offer.usernameO +"  "} 
                                                                        <button onClick={() => this.updateOffer(offer)}>Cancel Request </button>   
                                                                        
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


export default UserForm;
