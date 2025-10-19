
import type { TmpFilesUploadResponse, TraceMoeResponse, TraceMoeSearchResult, AnilistResponse, AnilistMedia } from '../types';

export async function uploadImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('https://tmpfiles.org/api/v1/upload', {
        method: 'POST',
        body: formData,
    });

    if (!response.ok) {
        throw new Error(`Failed to upload image. Status: ${response.status}`);
    }

    const data: TmpFilesUploadResponse = await response.json();

    if (data.status !== 'success') {
        throw new Error('Image upload API returned an error.');
    }

    // Transform URL to the direct link format required by trace.moe
    return data.data.url.replace("http://", "https://").replace("tmpfiles.org/", "tmpfiles.org/dl/");
}

export async function searchAnimeScene(imageUrl: string): Promise<TraceMoeSearchResult[]> {
    const encodedUrl = encodeURIComponent(imageUrl);
    const response = await fetch(`https://api.trace.moe/search?url=${encodedUrl}`);
    
    if (!response.ok) {
        throw new Error(`Failed to search anime scene. Status: ${response.status}`);
    }

    const data: TraceMoeResponse = await response.json();

    if (data.error) {
        throw new Error(`trace.moe API error: ${data.error}`);
    }

    return data.result;
}

export async function getAnilistInfo(anilistId: number): Promise<AnilistMedia> {
    const query = `
        query ($id: Int) {
            Media (id: $id, type: ANIME) {
                title {
                    romaji
                    english
                    native
                }
                coverImage {
                    extraLarge
                }
                description
                genres
                studios(isMain: true) {
                    nodes {
                        name
                    }
                }
                type
                format
            }
        }
    `;

    const variables = {
        id: anilistId
    };

    const response = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: query,
            variables: variables
        })
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch from AniList. Status: ${response.status}`);
    }

    const data: AnilistResponse = await response.json();
    if (!data.data.Media) {
        throw new Error('Anime not found on AniList.');
    }
    return data.data.Media;
}
