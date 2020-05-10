import React from 'react';
import ReactDOM from 'react-dom';
const h= React.createElement;
class PrivateGallery extends React.Component{
    constructor(props) {
        super(props);
        this.root = props.root;
        this.toExhibition = props.toExhibition;
        this.toDetails = props.toDetails;
        this.privateGallery = [];
        
        const view = new PrivateGalleryView();
        ReactDOM.render(view, document.body.querySelector("#privateGallery"));
        document.body.querySelector("#privateGallery").addEventListener("click", event=>{
            if(event.target.id === "backButton"){
                this.toDetails();}
            });

            
    }
    render(){
        return <PrivateGalleryView></PrivateGalleryView>
    }
}
function PrivateGalleryView() {
    return <div id="privateGalleryDiv"><a href="/#signIn">Plog in </a>first then come back</div>
}
function PrivateGalleryView1({artworkList}){
    if(artworkList)
    return h("div", { style: {margin: "10px"}},
        h("div", { id:"privateStyle1"},
        h("div",null,
            h("p", {id : "backButton"},"BACK"),   
            h("span", null, "Private gallery")),
                h("span", { id:"privateStyle2" }, "here are your treasures")),
            artworkList.map(artwork => h("span", { className: "displaySpan" },
                                            h("img", { src: artwork.image}),
                                            h("div", {id:"privateStyle3"}, artwork.title),
                                            h("div", null, artwork.artist))));
        // return h("div",null,  h("button", {id : "backButton" },"back") ,h("p", null,"Your Gallery"), artworkList.map(artwork=>h("div",{id:artwork.id}, h("img", {src:artwork.image, style:{height:'200px'}}),h("div",null, artwork.title), ("div",null, artwork.artist))));
    else
        return h("div",null, h("p", {id : "backButton" },"BACK"), h("p", null, "You have not saved any artworks yet"))
}
const PrivateGallery_funcs = {PrivateGallery, PrivateGalleryView, PrivateGalleryView1};

export default PrivateGallery_funcs;
