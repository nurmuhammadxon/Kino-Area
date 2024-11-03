let dataMoveMenu = [
    {
        menu__sections: "Все"
    },
    {
        menu__sections: "Боевики"
    },
    {
        menu__sections: "Приключения"
    },
    {
        menu__sections: "Комедии"
    },
    {
        menu__sections: "Фантастика"
    },
    {
        menu__sections: "Триллеры"
    },
    {
        menu__sections: "Драма"
    }
];

let dataMoves = [
    {
        move__img: "./media/images/Побег из Претории.png",
        move__alt: "Побег из Претории",
        move__ganre: "Триллер",
        film__level: "6.70"
    },
    {
        move__img: "./media/images/Джокер.png",
        move__alt: "Джокер",
        move__ganre: "Триллер, драма, криминал",
        film__level: "8.50"
    },
    {
        move__img: "./media/images/Звёздные войны.png",
        move__alt: "Звёздные войны: Скайуокер. Восход",
        move__ganre: "Фантастика, фэнтези, боевик, приключения",
        film__level: "6.70"
    },
    {
        move__img: "./media/images/Джентльмены.png",
        move__alt: "Джентльмены",
        move__ganre: "Боевик, комедия, криминал",
        film__level: "8.00"
    },
    {
        move__img: "./media/images/Ford против Ferrari.png", move__alt: "Ford против Ferrari",
        move__ganre: "Биография, спорт, драма, боевик",
        film__level: "8.10"
    },
    {
        move__img: "./media/images/3022.png",
        move__alt: "3022",
        move__ganre: "Фантастика, триллер",
        film__level: "4.90"
    },
    {
        move__img: "./media/images/Хищные птицы.png",
        move__alt: "Хищные птицы: Потрясающая история Харли Квинн",
        move__ganre: "Боевик, криминал, комедия",
        film__level: "6.20"
    },
    {
        move__img: "./media/images/Плохие парни навсегда.png",
        move__alt: "Плохие парни навсегда",
        move__ganre: "Боевик, комедия, криминал",
        film__level: "6.90"
    },
    {
        move__img: "./media/images/История игрушек 4.png",
        move__alt: "История игрушек 4",
        move__ganre: "Мультфильм, фэнтези, комедия, приключения ...",
        film__level: "7.80"
    },
    {
        move__img: "./media/images/Однажды Голливуде.png",
        move__alt: "Однажды в… Голливуде",
        move__ganre: "Драма, комедия",
        film__level: "7.70"
    },
    {
        move__img: "./media/images/Солнцестояние.png",
        move__alt: "Солнцестояние",
        move__ganre: "Ужасы, триллер, драма",
        film__level: "7.10"
    }
];

let dataTrailers = [
    {
        move__trailer: `./media/video/Mulan.mp4`,
        alt__move: `Мулан`
    },
    {
        move__trailer: `./media/video/Forsaj 9.mp4`,
        alt__move: `Форсаж 9`
    },
    {
        move__trailer: `./media/video/Black Widow.mp4`,
        alt__move: `Чёрная Вдова`
    },
    {
        move__trailer: `./media/video/A_Quiet_Place_Part_II.mp4`, alt__move: `Тихое место 2`
    }
];

let dataPopular__films__title__list = [
    {
        year__films: "Всё время"
    },
    {
        year__films: "2020"
    },
    {
        year__films: "2019"
    },
    {
        year__films: "2018"
    },
    {
        year__films: "2017"
    },
    {
        year__films: "2016"
    },
    {
        year__films: "2015"
    }
]

let dataActors = [
    {
        actor__image: "./media/images/Квентин Тарантино.png",
        actor__name: "Квентин Тарантино",
        actor__name__latin: "Quentin Tarantino",
        actor__age: "57 лет",
        actor__rating: "1-е место"
    },
    {
        actor__image: "./media/images/Джейсон Стейтем.png",
        actor__name: "Джейсон Стейтем",
        actor__name__latin: "Jason Statham",
        actor__age: "52 года",
        actor__rating: "2-е место"
    },
    {
        actor__image: "./media/images/Тинто Брасс.png",
        actor__name: "Тинто Брасс",
        actor__name__latin: "Tinto Brass",
        actor__age: "87 лет",
        actor__rating: "3-е место"
    },
    {
        actor__image: "./media/images/Джеки Чан.png",
        actor__name: "Джеки Чан",
        actor__name__latin: "Jackie Chan",
        actor__age: "66 лет",
        actor__rating: "4-е место"
    },
    {
        actor__image: "./media/images/Том Харди.png",
        actor__name: "Том Харди",
        actor__name__latin: "Tom Hardy",
        actor__age: "42 года",
        actor__rating: "5-е место"
    },
    {
        actor__image: "./media/images/Акшай Кумар.png",
        actor__name: "Акшай Кумар",
        actor__name__latin: "Akshay Kumar",
        actor__age: "52 года",
        actor__rating: "6-е место"
    },
]

