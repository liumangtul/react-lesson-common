import React from 'react';

export default class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            index : 0
        }
    }
    render(){
        let i = 0;
        let btns = [];
        let li = [];
        while(i<3){
            btns.push(
                <button key={i} className={this.handleCls(i,'btn')} onClick={this.handleToggle.bind(this,i)}>{i}</button>
            );
            li.push(
                <li key={i} className={this.handleCls(i)}>{i}</li>
            );
            i++;
        }
        return(
            <div>
                <div>
                    {btns}
                </div>
                <ul>
                    {li}
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
        let cls = type == 'btn'?'active':'show';
        let str = ind == this.state.index?cls:'';
        return str;
    }
}

