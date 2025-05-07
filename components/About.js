function About() {
    try {
        return (
            <section data-name="about" className="py-16 bg-gray-50">
                <div data-name="about-content" className="container mx-auto px-6">
                    <h2 data-name="section-title" className="text-3xl font-bold text-center mb-12">
                        🧢 MPN 是什麼？
                    </h2>
                    <div data-name="description" className="max-w-3xl mx-auto text-lg text-gray-700 text-center">
                        <p>
                            MPN（Multi Pokemoner Network） 是一個專為寶可夢內容創作者打造的聯盟。
                            我們聚集有潛力的YouTuber、剪輯師、卡牌老師與實況主，透過專業輔導、
                            資源共享與品牌合作，一起打造台灣最具影響力的 Pokémon 創作圈。
                        </p>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('About component error:', error);
        reportError(error);
        return null;
    }
}
