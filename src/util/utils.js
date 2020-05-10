import React from 'react';
import ReactDOM from 'react-dom';
import Details_funcs from '../details/detailsReact';
import PrivateGallery_funcs from '../privateGallery/privateGalleryReact';
import ENDPOINT from '../apiConfig';

let currentItem;
let privateGallery=[];
let userEmail = "";
let fetchFavouriteList = [];
function setCurrentItem(item){
    currentItem = item;
    
    
}
function setUserEmail(email){
    userEmail = email;
}
function getUserEmail(){
    return userEmail;
}
function getFetchFavouriteList(){
    return fetchFavouriteList;
}
function getCurrentItem(){
    return currentItem;
}
function updateDetailPage(){
    let artwork = getCurrentItem();
    let view = new Details_funcs.DetailsView1(artwork);
    ReactDOM.render(view, document.body.querySelector("#details"));
}
function getFavouriteListFromDateBase(){
    //通过API 查找ID得到作品清单
    let tempList = [];
    function handleHTTPError(response) {
        if (response.ok)
            return response;
        throw Error(response.statusText);
    }
    for(let l = 0; l<fetchFavouriteList.length;l++){
        fetch(ENDPOINT +"artworks/"+fetchFavouriteList[l], {
        "method": "GET"
    })
    .then(handleHTTPError)
    .then(response => response.json()) // from headers to response data
    .then(data => data.data) // leave out the unimportant parts of the response data
    .then(data => {
                       let myArtWork = new Object();
                        myArtWork.id = data.id;
                        myArtWork.title = data.title;
                        myArtWork.artist = "";
                        for (let m = 0; m < data.artist_titles.length; m++) {
                            myArtWork.artist += data.artist_titles[m] + " ";
                        }
                        myArtWork.artistDisplay = data.artist_display;
                        myArtWork.date_start = data.date_start;
                        myArtWork.date_end = data.date_end;
                        myArtWork.description = data.description;
                        if (data.color) {
                            myArtWork.color_h = data.color.h;
                            myArtWork.color_l = data.color.l;
                            myArtWork.color_s = data.color.s;
                        }
                        if(data.thumbnail){
                            myArtWork.height = data.thumbnail.height;
                            myArtWork.width = data.thumbnail.width;
                            myArtWork.image = data.thumbnail.url + "/full/" + data.thumbnail.width + ",/0/default.jpg";
                        }
                        tempList.push(myArtWork);
                    })
    .catch(console.error);
    // .finally(ReactDOM.render(new PrivateGallery_funcs.PrivateGalleryView1(tempList), document.body.querySelector("#privateGallery")));

    }
    
    setTimeout(()=>{
        let artworkList = [];
        for(let p =0; p<tempList.length; p++){
            artworkList.push(tempList[p]);
       }
        let view = new PrivateGallery_funcs.PrivateGalleryView1(artworkList ={artworkList});
        ReactDOM.render(view, document.body.querySelector("#privateGallery"))}, 2000)
}
function setPrivateGallery(gallery){
    if(gallery)
        privateGallery = gallery;
}
function getPrivateGallery(){
    return privateGallery;
}
function updatePrivateGallery(){
       let isExist = false;
       for(let x of getFetchFavouriteList()){
           if(x.id == getCurrentItem().id){
               isExist=true;
            }
       }
       if(!isExist){
        addFavorite();
        getFavouriteList();
        }
}

function addFavorite(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", getUserEmail());
    urlencoded.append("objectID", getCurrentItem().id);

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
    };

    fetch("https://afternoon-gorge-52652.herokuapp.com/addFavorite", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}
function getFavouriteList(){
    var urlencoded = new URLSearchParams();

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
fetch("https://afternoon-gorge-52652.herokuapp.com/getFavorite?email="+getUserEmail(), requestOptions)
  .then(response => response.json())
  .then(result => {fetchFavouriteList=result.likes; 
    getFavouriteListFromDateBase();




})
  .catch(error => console.log('error', error));
  
}

function getArtwork(){

    function handleHTTPError(response) {
        if (response.ok)
            return response;
        throw Error(response.statusText);
    }

        return fetch(ENDPOINT +"artworks?limit=20", {
        "method": "GET"
    })
    .then(handleHTTPError)
    .then(response => response.json()) // from headers to response data
    .then(data => data.data) // leave out the unimportant parts of the response data
    .catch(console.error);
}

function getArtworkPicture(){

        //通过id找到本地artworklist中的artwork -> thumbnail, width, height
        // => image_url = thumbnail.url +/full/+ width, + /0/default.jpg
        // https://www.artic.edu/iiif/2/7e21e656-ddae-de1c-f46b-a869224043bd/full/2101,/0/default.jpg 

        return "https://www.artic.edu/iiif/2/7e21e656-ddae-de1c-f46b-a869224043bd"+"/full/"+"2101,"+"/0/default.jpg";

    
}


const Utils_funcs = {setCurrentItem, getCurrentItem, updateDetailPage, setPrivateGallery, getPrivateGallery, updatePrivateGallery, getArtwork, 
    getArtworkPicture, getFavouriteList,getUserEmail,setUserEmail,getFavouriteListFromDateBase};

export default Utils_funcs;
