import React from 'react';
import ReactDOM from 'react-dom';
class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.root = props.root;
        this.toExhibition = props.toExhibition;
        let text = document.getElementsByClassName("text");
        let sec1pic1 = document.getElementsByClassName("sec1pic1");
        let sec2pic1 = document.getElementsByClassName("sec2pic1");
        let sec3pic1 = document.getElementsByClassName("sec3pic1");
        let sec4pic1 = document.getElementsByClassName("sec4pic1");


        window.addEventListener('scroll', function() {
        var value = window.scrollY;

        /*change the style of welcome to a place where you can*/
        // text[0].style.top = value * 0.4 + 'px';
        // text[0].style.width = (100 - value / 12) + '%';
        sec1pic1[0].style.width = (100 + value / 100) + '%';

        /*change the style of share past stories, present feelings, future visions*/
        // text[1].style.top = -value * 0.5 + 'px';
        sec2pic1[0].style.width = (100 + value / 50) + '%';


        // /*change the style of generate reflective inspirations, esoteric insights*/
        // text[2].style.top = value * 0.5 + 'px';
        sec3pic1[0].style.width = (100 + value / 100) + '%';

        // /*change the style of Here comes the first personal private sharing gallery online*/
        // text[3].style.top = value * 0.5 + 'px';
        sec4pic1[0].style.width = (100 + value / 250) + '%';

        })

    }
    render(){
        return <WelcomeView toExhibition={this.toExhibition}></WelcomeView>
    }
}

function WelcomeView({toExhibition}) {
    // console.log(toExhibition);
    let doneCallback = toExhibition[0];
    let doneMessage = toExhibition[1];
    // console.log(doneCallback);
    // [this.doneCallback, this.doneMessage] = toExhibition;
    return (
       <div>
            <section>
                <img className= "sec1pic1" src="water lilies.jpg"/>
                <h2 className="textblack">Welcome to a place where you can</h2> 
                {/* <img src="downDirection.png" style={{height:"20px" , width:"20px" , background: "transparent"}}></img> */}
            </section>
            <section>
                <img className= "sec2pic1" src="flowers poppies and daisies.jpg"/>
                <h2 className="textwhite">share past stories, present feelings, and future visions</h2> 
            </section>
            <section>
                <img className= "sec3pic1" src="springtime and love.jpg"/>
                <h2 className="textblack">generate reflective inspirations, spiritual insights</h2> 
            </section>
            <section>
                <img className= "sec4pic1" src="about1963.jpg"/>
                <h2 className="textwhite">Here comes the first personal private sharing gallery</h2> 
            </section>
            <section>
                {/* <img src="cloud1.png"></img>  */}
            <h2 className="neverland" onClick={doneCallback} style= {{font: 6.18+'em'}}>{ doneMessage}</h2>
                </section>
       </div>)
}



export default Welcome;