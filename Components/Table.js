import React from 'react';

export default class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index : 0
        }
    }

    render(){
        return(
            <div>
                <div>
                    <button className={this.handleCls(0,'btn')} onClick={()=>this.handleToggle(0)}>1</button>
                    <button className={this.handleCls(1,'btn')} onClick={()=>this.handleToggle(1)}>2</button>
                    <button className={this.handleCls(2,'btn')} onClick={()=>this.handleToggle(2)}>3</button>
                </div>
                <ul>
                    <li className={this.handleCls(0)}>1111</li>
                    <li className={this.handleCls(1)}>2222</li>
                    <li className={this.handleCls(2)}>3333</li>
                </ul>
            </div>
        )
    }

    handleToggle(ind){
        this.setState({
            index:ind
        });
    }

    /*componentDidUpdate(){
       let index = this.state.index;
        alert(index)
    }*/
    handleCls(ind,type){
        let cls;
        if(type == 'btn'){
            cls = 'active';
        }else{
            cls = 'show';
        }
        if(ind == this.state.index){
            return cls;
        }else{
            return '';
        }
    }
}

