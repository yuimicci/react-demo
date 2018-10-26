import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import {withRouter} from "react-router-dom";
// import history from '../history';
class Home extends Component{
    // constructor(props) {
    //     console.log(props);
    //     super(props);
    //     }
        componentDidMount(){
            // console.log(history);
        }
    //     // 这一步是重点
    //     static contextTypes = {
    //     router: PropTypes.object.isRequired
    //     };
    //     test = () => {
    //         console.log(this.context);
    //         // 有些场景下，重复使用push或a标签跳转会产生死循环，为了避免这种情况出现，react-router-dom提供了replace。在可能会出现死循环的地方使用replace来跳转：
    //          this.context.router.history.replace("/detail");
    //         //  this.context.router.history.push("/detail");
    //         // 场景中需要返回上级页面的时候使用：this.props.history.goBack();
    //         };


    render(){
        return (
            <div>
                {/* 通过标签跳转 */}
                 {<a href="#/detail">去detail</a>}
                 {/* 通过Linkt跳转 */}
                 {/* <Link to="/detail" className="detail">去detail</Link> */}
                 {/* 通过函数跳转,使用Context */}
                 {/* <button onClick={this.test}>通过函数跳转到detail</button> */}
                 {/* 使用withRouter */}
                 {/* <button onClick={()=>this.props.history.push("detail")}>通过函数跳转到detail</button> */}
                 {/* 使用hack */}
                 {/* <a href="/detail">去detail</a> */}
                 {/* <button onClick={()=>history.push("detail")}>通过函数跳转到detail</button> */}
                 {/* <input type="text" name="fname" /> */}
            </div>
        )
            
        
    }
}

// export default withRouter(Home);
export default Home;