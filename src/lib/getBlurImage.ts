import path from "node:path";
import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder";

export const getBlurImage = async (src: string) => {
    const buffer = await fs.readFile(path.join("./public", src));

    const {
        metadata: { height, width },
        base64,
    } = await getPlaiceholder(buffer, { size: 10 });

    return {
        base64,
        img: { src, height, width },
    };
}

export const getBlurImages = async (srcs: string[]) => {
    const bufferPromises = srcs.map(src => getBlurImage(src));
    const results = await Promise.all(bufferPromises);

    const photosWithBlur: Photo[] = results.map(({ base64, img }) => ({
        img,
        blurDataURL: base64,
    }));

    return photosWithBlur;

}