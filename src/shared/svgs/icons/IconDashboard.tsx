import { IconProps } from '@shared/svgs/types';

export const IconDashboard = ({ fill, sizeY }: IconProps) => (
    <svg
        width="1em"
        height={sizeY ? sizeY : '1em'}
        viewBox="0 0 24 24"
        fill="none"
    >
        <path
            d="M5.16663 4.5H10.1666C10.5339 4.5 10.8334 4.79949 10.8334 5.16663V8.16662C10.8334 8.53391 10.5339 8.83337 10.1666 8.83337H5.16663C4.79949 8.83337 4.5 8.53395 4.5 8.16662V5.16663C4.5 4.79946 4.79946 4.5 5.16663 4.5Z"
            stroke={(fill && fill[0]) || '#fff'}
        />
        <path
            d="M5.16663 11.1666H10.1666C10.5339 11.1666 10.8334 11.4661 10.8334 11.8334V18.8334C10.8334 19.2005 10.5339 19.5 10.1666 19.5H5.16663C4.79946 19.5 4.5 19.2005 4.5 18.8334V11.8334C4.5 11.466 4.79949 11.1666 5.16663 11.1666Z"
            stroke={(fill && fill[0]) || '#fff'}
        />
        <path
            d="M13.8334 15.1666H18.8334C19.2005 15.1666 19.5 15.466 19.5 15.8334V18.8334C19.5 19.2005 19.2005 19.5 18.8334 19.5H13.8334C13.466 19.5 13.1666 19.2005 13.1666 18.8334V15.8334C13.1666 15.4661 13.4661 15.1666 13.8334 15.1666Z"
            stroke={(fill && fill[0]) || '#fff'}
        />
        <path
            d="M18.3334 4.5H18.8334C19.2005 4.5 19.5 4.79946 19.5 5.16663V12.1666C19.5 12.5339 19.2005 12.8334 18.8334 12.8334H13.8334C13.4661 12.8334 13.1666 12.5339 13.1666 12.1666V5.16663C13.1666 4.79949 13.466 4.5 13.8334 4.5H18.3334Z"
            stroke={(fill && fill[0]) || '#fff'}
        />
    </svg>
);
