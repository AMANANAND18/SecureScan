import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, FileText, Link as LinkIcon, CheckCircle2 } from 'lucide-react';

interface FileUploaderInfoProps {
  input: { value: string; type: 'file' | 'url' } | null;
  scanStatus: 'idle' | 'scanning' | 'complete';
}

const FileUploaderInfo: React.FC<FileUploaderInfoProps> = ({ input, scanStatus }) => {
  const renderContent = () => {
    if (!input) {
      return (
        <div className="flex flex-col items-center text-center space-y-2">
          <p className="text-sm text-gray-400 opacity-70 cyber-text">
            We'll scan your file or URL for malware, viruses, and other threats
          </p>
        </div>
      );
    }
    
    if (scanStatus === 'scanning') {
      return (
        <div className="flex items-center space-x-3">
          {input.type === 'file' ? (
            <FileText className="h-5 w-5 text-gray-400 flex-shrink-0" />
          ) : (
            <LinkIcon className="h-5 w-5 text-gray-400 flex-shrink-0" />
          )}
          <div>
            <p className="text-sm font-bold text-white cyber-text">
              {input.value}
            </p>
            <p className="text-xs text-gray-400 opacity-70 cyber-text">Scanning in progress...</p>
          </div>
        </div>
      );
    }
    
    const isSafe = Math.random() > 0.3;
    
    return (
      <div className="flex items-start space-x-3">
        {isSafe ? (
          <CheckCircle2 className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
        ) : (
          <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
        )}
        <div>
          <p className="text-sm font-bold text-white cyber-text">
            {input.value}
          </p>
          <p className="text-xs text-gray-400 opacity-70 cyber-text">
            {isSafe 
              ? `No threats detected. ${input.type === 'file' ? 'File' : 'URL'} is safe to use.` 
              : `Potential threat detected! We recommend caution with this ${input.type}.`}
          </p>
        </div>
      </div>
    );
  };
  
  return (
    <AnimatePresence mode="wait">
      <motion.div 
        key={`${input?.value}-${scanStatus}`}
        className="mt-4 p-4 bg-[#0a0a0a] border border-gray-400 rounded-lg"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {renderContent()}
      </motion.div>
    </AnimatePresence>
  );
};

export default FileUploaderInfo;