import React, { Component } from 'react';
import gql from "graphql-tag";
import {Query} from 'react-apollo'

export default class Table extends Component {
  render() {
    return (
      <div>
        <Query
          query={gql`
          {
            movies{
              poster_path
              overview
              title
              popularity
              _id
            }
          }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
              
            return <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Overview</th>
                <th scope="col">Popularity</th>
              </tr>
            </thead>
            <tbody>
              {
                data.movies &&
                data.movies.map(({title, poster_path, overview, popularity, _id}) => (
                  <tr key={_id}>
                    <td>{title}</td>
                    <td>{overview}</td>
                    <td>{popularity}</td>
                  </tr>
                  ))
            }
            </tbody>
          </table>
          }}
        </Query>
      </div>
    )
  }
};
