import React from 'react';
import ReactDOM from 'react-dom';
import Utils_funcs from '../util/utils';
const h= React.createElement;

class AboutUs extends React.Component{
    constructor(props) {
        super(props);
        this.root = props.root;
        this.toExhibition = props.toExhibition;
        this.toDetails = props.toDetails;
        this.privateGallery = [];
        
        const view = new AboutUsView();
        ReactDOM.render(view, document.body.querySelector("#aboutUs"));
        document.body.querySelector("#aboutUs").addEventListener("click", event=>{
            if(event.target.id === "aboutUs_backbutton"){
                this.toDetails();}
            });


            
    }
    render(){
        return <AboutUsView></AboutUsView>
    }
}

function AboutUsView() {

   return  h("div", { style: {margin: "10px"}},
                h("div", { id:"privateStyle1"},
                    h("div",null,
                        h("p", {id : "aboutUs_backbutton"},"BACK"),   
                        h("span", null, "ABOUT US")
                    ),
                        h("span", { id:"aboutUsStyle" },"NEVERLAND is an online interactive gallery for exploring the collections of the Art Institute of Chicago. During the development of this website, we tried our best with humidity and respect to design the approach to deliver the values we would like to bring to the friends of NEVERLAND. Based on the core idea of NEVERLAND, which is to share the knowledge of each individuals and value their personal feelings and thoughts, we tried our best to design the platform in an intuitive and non-intrusive way. Here you can see NEVERLAND as a reflective, inspirational, immersive and recreational place to have fun and get relaxed. The essences of NEVERLAND is exploration. You may find some barriers when you use NEVERLAND for the first time. However, we hope you can spend some more time to explore and appreciate the art pieces which are randomly chosen and enjoy your experience on NEVERLAND.")
                    )
            )
}

const AboutUs_funcs={AboutUs, AboutUsView}
export default AboutUs_funcs
