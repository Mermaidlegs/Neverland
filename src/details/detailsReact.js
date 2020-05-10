import React from 'react';
import ReactDOM from 'react-dom';
import Utils_funcs from '../util/utils';

class Details extends React.Component{
    constructor(props) {
        super(props)
        this.root = props.root;
        this.toExhibition = props.toExhibition;
        this.toPrivateGallery = props.toPrivateGallery;
        this.toSignIn = props.toSignIn;
        this.toAboutUs = props.toAboutUs;
        let artwork = Utils_funcs.getCurrentItem();
        let view = new DetailsView();
        ReactDOM.render(view, document.body.querySelector("#details"));
        document.body.querySelector("#details").addEventListener("click",event=> {
            if(event.target.tagName == "IMG")
            {
                if(Utils_funcs.getUserEmail()){
                    this.toPrivateGallery();
                    Utils_funcs.updatePrivateGallery();
                }else{
                    this.toSignIn();
                }
            }else if(event.target.id=="aboutUsButton"){
                this.toAboutUs();
            }
            else{
                this.toExhibition[0]();
            }
        });
    }
    render(){
        return <DetailsView/>
    }
}

function DetailsView() {
    return <p>pick an artwork first then come back</p>
}

function DetailsView1(artwork) {
            return <div style = {{height: "100%"}}>
                <div id="detailsView1_div1" >
                    <div style= {{flex:"0.5"}}>
                        <div id="detailsView1_div2">
                        <div style= {{flex:"0.5", height:"50vh"}}>
                                <img id="detailsView1_div2-1" src= {artwork.image}></img>
                            </div>
                            <div id="detailsView1_div3">
                                <div id="detailsView1_div4">{artwork.artist}</div>
                                <div id="detailsView1_div5"> {artwork.artistDisplay}</div>
                            </div>
                        </div>
                    </div>
                    <div id="detailsView1_div6">
                        <div>
                            <div id="detailsView1_div7">{artwork.title}</div>
                            <div id="detailsView1_div8">
                                <div id="detailsView1_div8-1">Date from { artwork.date_start} to {artwork.date_end}</div>
                                <div id= 'description'> {artwork.description}</div><div id="aboutUsButton">ABOUT US</div>
                            </div>
                        </div>
                    </div>
                    
                </div> 
                
                </div>
    
}

const Details_funcs={Details, DetailsView, DetailsView1}
export default Details_funcs
