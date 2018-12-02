class Library {
    constructor(name, creator) {
        this.name = name;
        this.creator = creator;
        this.playlists = [];
    }

    newPlaylist(playlist) {
        this.playlists.push(playlist);
    }
}

class Playlist {
    constructor(name) {
        this.name = name;
        this.tracks = [];
    }

    newTrack(track) {
        this.tracks.push(track);
    }

    overallRating() {
        let totalRating = 0;
        this.tracks.forEach((track) => {
            totalRating += track.rating;
        });
        return totalRating / this.tracks.length;
    }

    totalDuration() {
        let totalDuration = 0;
        this.tracks.forEach((track) => {
            totalDuration += track.length;
        });
        return totalDuration;
    }
}

class Track {
    constructor(title, rating, length) {
        this.title = title;
        this.rating = rating;
        this.length = length;
    }
}