let now__move = document.querySelector('.now__move');

let move__title__box = document.querySelector('.title-box');
let move__mene = document.createElement('ul');
move__mene.classList.add('move__menu');

dataMoveMenu.forEach((moveMenu__item, moeveMenu__index) => {
    let move__menu__item = document.createElement('li');
    move__menu__item.classList.add('move__menu__item');
    move__menu__item.innerHTML = `<a href="#">${moveMenu__item.menu__sections}</a>`;

    move__mene.append(move__menu__item);
});

move__title__box.append(move__mene);
now__move.append(move__title__box);

let moves__box = document.createElement('div');
moves__box.classList.add('moves__box');
moves__box.setAttribute("id", "moves__box")

dataMoves.forEach((move__item, move__index) => {
    let move__box__item = document.createElement('div');
    move__box__item.classList.add('move__item');
    move__box__item.innerHTML = `
        <div class="move__img__box">
            <img class="move__img" src="${move__item.move__img}" alt="${move__item.move__alt}">
            <div class="move__img__box__overlay">
                <button class="move__img__hover__content">Карточка фильма</button>
            </div>
        </div>
        <h3 class="move__title">${move__item.move__alt}</h3>
        <p class="move__ganre">${move__item.move__ganre}</p>    
    `;

    move__box__item.innerHTML += `
     <div class="kino__darajasi__box"> 
        <span class="kino__darajasi">${move__item.film__level}</span>
    </div>
    `

    moves__box.append(move__box__item);
});

now__move.append(moves__box);

now__move.innerHTML += `<button class="all__moves" id="all__moves">Все новинки</button>`;

let moves__box__id__click = document.getElementById("moves__box")
let all__moves__click = document.getElementById("all__moves")

all__moves__click.addEventListener("click", () => {
    moves__box__id__click.classList.toggle('all__movec__click')

})

let new__trailer__section = document.querySelector('.new__trailers');

let trailer__box = document.createElement('div');
trailer__box.classList.add('trailer__move__box');
let trailer__title = document.createElement('div');
trailer__title.classList.add('trailer__title__video');
trailer__title.innerHTML = `
    <div class="trailer__title__video">
        <video class="trailer__video" controls>
            <source src="${dataTrailers[1].move__trailer}" type="video/mp4">
        </video>
    </div>
    <div class="trailer__title__content">
        <h3 class="trailer__move__name">${dataTrailers[1].alt__move}</h3> 
        <ul class="network__list">
            <li class="network__item">
                <a class="network__link" href="#"><i class='bx bxl-vk'></i></a>
            </li>
            <li class="network__item">
                <a class="network__link" href="#"><i class='bx bxl-instagram'></i></a>
            </li>
            <li class="network__item">
                <a class="network__link" href="#"><i class='bx bxl-facebook'></i></a>
            </li>
            <li class="network__item">
                <a class="network__link" href="#"><i class='bx bxl-twitter'></i></a>
            </li>
        </ul>
        <div class="trailer__move__like">
            <div class="like-disklike__box">
                <button onclick="increaseLikes()" class="like__box"><i class='bx bxs-like' style='color:#ffffff'></i></button>
                <p id="like__soni">3 245</p>
            </div>
            <div class="like-disklike__box">
                <button onclick="increaseDislikes()" class="dislike__box"><i class='bx bxs-dislike' style='color:#ffffff'></i></button>
                <p id="dislike__soni">420</p>
            </div>
        </div>
    </div>
`;

new__trailer__section.append(trailer__title);

let likeCount = 3245;
let dislikeCount = 420;

function increaseLikes() {
    likeCount += 1;
    document.getElementById('like__soni').textContent = likeCount;
}

function increaseDislikes() {
    dislikeCount -= 1;
    document.getElementById('dislike__soni').textContent = dislikeCount;
}

trailer__box.innerHTML += `
    <div class="progress__box">
        <span class="progress" id="progress-bar"></span>
    </div>
`

dataTrailers.forEach((item__trailer__move, index__trailer__move) => {
    let trailer__item__box = document.createElement('div');
    trailer__item__box.classList.add('trailer__item');

    trailer__item__box.innerHTML = `
        <video class="trailer__video" controls>
            <source src="${item__trailer__move.move__trailer}" type="video/mp4">
        </video>
        <p class="trailer__name">${item__trailer__move.alt__move}</p>
        <span class="trailer__overlay"></span>
    `;

    trailer__box.append(trailer__item__box);
});

