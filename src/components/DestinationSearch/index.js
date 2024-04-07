import {Component} from 'react'
import Nation from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchedNationList = destinationsList.filter(each => {
      const nationName = each.name
      const lowerCase = nationName.toLowerCase()
      const searchInputLowerCase = searchInput.toLowerCase()
      return lowerCase.includes(searchInputLowerCase)
    })
    return (
      <div className="container">
        <h1>Destination Search</h1>
        <div className="search-box">
          <input
            className="inputStyle"
            placeHolder="Search"
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-img"
            />
          </div>
        </div>

        <ul className="card-container">
          {searchedNationList.map(eachNation => (
            <Nation key={eachNation.id} eachNation={eachNation} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
