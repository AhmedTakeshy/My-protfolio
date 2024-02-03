type Project = {
    src: string;
    alt: string;
    preTitle: string;
    live: string;
    code?: string;
};

type Photo = {
    blurDataURL: string,
    img: {
        src: string,
        height: number,
        width: number
    }
}