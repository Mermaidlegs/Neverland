import React from 'react';
import ReactDOM from 'react-dom';
import Details from '../details/detailsReact';
import Utils_funcs from '../util/utils';
class DailyExhibition extends React.Component {
    constructor(props) {
        super(props);
        this.root = props.root;
        this.toDetails = props.toDetails;
        this.toExhibition = props.toExhibition;

        this.galleryList = [];
        this.displayingGallery = [];
        this.currentIndex = 0;
        ReactDOM.render(<DailyExhibitionView/>, document.body.querySelector("#dailyExhibition"));
        const update = () => { this.renderArtwork(document.body.querySelector("#resultDiv")) };
        update();

        this.keyUP = (event) => {
            if (event.keyCode === 38) {
                this.toExhibition[0]();
            }
        };



        this.keyDetection = (event) => {
            if (event.keyCode === 37) {
                this.displayArtwork(this.currentIndex - 1, this.root);
            } else if (event.keyCode === 39) {
                this.displayArtwork(this.currentIndex + 1, this.root);
            } else if (event.keyCode === 40) {
                this.toDetails();
                Utils_funcs.updateDetailPage();
                window.addEventListener("keydown", this.keyUP, false);
                if(Utils_funcs.getCurrentItem())
                    document.getElementById("description").innerHTML = Utils_funcs.getCurrentItem().description;
            }

        }
        this.keyDetection = this.keyDetection.bind(this);
        window.addEventListener("keydown", this.keyDetection, false);
        document.body.querySelector("#dailyExhibition").addEventListener("click", event=>{
            this.toDetails();
            Utils_funcs.updateDetailPage();}, false);

    }
    render(){
        return <DailyExhibitionView/>
    }
    renderArtwork(root) {
            const spinner = this.createSpinner();
            ReactDOM.render(spinner,document.body.querySelector("#dailyExhibition"));
            this.displayingGallery = [];
            Utils_funcs.getArtwork() /* TODO: read the params as the values of this.textControl and this.typeControl, in the correct order */
                .then(artwork => {
                    for (let i = 0; i < artwork.length; i++) {

                        let myArtWork = new Object();
                        myArtWork.id = artwork[i].id;
                        myArtWork.title = artwork[i].title;
                        myArtWork.artist = "";
                        for (let m = 0; m < artwork[i].artist_titles.length; m++) {
                            myArtWork.artist += artwork[i].artist_titles[m] + " ";
                        }
                        myArtWork.artistDisplay = artwork[i].artist_display;
                        myArtWork.date_start = artwork[i].date_start;
                        myArtWork.date_end = artwork[i].date_end;
                        myArtWork.description = artwork[i].description;
                        if (artwork[i].color) {
                            myArtWork.color_h = artwork[i].color.h;
                            myArtWork.color_l = artwork[i].color.l;
                            myArtWork.color_s = artwork[i].color.s;
                        }
                        if(artwork[i].thumbnail){
                            myArtWork.height = artwork[i].thumbnail.height;
                            myArtWork.width = artwork[i].thumbnail.width;
                            myArtWork.image = artwork[i].thumbnail.url + "/full/" + artwork[i].thumbnail.width + ",/0/default.jpg";
                        }
                        this.galleryList.push(myArtWork);
                    };
                    let num = 0;
                    for (let j = 0; j < this.galleryList.length; j++) {
                        if (num < 3) {
                            //&& this.galleryList[j].description
                            if (this.galleryList[j].width ) {
                                
                                this.displayingGallery.push(this.galleryList[j]);
                                num++;
                            }
                        } else {
                            break;
                        }
                    }
                    Utils_funcs.setCurrentItem(this.displayingGallery[0]);
                    Utils_funcs.updateDetailPage();
                    this.displayArtwork(0, root);
                })
                .catch(err=> ReactDOM.render(<div>{err.toString()}</div>,document.body.querySelector("#dailyExhibition")))
                // .finally(() => spinner.remove())
        }
    createSpinner() {
        return <div>
                    <img className= "loadingPicture" style={{width: "100%", height: "100%"}} src= "loading.png"></img>
                </div>
    }

    displayArtwork(n = 0, root) {

        if (n > this.displayingGallery.length - 1)
            n = 0;
        if (n < 0)
            n = this.displayingGallery.length - 1;

        this.currentIndex = n;
        
        Utils_funcs.setCurrentItem(this.displayingGallery[n]);
            ReactDOM.render((<DailyExhibitionView1 artwork = {this.displayingGallery[n]}></DailyExhibitionView1>), document.body.querySelector("#dailyExhibition"));
    }


}
function DailyExhibitionView1({artwork}) {
    if (artwork.height > artwork.width) {
        return <div className = "artwork_display">  <img src= {artwork.image} style= {{height:'100vh'}}></img></div> 
    } else {
        if (artwork.height > window.screen.height*1.0/window.screen.width* artwork.width) {
            return <div className = "artwork_display"> <img src= {artwork.image} style={{height:"100vh"}}></img></div>
         } else {
            return <div className = "artwork_display"> <img src={artwork.image} style= {{width:"100vw"}}></img></div>
        }
    }
}

function DailyExhibitionView() {
    return <div id="resultDiv"></div>
}
const DailyExhibition_funcs={DailyExhibition, DailyExhibitionView1, DailyExhibitionView}
export default DailyExhibition_funcs;