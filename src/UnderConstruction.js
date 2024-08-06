import React, { useState, useEffect } from 'react';
import { Construction, Wrench } from 'lucide-react';

const UnderConstruction = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(50);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 to-teal-50 p-4">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg max-w-md w-full transition-all duration-500 ease-in-out transform hover:scale-105">
                <div className="flex items-center justify-center mb-6 animate-fade-in">
                    <h1 className="text-3xl font-bold text-green-800">Sandbourne Care</h1>
                </div>
                <Construction className="w-20 h-20 text-teal-500 mx-auto mb-4 animate-spin-slow" />
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Under Construction</h2>
                <p className="text-lg text-gray-600 mb-6">We're nurturing a better care experience. Please check back soon!</p>
                <div className="w-full bg-green-100 rounded-full h-2.5 mb-6 overflow-hidden">
                    <div
                        className="bg-teal-500 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="flex items-center justify-center text-gray-500">
                    <Wrench className="w-5 h-5 mr-2 animate-wiggle" />
                    <span>Estimated completion: 2 weeks</span>
                </div>
            </div>
        </div>
    );
};

export default UnderConstruction;