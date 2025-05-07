function Recruitment() {
    try {
        const targets = [
            "卡牌實況、教學、對戰影片創作者",
            "動畫、新聞、開箱、寶可夢主題剪輯",
            "IG、Shorts、YouTube新手或轉型者",
            "對創作有熱情，願意穩定經營內容者"
        ];

        return (
            <section data-name="recruitment" className="py-16">
                <div data-name="recruitment-content" className="container mx-auto px-6">
                    <h2 data-name="section-title" className="text-3xl font-bold text-center mb-12">
                        🤝 招募對象
                    </h2>
                    <div data-name="targets-grid" className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {targets.map((target, index) => (
                            <div data-name="target-card" key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div data-name="target-content" className="flex items-start">
                                    <i className="fas fa-check-circle text-indigo-600 mt-1 mr-3"></i>
                                    <p className="text-lg">{target}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Recruitment component error:', error);
        reportError(error);
        return null;
    }
}
