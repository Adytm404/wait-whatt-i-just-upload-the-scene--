
export interface TmpFilesUploadResponse {
    status: string;
    data: {
        url: string;
    };
}

export interface TraceMoeSearchResult {
    anilist: number;
    filename: string;
    episode: number | null;
    from: number;
    to: number;
    similarity: number;
    video: string;
    image: string;
}

export interface TraceMoeResponse {
    frameCount: number;
    error: string;
    result: TraceMoeSearchResult[];
}

export interface AnilistTitle {
    romaji: string;
    english: string | null;
    native: string;
}

export interface AnilistCoverImage {
    extraLarge: string;
}

export interface AnilistStudioNode {
    name: string;
}

export interface AnilistStudios {
    nodes: AnilistStudioNode[];
}

export interface AnilistMedia {
    title: AnilistTitle;
    coverImage: AnilistCoverImage;
    description: string;
    genres: string[];
    studios: AnilistStudios;
    type: string;
    format: string;
}

export interface AnilistResponse {
    data: {
        Media: AnilistMedia;
    };
}