new__trailer__section.append(trailer__box);

let popular__films__section = document.querySelector('.popular__moves__section')

let popular__film__box = document.querySelector(".popular__title__box")

let popular__film__list = document.createElement('ul')
popular__film__list.classList.add('popular__film__list')

dataPopular__films__title__list.forEach((popular__films__title__item) => {
    let popular__film__item__content = document.createElement('li')
    popular__film__item__content.classList.add('popular__film__item')
    popular__film__item__content.innerHTML = `
    <a class="popular__fim__link" href="#">${popular__films__title__item.year__films}</a>
    `
    popular__film__list.append(popular__film__item__content)
    popular__film__box.append(popular__film__list)
})

let popular__films__box = document.createElement('div')
popular__films__box.classList.add('popular__films__box')

dataMoves.forEach((popular__films__move__item) => {
    let popular__move__box = document.createElement('div')
    popular__move__box.classList.add('popular__move__box')
    if (+popular__films__move__item.film__level > 7) {
        popular__move__box.innerHTML = `
        <img class="popular__move" src="${popular__films__move__item.move__img}" alt="${popular__films__move__item.move__alt} move">
        <p class="popular__move__name">${popular__films__move__item.move__alt}</p>
        <p class="popular__move__ganre">${popular__films__move__item.move__ganre}</p>
            <div class="kino__darajasi__box"> 
        <span class="kino__darajasi">${popular__films__move__item.film__level}</span>
    </div>
    `
        popular__films__box.append(popular__move__box)
    }
})

popular__films__section.append(popular__films__box);

let popular__films__list = document.createElement('div');
popular__films__list.classList.add('popular__film__list');

popular__films__list.innerHTML = `
    <button class="arrow__left"><i class='bx bx-left-arrow-alt'></i></button>
    <p class="popular__move__value">4/15</p>
    <button class="arrow__right"><i class='bx bx-right-arrow-alt'></i></button>
`;

let popular__film__value = 4;

function incrementValue() {
    if (popular__film__value < 15) {
        popular__film__value += 1;
        document.querySelector('.popular__move__value').innerText = `${popular__film__value}/15`;
    }
}

function decrementValue() {
    if (popular__film__value > 1) {
        popular__film__value -= 1;
        document.querySelector('.popular__move__value').innerText = `${popular__film__value}/15`;
    }
}

popular__films__section.append(popular__films__list);

document.querySelector('.arrow__left').addEventListener('click', decrementValue);
document.querySelector('.arrow__right').addEventListener('click', incrementValue);

let popular__people__section = document.querySelector(".popular__people__section")

let popular__people__title__box = document.querySelector(".popular__people__title__box")

popular__people__title__box.innerHTML += `
    <ul class="time__popular__list">
        <li class="time__popular__item">
            <a class="time__popular__link" href="#">За год</a>
        </li>
        <li class="time__popular__item">
            <a class="time__popular__link" href="#">За месяц</a>
        </li>
        <li class="time__popular__item">
            <a class="time__popular__link" href="#">За неделю</a>
        </li>
    </ul>
`
let actors__box = document.createElement("div");
actors__box.classList.add("actors__box");

let all__actor__info__div = document.createElement("div")
all__actor__info__div.classList.add("actors__ragting__info")

dataActors.forEach((actor__item) => {
    if (actor__item.actor__rating.charAt(0) < 3) {
        const actorInfoBox = document.createElement('div');
        actorInfoBox.className = 'actor__info__box';
        actorInfoBox.innerHTML = `
            <img src="${actor__item.actor__image}" alt="${actor__item.actor__name}" class="actor__info__img">
            <div class="actor__info">
                <p class="actor__rating">${actor__item.actor__rating}</p>
                <span>
                    <h3 class="actor__title__name">${actor__item.actor__name}</h3>
                    <p class="actor__name__latin">${actor__item.actor__name__latin}</p>
                    <p class="actor__age">${actor__item.actor__age}</p>
                </span>
            </div>
        `;

        actors__box.appendChild(actorInfoBox);
    }


    if (actor__item.actor__rating.charAt(0) > 2) {
        const all__actor__info__box = document.createElement("div")
        all__actor__info__box.classList.add("actor__info")
        all__actor__info__box.innerHTML = `           
                <span>
                    <h3 class="actor__title__name">${actor__item.actor__name}</h3>
                    <p class="actor__name__latin">${actor__item.actor__name__latin}</p>
                    <p class="actor__age">${actor__item.actor__age}</p>
                </span>
                <p class="actor__rating">${actor__item.actor__rating}</p>
        `
        all__actor__info__div.append(all__actor__info__box)
    }

});
actors__box.append(all__actor__info__div)

popular__people__section.appendChild(actors__box);
