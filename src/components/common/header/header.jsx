import React,{Component} from "react";
import {connect} from "react-redux";
 class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            key:false,
            speed:1
        }
    }
    callBack(e){
        console.log(e.target)
    }
    selectChange(){
     let key = !this.state.key;
     this.setState({
        key
     })
    }

    render(){
        return <div className="header">
                <div id="btn" onClick={this.props.changeSpeed}>点我加速,<p>当前为<span>{this.state.speed}</span>倍速率</p></div>
                <div id="score">得分：{this.props.sum}</div>
                <div id="err">损失：{this.props.loss}</div>
        </div>
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeSpeed(){
            console.log("!221")
            dispatch({type:"changeSpeed",payload:100})
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);