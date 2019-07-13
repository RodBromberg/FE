import React, { Component } from "react";
import { connect } from "react-redux";
import { getBoards } from "../actions";
import Layout from "./layout";
import BoardCard from "./boardCard";
import "./board.css";

class boardsItem extends Component {
  componentDidMount() {
    this.props.getBoards();
  }
  render() {
    console.log(this.props.boards);
    if (!this.props.boards) {
      return (
        <Layout>
          <h1>Loading...</h1>
        </Layout>
      );
    } else {
      return (
        <Layout>
          <div className="card-grid">
            {this.props.boards.allBoards.map(board => (
              <BoardCard
                key={board.id}
                title={board.title}
                url={board.url}
                category={board.category}
                description={board.description}
              />
            ))}
          </div>
        </Layout>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    boards: state
  };
};

export default connect(
  mapStateToProps,
  { getBoards }
)(boardsItem);
