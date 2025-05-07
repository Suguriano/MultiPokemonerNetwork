function Header() {
    try {
        return (
            <header data-name="header" className="fixed w-full bg-white shadow-sm z-50">
                <nav data-name="nav" className="container mx-auto px-6 py-4">
                    <div data-name="nav-content" className="flex items-center justify-between">
                        <div data-name="logo" className="text-2xl font-bold text-indigo-600">
                            MPN
                        </div>
                        <a 
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdCjvmBc8ZLWn1t_uoPIU4cseXFnIgMsrWW0zLWtTrCfpmlWg/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-name="join-button" 
                            className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors"
                        >
                            立即加入
                        </a>
                    </div>
                </nav>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
        return null;
    }
}
