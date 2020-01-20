import React from "react"
import "./style.css"

let future;
let now;
let diff;
let days;
let hours;
let mins;
let secs;
let d;
let h;
let m;
let s;

class CountDownTimer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            days:'',
            hours:'',
            minutes:'',
            seconds:''
        }
    }


    componentDidMount = () =>{
        this.timer = setInterval(()=> this.updateTimer(), 150);
        // this.updateTimer()
        console.log("--->", d, h)
    }

    componentWillUnmount = () =>{
        this.timer = null;
    }

    updateTimer =()=> {
        future  = Date.parse(this.props.sale_date);
        now     = new Date();
        diff    = future - now;
      
        days  = Math.floor( diff / (1000*60*60*24) );
        hours = Math.floor( diff / (1000*60*60) );
        mins  = Math.floor( diff / (1000*60) );
        secs  = Math.floor( diff / 1000 );
      
        d = days;
       
        h = hours - days  * 24;
        m = mins  - hours * 60;
        s = secs  - mins  * 60;
        this.setState({
            days: d,
            hours: h,
            minutes: m,
            seconds:s
        })
      }

    render(){
        return(
        <div >
            <div className="countDownTimer">
            <p>{this.state.days}</p>
            <p>{this.state.hours}</p>
            <p>{this.state.minutes}</p>
            <p>{this.state.seconds}</p>
            </div>

            <div className="countDownLabels">
            <p>Day</p>
            <p>Hour</p>
            <p>Min</p>
            <p>Sec</p>
            </div>
        </div>
        );
    }
}

export default CountDownTimer