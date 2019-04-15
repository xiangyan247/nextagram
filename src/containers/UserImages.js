import React, { Component } from 'react';
import axios from 'axios';
import Image from "react-graceful-image";

class UserImages extends React.Component {
    state = {
        userImages: []
    }

    componentDidMount() {
        const { userId } = this.props

        axios.get('https://insta.nextacademy.com/api/v1/images?userId=' + userId)
            .then(result => {
                const userImages = result.data;
                this.setState({ userImages: userImages })
            })
            .catch(error => {
                console.log('ERROR: ', error)
            })
    }

    render() {

        return (
            <div >
                {
                    this.state.userImages.map(image =>
                        <div className="user-images">
                            <Image className="images" src={image} />
                        </div >
                    )
                }
            </div >
        )
    }
}


export default UserImages