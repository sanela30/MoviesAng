export class Movie {

    constructor(
        public Id?: number,
        public Name?: string,
        public Director?: string,
        public ImageUrl?: string,
        public Duration?: number,
        public ReleaseDate?: Date,
        public Genres?: string []
        ) { }

}
