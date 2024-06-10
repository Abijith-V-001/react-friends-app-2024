import React from 'react'
import Navbar from './Navbar'

const ViewFriends = () => {
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
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewFriends