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
            ]
        },
        methods: {
        },
        mounted() {
        }
    }
);
