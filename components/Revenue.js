function Revenue() {
    try {
        return (
            <section data-name="revenue" className="py-16 bg-gray-50">
                <div data-name="revenue-content" className="container mx-auto px-6">
                    <h2 data-name="section-title" className="text-3xl font-bold text-center mb-12">
                        💰 收益模式與合作方式
                    </h2>
                    <div data-name="revenue-points" className="max-w-3xl mx-auto">
                        <div data-name="point" className="bg-white p-6 rounded-lg shadow-md mb-6">
                            <h3 data-name="point-title" className="text-xl font-semibold mb-4">創作者為主體的透明合作</h3>
                            <ul data-name="point-list" className="space-y-4">
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>你保留頻道主權與收益帳戶</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>我們只抽取你同意的「實際廣告收益分潤」或「合作案抽成」</span>
                                </li>
                                <li className="flex items-start">
                                    <i className="fas fa-check text-green-500 mt-1 mr-3"></i>
                                    <span>合作簽有正式合約，提供完整報表與對帳機制</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Revenue component error:', error);
        reportError(error);
        return null;
    }
}
