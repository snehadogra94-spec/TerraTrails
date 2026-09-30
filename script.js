/* =================================
   DARK MODE
================================= */

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    const savedTheme =
        localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark");

        themeBtn.innerHTML = "☀️";

    }


    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            themeBtn.innerHTML = "☀️";

            localStorage.setItem(
                "theme",
                "dark"
            );

        } else {

            themeBtn.innerHTML = "🌙";

            localStorage.setItem(
                "theme",
                "light"
            );

        }

    });

}


/* =================================
   FAVORITES
================================= */

const favorites =
    document.querySelectorAll(".favorite");

favorites.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");

        if (button.classList.contains("active")) {

            button.innerHTML = "♥";

        } else {

            button.innerHTML = "♡";

        }

    });

});


/* =================================
   SEARCH + FILTER
================================= */

const searchInput =
    document.getElementById("searchInput");

const categoryFilter =
    document.getElementById("categoryFilter");


if (searchInput && categoryFilter) {

    const cards =
        document.querySelectorAll(".destination-card");


    function filterCards() {

        const search =
            searchInput.value
            .toLowerCase()
            .trim();

        const category =
            categoryFilter.value;


        cards.forEach(card => {

            const name =
                card.dataset.name;

            const cardCategory =
                card.dataset.category;


            const searchMatch =
                name.includes(search);

            const categoryMatch =
                category === "all" ||
                category === cardCategory;


            if (
                searchMatch &&
                categoryMatch
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    }


    searchInput.addEventListener(
        "input",
        filterCards
    );

    categoryFilter.addEventListener(
        "change",
        filterCards
    );

}


/* =================================
   DESTINATION DETAILS
================================= */

const destinations = {

    "Manali": {

        location: "Himachal Pradesh, India",

        description:
        "Manali is a beautiful Himalayan destination surrounded by mountains, rivers and green valleys.",

        activities:
        "Trekking, skiing, camping, river rafting",

        best:
        "October to June"

    },


    "Ladakh": {

        location: "Ladakh, India",

        description:
        "Ladakh is famous for dramatic mountains, high-altitude roads, monasteries and unique landscapes.",

        activities:
        "Road trips, trekking, camping, photography",

        best:
        "May to September"

    },


    "Munnar": {

        location: "Kerala, India",

        description:
        "Munnar is surrounded by tea plantations, green hills, forests and waterfalls.",

        activities:
        "Trekking, sightseeing, tea plantation tours",

        best:
        "September to May"

    },


    "Jim Corbett": {

        location: "Uttarakhand, India",

        description:
        "Jim Corbett is known for forests, wildlife and beautiful landscapes.",

        activities:
        "Wildlife safari, bird watching, nature walks",

        best:
        "November to June"

    },


    "Jaisalmer": {

        location: "Rajasthan, India",

        description:
        "Jaisalmer is famous for golden architecture, sand dunes and desert experiences.",

        activities:
        "Camel rides, desert safari, camping",

        best:
        "October to March"

    },


    "Goa": {

        location: "Goa, India",

        description:
        "Goa offers beautiful beaches, coastal landscapes and relaxing experiences.",

        activities:
        "Beach activities, cycling, photography",

        best:
        "November to February"

    }

};


function showDestination(name) {

    const modal =
        document.getElementById(
            "destinationModal"
        );

    const details =
        document.getElementById(
            "destinationDetails"
        );


    const data =
        destinations[name];


    details.innerHTML = `

        <h2>${name}</h2>

        <p>
            📍 ${data.location}
        </p>

        <br>

        <p>
            ${data.description}
        </p>

        <br>

        <p>
            <strong>
                🌿 Activities
            </strong>
        </p>

        <p>
            ${data.activities}
        </p>

        <br>

        <p>
            <strong>
                📅 Best Time
            </strong>
        </p>

        <p>
            ${data.best}
        </p>

        <br>

        <a
            href="planner.html"
            class="btn primary-btn">

            Plan This Trip →

        </a>

    `;


    modal.classList.add("show");

}


function closeDestination() {

    const modal =
        document.getElementById(
            "destinationModal"
        );

    if (modal) {

        modal.classList.remove("show");

    }

}


/* Close modal by clicking outside */

window.addEventListener(
    "click",
    event => {

        const modal =
            document.getElementById(
                "destinationModal"
            );

        if (
            modal &&
            event.target === modal
        ) {

            closeDestination();

        }

    }
);


/* =================================
   TRIP PLANNER
================================= */

const tripForm =
    document.getElementById(
        "tripForm"
    );


if (tripForm) {

    tripForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document.getElementById(
                    "travelerName"
                ).value;


            const destination =
                document.getElementById(
                    "tripDestination"
                ).value;


            const date =
                document.getElementById(
                    "startDate"
                ).value;


            const days =
                document.getElementById(
                    "days"
                ).value;


            const style =
                document.getElementById(
                    "travelStyle"
                ).value;


            const result =
                document.getElementById(
                    "tripResult"
                );


            result.innerHTML = `

                <div>🎒</div>

                <h2>
                    Your Trip is Ready!
                </h2>

                <p>
                    Hello ${name}! Your
                    ${days}-day trip to
                    ${destination}
                    has been planned.
                </p>

                <br>

                <p>
                    📅 Start Date:
                    ${date}
                </p>

                <p>
                    🌿 Travel Style:
                    ${style}
                </p>

                <br>

                <a
                    href="explore.html"
                    class="btn"
                    style="background:#f2c14e;color:#28351f">

                    Explore More →

                </a>

            `;

        }
    );

}


/* =================================
   CONTACT FORM
================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            alert(
                "🌿 Thank you! Your message has been received by TerraTrails."
            );


            contactForm.reset();

        }
    );

}


/* =================================
   DATE
================================= */

const startDate =
    document.getElementById(
        "startDate"
    );


if (startDate) {

    const today =
        new Date()
        .toISOString()
        .split("T")[0];

    startDate.min = today;

}