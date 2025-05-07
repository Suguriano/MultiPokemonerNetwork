function Partners() {
    try {
        const partners = [
            {
                name: "可達鴨PTCG",
                logo: "https://scontent.frmq2-1.fna.fbcdn.net/v/t39.30808-6/461172399_519111357427736_6867346290586659357_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=li9SGzQyuGwQ7kNvwEUwDrT&_nc_oc=AdlcJ0sHLr6OcpvU1MRMEs_rQxdYn3vUhw5Jl8sf2uQKVrAkZl5lctuwPtKOUhPAWuerHOl6IteNn4HH44oO9LPb&_nc_zt=23&_nc_ht=scontent.frmq2-1.fna&_nc_gid=JIHZ7cSWyhAbI-DLv5fZQw&oh=00_AfL-Z4p-LtV7PyarbSu2DWYfcVgE6OM9HndBmJsC5v9-lA&oe=6820E72D",
                link: "https://www.youtube.com/@PsyduckPTCG"
            },
            {
                name: "ミンゴスのポケカ研究所",
                logo: "https://yt3.googleusercontent.com/5a-B2lbXu16o_arVHN23SWQBnZOiz--zWO6eHx_IBr91-Iv6tMloPTutrHUGCs_NKjN0mXkEbw=s900-c-k-c0x00ffffff-no-rj",
                link: "https://www.youtube.com/@%E3%83%9F%E3%83%B3%E3%82%B4%E3%82%B9%E3%81%AE%E3%83%9D%E3%82%B1%E3%82%AB%E7%A0%94%E7%A9%B6%E6%89%80"
            },
            {
                name: "Alloutblitzle",
                logo: "https://yt3.googleusercontent.com/jrbJuozElOUznUGtB-tPVkMQouaxjwRcYIV82EK2QOXt_uq7kkxW2LbUMdvXu_4ajQNwemwX=s900-c-k-c0x00ffffff-no-rj",
                link: "https://www.youtube.com/@Alloutblitzle"
            }
        ];

        return (
            <section data-name="partners" className="py-16 bg-gray-50">
                <div data-name="partners-content" className="container mx-auto px-6">
                    <h2 data-name="section-title" className="text-3xl font-bold text-center mb-12">
                        🤝 合作夥伴
                    </h2>
                    <div data-name="partners-grid" className="flex justify-center items-center gap-12 flex-wrap max-w-4xl mx-auto">
                        {partners.map((partner, index) => (
                            <div key={index} className="text-center">
                                <a 
                                    href={partner.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    data-name="partner-link"
                                    className="block transition-transform hover:scale-105"
                                >
                                    <img 
                                        src={partner.logo}
                                        alt={partner.name}
                                        data-name="partner-logo"
                                        className="w-40 h-40 object-cover rounded-full shadow-lg partner-logo mb-3"
                                    />
                                    <h3 className="text-lg font-medium text-gray-800">{partner.name}</h3>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error('Partners component error:', error);
        reportError(error);
        return null;
    }
}
