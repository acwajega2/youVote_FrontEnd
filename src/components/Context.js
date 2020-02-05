import React, { Component } from 'react'
import axios from 'axios'






//-----Creating the youVote Context
const YouVoteContext = React.createContext();




//-------Creating the YouVote Provider
class YouVoteProvider extends Component{

    //---Declaring the state
    constructor(props) {
        super(props)
        this.state = {
            //---Api Access details
            api_username: "chris",
            api_password: "Matilda@123",
            api_access_token: "",
            api_refresh_token: "",
            has_api_loged_in : false,
            candidates: [],
            elections: [],
            voting_register: [],
            
        }
    }


    componentDidMount() {
        this.get_auth_token()
        

        //Retrieving the cadidates from the api
      
           // console.log(this.state)
            

    }

    componentWillUpdate() {
        
    }

    componentWillUnmount() {
        
    }



  //-----Authenticating the API
    get_auth_token = () => {
        var postData = {
            username: this.state.api_username,
            password: this.state.api_password
        };

      
         

        axios.post("http://localhost:8000/api/token/", postData)
            .then(res=> {
                console.log(res.data)
                
                this.setState(() => {
                    return {
                        api_access_token: res.data.access,
                        api_refresh_token: res.data.refresh,
                        has_api_loged_in : true
                        
                    }
                })


                this.get_candidates()
        })
        
        
          
        
    }

    //-------Get Candidates fucntion
    get_candidates = () => {
        var getHeaders = {
            headers: {
                'Authorization': "Bearer " + this.state.api_access_token
            }
        }
        
        axios.get("http://localhost:8000/api/youVote/candidates/", getHeaders)
            .then(res => {
                
                this.setState(() => {
                    return {
                        candidates: res.data.results
                    }
                })

                console.log(this.state.candidates)

        })
    }
    //-----------------------End of get candidiates function

    //---------Vote function -----
    voteHandle = (candidate_id) => {
        var postData = {
            candidate: candidate_id,
            vote: "Y"
        };

        var postHeaders = {
            headers: {
                'Authorization': "Bearer " + this.state.api_access_token
            }
        }
        
        axios.post("http://127.0.0.1:8000/api/youVote/voting_register/",postData,postHeaders)
            .then(res => {
                this.get_candidates()
            
        })
        
      

      
        console.log("clicked"+candidate_id)
    }


    //--------End of Vote function
    


    render() {
        return (
            <YouVoteContext.Provider value={{
                ...this.state,
                voteHandle : this.voteHandle
            }}>
                {this.props.children}
            </YouVoteContext.Provider>
        )
    }
    
}
//--------Creating the You Vote Consumer
const YouVoteConsumer = YouVoteContext.Consumer;

//---------> Exporing both the provider and consumer
export {YouVoteConsumer,YouVoteProvider}