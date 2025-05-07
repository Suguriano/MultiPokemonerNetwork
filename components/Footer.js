function Footer() {
    try {
        return (
            <footer data-name="footer" className="bg-gray-900 text-white py-12">
                <div data-name="footer-content" className="container mx-auto px-6">
                    <div data-name="footer-text" className="text-center">
                        <h2 data-name="footer-title" className="text-2xl font-bold mb-4">
                            🌟 加入 MPN，讓內容不再孤軍奮戰
                        </h2>
                        <p data-name="footer-description" className="max-w-2xl mx-auto text-gray-400">
                            在 MPN，我們彼此連結、一起成長，讓寶可夢內容創作成為一條有路、有收入、有未來的道路。
                            你不是一個人在剪影片，你是一個聯盟的一員。
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
        return null;
    }
}
