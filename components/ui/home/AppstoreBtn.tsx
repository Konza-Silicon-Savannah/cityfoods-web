import React from 'react';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google'; // Corrected import

// Define the store type
type StoreType = 'apple' | 'google';

interface AppStoreButtonProps {
  store?: StoreType; // Limit the store to either 'apple' or 'google'
  href?: string;
}

const AppStoreButton: React.FC<AppStoreButtonProps> = ({ store = 'apple', href = '#' }) => {
  const storeConfig: { [key in StoreType]: { icon: JSX.Element; text: string } } = {
    apple: {
      icon: <AppleIcon style={{ fontSize: 40 }}/>,
      text: 'App Store',
    },
    google: {
      icon: <GoogleIcon style={{ fontSize: 40 }} />,
      text: 'Play Store',
    },
  };

  // Destructure icon and text based on the provided store, fallback to 'apple'
  const { icon, text } = storeConfig[store];

  return (
    <a
      href={href}
      className="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
    >
      {icon}
      <div className="flex flex-col items-start ml-4"> {/* Added margin for spacing */}
        <span className="text-xs">Get it on</span>
        <span className="text-xl font-semibold leading-tight">{text}</span>
      </div>
    </a>
  );
};

export default AppStoreButton;
