class Artist {
    constructor(artist, currency) {
        this.artist = artist;
        this.currency = currency;
        this.playList = [];
        this.price = 0;
        this.wealthEarn = 0;
    }

    intro() {
        console.log(`Hi, my name is ${this.artist} and I am a musician!`);
    }

    songPrice(price) {
        this.price = price;
        const priceInCents = price / 100;
        console.log(`${this.artist}'s price per song is ${priceInCents} ${this.currency};`);
    }

    addSong(songName) {
        this.playList.push({ songName, count: 0 });
        console.log(songName);
    }

    playlist() {
        console.log(`${this.artist} playlist:`);
        console.log('====================');
        let songCount = 0;
        for (let i = 0; i < this.playList.length; i++) {
            const song = this.playList[i];
            this.wealthEarn += song.count * this.price;
            console.log(`${++songCount}. ${song.songName} (${song.count})`);
        }
    }

    playSong(index) {
        ++this.playList[index].count;
        //console.log(this.playList[index]);
        console.log(`Playing song: ${this.playList[index].songName}`);
    }

    fortune() {
        console.log(`Total lifetime wealth of ${this.artist} is ${(this.wealthEarn / 100).toFixed(2)} ${this.currency} right now!`);
    }
}
module.exports = Artist;