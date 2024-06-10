import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

export const AddFriend = () => {
    const [friend, changeFriend] = useState({
        "name": "",
        "friendName": "",
        "friendNickName": "",
        "DescribeYourFriend": ""
    })
    const inputHandler=(event)=>{
        changeFriend({...friend,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(friend)
        axios.post("https://friendsapi-re5a.onrender.com/adddata",friend).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully added")
                } else {
                   alert("Not added") 
                }
            }
        )
    }
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 colxl-12 col-xxl-12"></div>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name='name' value={friend.name} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">Friend's name</label>
                            <input type="text" className="form-control" name='friendName' value={friend.friendName} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <label htmlFor="" className="form-label">Friend's nick name</label>
                            <input type="text" className="form-control" name='friendNickName' value={friend.friendNickName} onChange={inputHandler}/>

                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Description</label>
                            <textarea name="DescribeYourFriend" id="" className="form-control" value={friend.DescribeYourFriend} onChange={inputHandler}></textarea>

                        </div>
                        <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                            <button className="btn btn-success" onClick={readValue}>Add friend</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
