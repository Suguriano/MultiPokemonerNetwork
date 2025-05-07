function Benefits() {
    try {
        const benefits = [
            { icon: "fas fa-chart-line", title: "YouTube 頻道分析與成長建議" },
            { icon: "fas fa-video", title: "影片剪輯、縮圖、美術支援" },
            { icon: "fas fa-search", title: "SEO、標題優化與演算法應對策略" },
            { icon: "fas fa-comments", title: "每月一次策略輔導會議（1對1）" },
            { icon: "fas fa-handshake", title: "品牌合作媒合與商案談判協助" },
            { icon: "fas fa-star", title: "優先參與 MPN 聯名影片與線下活動" },
            { icon: "fas fa-share-alt", title: "社群曝光（MPN IG／YouTube 頻道）" }
        ];

        return (
            <section data-name="benefits" className="py-16">
                <div data-name="benefits-content" className="container mx-auto px-6">
                    <h2 data-name="section-title" className="text-3xl font-bold text-center mb-12">
                        🎁 聯盟成員享有權益
                    </h2>
                    <div data-name="benefits-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div data-name="benefit-card" key={index} className="benefit-card bg-white p-6 rounded-lg shadow-md">
                                <i className={`${benefit.icon} text-3xl text-indigo-600 mb-4`}></i>
                                <h3 data-name="benefit-title" className="text-xl font-semibold mb-2">{benefit.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Benefits component error:', error);
        reportError(error);
        return null;
    }
}
