import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Mário",
    lastName: "Sakamoto",
    initials: "contato", 
    position: "Desenvolvedor front end",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
        {
            emoji: "📧",
            text: 'mariosakamoto.dev@gmail.com'
        },
    ],
    socials: [
        {
            link: "https://github.com/MarioSakamoto",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/m%C3%A1rio-sakamoto-78855419b/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "mailto:mariosakamoto.dev@gmail.com",
            icon: "fa fa-envelope",
            label: "email"
        },
        {
            link: "https://wa.me/5534998258930",
            icon: "fa fa-whatsapp",
            label: 'whatsapp'
        },
        
    ],
    bio: "Aos quase 30 anos de idade descobri o que me faltava, era ter uma carreira profissional. Em Janeiro de 2022 comecei a minha jornada na programação, o ínicio de tudo. Desde então venho ampliando meus conhecimentos na área, logo descobri o desenvolvimento Web e fiquei simplesmente apaixonado pelo front end! E a cada dia que passa eu tenho mais certeza que quero isso para minha vida!",
    bio2: "Estou exposto a aprender mais e fazer parte de uma equipe para um crescimento exponencial! Adoro fazer pesquisas e elas me levaram a seguintes ferramentas e habilidades que uso diariamente, citadas logo a baixo...",
    skills:
        {
            proficientWith: ['JavaScript', 'TypeScript', 'React', 'Next.js','Node.js', 'Sass', 'HTML', 'CSS', 'Git', 'Github'],
            exposedTo: ['Express.js', 'MongoDB', 'PostgreSQL','Prisma', 'Postbird', 'React Native']
        }
    ,
    hobbies: [
        {
            label: 'Futebol',
            emoji: '⚽'
        },
        {
            label: 'Lutas',
            emoji: '🥋'
        },
        {
            label: 'Cinema',
            emoji: '🎥'
        },
        {
            label: 'Receitas caseiras',
            emoji: '🌶'
        }

    ],
    portfolio: [ 
        {
            title: "Projeto 1",
            source: "https://github.com/MarioSakamoto/SujeitoPizza-FullStack-Web-Mobile", 
            image: mock1
        },
        {
            title: "Projeto 2",
            source: "", 
            image: mock2
        },
        {
            title: "Projeto 3",
            source: "",
            image: mock3
        }
    ]
}