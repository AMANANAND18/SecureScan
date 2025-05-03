import React from 'react';
import { motion } from 'framer-motion';
import FileUploader from './FileUploader';
import FileUploaderInfo from './FileUploaderInfo';

const FileUploaderContainer: React.FC = () => {
  const [input, setInput] = React.useState<{ value: string; type: 'file' | 'url' } | null>(null);
  const [scanStatus, setScanStatus] = React.useState<'idle' | 'scanning' | 'complete'>('idle');
  
  const handleFileSelected = (value: string, isUrl = false) => {
    setInput({ value, type: isUrl ? 'url' : 'file' });
    setScanStatus('scanning');
    
    // Simulate scanning
    setTimeout(() => {
      setScanStatus('complete');
    }, 2000);
  };
  
  return (
    <motion.div 
      className="w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6 }}
    >
      <FileUploader onFileSelected={handleFileSelected} scanStatus={scanStatus} />
      <FileUploaderInfo input={input} scanStatus={scanStatus} />
    </motion.div>
  );
};

export default FileUploaderContainer;