type ServerResponse<T> =
    { successMessage: string, data: T; status: "Success"; statusCode: number } |
    { errorMessage: string; status: "Error"; statusCode: number };

type Projects = {
    src: StaticImageData;
    alt: string;
    preTitle: string;
    live: string;
    code?: string;
    videoLink?: string;
};

type Photo = {
    blurDataURL: string,
    img: {
        src: string,
        height: number,
        width: number
    }
}
