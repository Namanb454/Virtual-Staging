import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.REACT_APP_SUPABASE_URL, process.env.REACT_APP_SUPABASE_ANON_KEY);

const ImageDetailsPage = () => {
    const { imageId } = useParams();
    const [imageDetails, setImageDetails] = useState(null);
    const [variants, setVariants] = useState([]);

    useEffect(() => {
        const fetchImageDetails = async () => {
            try {
                const { data: image, error } = await supabase
                    .from('renders')
                    .select()
                    .eq('id', imageId)
                    .single();
                if (error) {
                    throw new Error(error.message);
                }
                setImageDetails(image);

                const { data: variantsData, error: variantsError } = await supabase
                    .from('variations')
                    .select()
                    .eq('render_id', image.id);
                if (variantsError) {
                    throw new Error(variantsError.message);
                }
                setVariants(variantsData);
            } catch (error) {
                console.error('Error fetching image details:', error);
            }
        };
        fetchImageDetails();
    }, [imageId]);

    return (
        <div title={"Tipriyo-Home "} className='font-[SanAntycs]'>
            <div className='bg-cover'>
                <div className='backdrop-blur-sm lg:pt-[7vh] pt-[3vh]'>
                    <Header />
                </div>
                <div className="container mx-auto px-4 py-8 flex justify-center items-center flex-col">
                    {imageDetails && (
                        <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                            <div className="bg-white shadow-md rounded-lg p-4">
                                <img src={imageDetails.image_url} alt={`Image ${imageId}`} className="w-full h-auto rounded-lg mb-4 mx-auto" />
                                {/* Display other image details */}
                            </div>
                        </div>
                    )}
                    {/* Button to add new variant */}
                    <div className="my-8">
                    <Link to={imageDetails ? `/generate-image?imageUrl=${encodeURIComponent(imageDetails.image_url)}` : '/'} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    Add New Variant
</Link>

                    </div>
                    <div className="flex flex-wrap justify-center">
                        {/* Display variants */}
                        {variants.map(variant => (
                            <div key={variant.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                                <div className="bg-white shadow-md rounded-lg p-4">
                                    <img src={variant.image_url} alt={`Variant ${variant.id}`} className="w-full h-auto rounded-lg mb-4 mx-auto" />
                                    {/* Display other variant details */}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
                {variants.length === 0 && (
                    <div className="text-center text-gray-600 my-8">
                        <p className="mb-2">No variants available.</p>
                        <p>Click above to add new variants.</p>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default ImageDetailsPage;
