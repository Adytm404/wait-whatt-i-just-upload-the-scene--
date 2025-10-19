
import React, { useRef } from 'react';

interface UploadScreenProps {
    onFileSelect: (file: File) => void;
    error: string | null;
    fileInputRef: React.RefObject<HTMLInputElement>;
}

const UploadScreen: React.FC<UploadScreenProps> = ({ onFileSelect, error, fileInputRef }) => {

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onFileSelect(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center grid-background">
             <div 
                className="w-full max-w-2xl p-8 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl cursor-pointer transition-all duration-300 hover:border-blue-500 hover:scale-105"
                onClick={handleClick}
            >
                <div className="flex flex-col items-center justify-center">
                    <i className="fa-solid fa-cloud-arrow-up text-5xl text-gray-400 mb-4"></i>
                    <h1 className="text-2xl font-bold text-gray-200">
                        Screenshoot or Upload Anime Scene
                    </h1>
                    <p className="mt-2 text-gray-400">
                        Paste (ctrl + v) or upload scene here
                    </p>
                </div>

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                />
            </div>
            {error && (
                <div className="mt-6 bg-red-500/20 border border-red-500 text-red-300 px-4 py-3 rounded-lg max-w-2xl text-center">
                    <p><strong>Error:</strong> {error}</p>
                </div>
            )}
            <footer className="absolute bottom-4 text-gray-600 text-sm">
                Created by Ogya Adyatma Putra | Powered by trace.moe
            </footer>
        </div>
    );
};

export default UploadScreen;
