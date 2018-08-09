
import React, {Component} from "react";
//import Moment from 'react-moment';
import API from "./../utils/API";
import "./pages.css";
import moment from "moment";
//import username from "./../components/Navbar1";



class OfferForm extends Component {
    state = {
        offers: [],
        origin: "",
        usernameO: "",
        destination: "",
        seats: "",
        date: "",
        time:"",
        message: ""
       
    };

// componentDidMount() {

// }

handleFormSubmit = event => {
    //console.log("data",this.props);
    event.preventDefault();
    let today =  moment().format("YYYY-DD-MM");
    
    if (this.state.seats>0 
        // && !((moment(this.state.date)).isBefore(today))
        ) {          
            API.saveOffer({
                origin: this.state.origin,
                usernameO: this.props.user.username,
               // usernameR: ["test2", "test3"],
                destination: this.state.destination,
                seats: this.state.seats,
                avaiable: this.state.seats,
                date: this.state.date,
                time:this.state.time
            })
        .then(res => this.setState({
            origin: "",
            destination: "",
            seats: "",
            date: "",
            time:"",
            message: "Your Ride has been Submitted! Thank You for the offer!!!"
        }))
        .catch(err => console.log(err));
    }else {
        this.setState ({
            message: "Enter Valid seats or date"
        });
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
       
    });
  };


render() {
   // let  user  = this.props; // get the user prop from props
  // const { user } = this.props; 
  
    
    return (
        <div className="container">
                <div className="col-md-6 col-md-offset-1" id = "offerArea">
                    <form>
                    <div className="row">
                                <div className ="col-md-3"> 
                                    <label>
                                        Submitting offer as:
                                    </label>
                                </div>
                                <div className ="col-md-3 col.md-offset-2">
                                {this.props.user.username}
                                </div>
                        </div>

                        <div className="row">
                                <div className ="col-md-3"> 
                                    <label>
                                        Origin:
                                    </label>
                                </div>
                                <div className ="col-md-3 col.md-offset-2">
                                <input
                                    value={this.state.origin}
                                    type ="String"
                                    onChange={this.handleInputChange}
                                    name="origin"               
                                    required/>
                                    
                                </div>
                        </div>

                        <div className="row">
                                <div className ="col-md-3 "> 
                                    <label>
                                        Destination:
                                    </label>
                                </div>
                                <div className ="col-md-3 col.md-offset-2">
                                <input
                                    value={this.state.destination}
                                    type ="String"
                                    onChange={this.handleInputChange}
                                    name="destination"               
                                    required/>
                                   
                                
                                </div>
                        </div>

                        <div className="row">
                                <div className ="col-md-3 "> 
                                    <label>
                                        Seats offered:
                                    </label>
                                </div>
                                <div className ="col-md-3 col.md-offset-2">
                                <input
                                    value={this.state.seats}
                                    type = "Number"
                                    onChange={this.handleInputChange}
                                    name="seats"               
                                    required/>
                                   
                                
                                </div>
                        </div>

                        <div className="row">
                                <div className ="col-md-3 "> 
                                    <label>
                                        Date:
                                    </label>
                                </div>
                                <div className ="col-md-3 col.md-offset-2">
                                <input
                                    value={this.state.date}
                                    type ="Date"
                                    onChange={this.handleInputChange}
                                    name="date"               
                                    required/>
                                   
                                </div>
                                
                        </div>

                        <div className="row">
                                <div className ="col-md-3"> 
                                    <label>
                                        Time:
                                    </label>
                                </div>
                                <div className ="col-md-3 col.md-offset-2">
                                <input
                                    value={this.state.time}
                                    type="Time"
                                    onChange={this.handleInputChange}
                                    name="time"               
                                    required/>
                                   
                                </div>
                                
                        </div>

                        
                        <div className="row">                       
                                <div className ="col-md-4 col.md-offset-1">
                                <button
                                        disabled={!(this.state.origin 
                                            && this.state.destination
                                            && this.state.seats
                                            && this.state.time
                                            && this.state.date)}
                                        onClick={this.handleFormSubmit}
                                        // onClick={this.handleInputChange}
                                    >
                                        Submit Ride Offer
                                 </button>
                                </div>                        
                        </div>

                    </form>

                        
                        <div className="row">
                                
                                <div className ="col-md-12 ">
                                <h3>
                                    {this.state.message}
                                    
                                               
                                    </h3>
                                   
                                </div>
                                
                        </div>
                </div>
        </div>
    );
}
}


export default OfferForm;
