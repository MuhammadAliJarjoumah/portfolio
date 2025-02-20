export interface SlideShowModel {
    symbol: string;
    name: string;
    title: string;
    slides: Slides[];
}

export interface Slides {
    description: string;
    previewImage: string;
    isClicked: boolean
}