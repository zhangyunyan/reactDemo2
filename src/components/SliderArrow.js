var React=require('react');
var $ = require('jquery');
export default class SliderArrow extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        var $bannerInner = $(".bannerInner");
        this.$bannerInner = $bannerInner;
        // console.log(this)
    }
    handleLeftClick(btnLeft){
        // console.log(1);
        // console.log(this.props)
        this.props.btnLeft();
    }
    handleRightClick(){
        // console.log(2);
        // console.log(this.props)
        this.props.btnRight();
    }
    render(){
        return (
            <div>
                <a href="javascript:;" className="arrow arrowLeft" onClick={this.handleLeftClick.bind(this)}></a>
                <a href="javascript:;" className="arrow arrowRight" onClick={this.handleRightClick.bind(this)}></a>
            </div>
        )
    }


}