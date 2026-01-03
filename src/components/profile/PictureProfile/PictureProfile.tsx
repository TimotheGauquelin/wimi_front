import React from 'react';

interface PictureProfileProps {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    borderWidth?: number;
    borderColor?: string;
    id?: string;
    className?: string;
}

const PictureProfile: React.FC<PictureProfileProps> = ({
    src,
    alt,
    width = 80,
    height = 80,
    borderWidth = 4,
    borderColor = '#2F65DB',
    id,
    className = ''
}) => {

    const widthValue = typeof width === 'number' ? `${width}px` : width;
    const heightValue = typeof height === 'number' ? `${height}px` : height;
    const borderWidthValue = `${borderWidth}px`;

    return (
        <div 
            className={`overflow-hidden ${className}`}
            style={{ width: widthValue, height: heightValue }}
        >
            <img
                src={src}
                alt={alt}
                id={id}
                className="w-full h-full rounded-full object-cover"
                style={{
                    border: `${borderWidthValue} solid ${borderColor}`
                }}
            />
        </div>
    );
};

export default PictureProfile;

