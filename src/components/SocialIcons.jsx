const SocialIcons = () => {
    const icons = [
      { name: "home-icon", label: "Home", svg: 
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10.29V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9.71l9-6.3 9 6.3zM12 2.27L2 9.42V22h20V9.42L12 2.27zM8 15h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2z" fill="currentColor" stroke="none"/>
        </svg>   },
      { name: "mail-icon", label: "Contact", svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0z" /></svg> },
      { name: "globe-icon", label: "Website", svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20z" /></svg> },
      { name: "user-icon", label: "About", active: true, svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9.953 9.953 0 0112 15c2.21 0 4.21.722 5.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
      { name: "file-icon", label: "Resume", svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg> },
      { name: "code-icon", label: "GitHub", svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 18v-2a4 4 0 00-8 0v2m8 0a4 4 0 00-8 0m8 0H8" /></svg> },
      { name: "folder-icon", label: "Projects", svg: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" /></svg> }
    ];
  
    return (
      <div className="flex gap-2 bg-black/80 rounded-full p-2">
        {icons.map((icon, index) => (
          <div 
            key={index} 
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all
              ${icon.active ? 'bg-blue-400 text-white' : 'text-white/70 hover:bg-gray-700'}`}
          >
            <div className="w-5 h-5">
              {icon.svg}
            </div>
          </div>
        ))}
      </div>
    );
  };

export default SocialIcons;