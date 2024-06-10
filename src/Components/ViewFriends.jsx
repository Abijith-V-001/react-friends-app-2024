import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewFriends = () => {
    const [friend,changeFriend]=useState(
        [{
            "name": "",
            "friendName": "",
            "friendNickName":"",
            "DescribeYourFriend":""
            }]
    )

    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Friend name</th>
                                    <th scope="col">Friend nick name</th>
                                    <th scope="col">Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                friend.map(
                                    (value,index)=>{
                                        return <tr>
                                    
                                        <td>{value.name}</td>
                                        <td>{value.friendName}</td>
                                        <td>{value.friendNickName}</td>
                                        <td>{value.DescribeYourFriend}</td>
                                    </tr>
                                    }
                                )}
                                
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewFriends