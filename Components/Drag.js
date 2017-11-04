import React from 'react';

let style = {
    width:'100px',
    height:'100px',
    background:'red',
    position:'absolute',
    left:0,
    top:0
};

export default class Drag extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            downLeft:0,
            downTop:0,
            left:0,
            top:0,
            downX:0,
            downY:0,
            flag:false
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    render(){
        return(
            <div
                style={style}
                onMouseDown = {this.handleMouseDown}
                onMouseMove = {this.handleMouseMove}
                onMouseUp = {this.handleMouseUp}
                ref = 'obj'
            ></div>
        )
    }

    handleMouseDown(ev){
       this.setState({
          downLeft:this.refs.obj.offsetLeft,
          downTop:this.refs.obj.offsetTop,
          downX:ev.clientX,
          downY:ev.clientY,
          flag:true
       });
       document.addEventListener('mousemove',this.handleMouseMove,false);
       document.addEventListener('mouseup',this.handleMouseUp,false);
    }

    handleMouseMove(ev){
        if(!this.state.flag)return;
        let left = ev.clientX - this.state.downX + this.state.downLeft;
        let top = ev.clientY - this.state.downY + this.state.downTop;
        this.setState({
            left:left,
            top:top
        });
    }

    handleMouseUp(){
        this.setState({
            flag:false
        });
        document.removeEventListener('mousemove',this.handleMouseMove,false);
    }

    componentDidUpdate(){
        console.log(this.state);
        this.refs.obj.style.left = this.state.left+'px';
        this.refs.obj.style.top = this.state.top+'px';
    }
};
