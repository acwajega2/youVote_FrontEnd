import React, { Component } from 'react';
import { YouVoteConsumer } from './Context';
import { Card, Icon, Avatar, Progress,Button,Col, Row  } from 'antd';

class Candidate extends Component {
    render() {

        //-----------Getting values from the prop
        const {id,name,profile_pic,vote_count} = this.props.candidate



        const { Meta } = Card;

        return (
            <React.Fragment>
                <div className="mx-auto">
                    <YouVoteConsumer>
                        {value => {
                            const {voteHandle} = value
                            
                            return (
                                <React.Fragment>
                                                                     
                                        <Card hoverable bordered className="text-left"
                                        title={name}>
                                        
                                        <div><Avatar src={profile_pic}/></div>
                                        <div><h2>Total Votes: {vote_count}</h2></div>
                                        <div><Button type="primary" onClick={() => { voteHandle(id) }}>Vote</Button></div>
                                
                        </Card>
                                  
                                </React.Fragment>
                            )
                        }}
                    </YouVoteConsumer>
                </div>
           </React.Fragment>
        );
    }
}

export default Candidate;