// This is an advanced example! It is not intended for use in application code.
// Libraries like Relay may make use of this technique to save some time on low-end mobile devices.
// Most components should just initiate async requests in componentDidMount.

import { db } from "../firebase";
import Post from "./Post";
import { collection, getDocs } from "firebase/firestore";
import React from "react";

export default class Posts extends React.Component {
  _hasUnmounted = false;

  state = {
    externalData: null,
  };

  constructor(props) {
    super(props);

    // Prime an external cache as early as possible.
    // Async requests are unlikely to complete before render anyway,
    // So we aren't missing out by not providing a callback here.
    getDocs(collection(db, "posts"));
  }

  componentDidMount() {
    // Now that this component has mounted,
    // Wait for earlier pre-fetch to complete and update its state.
    // (This assumes some kind of external cache to avoid duplicate requests.)
    //   asyncLoadData(this.props.someId).then(externalData => {
    //     if (!this._hasUnmounted) {
    //       this.setState({ externalData });
    //     }
    //   });
    getDocs(collection(db, "posts")).then((externalData) => {
      console.log("externalData: ", externalData);
      if (!this._hasUnmounted) {
        this.setState({ externalData });
      }
    });
  }

  componentWillUnmount() {
    this._hasUnmounted = true;
  }

  render() {
    if (this.state.externalData) {
      return (
        <div>
          <h1>hello</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>no posts yet</h1>
        </div>
      );
    }
  }
}
