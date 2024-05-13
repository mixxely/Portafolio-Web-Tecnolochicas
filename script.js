var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter
    .typeString('Michelle Mercado')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Programadora Frontend JR')
    .pauseFor(1500)
    .deleteAll()
    .typeString('<strong>Estudiante</strong>')
    .pauseFor(1500)
    .deleteAll()
    .typeString('Amante del arte')
    .pauseFor(1500)
    .start();