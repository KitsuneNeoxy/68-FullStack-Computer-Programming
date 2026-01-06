class Song {
    constructor() {
        this.title;
        this.author;
    }
    play () {
        console.log("Song Playing!")
    }
}

const mySong = new Song("Bohemian Rhapsody", "Queen");
mySong.play();
