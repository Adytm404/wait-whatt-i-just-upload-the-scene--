
import React from 'react';
import type { TraceMoeSearchResult } from '../types';

interface ResultItemProps {
    result: TraceMoeSearchResult;
    isActive: boolean;
    onClick: () => void;
}

const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

const ResultItem: React.FC<ResultItemProps> = ({ result, isActive, onClick }) => {
    const similarityPercentage = (result.similarity * 100).toFixed(2);
    const borderColor = isActive ? 'border-blue-500' : 'border-gray-700';
    const bgColor = isActive ? 'bg-blue-900/30' : 'bg-gray-700/50 hover:bg-gray-700';

    return (
        <div
            onClick={onClick}
            className={`flex items-center p-2.5 rounded-lg cursor-pointer transition-all duration-200 border ${borderColor} ${bgColor}`}
        >
            <img src={result.image} alt="Anime scene thumbnail" className="w-28 h-16 object-cover rounded-md mr-4 flex-shrink-0" />
            <div className="flex-grow overflow-hidden">
                <p className="text-sm font-semibold text-white truncate" title={result.filename}>
                    {result.filename}
                </p>
                <div className="text-xs text-gray-400 mt-1 space-x-3">
                    {result.episode && <span>Ep: {result.episode}</span>}
                    <span>@ {formatTime(result.from)}</span>
                </div>
                <div className="text-xs mt-1">
                    <span className={`font-bold ${result.similarity > 0.9 ? 'text-green-400' : 'text-yellow-400'}`}>
                        {similarityPercentage}% Similarity
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ResultItem;
