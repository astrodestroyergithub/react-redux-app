import React from 'react'
import { connect } from 'react-redux'
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of icecreams - {props.noOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Icecream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      noOfIceCreams: state.iceCream.noOfIceCreams
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      buyIceCream: () => dispatch(buyIceCream())
    }
  }
  
  export default connect(
    mapStateToProps, 
    mapDispatchToProps
  )(IceCreamContainer)