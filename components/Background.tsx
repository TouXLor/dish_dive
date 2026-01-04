
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute top-[20%] right-[20%] w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[80px] mix-blend-screen"></div>
    </div>
  );
};

export default Background;
