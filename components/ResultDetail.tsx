import React from 'react';
import type { TraceMoeSearchResult, AnilistMedia } from '../types';
import Loader from './Loader';

interface ResultDetailProps {
    result: TraceMoeSearchResult | null;
    anilistInfo: AnilistMedia | null;
    isLoading: boolean;
}

const ResultDetail: React.FC<ResultDetailProps> = ({ result, anilistInfo, isLoading }) => {
    if (!result) {
        return (
            <div className="flex items-center justify-center h-full bg-gray-800 rounded-lg">
                <p className="text-gray-400">Select a result to see details</p>
            </div>
        );
    }

    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden h-full flex flex-col">
            <div className="flex-grow overflow-y-auto">
                <div className="aspect-video bg-black">
                    <video
                        key={result.video}
                        src={result.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        className="w-full h-full object-contain"
                    />
                </div>

                <div className="p-4 md:p-6">
                    {isLoading && (
                        <div className="flex items-center justify-center py-10">
                            <Loader />
                            <p className="ml-4">Loading anime details...</p>
                        </div>
                    )}
                    {anilistInfo && (
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="md:w-1/3 flex-shrink-0">
                                <img
                                    src={anilistInfo.coverImage.extraLarge}
                                    alt={`${anilistInfo.title.english || anilistInfo.title.romaji} cover`}
                                    className="rounded-lg shadow-lg w-full"
                                />
                            </div>
                            <div className="md:w-2/3">
                                <h2 className="text-2xl font-bold text-white">{anilistInfo.title.english || anilistInfo.title.romaji}</h2>
                                <p className="text-sm text-gray-400 mt-1">{anilistInfo.title.native}</p>
                                
                                <div className="flex flex-wrap gap-2 my-4">
                                    {anilistInfo.genres.map(genre => (
                                        <span key={genre} className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">
                                            {genre}
                                        </span>
                                    ))}
                                </div>

                                <p
                                    className="text-sm text-gray-300 max-h-32 overflow-y-auto pr-2"
                                    dangerouslySetInnerHTML={{ __html: anilistInfo.description }}
                                />

                                <div className="mt-4 border-t border-gray-700 pt-3 text-sm text-gray-400">
                                    <p><strong>Studio:</strong> {anilistInfo.studios.nodes.map(s => s.name).join(', ') || 'N/A'}</p>
                                    <p><strong>Format:</strong> {anilistInfo.format || 'N/A'}</p>
                                </div>
                            </div>
                        </div>
                    )}
                    {!anilistInfo && !isLoading && (
                        <div className="text-center py-10 text-gray-500">
                            Could not load additional anime details.
                        </div>
                    )}
                </div>
            </div>
             <footer className="flex-shrink-0 text-center py-3 text-gray-600 text-sm border-t border-gray-700">
                Created by Ogya Adyatma Putra | Powered by trace.moe
            </footer>
        </div>
    );
};

export default ResultDetail;