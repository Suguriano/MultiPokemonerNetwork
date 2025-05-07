function App() {
    try {
        return (
            <div data-name="app">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Benefits />
                    <Partners />
                    <Revenue />
                    <Recruitment />
                    <Process />
                </main>
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
