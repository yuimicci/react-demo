import React, { Component } from 'react';
import './ceshi.css';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
};
function formatDate(date) {
  return date.toLocaleDateString();
}
//   提取Avatar组件
// function Avatar(props){
//   return(
//     <img className="Avatar"
//           src={props.user.avatarUrl}
//           alt={props.user.name} />
//   )
// }
// 将函数转化成类（render() 方法中，使用 this.props 替换 props）
class Avatar extends Component {
  render() {
    return (
      <img className="Avatar"
        src={this.props.user.avatarUrl}
        alt={this.props.user.name} />
    )
  }
}
// 提取userInfo
function UserInfo(props) {
  console.log(props);
  return (
    <div className="UserInfo">
      <Avatar user={props.userInfo}></Avatar>
      <div className="UserInfo-name">
        {props.userInfo.name}
      </div>
    </div>
  )
}
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        {/* <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name} /> */}
        <Avatar user={props.author}></Avatar>
        <div className="UserInfo-name">
          {props.author.name}
        </div>
        {/* <UserInfo userInfo={props.author}></UserInfo> */}
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

class ceshi extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }
  }

  componentDidMount() {
    // 生命周期钩子
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {//组件销毁
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div>
        <a href="#/">去home</a>
        <div className="button">ceshi</div>

        <Comment
          date={comment.date}
          text={comment.text}
          author={comment.author} />


        <h2>it is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}


export default ceshi;