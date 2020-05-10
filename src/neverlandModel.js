class NeverlandModel {
    constructor(){
        this.artworkList=[];
    }

    setArtworkList(x){
        this.artworkList = x;
    }

    getArtworkList(){
        var todayArtworkList = this.artworkList;
        return todayArtworkList;
    }

    addToArtworkList(artwork){
        this.artworkList.push(artwork);
    }

    
}