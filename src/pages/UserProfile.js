import React from 'react';
import HomePage from './HomePage'
import UserImages from '../containers/UserImages';
import Image from 'react-graceful-image'



class UserProfile extends React.Component {

    state = {
        username: null,
        profileImage: null
    }

    componentDidMount() {
        this.props.users.forEach(user => {
            if (user.id == this.props.match.params.id) {
                this.setState({
                    username: user.username,
                    profileImage: user.profileImage
                })
            }
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h1 className="user"> {this.state.username}</h1>
                    <Image src={this.state.profileImage} alt='pi' className="profile-images" /><br /> <br /><br />
                </div>
                < UserImages userId={this.props.match.params.id} />
            </div>
        )
    }
}

export default UserProfile;



