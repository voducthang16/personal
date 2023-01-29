import { useEffect, useRef } from 'react';
import avatar from './assets/img/avatar.jpg';
import './App.css';

function App() {
    const header = useRef<HTMLElement>(null);
    const home = useRef<HTMLElement>(null);
    const about = useRef<HTMLElement>(null);
    const portfolio = useRef<HTMLElement>(null);

    const handleScrollFixed = () => {
        document.addEventListener('scroll', () => {
            header.current?.classList.toggle('header-sticky', window.scrollY > 200);
        });
    };
    useEffect(() => {
        handleScrollFixed();
    }, []);
    const scrollToSection = (elementRef: any) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
        });
    };
    return (
        <div>
            <section ref={home} className="relative h-screen">
                <div className="background">
                    <header ref={header} className="py-4 text-white">
                        <nav className="container h-10 flex items-center justify-between">
                            <a className="font-light text-lg" href="/">
                                Vo Duc Thang
                            </a>
                            <ul className="flex space-x-8 text-xl font-normal">
                                <li>Home</li>
                                <li onClick={() => scrollToSection(about)}>About</li>
                                <li onClick={() => scrollToSection(portfolio)}>Portfolio</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
                    </header>
                    <div
                        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
                    content-[''] flex flex-col items-center text-white"
                    >
                        <img className="w-52 h-w-52 rounded-full" src={avatar} alt="Vo Duc Thang" />
                        <h3 className="mt-6 text-5xl font-bold">Vo Duc Thang</h3>
                        <h5 className="mt-4 text-2xl font-medium">I'm a Web Developer</h5>
                    </div>
                </div>
            </section>
            <section ref={about} className="container h-screen">
                TEST ABOUT
            </section>
            <section ref={portfolio} className="container h-screen">
                TEST PORTFOLIO
            </section>
        </div>
    );
}

export default App;
