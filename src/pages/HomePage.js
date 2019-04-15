import React, { Component } from 'react';
import UserImages from '../containers/UserImages';
import { Route, Link } from "react-router-dom"
import Image from "react-graceful-image";





class HomePage extends React.Component {
    render() {
        return (
            <div>
                {this.props.users.map(user =>
                    <div>
                        <Link className="user" to={`/user/${user.id}`}>
                            {user.username}
                            <Image className="profile-images" src={user.profileImage} /> <br />
                        </Link>

                        <UserImages userId={user.id} /> <br /><br />
                    </div>
                )
                }
            </div>
        )
    }
}

export default HomePage

