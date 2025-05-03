import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Loader2, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FileUploaderProps {
  onFileSelected: (fileName: string, isUrl?: boolean) => void;
  scanStatus: 'idle' | 'scanning' | 'complete';
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelected, scanStatus }) => {
  const [isDragActive, setIsDragActive] = useState(false);
  const [url, setUrl] = useState('');
  
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      onFileSelected(file.name);
    }
  }, [onFileSelected]);
  
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    onDragEnter: () => setIsDragActive(true),
    onDragLeave: () => setIsDragActive(false),
    onDropAccepted: () => setIsDragActive(false),
    onDropRejected: () => setIsDragActive(false),
  });
  
  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      onFileSelected(url, true);
      setUrl('');
    }
  };
  
  const isDisabled = scanStatus === 'scanning';
  
  return (
    <div className="space-y-4">
      <motion.div 
        className={`dropzone ${isDragActive ? 'dropzone-active' : ''} ${
          isDisabled ? 'opacity-70 cursor-not-allowed' : 'cursor-pointer hover:border-gray-400 hover:bg-opacity-15'
        }`}
        whileHover={!isDisabled ? { scale: 1.02 } : {}}
        whileTap={!isDisabled ? { scale: 0.98 } : {}}
        {...getRootProps()}
      >
        <input {...getInputProps()} disabled={isDisabled} />
        
        <div className="flex flex-col items-center text-white text-center">
          {scanStatus === 'scanning' ? (
            <Loader2 className="h-12 w-12 mb-2 animate-spin text-gray-400" />
          ) : (
            <Upload className="h-12 w-12 mb-2 text-gray-400" />
          )}
          
          <p className="text-lg font-bold mb-1 cyber-text">
            {scanStatus === 'scanning' 
              ? 'Scanning file...' 
              : 'Drag & drop file here'}
          </p>
          
          {scanStatus !== 'scanning' && (
            <p className="text-sm text-gray-400 opacity-70 cyber-text">or click to browse</p>
          )}
        </div>
      </motion.div>

      <form onSubmit={handleUrlSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <LinkIcon className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="url"
            placeholder="Enter URL to scan..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isDisabled}
            className="w-full pl-10 pr-4 py-2 bg-black bg-opacity-50 border-2 border-gray-400 rounded-lg text-white placeholder-gray-400 placeholder-opacity-50 focus:outline-none focus:border-gray-300 transition-colors cyber-text"
          />
        </div>
        <button
          type="submit"
          disabled={isDisabled || !url.trim()}
          className="px-4 py-2 bg-gray-400 text-black rounded-lg font-bold hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors cyber-text"
        >
          Scan
        </button>
      </form>
    </div>
  );
};

export default FileUploader;