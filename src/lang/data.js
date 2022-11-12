
export const navData = [
    {
        english: "Skills",
        spanish: "Aptitudes",
        section: "#skills",
    },
    {
        english: "Projects",
        spanish: "Proyectos",
        section: "#projects",
    },
    {
        english: "Contact",
        spanish: "Contacto",
        section: "#contact",
    },
];

export const welcomeData = {
    english: {
        h4Text: "Welcome!",
        h3Text: "I am Enzo Tassi Ferrari",
        h1Text: "Front End Developer",
    },
    spanish: {
        h4Text: "Bienvenido!",
        h3Text: "Soy Enzo Tassi Ferrari",
        h1Text: "Desarrollador Front End",
    },
    personalInfo: {
        address: "Córdoba Capital, Argentina",
        phone: "+54 9 3515471047",
        email: "tassienzo@gmail.com",
    },
};

export const socialLinks = [
    {
        name: "Instagram",
        url: "https://www.instagram.com/enzotassi/",
        socialIcon: "fa-brands fa-instagram",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/enzo-tassi-ferrari-8643281bb/",
        socialIcon: "fa-brands fa-linkedin",
    },
    {
        name: "Github",
        url: "https://github.com/Kupfeev",
        socialIcon: "fa-brands fa-github",
    },
    {
        name: "Gitlab",
        url: "https://gitlab.com/Kupfeev",
        socialIcon: "fa-brands fa-gitlab",
    },
];

export const skillText = {
    english: {
        h2Text: "Skills",
        h3Text: "And more to come...",
        quote: "Learning never exhausts the mind.",
    },

    spanish: {
        h2Text: "Aptitudes",
        h3Text: "Y aún más por venir...",
        quote: "Aprender nunca agota a la mente.",
    },
};

export const skillList = [
    {
        cardClass: "direct-card row g-0",
        english: "Web Structure and Style",
        spanish: "Estructura y Estilo Web",
        skillIcon: "fa-solid fa-code",
        list: [
            {
                english: "HTML5",
                skillIcon: "fa-brands fa-html5",
                span: {
                    english: "",
                    spanish: "",
                }
            }, 
            {
                english: "CSS3",
                skillIcon: "fa-brands fa-css3",
                span: {
                    english: "",
                    spanish: "",
                }
            },
            {
                english: "Sass",
                skillIcon: "fa-brands fa-sass",
                span: {
                    english: "",
                    spanish: "",
                }
            },
            {
                english: "Bootstrap",
                skillIcon: "fa-brands fa-bootstrap",
                span: {
                    english: "",
                    spanish: "",
                }
            },
            {
                english: "Material UI",
                skillIcon: "fa-brands fa-react",
                span: {
                    english: "",
                    spanish: "",
                }
            },
            
        ],
    },
    {
        cardClass: "inverted-card row g-0",
        english: "Javascript",
        skillIcon: "fa-brands fa-square-js",
        list: [
            {
                english: "EcmaScript 6",
                skillIcon: "fa-brands fa-square-js",
                span: {
                    english: "",
                    spanish: "",
                }
            }, 
            {
                english: "React",
                skillIcon: "fa-brands fa-react",
                span: {
                    english: "This site is made using this framework!",
                    spanish: "Este sitio está construido utilizando este framework!",
                }
            },
            {
                english: "Redux",
                skillIcon: "fa-solid fa-arrows-spin",
                span: {
                    english: "",
                    spanish: "",
                }
            },
            {
                english: "Firebase & Firestore",
                skillIcon: "fa-brands fa-google",
                span: {
                    english: "Authentication & Database",
                    spanish: "Autenticación y Base de Datos",
                }
            },
            {
                english: "Jest Testing",
                skillIcon: "fa-solid fa-flask-vial",
                span: {
                    english: "Unit and Integration testing",
                    spanish: "Pruebas unitarias y de Integración",
                }
            },
            
        ],
    },
    {
        cardClass: "direct-card row g-0",
        english: "Teamwork",
        spanish: "Trabajo en equipo",
        skillIcon: "fa-solid fa-people-group",
        list: [
            {
                english: "Git",
                skillIcon: "fa-solid fa-code-branch",
                span: {
                    english: "Experience using GitHub and Gitlab",
                    spanish: "Experiencia usando GitHub y GitLab",
                }
            }, 
            {
                english: "Agile",
                skillIcon: "fa-solid fa-list-check",
                span: {
                    english: "Kanban board & SCRUM",
                    spanish: "Tablero Kanban y SCRUM",
                }
            },
            {
                english: "Language",
                spanish: "Idiomas",
                skillIcon: "fa-solid fa-language",
                span: {
                    english: "Native Spanish & Fluent english (written and spoken)",
                    spanish: "Español nativo e Inglés fluido (escrito y oral)",
                }
            },
            {
                english: "Experience",
                spanish: "Experiencia",
                skillIcon: "fa-solid fa-briefcase",
                span: {
                    english: "Work ethics and experience working in groups",
                    spanish: "Ética de trabajo y experiencia trabajando en grupos",
                }
            },
            {
                english: "Willing to learn",
                spanish: "Ganas de aprender",
                skillIcon: "fa-solid fa-book",
                span: {
                    english: "This section is made dynamicly so it's easier to add new skills!",
                    spanish: "Esta sección está construida dinámicamente para poder agregar nuevas aptutides facilmente!",
                }
            },
        ],
    },
];

