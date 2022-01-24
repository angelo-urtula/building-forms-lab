import React, { Component } from 'react'
import {connect} from 'react-redux'


class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <li>{band.id}.{band.name}</li>)
  render() {
    return(
      <div>
        <ol>
       {this.renderBands()}
       </ol>
        BandsContainer
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}


export default connect(mapStateToProps)(BandsContainer)
