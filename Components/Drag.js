import React from 'react';

export default class Drag extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            downLeft:0,
            downTop:0,
            left:0,
            top:0,
            downX:0,
            downY:0
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    render(){
        return(
            <div
                style={
                    {
                        width:'100px',
                        height:'100px',
                        background:'red',
                        position:'absolute',
                        left:this.state.left+'px',
                        top:this.state.top+'px'
                    }
                }
                onMouseDown = {this.handleMouseDown}
                ref = 'obj'
            ></div>
        )
    }

    handleMouseDown(ev){
       this.setState({
          downLeft:this.refs.obj.offsetLeft,
          downTop:this.refs.obj.offsetTop,
          downX:ev.clientX,
          downY:ev.clientY
       });
       document.addEventListener('mousemove',this.handleMouseMove,false);
       document.addEventListener('mouseup',this.handleMouseUp,false);
    }

    handleMouseMove(ev){
        let left = ev.clientX - this.state.downX + this.state.downLeft;
        let top = ev.clientY - this.state.downY + this.state.downTop;
        this.setState({
            left:left,
            top:top
        });
    }

    handleMouseUp(){
        document.removeEventListener('mousemove',this.handleMouseMove,false);
    }
};
