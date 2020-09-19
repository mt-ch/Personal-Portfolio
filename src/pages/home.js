import React, { PureComponent } from "react";

export class home extends PureComponent {

     // State of your application
  state = {
    restaurants: [],
    error: null
  }

  // Fetch your restaurants immediately after the component is mounted
  componentDidMount = async () => {
    // Parses the JSON returned by a network request
    const parseJSON = resp => (resp.json ? resp.json() : resp);

    // Checks if a network request came back fine, and throws an error if not
    const checkStatus = resp => {
      if (resp.status >= 200 && resp.status < 300) {
        return resp;
      }
      return parseJSON(resp).then(resp => {
        throw resp;
      });
    };
    const headers = {
      "Content-Type": "application/json"
    };

    try {
      const restaurants = await fetch("http://localhost:1337/restaurants", {
        method: "GET",
        headers: headers
      })
        .then(checkStatus)
        .then(parseJSON);
      this.setState({ restaurants });
    } catch (error) {
      this.setState({ error });
    }
  };
  render() {
    const { error, restaurant } = this.state

    // Print errors if any
    if (error) {
       return <div>An error occured: {error.message}</div>
    }

    return(
      <div className="App">
        <ul>
          { this.state.restaurants.map(restaurant => <li key={restaurant.id}>{restaurant.name}</li>)}
        </ul>
      </div>
    );
  }
}

export default home;
