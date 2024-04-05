import React, { useState } from 'react';
import useVirtualStagingApi from '.././VirtualStaging';

const VirtualStaging = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [stagedImageUrl, setStagedImageUrl] = useState(null);
    const [isStaging, setIsStaging] = useState(false);
    const [stagingError, setStagingError] = useState(null);

    const { stageImage } = useVirtualStagingApi();

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (e) => setImageUrl(e.target.result);
        reader.readAsDataURL(file);
    };

    const handleStageImage = async () => {
        setIsStaging(true);
        setStagingError(null);

        try {
            // Call the API to stage the image
            const stagedImageUrl = await stageImage(imageUrl, { /* Specify staging options here */ });
            setStagedImageUrl(stagedImageUrl);
        } catch (error) {
            setStagingError(error.message);
        } finally {
            setIsStaging(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {imageUrl && !stagedImageUrl && (
                <img src={imageUrl} alt="Uploaded image" className="w-full max-h-96 object-cover mb-4" />
            )}
            {stagedImageUrl && (
                <img src={stagedImageUrl} alt="Staged image" className="w-full max-h-96 object-cover mb-4" />
            )}
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="mb-4 px-4 py-2 rounded-md text-gray-800 shadow-md"
            />
            <button
                onClick={handleStageImage}
                disabled={!imageUrl || isStaging}
                className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                {isStaging ? 'Staging...' : 'Stage Image'}
            </button>
            {stagingError && (
                <p className="text-red-500 mt-2">{stagingError}</p>
            )}
        </div>
    );
};

export default VirtualStaging;
