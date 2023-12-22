import React from 'react';


class StarWars extends React.Component {
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      height: null,
      homeworld: null,
      imageUrl: null,
      films: [],
    }
  }

  getNewCharacter() {
    const randomNumber = Math.round( Math.random() * 88)
    // const url = `https://swapi.dev/api/people/${randomNumber}`
    const url = `https://swapi.dev/api/people/1`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          name: data.name,
          height: data.height,
          homeworld: data.homeworld,
          films: data.films,
          // imageUrl: data.image,
          loadedCharacter: true,
        })
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
                <p><a href={this.state.homeworld}>Homeworld</a></p>
                <ul>
                  {/* <li>{this.state.films}</li>
                   */}
                   {
                    this.state.films.map(film => {
                      return <li><a href={film}>{film}</a></li>
                    })
                   }
                </ul>
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

export default StarWars;