export const projectsText = {
    english: {
        h2Text: "Projects",
        button1: "Take me there!",
        button2: "Github",
    },

    spanish: {
        h2Text: "Proyectos",
        button1: "Llevame!",
        button2: "Github",
    },
};

export const projectsList = [
    // ! CAUTION: THREE PROJECTS MAXIMUM!
    {
        appTitle: "Gif App React",
        appName: "gifapp",
        appLink: "https://gif-app-react-kupfeev.netlify.app/",
        gitLink: "https://github.com/Kupfeev/gif-app-react",
        english: "Small App for searching gifs using API. This App is made in React alongside Bootstrap, and Jest for testing.",
        spanish: "Pequeña aplicación para buscar gifs a través de una API. Esta aplicación está desarrollada en React, con ayuda de herramientas como Bootstrap y Jest para testeo.",
    },
    {
        appTitle: "Heroes SPA",
        appName: "heroesSPA",
        appLink: "https://kupfeev-heroes-spa.netlify.app",
        gitLink: "https://github.com/Kupfeev/SPA-Heroes",
        english: "Application about Marvel and DC heroes made in React. It uses ReactRouter v6 and Query Strings for Navigation.",
        spanish: "Aplicación desarollada con React la cual contiene información sobre heroes de Marvel y DC. Utiliza ReactRouter v6 y Query Strings para navegación.",
    },
    {
        appTitle: "Journal App *WIP!!!*",
        appName: "journalapp",
        appLink: "#",
        gitLink: null,
        english: "Application made in React, alongside Material UI to style, Firebase for athentication and Firestore as Database.",
        spanish: "Aplicación desarrollada con React, con ayuda de herramientas como Material UI para los estilos, Firebase para autenticación y Firestore como base de datos.",
    },
];

export const contactText = {
    english: {
        h3Text: "Want to know more about me?",
        h2Text: "Get in touch!",
        labelName: "Your Name",
        helperName: "Fill with your name here.",
        labelEmail: "Your Email",
        helperEmail: "This field requiers a valid email.",
        labelMsg: "Message",
        helperMsg: "Fill with your message here. Feel free to add any other way to contact you.",
        buttonText: "Submit!",
        successTitle: "Thank you for reaching me out!",
        successDesc: "I'll be aswering as soon as posible. Remember to check your emails!",
    },

    spanish: {
        h3Text: "¿Quieres saber más de mi?",
        h2Text: "¡Contactame!",
        labelName: "Su Nombre",
        helperName: "Completa con tu nombre aqui.",
        labelEmail: "Su correo electrónico",
        helperEmail: "Este campo requiere un email válido.",
        labelMsg: "Mensaje",
        helperMsg: "Completa con tu mensaje aqui. Sientase libre de agregar otros métodos de contacto.",
        buttonText: "Enviar!",
        successTitle: "Muchas gracias por contactarte conmigo!",
        successDesc: "Responderé lo antes posible. Recuerde de estar atento a su email!",
    },
};

export const footerText = {
    english: {
        mutedText: "I made this page using React, Bootstrap and SASS."
    },
    spanish: {
        mutedText: "Esta página fue diseñada por mi utilizando React, Bootstrap y SASS."
    },
};