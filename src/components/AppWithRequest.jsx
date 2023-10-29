import React, { Component } from 'react';
import axios from 'axios';

import { StyledAppWithRequest } from './AppWithRequest.styled';
import Loader from './Loader/Loader';

export default class AppWithRequest extends Component {
  state = {
    posts: null,
    isLoading: false,
    error: null,
  };

  fetchPosts = async () => {
    try {
      this.setState({
        isLoading: true,
      });
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      this.setState({
        posts: data,
      });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  };

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    return (
      <StyledAppWithRequest>
        <h1>HTTP-requests</h1>
        {this.state.error !== null && (
          <p className="error-bage">
            {' '}
            Oops, some error occured... Error message: {this.state.error}
          </p>
        )}
        {this.state.isLoading && <Loader />}
        <ul className="postsList">
          {this.state.posts !== null &&
            this.state.posts.map(post => {
              return (
                <li key={post.id} className="postListItem">
                  <h2 className="itemTitle">{post.title}</h2>
                  <p className="itemBody">
                    <b>Body</b> {post.body}
                  </p>
                </li>
              );
            })}
        </ul>
      </StyledAppWithRequest>
    );
  }
}
