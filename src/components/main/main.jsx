import React,{Component} from "react";
import {connect} from "react-redux";
import {changeBottom} from "./utils";
 class Main extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
       let i =0;
       setInterval(()=>{
       let sum =  Math.floor(window.innerWidth/100);
       i++;
            let obj = {
                bPLeft:Math.floor(Math.random()*3)*96,
                bPTop:Math.floor(Math.random()*3)*123,
                left:Math.floor(Math.random()*sum)*100,
                id:i,
                bottom:0,
                loss:false
            }
            obj.match=obj.bPLeft/96+""+obj.bPTop/123;
            this.props.ChangeQiqiu(undefined,obj)
        },this.props.speed);
        this.props.changeBottom(this.props.domList);
    }
    remove(item){
        this.props.ChangeQiqiu(true,item);
    }
    render(){
        const domList = this.props.domList;
        if(!domList) return;
        return <div className="main">
                {
                    domList.map((item)=>{
                        const style = {backgroundPosition:`-${item.bPLeft}px -${item.bPTop}px`, bottom:item.bottom,left:item.left};
                        return  !item.loss&&<div className="qq" 
                                                 onClick={()=>this.remove(item)} 
                                                 style={style}
                                                 key={item.id}></div>
                        })
                }
        </div>
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        ...state
    }
}
const  mapDispatchToProps = (dispatch, ownProps) => {
    return {
        ChangeQiqiu(remote,payload){
            remote&&dispatch({type:"REMOTE_QIQIU",payload});
            dispatch({type:"CHANGE_DOM",payload});
        },
        changeBottom(domList){
            dispatch(changeBottom(domList));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps,null,{pure:false})(Main);