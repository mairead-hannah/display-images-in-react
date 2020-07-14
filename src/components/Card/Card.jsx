import React, { Component } from 'react';
import styles from "./Card.module.scss";

export default class Card extends Component {
  state = {  }
  render() { 
    console.log("potter")
    console.log(this.props.imagedata)
    return (
    <>
    <div className={styles.cardBorder}>
      <img src ={this.props.imagedata} alt="image"/>
      <h2>{this.props.imagedata}</h2>
      <p>{this.props.imagedata}</p>
    </div>
    </>
    )
  }
}