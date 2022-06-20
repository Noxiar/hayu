import React from "react";
import Axios from "axios";

class Movie extends React.Component {
  componentDidMount() {
    Axios.get("http://www.omdbapi.com/?apikey=34b4190c&S=Avengers")
      .then((response) => response(console.log(response)))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.Title.map((row, index) => {
          return (
            <div>
              <h2>{row.Title}</h2>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Movie;
