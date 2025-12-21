'use client';

import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdDirectionsCar } from 'react-icons/md';

interface SearchBarProps {
  placeholder?: string;
  showVINButton?: boolean;
}

export default function SearchBar({ 
  placeholder = "Search by part number, VIN, or description...",
  showVINButton = true 
}: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isVINMode, setIsVINMode] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // Your search logic here
      console.log('Searching for:', searchTerm);
    }
  };

  const handleVINSearch = () => {
    setIsVINMode(!isVINMode);
    if (!isVINMode) {
      setSearchTerm('');
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSearch} className="relative">
        <div className="flex items-center">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={isVINMode ? "Enter VIN number..." : placeholder}
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="bg-blue-900 text-white px-6 py-3 rounded-r-lg hover:bg-blue-800 transition-colors"
          >
            <AiOutlineSearch className="text-xl" />
          </button>
        </div>
        
        <div className="absolute left-4 top-3.5 text-gray-400">
          <AiOutlineSearch className="text-xl" />
        </div>

        {showVINButton && (
          <button
            type="button"
            onClick={handleVINSearch}
            className={`absolute right-24 top-3 flex items-center text-sm px-3 py-1 rounded ${
              isVINMode 
                ? 'bg-blue-100 text-blue-700 border border-blue-300' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <MdDirectionsCar className="mr-1" />
            {isVINMode ? 'VIN Mode' : 'VIN Search'}
          </button>
        )}
      </form>
      
      {/* Quick search suggestions for auto parts */}
      <div className="flex flex-wrap gap-2 mt-2">
        <span className="text-xs text-gray-500">Quick search:</span>
        <button 
          onClick={() => setSearchTerm('BMW bumper')}
          className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
        >
          BMW bumper
        </button>
        <button 
          onClick={() => setSearchTerm('Audi headlight')}
          className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
        >
          Audi headlight
        </button>
        <button 
          onClick={() => setSearchTerm('Mercedes mirror')}
          className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded"
        >
          Mercedes mirror
        </button>
      </div>
    </div>
  );
}