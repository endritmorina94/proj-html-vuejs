
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

            //Indice Sezione Attiva
            activeSectionIndex : 0,

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

            //Tipi di Progetto
            projectTypes: [
                "All",
                "Institutional",
                "Social",
                "Events",
                "Innovation",
                "Environment",
                "Technology"
            ],

            //Indice Progetto Attivo
            activeProjectTypeIndex : 0,

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
                        {
                            name: "The Company",
                            url: "#"
                        },
                        {
                            name: "Institutional",
                            url: "#"
                        },
                        {
                            name: "Social & Events",
                            url: "#"
                        },
                        {
                            name: "Innovation",
                            url: "#"
                        },
                        {
                            name: "Environment",
                            url: "#"
                        },
                        {
                            name: "Technology",
                            url: "#"
                        }
                    ]
                },
                {
                    title: "Services",
                    links: [
                        {
                            name: "Audit & Assurance",
                            url: "#"
                        },
                        {
                            name: "Financial Advisory",
                            url: "#"
                        },
                        {
                            name: "Analytics M&A",
                            url: "#"
                        },
                        {
                            name: "Middle Marketing",
                            url: "#"
                        },
                        {
                            name: "Legal Consulting",
                            url: "#"
                        },
                        {
                            name: "Regulatory Risk",
                            url: "#"
                        }
                    ]
                },
                {
                    title: "Support",
                    links: [
                        {
                            name: "Responsibility",
                            url: "#"
                        },
                        {
                            name: "Terms of Use",
                            url: "#"
                        },
                        {
                            name: "About Cookies",
                            url: "#"
                        },
                        {
                            name: "Privacy Policy",
                            url: "#"
                        },
                        {
                            name: "Accessibility",
                            url: "#"
                        },
                        {
                            name: "Information",
                            url: "#"
                        }
                    ]
                }
            ],

            //Variabile flag per scrolling
            scrolled: false,
        },

        methods: {
            //Funzione/listener per lo scrolling della pagina
            handleScroll () {
                this.scrolled = window.scrollY > 0;
            },

            //Funzione per togglare la classe active
            checkActiveSection(index) {
                return (index == this.activeSectionIndex) ? true : false
            },

            //Funzione per cambiare l'indice del tipo di progetto selezionato
            changeSectionIndex(index) {
                this.activeSectionIndex = index;
            },

            //Funzione per togglare la classe active
            checkActiveProjectType(index) {
                return (index == this.activeProjectTypeIndex) ? true : false
            },

            //Funzione per cambiare l'indice del tipo di progetto selezionato
            changeIndex(index) {
                this.activeProjectTypeIndex = index;
            },

            //Funzione per filtrare i progetti per tipo
            checkIfProjectTypeActive(index) {
                if (this.projects[index].type == this.projectTypes[this.activeProjectTypeIndex] || this.activeProjectTypeIndex == 0) {
                    return true;
                } else {
                    return false;
                }
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
                    el: ".swiper-pagination",
                    clickable: true,
                }
            });

            //Secondo Slider, contenuto nella sezione Results
            const swiper2 = new Swiper('.swiper-container-2', {
                speed: 300,
                slidesPerView: 6,
                spaceBetween: 0,
                loop: true
            });

            //Particles
            particlesJS('particles-js',
            {
              "particles": {
                "number": {
                  "value": 15,
                  "density": {
                    "enable": true,
                    "value_area": 1000
                  }
                },
                "color": {
                  "value": "#80909a"
                },
                "shape": {
                  "type": "edge",
                  "stroke": {
                    "width": 0,
                    "color": "#000"
                  },
                  "polygon": {
                    "nb_sides": 6
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.3,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 100,
                  "random": false,
                  "anim": {
                    "enable": true,
                    "speed": 10,
                    "size_min": 40,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": false,
                  "distance": 200,
                  "color": "#ffffff",
                  "opacity": 1,
                  "width": 2
                },
                "move": {
                  "enable": true,
                  "speed": 6,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "grab"
                  },
                  "onclick": {
                    "enable": false,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }
            );
        }
    }
);
