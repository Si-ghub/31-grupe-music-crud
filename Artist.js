class Artist {
    constructor(artist, currency) {
        this.artist = artist;
        this.currency = currency;
        this.playlist = [];
        this.price = [];
    }

    intro() {
        console.log(`Hi, my name is ${this.artist} and I am a musician!`);
    }

    songPrice(price) {
        this.price.push(price);
        console.log(`${this.artist}'s price per song is ${price / 100} EUR;`);
    }

    addSong(songName) {
        this.playlist.push(songName);
        console.log(songName);
    }

    playlist() {
        console.log(`${this.artist} playlist:`);
        console.log('====================');
    }
}


module.exports = Artist;