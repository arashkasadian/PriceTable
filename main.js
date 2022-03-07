/**
 * allCards are objects that are used to display the cards
 * @type {Array}
 */

const allCards = [


    {
        id: 1,
        name: 'First Category',
        cards: [
            card1 = {
                id: 1,
                title: "standard",
                sampletext: [
                    {
                        text: "hello",
                        available: true,
                    },
                    {
                        text: "simple",
                        available: false,
                    },
                    {
                        text: "ping",
                        available: true,
                    },
                ],
                price: 10,
            },
            card2 = {
                id: 2,
                title: "business",
                sampletext: [
                    {
                        text: "hello-again",
                        available: true,
                    },
                ],
                price: 20,
            },
            card3 = {
                id: 3,
                title: "freeplan",
                sampletext: [
                    {
                        text: "hello-anotehr",
                        available: false,
                    },
                ],
                price: 20,
            },

        ],
        status: true,
    },
    {
        id: 2,
        name: 'sec Category',
        cards: [
            card1 = {
                id: 1,
                title: "cheap",
                sampletext: [
                    {
                        text: "free",
                        available: true,
                    },
                    {
                        text: "speedy",
                        available: false,
                    },
                    {
                        text: "slow",
                        available: true,
                    },
                ],
                price: 5,
            },
            card2 = {
                id: 2,
                title: "less",
                sampletext: [
                    {
                        text: "animals",
                        available: true,
                    },
                ],
                price: 10,
            },
            card3 = {
                id: 3,
                title: "sport",
                sampletext: [
                    {
                        text: "sports",
                        available: false,
                    },
                ],
                price: 40,
            },
            card4 = {
                id: 4,
                title: "austronant",
                sampletext: [
                    {
                        text: "sports",
                        available: false,
                    },
                ],
                price: 100,
            },

        ],
        status: true,
    },
    {
        id: 3,
        name: 'third Category',
        cards: [
            card1 = {
                id: 1,
                title: "standard",
                sampletext: [
                    {
                        text: "hello",
                        available: true,
                    },
                    {
                        text: "simple",
                        available: false,
                    },
                    {
                        text: "ping",
                        available: true,
                    },
                ],
                price: 10,
            },
            card2 = {
                id: 2,
                title: "business",
                sampletext: [
                    {
                        text: "hello-again",
                        available: true,
                    },
                ],
                price: 20,
            },
            card3 = {
                id: 3,
                title: "freeplan",
                sampletext: [
                    {
                        text: "hello-anotehr",
                        available: false,
                    },
                ],
                price: 20,
            },

        ],
        status: false,
    },

]


//close Cards Modal
const closeModal =()=>{
    document.querySelector(".modal-root").innerHTML="";
}


/**
 * loadModal gets index and numer of allcard object to find the card that we want to use
 * @param {number}
 * @param {number}
*/

const loadModal = (cardnumber, index) => {
    let cardModal="";

    // submit our form and add text to card
    const submitform=()=>{
        let inpvalue= document.querySelector(".card-input").value;
        let checkvalue= document.querySelector(".card-checkbox").checked;
        if (inpvalue.length > 0) {
            allCards[cardnumber].cards[index].sampletext=[...allCards[cardnumber].cards[index].sampletext,{text:inpvalue,available:checkvalue}];
            document.querySelector(".card-input").value="";
            loadCards(cardnumber);
        }
    }



    /**
     * @type {string}
     */


        cardModal =
            `
                <div class="modal">
                <span style="color:red;" class="closeModal"> X </span>
                <p>do you want to buy ${allCards[cardnumber].cards[index].title}?</p>
                <h2>${allCards[cardnumber].cards[index].price} dollars</h2>
                <form class="card-form">
                    <input class="card-input" type="text"  placeholder="Enter text">
                    <label for="available">done?</label>
                    <input id="available" class="card-checkbox" type="checkbox">
                    <button class="card-btn">add</button>
                </form>
                </div>
             `;

    if (cardModal) {
        document.querySelector(".modal-root").innerHTML = cardModal;
    } else {
        document.querySelector(".modal-root").innerHTML = "nomodal";
    }
    document.querySelectorAll(".closeModal").forEach(value => {
        value.onclick =() =>{
            closeModal();
        }
    });
    document.querySelectorAll(".card-form").forEach(value => {
        value.addEventListener("submit", () =>{
            submitform();
        })
    });

}



/**
 * this function try to load cards depend on click on links
 * @param {number} i
 * @return {string}
 */

const loadCards = (i) => {
    if (allCards[i].status) {

        const item = allCards[i].cards.map(e => {
            let simpletext = "";

            e.sampletext.forEach(cardtext => {
                simpletext +=
                    `<li>
            <i class='fa ${cardtext.available ? "fa-check" : "fa-close"}'></i>
            <p>
                ${cardtext.text}
            </p>
        </li>`
            });

            return (
                `
    <div key="${e.id}" class="main">
        <div class="card-price">
            <h3>$${e.price}/Month</h3>
        </div>
        <div class="card-body">
            <h2 class="card-title">${e.title}</h2>
            <ul class="card-list">
                ${simpletext}
                <button class="card-btn">shop now</button>
            </ul>
        </div>
    </div>

    `
            )


        })

        document.querySelector(".root").innerHTML = item;
    } else {
        document.querySelector(".root").innerHTML = "<h3>unfortunetly this plan is disabled</h3>";
    }
    document.querySelectorAll(".card-btn").forEach((value,key) => {
        value.onclick =() =>{
            loadModal(i,key);
        }
    })
}



// map cards name to creat link for categories

const link = allCards.map( e => {

    return (
        `
        <a href="#" key="${e.id}" class="header-links">${e.name}</a>

        `
    )


})

document.querySelector(".header").innerHTML = link;

document.querySelectorAll(".header-links").forEach((value,key) => {
    value.onclick =() =>{
        loadCards(key);
    }
})


//first time load cards
loadCards(0);