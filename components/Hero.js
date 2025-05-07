function Hero() {
    try {
        return (
            <section data-name="hero" className="pt-24 pb-16 hero-gradient relative overflow-hidden">
                <div data-name="pokemon-pattern" className="absolute inset-0 pokemon-bg-pattern"></div>
                <div data-name="hero-content" className="container mx-auto px-6 relative">
                    <div data-name="text-content" className="text-center text-white max-w-3xl mx-auto">
                        <h1 data-name="title" className="text-4xl md:text-6xl font-bold mb-6">
                            MPN 創作者聯盟
                        </h1>
                        <p data-name="subtitle" className="text-xl md:text-2xl mb-8">
                            成為下一位閃耀的寶可夢內容創作者
                        </p>
                        <a 
                            data-name="cta-button" 
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdCjvmBc8ZLWn1t_uoPIU4cseXFnIgMsrWW0zLWtTrCfpmlWg/viewform?usp=dialog"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            開始申請 <i className="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Hero component error:', error);
        reportError(error);
        return null;
    }
}
