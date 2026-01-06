class Media{
    constructor(info) {
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songData) {
        super(songData);
        this.arthis = songData.arthis;
    }
}

const mySong = new Song({
    arthis: ' Queen',
    name: 'Bohemain Rhapsody',
    publishDate: '1975'
});

console.log(mySong);