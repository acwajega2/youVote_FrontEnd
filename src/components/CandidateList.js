import React, { Component } from 'react';
import { YouVoteConsumer } from './Context';
import Candidate from './Candidate'

class CandidateList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <YouVoteConsumer>
                        {value => {

                            //---> Getting values
                            const { candidates } = value

                            const renderCandidates = candidates.map(candidate => {
                                return (
                                    <React.Fragment>
                                       <Candidate key ={candidate.id} candidate ={candidate} />
                                    </React.Fragment>
                                )
                            })





                            return (
                                <React.Fragment>
                                    <div className="my-5">
                                        {renderCandidates}
                                    </div>

                                </React.Fragment>
                            )




                            


                        }}
                    </YouVoteConsumer>
                    
                 </div>
                
           </React.Fragment>
        );
    }
}

export default CandidateList;