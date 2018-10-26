import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
 class Detail extends Component{
    componentDidMount(){
        console.log(this.props);
        // 页面的 url 信息全都包含在 this.props.match 字段中
        // history：包含了组件可以使用的各种路由系统的方法，常用的有 push 和 replace，两者都是跳转页面，但是 replace 不会引起页面的刷新，仅仅是改变 url。
        // location：相当于URL 的对象形式表示，通过 search 字段可以获取到 url 中的 query 信息。（这里 state 的含义与 HTML5 history.pushState API 中的 state 对象一样。每个 URL 都会对应一个 state 对象，你可以在对象里存储数据，但这个数据却不会出现在 URL 中。实际上，数据被存在了 sessionStorage 中）（参考： 深入理解 react-router 路由系统）
        // match：包含了具体的 url 信息，在 params 字段中可以获取到各个路由参数的值。
    }
    render(){
        return (
            <div>
                 {/* <Link to="/" className="home">去home</Link> */}
                 {/* 使用hashRouter可以加# */}
                 {<a href="#/ceshi">去ceshi</a>}
                {/* 使用Router时需与route.js规定的一样 */}
                 {/* <a href="/">去home</a> */}
            </div>
        )
            
        
    }
}
export default Detail