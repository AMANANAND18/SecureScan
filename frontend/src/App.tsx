import React from 'react';
import Background from './components/Background';
import Header from './components/Header';
import FileUploaderContainer from './components/FileUploaderContainer';

function App() {
  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden">
      <Background />
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 z-10 max-w-4xl mx-auto w-full">
        <Header />
        <FileUploaderContainer />
      </div>
    </div>
  );
}

export default App;