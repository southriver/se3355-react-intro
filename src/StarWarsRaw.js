import React from 'react';


class StarWarsRaw extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      films: [],
    }
  }

  getNewCharacter() {
        this.setState({
          name: "Testing Name",
          height: 12,
          homeworld: "Testing homeworld",
          films: ['Film1','Film2'],
          loadedCharacter: true,
        })
  }

  render() {

    return (
      <div>
        <div className="content">
          {
            this.state.loadedCharacter &&
              <div>
                <h1>{this.state.name}</h1>
                {/* <p><img src={this.state.imageUrl} alt={this.state.name} className="img" /></p> */}
                <p>{this.state.height} m</p>
                <p>Homeworld: {this.state.homeworld}</p>
              </div>
          }
          <button
            type="button"
            onClick={() => this.getNewCharacter()}
            className="btn"
          >
            Get Character
          </button>
        </div>
        {/* <div className="bg-img" style={{backgroundImage: `url(${this.state.imageUrl})`}}></div> */}
      </div>
    )
  }
}

export default StarWarsRaw;
