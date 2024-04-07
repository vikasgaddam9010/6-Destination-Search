// Write your code here
import {Component} from 'react'
import './index.css'

class Nation extends Component {
  render() {
    const {eachNation} = this.props
    const {imgUrl, name} = eachNation
    return (
      <li className="card">
        <img src={imgUrl} alt={name} />
        <p>{name}</p>
      </li>
    )
  }
}

export default Nation
