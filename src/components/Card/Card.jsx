import React, { Component } from 'react';
import styles from "./Card.module.scss";

export default class Card extends Component {
  state = {  }
  render() { 
    console.log("potter")
    console.log(this.props.imageData)
    return (
    <>
    <div className={styles.cardBorder}>
      <img src ={this.props.imageData.url} alt="image"/>
      <h2>{this.props.imageData.title}</h2>
      <p>{this.props.imageData.description}</p>
    </div>
    </>
    )
  }
}