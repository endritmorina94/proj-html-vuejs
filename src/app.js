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
            ]
        },
        methods: {
        },
        mounted() {
        }
    }
);
