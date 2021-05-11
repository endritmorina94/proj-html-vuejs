var app = new Vue(
    {
        el: '#root',
        data: {
            contactInfo: {
                daysAvailability: "Mon - Sat",
                timeAvailability: "9:00 - 18:00",
                phone: "+1 (305) 1234-5678",
                email: "hello@example.com",
                facebook_link: "#",
                twitter_link: "#",
                linkedin_link: "#"
            },
            sections: [
                "Home",
                "Services",
                "About",
                "Projects",
                "Results"
            ],
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
            ]
        },
        methods: {
        },
        mounted() {
        }
    }
);
