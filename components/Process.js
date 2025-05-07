function Process() {
    try {
        const steps = [
            { icon: "fas fa-paper-plane", title: "填寫申請表單" },
            { icon: "fas fa-phone", title: "3～5天內與你聯繫" },
            { icon: "fas fa-comments", title: "安排初談，說明合作" },
            { icon: "fas fa-file-signature", title: "確認合作並簽約" },
            { icon: "fas fa-star", title: "正式加入 MPN！" }
        ];

        return (
            <section data-name="process" className="py-16 bg-gray-50">
                <div data-name="process-content" className="container mx-auto px-6">
                    <h2 data-name="section-title" className="text-3xl font-bold text-center mb-12">
                        📩 加入聯盟流程
                    </h2>
                    <div data-name="steps-container" className="max-w-4xl mx-auto">
                        <div data-name="steps" className="flex flex-wrap justify-center gap-8">
                            {steps.map((step, index) => (
                                <div data-name="process-step" key={index} className="process-step text-center w-40">
                                    <div data-name="step-icon" className="w-16 h-16 mx-auto bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                                        <i className={`${step.icon} text-white text-2xl`}></i>
                                    </div>
                                    <p data-name="step-title" className="text-lg font-medium">{step.title}</p>
                                </div>
                            ))}
                        </div>
                        <div data-name="cta" className="text-center mt-12">
                            <a 
                                href="https://docs.google.com/forms/d/e/1FAIpQLSdCjvmBc8ZLWn1t_uoPIU4cseXFnIgMsrWW0zLWtTrCfpmlWg/viewform?usp=dialog"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-name="apply-button"
                                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
                            >
                                點我申請加入 MPN 聯盟
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Process component error:', error);
        reportError(error);
        return null;
    }
}
