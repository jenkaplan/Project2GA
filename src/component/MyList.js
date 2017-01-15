import React, { Component } from 'react';
import MyStoryListItem from './MyStoryListItem';

class MyList extends React.Component {
  render() {
    console.log(this.props, 'props passed down to mylist');
    let myListLi = this.props.myListArr.map((myListStory, i) => {
      console.log(myListStory, 'logging in the map function in mylist');
      return (
        <MyStoryListItem
          key={i}
          myListStory={myListStory}
          deleteStory={this.props.deleteStory}
        />
      );
    });
    console.log(myListLi);
    return(
      <div>
        <h1>My List</h1>
        <ul>
            {myListLi}
        </ul>
      </div>
    );
  }
}

export default MyList;
