

var app = new Vue(
    {
        el: '#root',
        data: {
            //Informazioni Azienda Proprietaria
            companyInfo: {
                name: "Example Inc.",
                info_1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                info_2: "Praesent diam lacus, dapibus sed imperdiet consectetur.",
                address: " Main Avenue, 987",
                daysAvailability: "Mon - Sat",
                timeAvailability: "9:00 - 18:00",
                phone: "+1 (305) 1234-5678",
                email: "hello@example.com",
                facebook_link: "#",
                twitter_link: "#",
                linkedin_link: "#"
            },

            //Sezioni Pagina
            sections: [
                "home",
                "services",
                "about",
                "projects",
                "results"
            ],

            //Tipi di Servizi Offerti
            services: [
                {
                    name: "Audit & Assurance",
                    description: "Lorem ipsum dolor si amet consectetur adipiscing elit.",
                    icon: "fas fa-sitemap"
                },
                {
                    name: "Financial Advisory",
                    description: "Lorem ipsum dolor si amet consectetur adipiscing elit.",
                    icon: "fas fa-briefcase"
                },
                {
                    name: "Analytics and M&A",
                    description: "Lorem ipsum dolor si amet consectetur adipiscing elit.",
                    icon: "fas fa-chart-bar"
                },
                {
                    name: "Middle Marketing",
                    description: "Lorem ipsum dolor si amet consectetur adipiscing elit.",
                    icon: "fas fa-plane"
                },
                {
                    name: "Legal Consulting",
                    description: "Lorem ipsum dolor si amet consectetur adipiscing elit.",
                    icon: "fas fa-globe"
                },
                {
                    name: "Regulatory Risk",
                    description: "Lorem ipsum dolor si amet consectetur adipiscing elit.",
                    icon: "fas fa-inbox"
                }
            ],

            //Caratteristiche dell'Azienda
            features: [
                {
                    name: "Tradition",
                    description: "Lorem ipsum dolor si amet consectetur adipiscing elit.",
                    icon: "fas fa-medal"
                },
                {
                    name: "Security",
                    description: "Lorem ipsum dolor si amet consectetur adipiscing elit.",
                    icon: "fas fa-lock"
                },
                {
                    name: "Certificate",
                    description: "Lorem ipsum dolor si amet consectetur adipiscing elit.",
                    icon: "far fa-edit"
                },
                {
                    name: "Expertise",
                    description: "Lorem ipsum dolor si amet consectetur adipiscing elit.",
                    icon: "fas fa-graduation-cap"
                }
            ],

            //Progetti dell'Azienda
            projects: [
                {
                    type: "Institutional",
                    name: "Academic professional program in social media",
                    description: "Lorem ipsum dolor si amet, consectetur adipiscing elit.",
                    img: "img/project-1.jpg"
                },
                {
                    type: "Social",
                    name: "President's speech at the annual meeting",
                    description: "Lorem ipsum dolor si amet, consectetur adipiscing elit.",
                    img: "img/project-2.jpg"
                },
                {
                    type: "Events",
                    name: "International business trip in Shangai",
                    description: "Lorem ipsum dolor si amet, consectetur adipiscing elit.",
                    img: "img/project-3.jpg"
                },
                {
                    type: "Innovation",
                    name: "Technology workshop with education theme",
                    description: "Lorem ipsum dolor si amet, consectetur adipiscing elit.",
                    img: "img/project-4.jpg"
                },
                {
                    type: "Environment",
                    name: "Donation of clothes and food to the partner NGO",
                    description: "Lorem ipsum dolor si amet, consectetur adipiscing elit.",
                    img: "img/project-5.jpg"
                },
                {
                    type: "Technology",
                    name: "Confraternization of the procurement team",
                    description: "Lorem ipsum dolor si amet, consectetur adipiscing elit.",
                    img: "img/project-6.jpg"
                }
            ],

            //Numeri dell'Azienda
            numbers: [
                {
                    type: "Certifications",
                    count: 128
                },
                {
                    type: "Employees",
                    count: 230
                },
                {
                    type: "Customers",
                    count: 517
                },
                {
                    type: "Countries Served",
                    count: 94
                }
            ],

            //Partners dell'Azienda
            partners: [
                {
                    name: "jQuery",
                    img: "img/logo-4.png"
                },
                {
                    name: "less",
                    img: "img/logo-5.png"
                },
                {
                    name: "WooCommerce",
                    img: "img/logo-1.png"
                },
                {
                    name: "WordPress",
                    img: "img/logo-2.png"
                },
                {
                    name: "Pingdom",
                    img: "img/logo-3.png"
                }
            ],

            //Link del Footer
            footerLinks: [
                {
                    title: "About",
                    links: [
                        "The Company", "Institutional", "Social & Events", "Innovation", "Environment", "Technology"
                    ]
                },
                {
                    title: "Services",
                    links: [
                        "Audit & Assurance", "Financial Advisory", "Analytics M&A", "Middle Marketing", "Legal Consulting", "Regulatory Risk"
                    ]
                },
                {
                    title: "Support",
                    links: [
                        "Responsibility", "Terms of Use", "About Cookies", "Privacy Policy", "Accessibility", "Information"
                    ]
                }
            ],

            //Variabile flag per scrolling
            scrolled: false

        },

        methods: {
            //Funzione/listener per lo scrolling della pagina
            handleScroll () {
                this.scrolled = window.scrollY > 0;
            }

        },

        created () {
            window.addEventListener('scroll', this.handleScroll);
        },

        destroyed () {
            window.removeEventListener('scroll', this.handleScroll);
        },

        mounted() {
            //Primo Slider, contenuto nel Banner
            const swiper = new Swiper('.swiper-container', {
                speed: 300,
                autoplay: {
                    delay: 10000,
                    disableOnInteraction: true,
                },
                parallax: true,
                pagination: {
                    el: '.swiper-pagination',
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });

            //Secondo Slider, contenuto nella sezione Results
            const swiper2 = new Swiper('.swiper-container-2', {
                speed: 300,
                slidesPerView: 6,
                spaceBetween: 0,
                loop: true
            });

            //Particles
            particlesJS.load('particles-js', 'src/particles-config.json');
        }
    }
);
