import axios from 'axios';

const useVirtualStagingApi = () => {
    // const apiKey = 'vsai-pk-34f9d2f3-e196-4a36-b4ad-9254253011e8'; // Replace with your actual API key

    const stageImage = async (imageUrl, stagingOptions) => {
        const url = 'https://us-central1-furniture-ai.cloudfunctions.net/apiCreateRender';

        try {
            const response = await axios.post(url, {
                image_url: imageUrl,
                staging_options: stagingOptions,
                // api_key: apiKey,
            });

            return response.data.staged_image_url;
        } catch (error) {
            console.error('Error staging image:', error);
            throw new Error('Failed to stage image');
        }
    };

    return { stageImage };
};

export default useVirtualStagingApi;
