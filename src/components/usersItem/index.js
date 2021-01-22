import React, { Component } from 'react';
import styles from './usersItem.module.scss'

export default class usersItem extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {
            name,
            phone,
            email,
            picture: { medium:imgSrc }
        } = this.props;
        return(
            <div className={styles.userItemsContainer}></div>
        )
    }
}