window.sr = ScrollReveal({ reset: true })

const member1Config = {
    opacity: 0,
    duration: 1000,
}

sr.reveal('.member-1', member1Config)

const member2Config = {
    origin: 'left',
    distance: '-100%'
}

sr.reveal('.member-2', member2Config)

const member3Config = {
    origin: 'left',
    distance: '150%',
    delay: 100
}

sr.reveal('.member-3', member3Config)

const member4Config = {
    scale: 0,
    delay: 100,
    easing: 'ease-out',
}

sr.reveal('.member-4', member4Config)

const member5Config = {
    origin: 'bottom',
    distance: '100%',
    easing: 'ease-in'
}

sr.reveal('.member-5', member5Config)