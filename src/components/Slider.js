var React = require('react');
import SliderArrow from "./SliderArrow";
import SliderDots from './SliderDots';
var imgUrl = require('../images/1.jpg');
var $ = require('jquery');
export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            nnn:null,
            timer:null
        }
    }

    componentDidMount() {
        var $bannerInner = $(".bannerInner");
        this.$bannerInner = $bannerInner;
        this.autoPlay();
    }

    go(nn) {
        nn = parseFloat(nn);
        if (nn <= -2400) {
            nn = 0;
        }
        nn = nn - 800;
        this.$bannerInner.css({"left": nn});
    }

    btnLeft(nn) {
        this.state.nnn = parseFloat(this.state.nnn);
        clearInterval(this.state.timer);
        nn=this.state.nnn;
        if (nn >= 0) {
            nn = -2400;
        }
        nn = nn + 800;
        this.$bannerInner.css({"left": nn});
        this.state.nnn=this.$bannerInner.css("left");
    }
    btnRight(nn) {
        this.state.nnn = parseFloat(this.state.nnn);
        clearInterval(this.state.timer);
        nn=this.state.nnn;
        if(nn<=-2400){
            nn=0;
        }
        nn=nn-800;
        this.$bannerInner.css({"left": nn});
        this.state.nnn=this.$bannerInner.css("left");
    }
    autoPlay() {
        this.state.nnn=this.$bannerInner.css("left");
        clearInterval(this.state.timer);
        this.state.timer = setInterval(()=> {
            this.nn = this.$bannerInner.css("left");
            this.go(this.nn);
            this.state.nnn = this.nn;
        }, this.props.interval)
    }

    render() {
        var arrow = this.props.arrow ?
            <SliderArrow btnLeft={this.btnLeft.bind(this)} btnRight={this.btnRight.bind(this)}/> : null;
        return (
            <div className="banner">
                <div className="bannerInner">
                    {
                        this.props.items.map(function (item, index) {
                            return <div key={index}><img src={item.src} alt={item.alt}/></div>
                        })
                    }
                    <div><img src={imgUrl} alt='img1'/></div>
                </div>

                {arrow}
            </div>
        )
    }
}