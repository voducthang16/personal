import { useEffect, useRef } from 'react';
import avatar from './assets/img/avatar.jpg';
import about_img from './assets/img/about.jpg';
import education from './assets/img/education.png';
import theheat from './assets/img/theheat.png';
import portfolio_img from './assets/img/portfolio.png';
import {
    AddressIcon,
    CalenderIcon,
    CSS3Icon,
    GithubIcon,
    GitIcon,
    HTML5Icon,
    JSIcon,
    LinkedinIcon,
    MailIcon,
    MongoDBIcon,
    MySqlIcon,
    NodeJsIcon,
    PhoneIcon,
    PlayStationIcon,
    PythonIcon,
    ReactIcon,
    StudyIcon,
    VSCodeIcon,
} from './components/Icons';
import './App.css';

function App() {
    const header = useRef<HTMLElement>(null);
    const home = useRef<HTMLElement>(null);
    const about = useRef<HTMLElement>(null);
    const portfolio = useRef<HTMLElement>(null);
    const contact = useRef<HTMLElement>(null);

    const handleScrollFixed = () => {
        document.addEventListener('scroll', () => {
            header.current?.classList.toggle('header-sticky', window.scrollY > 80);
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
                    <header ref={header} className="h-20 flex items-center text-white">
                        <nav className="container h-10 flex items-center justify-between">
                            <a className="font-light text-lg" href="/">
                                Vo Duc Thang
                            </a>
                            <ul className="flex space-x-8 text-xl font-normal">
                                <li
                                    className="cursor-pointer hover:text-primary_rgba transition-all"
                                    onClick={() => scrollToSection(home)}
                                >
                                    Home
                                </li>
                                <li
                                    className="cursor-pointer hover:text-primary_rgba transition-all"
                                    onClick={() => scrollToSection(about)}
                                >
                                    About
                                </li>
                                <li
                                    className="cursor-pointer hover:text-primary_rgba transition-all"
                                    onClick={() => scrollToSection(portfolio)}
                                >
                                    Portfolio
                                </li>
                                <li
                                    className="cursor-pointer hover:text-primary_rgba transition-all"
                                    onClick={() => scrollToSection(contact)}
                                >
                                    Contact
                                </li>
                            </ul>
                        </nav>
                    </header>
                    <div
                        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 
                    content-[''] flex flex-col items-center text-white"
                    >
                        <img className="w-52 h-w-52 rounded-full" src={avatar} alt="Vo Duc Thang" />
                        <h3 className="mt-6 text-5xl font-bold text-primary">Vo Duc Thang</h3>
                        <h5 className="my-4 text-2xl font-medium text-[#1d1d1d]">I'm a Web Developer</h5>
                        <p className="flex space-x-4">
                            <a
                                className="no-underline outline-none"
                                target="_blank"
                                href="https://www.linkedin.com/in/voducthang/"
                            >
                                <LinkedinIcon width={24} height={24} />
                            </a>
                            <a
                                className="no-underline outline-none"
                                target="_blank"
                                href="https://github.com/voducthang16"
                            >
                                <GithubIcon width={24} height={24} />
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            <section ref={about} className="pt-20">
                <div className="container py-20 bg-[#f7f7f7] rounded-2xl">
                    <h3 className="inline-block mb-20 text-2xl font-bold text-[#111111] relative">
                        ABOUT ME
                        <span className="absolute h-0.5 w-1/2 bg-primary left-1/2 -translate-x-1/2 bottom-0"></span>
                    </h3>
                    <div className="grid grid-cols-3 gap-10">
                        <div className="col-span-1 rounded-lg overflow-hidden">
                            <img className="w-full object-contain" src={about_img} alt="Vo Duc Thang" />
                        </div>
                        <div className="col-span-2">
                            <h5 className="mb-4 text-4xl font-semibold text-[#3C4858]">Hello World!</h5>
                            <div className="text-[#333333] space-y-2">
                                <p>
                                    Welcome to my personal (React & Vite) website. I hope you can find something helpful
                                    about me!
                                </p>
                                <p>
                                    My name is <span className="font-medium text-primary">Vo Duc Thang</span>.
                                </p>
                                <p>I am a Web Developer, and I'm very passionate and dedicated to my work.</p>
                                <p>I have acquired the skills and knowledge necessary to make the project a success.</p>
                                <p>I love listening to music and traveling with my family and friends.</p>
                                <p>
                                    I also LOVE learning new technologies and using them to solve real-life's problems!
                                </p>
                            </div>
                            <div className="grid grid-cols-2 mt-6">
                                <div className="col-span-1 space-y-4">
                                    <h6 className="flex items-center space-x-2">
                                        <CalenderIcon width={16} height={16} />
                                        <span>Age: 22</span>
                                    </h6>
                                    <h6 className="flex items-center space-x-2">
                                        <StudyIcon width={16} height={16} className="fill-primary" />
                                        <span>Study: FPT Polytechnic</span>
                                    </h6>
                                    <h6 className="flex items-center space-x-2">
                                        <PhoneIcon width={16} height={16} className="fill-primary" />
                                        <span>Phone: 0337563172</span>
                                    </h6>
                                </div>
                                <div className="col-span-1 space-y-4">
                                    <h6 className="flex items-center space-x-2">
                                        <PlayStationIcon width={16} height={16} className="fill-primary" />
                                        <span>Interest: Music, Travel</span>
                                    </h6>
                                    <h6 className="flex items-center space-x-2">
                                        <AddressIcon width={16} height={16} className="fill-primary" />
                                        <span>Address: Hiep Phu, Thu Duc City, HCMC</span>
                                    </h6>
                                    <h6 className="flex items-center space-x-2">
                                        <MailIcon width={16} height={16} className="fill-primary" />
                                        <span>Mail: voducthang16@gmail.com</span>
                                    </h6>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6">
                                <a
                                    href=""
                                    className="block p-4 rounded-lg bg-primary hover:bg-primary_rgba transition-all text-white no-underline outline-none"
                                >
                                    DOWNLOAD CV
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="inline-block my-10 text-2xl font-bold text-[#111111] relative">
                            MY SKILLS
                            <span className="absolute h-0.5 w-1/2 bg-primary left-1/2 -translate-x-1/2 bottom-0"></span>
                        </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-10">
                        <div className="col-span-1 bg-white p-4 rounded-b-lg flex flex-col items-center shadow-md border-t-4 border-primary">
                            <h4 className="mb-6 text-lg font-medium text-[#414141]">Programing Languages</h4>
                            <ul className="text-lg text-[#1f1f1f] space-y-3">
                                <li className="flex space-x-2">
                                    <p className="flex items-center space-x-1">
                                        <HTML5Icon width={18} height={18} />
                                        <span>HTML5</span>
                                    </p>
                                    <span>&</span>
                                    <p className="flex items-center space-x-1">
                                        <CSS3Icon width={18} height={18} />
                                        <span>CSS3</span>
                                    </p>
                                </li>
                                <li className="flex items-center space-x-1">
                                    <JSIcon width={18} height={18} />
                                    <span>Javascript</span>
                                </li>
                                <li className="flex items-center space-x-1">
                                    <PythonIcon width={18} height={18} />
                                    <span>Python</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1 bg-white p-4 rounded-b-lg flex flex-col items-center shadow-md border-t-4 border-primary">
                            <h4 className="mb-6 text-xl font-medium text-[#414141]">Frameworks & Tools</h4>
                            <ul className="text-lg text-[#1f1f1f] space-y-3">
                                <li className="flex items-center space-x-1">
                                    <ReactIcon width={18} height={18} />
                                    <span>React</span>
                                </li>
                                <li className="flex items-center space-x-1">
                                    <NodeJsIcon width={18} height={18} />
                                    <span>Node.js</span>
                                </li>
                                <li>RESTful API</li>
                                <li className="flex items-center space-x-1">
                                    <GitIcon width={18} height={18} />
                                    <span>Git</span>
                                </li>
                                <li className="flex items-center space-x-1">
                                    <VSCodeIcon width={18} height={18} />
                                    <span>Visual Studio Code</span>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-1 bg-white p-4 rounded-b-lg flex flex-col items-center shadow-md border-t-4 border-primary">
                            <h4 className="mb-6 text-xl font-medium text-[#414141]">Database</h4>
                            <ul className="text-lg text-[#1f1f1f] space-y-3">
                                <li className="flex items-center space-x-1">
                                    <MySqlIcon width={18} height={18} />
                                    <span>MySQL</span>
                                </li>
                                <li className="flex items-center space-x-1">
                                    <MongoDBIcon width={18} height={18} />
                                    <span>MongoDB</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={portfolio} className="pt-20">
                <div className="container py-20 bg-[#f7f7f7] rounded-2xl">
                    <h3 className="inline-block mb-20 text-2xl font-bold text-[#111111] relative">
                        PORTFOLIO
                        <span className="absolute h-0.5 w-1/2 bg-primary left-1/2 -translate-x-1/2 bottom-0"></span>
                    </h3>
                    <div className="text-center mb-20">
                        <h3 className="inline-block text-4xl font-bold text-[#111111] relative">
                            Some of My Awesome Projects
                            <span className="absolute h-0.5 w-1/2 bg-primary left-1/2 -translate-x-1/2 -bottom-1"></span>
                        </h3>
                    </div>
                    <div className="space-y-20">
                        <div className="grid grid-cols-2 gap-10">
                            <div className="col-span-1">
                                <img className="w-full object-contain" src={education} alt="Education" />
                            </div>
                            <div className="col-span-1">
                                <h5 className="mb-6 text-xl font-semibold text-[#333333]">
                                    eCommerce Website - THANGVD
                                </h5>
                                <div className="text-[#202020] text-sm font-light">
                                    <span className="mb-2 inline-block !font-medium">Description</span>
                                    <p>
                                        This is my personal website, a website about selling courses online. Includes
                                        pages such as Homepage, About, Courses, Couse Detail and Blog.
                                    </p>
                                    <span className="my-2 inline-block !font-medium">Technology Used</span>
                                    <ul className="pl-4 space-y-2 list-disc">
                                        <li>HTML5</li>
                                        <li>CSS3</li>
                                        <li>Javascript</li>
                                    </ul>
                                    <span className="my-2 inline-block !font-medium">Resources</span>
                                    <p>
                                        Access the project's source on{' '}
                                        <a
                                            className="no-underline outline-none !font-medium !text-primary"
                                            href="https://github.com/voducthang16/education"
                                        >
                                            Github
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="col-span-1">
                                <h5 className="mb-6 text-xl font-semibold text-[#333333]">
                                    eCommerce Website - THE HEAT
                                </h5>
                                <div className="text-[#202020] text-sm font-light">
                                    <span className="mb-2 inline-block !font-medium">Description</span>
                                    <p>
                                        This is a group project, an e-commerce website about fashion. Clients can create
                                        an account, log in, search, add products to their wishlist, purchase products
                                        and see their order history. Admin can manage products, categories, users,
                                        comments, coupons and orders.
                                    </p>
                                    <span className="my-2 inline-block !font-medium">Technology Used</span>
                                    <ul className="pl-4 space-y-2 list-disc">
                                        <li>HTML5 & CSS3</li>
                                        <li>Javascript & JQUERY</li>
                                        <li>PHP & MySQL</li>
                                    </ul>
                                    <span className="my-2 inline-block !font-medium">Resources</span>
                                    <p>
                                        Access the project's source on{' '}
                                        <a
                                            className="no-underline outline-none !font-medium !text-primary"
                                            href="https://github.com/voducthang16/PRO1014"
                                        >
                                            Github
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img className="w-full object-contain" src={theheat} alt="Education" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="col-span-1">
                                <img className="w-full object-contain" src={education} alt="Education" />
                            </div>
                            <div className="col-span-1">
                                <h5 className="mb-6 text-xl font-semibold text-[#333333]">
                                    eCommerce Website - 5Star Fashion
                                </h5>
                                <div className="text-[#202020] text-sm font-light">
                                    <span className="mb-2 inline-block !font-medium">Description</span>
                                    <p>
                                        This is a group project, an e-commerce website about fashion and accessories.
                                        The client side is built with React, Typescript, Tailwind and Chakra UI. It
                                        allows users to create accounts, log in, and purchase products,... The server
                                        side uses NodeJS, Next.js, Redis, PostgreSQL and Typescript to provide API when
                                        requested by the client side.
                                    </p>
                                    <span className="my-2 inline-block !font-medium">Technology Used</span>
                                    <ul className="pl-4 space-y-2 list-disc">
                                        <li>React, Redux Toolkit, Typescript</li>
                                        <li>Tailwind CSS, SCSS, Chakra UI</li>
                                        <li>Node.js, Next.js, Redis, PostgreSQL</li>
                                    </ul>
                                    <span className="my-2 inline-block !font-medium">Resources</span>
                                    <p>
                                        Access the project's source on Github:{' '}
                                        <a
                                            className="no-underline outline-none !font-medium !text-primary"
                                            href="https://github.com/voducthang16/5star-ecommerce-fe"
                                        >
                                            Client UI
                                        </a>
                                        {' - '}
                                        <a
                                            className="no-underline outline-none !font-medium !text-primary"
                                            href="https://github.com/ttphat2805/5star-ecommerce-admin"
                                        >
                                            Admin UI
                                        </a>
                                        {' - '}
                                        <a
                                            className="no-underline outline-none !font-medium !text-primary"
                                            href="https://github.com/nghi2001/5star_ecommerce_BE"
                                        >
                                            Backend
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <div className="col-span-1">
                                <h5 className="mb-6 text-xl font-semibold text-[#333333]">
                                    VoDucThang - Personal Website
                                </h5>
                                <div className="text-[#202020] text-sm font-light">
                                    <span className="mb-2 inline-block !font-medium">Description</span>
                                    <p>
                                        This is my personal project, a website to show information about me and some
                                        project I had completed
                                    </p>
                                    <span className="my-2 inline-block !font-medium">Technology Used</span>
                                    <ul className="pl-4 space-y-2 list-disc">
                                        <li>React & Vite</li>
                                        <li>Tailwind CSS</li>
                                    </ul>
                                    <span className="my-2 inline-block !font-medium">Resources</span>
                                    <p>
                                        Access the project's source on{' '}
                                        <a
                                            className="no-underline outline-none !font-medium !text-primary"
                                            href="https://github.com/voducthang16/personal"
                                        >
                                            Github
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <img className="w-full object-contain" src={portfolio_img} alt="Education" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={contact} className="py-20">
                <div className="container">
                    <h3 className="inline-block mb-20 text-2xl font-bold text-[#111111] relative">
                        CONTACT
                        <span className="absolute h-0.5 w-1/2 bg-primary left-1/2 -translate-x-1/2 bottom-0"></span>
                    </h3>
                    <div className="text-center">
                        <h3 className="mb-10 inline-block text-4xl font-bold text-[#111111] relative">
                            GET IN TOUCH
                            <span className="absolute h-0.5 w-1/2 bg-primary left-1/2 -translate-x-1/2 -bottom-1"></span>
                        </h3>
                        <p className="mb-4 text-gray-500">You need more information? Contact me!</p>
                        <p className="flex items-center justify-center space-x-2 text-gray-500">
                            <MailIcon width={16} height={16} className="fill-gray-500" />
                            <a className="font-semibold" href="mailto:voducthang16@gmail.com">
                                Send me an email!
                            </a>
                            <span>-</span>
                            <span>voducthang16@gmail.com</span>
                        </p>
                    </div>
                </div>
            </section>
            <footer className="bg-black text-white">
                <div className="container py-20">
                    <div className="grid grid-cols-2">
                        <div className="col-span-1">
                            <p>VoDuc Thang - © Copyright {new Date().getFullYear()}. All rights are reserved.</p>
                        </div>
                        <div className="col-span-1 flex justify-end">
                            <p className="flex space-x-4">
                                <a
                                    className="no-underline outline-none"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/voducthang/"
                                >
                                    <LinkedinIcon width={24} height={24} />
                                </a>
                                <a
                                    className="no-underline outline-none"
                                    target="_blank"
                                    href="https://github.com/voducthang16"
                                >
                                    <GithubIcon width={24} height={24} className="fill-white" />
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
