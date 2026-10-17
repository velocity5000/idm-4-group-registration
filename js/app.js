/* =========================================================
   IDM HERITAGE RUN 4
   PARTNER & GROUP RESERVATION PORTAL
   ========================================================= */

const MAX_PARTICIPANTS = 11;

const PRICES = {
    "5K": 899,
    "10K": 1499,
    "21K": 1899,
    "42K": 2199
};

const SINGLET_SIZES = [
    "2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"
];

const SHIRT_SIZES = [
    "2XS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"
];

const participantsContainer =
    document.getElementById("participantsContainer");

const addParticipantBtn =
    document.getElementById("addParticipantBtn");

const participantCount =
    document.getElementById("participantCount");

const grandTotal =
    document.getElementById("grandTotal");

const submitReservationBtn =
    document.getElementById("submitReservationBtn");

const waiverAccepted =
    document.getElementById("waiverAccepted");

const privacyAccepted =
    document.getElementById("privacyAccepted");

let participantNumber = 0;


/* =========================================================
   CREATE OPTIONS
   ========================================================= */

function createOptions(options, placeholder) {

    let html =
        `<option value="">${placeholder}</option>`;

    options.forEach(option => {

        html +=
            `<option value="${option}">${option}</option>`;

    });

    return html;
}


/* =========================================================
   CREATE PARTICIPANT
   ========================================================= */

function createParticipant() {

    if (participantNumber >= MAX_PARTICIPANTS) {
        return;
    }

    participantNumber++;

    const number =
        String(participantNumber).padStart(2, "0");

    const participantCard =
        document.createElement("div");

    participantCard.className =
        "participant-card";

    participantCard.dataset.participant =
        participantNumber;

    participantCard.innerHTML = `

        <div class="participant-card-header">

            <div class="participant-title">

                <div class="participant-badge">
                    ${number}
                </div>

                <div>
                    <strong>Participant ${number}</strong>
                    <span>Runner information</span>
                </div>

            </div>

            ${
                participantNumber > 1
                    ? `
                        <button
                            type="button"
                            class="remove-participant"
                            data-remove="${participantNumber}"
                        >
                            <i class="fa-solid fa-trash-can"></i>
                            Remove
                        </button>
                    `
                    : ""
            }

        </div>


        <div class="participant-grid">

            <div class="form-field">

                <label>
                    First Name
                    <span>*</span>
                </label>

                <input
                    type="text"
                    name="participant_${participantNumber}_first_name"
                    placeholder="First name"
                    required
                >

            </div>


            <div class="form-field">

                <label>
                    Last Name
                    <span>*</span>
                </label>

                <input
                    type="text"
                    name="participant_${participantNumber}_last_name"
                    placeholder="Last name"
                    required
                >

            </div>


            <div class="form-field">

                <label>
                    Gender
                    <span>*</span>
                </label>

                <select
                    name="participant_${participantNumber}_gender"
                    required
                >

                    <option value="">
                        Select gender
                    </option>

                    <option value="Male">
                        Male
                    </option>

                    <option value="Female">
                        Female
                    </option>

                </select>

            </div>


            <div class="form-field">

                <label>
                    Birth Date
                    <span>*</span>
                </label>

                <input
                    type="date"
                    name="participant_${participantNumber}_birth_date"
                    required
                >

            </div>


            <div class="form-field">

                <label>
                    Country
                    <span>*</span>
                </label>

                <input
                    type="text"
                    name="participant_${participantNumber}_country"
                    placeholder="e.g. Philippines"
                    value="Philippines"
                    required
                >

            </div>


            <div class="form-field">

                <label>
                    Address
                    <span>*</span>
                </label>

                <input
                    type="text"
                    name="participant_${participantNumber}_address"
                    placeholder="Address"
                    required
                >

            </div>


            <div class="form-field">

                <label>
                    Emergency Contact Name
                    <span>*</span>
                </label>

                <input
                    type="text"
                    name="participant_${participantNumber}_emergency_name"
                    placeholder="Full name"
                    required
                >

            </div>


            <div class="form-field">

                <label>
                    Emergency Contact Number
                    <span>*</span>
                </label>

                <input
                    type="tel"
                    name="participant_${participantNumber}_emergency_number"
                    placeholder="09XXXXXXXXX"
                    required
                >

            </div>


            <div class="form-field distance-field">

                <label>
                    Race Distance
                    <span>*</span>
                </label>

                <select
                    class="distance-select"
                    name="participant_${participantNumber}_distance"
                    required
                >

                    <option value="">
                        Select race distance
                    </option>

                    <option value="5K">
                        5K Fun Run — ₱899
                    </option>

                    <option value="10K">
                        10K Challenge Run — ₱1,499
                    </option>

                    <option value="21K">
                        21K Half Marathon — ₱1,899
                    </option>

                    <option value="42K">
                        42K Full Marathon — ₱2,199
                    </option>

                </select>

            </div>


            <div class="form-field">

                <div class="field-label-row">

                    <label>
                        Singlet Size
                        <span>*</span>
                    </label>

                    <button
                        type="button"
                        class="size-chart-link"
                        data-chart="singlet"
                    >
                        View Size Chart
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </button>

                </div>

                <select
                    name="participant_${participantNumber}_singlet"
                    required
                >

                    ${createOptions(
                        SINGLET_SIZES,
                        "Select singlet size"
                    )}

                </select>

            </div>


            <div class="form-field finisher-shirt-field is-disabled">

                <div class="field-label-row">

                    <label>
                        Finisher Shirt Size
                        <span class="shirt-required">*</span>
                    </label>

                    <button
                        type="button"
                        class="size-chart-link"
                        data-chart="shirt"
                    >
                        View Size Chart
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </button>

                </div>

                <select
                    name="participant_${participantNumber}_shirt"
                    disabled
                >

                    ${createOptions(
                        SHIRT_SIZES,
                        "Select shirt size"
                    )}

                </select>

            </div>


            <div class="form-field full-width">

                <label>
                    Bib Name
                    <span style="color:#999aa8;">
                        (Optional)
                    </span>
                </label>

                <input
                    type="text"
                    name="participant_${participantNumber}_bib_name"
                    maxlength="20"
                    placeholder="Name to appear on the race bib"
                >

                <small>
                    Maximum 20 characters.
                </small>

            </div>

        </div>
    `;

    participantsContainer.appendChild(
        participantCard
    );

    attachParticipantEvents(
        participantCard
    );

    updateParticipantCounter();
    updateAddButton();
    updateSummary();
}


/* =========================================================
   PARTICIPANT EVENTS
   ========================================================= */

function attachParticipantEvents(card) {

    const distanceSelect =
        card.querySelector(".distance-select");

    const shirtField =
        card.querySelector(".finisher-shirt-field");

    const shirtSelect =
        shirtField.querySelector("select");

    distanceSelect.addEventListener(
        "change",
        () => {

            updateFinisherShirt(
                distanceSelect,
                shirtField,
                shirtSelect
            );

            updateSummary();
        }
    );


    card.querySelectorAll(
        "input, select"
    ).forEach(field => {

        field.addEventListener(
            "input",
            clearFieldError
        );

        field.addEventListener(
            "change",
            clearFieldError
        );

    });


    const removeButton =
        card.querySelector(
            ".remove-participant"
        );

    if (removeButton) {

        removeButton.addEventListener(
            "click",
            () => {
                removeParticipant(card);
            }
        );

    }


    card.querySelectorAll(
        ".size-chart-link"
    ).forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openSizeChart(
                    button.dataset.chart
                );

            }
        );

    });

}


/* =========================================================
   FINISHER SHIRT
   ========================================================= */

function updateFinisherShirt(
    distanceSelect,
    shirtField,
    shirtSelect
) {

    const distance =
        distanceSelect.value;

    if (distance === "5K") {

        shirtSelect.disabled = true;

        shirtSelect.required = false;

        shirtSelect.value = "";

        shirtField.classList.add(
            "is-disabled"
        );

    } else {

        shirtSelect.disabled = false;

        shirtSelect.required = true;

        shirtField.classList.remove(
            "is-disabled"
        );

    }

}


/* =========================================================
   REMOVE PARTICIPANT
   ========================================================= */

function removeParticipant(card) {

    card.remove();

    renumberParticipants();

    participantNumber =
        document.querySelectorAll(
            ".participant-card"
        ).length;

    updateParticipantCounter();
    updateAddButton();
    updateSummary();
}


/* =========================================================
   RENUMBER PARTICIPANTS
   ========================================================= */

function renumberParticipants() {

    const cards =
        document.querySelectorAll(
            ".participant-card"
        );

    cards.forEach(
        (card, index) => {

            const number =
                index + 1;

            const padded =
                String(number).padStart(2, "0");

            card.dataset.participant =
                number;


            const badge =
                card.querySelector(
                    ".participant-badge"
                );

            const title =
                card.querySelector(
                    ".participant-title strong"
                );


            if (badge) {

                badge.textContent =
                    padded;

            }


            if (title) {

                title.textContent =
                    `Participant ${padded}`;

            }


            card.querySelectorAll(
                "input, select"
            ).forEach(
                input => {

                    const name =
                        input.getAttribute(
                            "name"
                        );

                    if (!name) {
                        return;
                    }

                    input.setAttribute(
                        "name",
                        name.replace(
                            /participant_\d+/,
                            `participant_${number}`
                        )
                    );

                }
            );


            const removeButton =
                card.querySelector(
                    ".remove-participant"
                );

            if (removeButton) {

                removeButton.dataset.remove =
                    number;

            }

        }
    );

}


/* =========================================================
   PARTICIPANT COUNTER
   ========================================================= */

function updateParticipantCounter() {

    const count =
        document.querySelectorAll(
            ".participant-card"
        ).length;

    participantCount.textContent =
        String(count).padStart(2, "0");
}


/* =========================================================
   ADD PARTICIPANT BUTTON
   ========================================================= */

function updateAddButton() {

    const count =
        document.querySelectorAll(
            ".participant-card"
        ).length;


    if (count >= MAX_PARTICIPANTS) {

        addParticipantBtn.disabled = true;

        addParticipantBtn.style.opacity =
            "0.45";

        addParticipantBtn.style.cursor =
            "not-allowed";


        addParticipantBtn.querySelector(
            "strong"
        ).textContent =
            "Maximum Participants Reached";


        addParticipantBtn.querySelector(
            "small"
        ).textContent =
            "Maximum of 11 participants";

    } else {

        addParticipantBtn.disabled = false;

        addParticipantBtn.style.opacity =
            "1";

        addParticipantBtn.style.cursor =
            "pointer";


        addParticipantBtn.querySelector(
            "strong"
        ).textContent =
            "Add Participant";


        addParticipantBtn.querySelector(
            "small"
        ).textContent =
            "Add another runner to this reservation";

    }

}


/* =========================================================
   SUMMARY
   ========================================================= */

function updateSummary() {

    const counts = {

        "5K": 0,
        "10K": 0,
        "21K": 0,
        "42K": 0

    };


    document.querySelectorAll(
        ".distance-select"
    ).forEach(select => {

        const distance =
            select.value;

        if (
            counts.hasOwnProperty(
                distance
            )
        ) {

            counts[distance]++;

        }

    });


    const subtotal5k =
        counts["5K"] *
        PRICES["5K"];

    const subtotal10k =
        counts["10K"] *
        PRICES["10K"];

    const subtotal21k =
        counts["21K"] *
        PRICES["21K"];

    const subtotal42k =
        counts["42K"] *
        PRICES["42K"];


    const total =
        subtotal5k +
        subtotal10k +
        subtotal21k +
        subtotal42k;


    document.getElementById(
        "summary5k"
    ).textContent =
        counts["5K"];


    document.getElementById(
        "summary10k"
    ).textContent =
        counts["10K"];


    document.getElementById(
        "summary21k"
    ).textContent =
        counts["21K"];


    document.getElementById(
        "summary42k"
    ).textContent =
        counts["42K"];


    document.getElementById(
        "subtotal5k"
    ).textContent =
        formatCurrency(
            subtotal5k
        );


    document.getElementById(
        "subtotal10k"
    ).textContent =
        formatCurrency(
            subtotal10k
        );


    document.getElementById(
        "subtotal21k"
    ).textContent =
        formatCurrency(
            subtotal21k
        );


    document.getElementById(
        "subtotal42k"
    ).textContent =
        formatCurrency(
            subtotal42k
        );


    grandTotal.textContent =
        formatCurrency(
            total
        );

}


/* =========================================================
   FORMAT CURRENCY
   ========================================================= */

function formatCurrency(amount) {

    return (
        "₱" +
        amount.toLocaleString(
            "en-PH"
        )
    );

}


/* =========================================================
   SIZE CHART MODAL
   ========================================================= */

const sizeChartModal =
    document.getElementById(
        "sizeChartModal"
    );

const modalOverlay =
    document.getElementById(
        "modalOverlay"
    );

const modalClose =
    document.getElementById(
        "modalClose"
    );

const modalImage =
    document.getElementById(
        "modalImage"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );


function openSizeChart(type) {

    if (type === "singlet") {

        modalTitle.textContent =
            "Singlet Size Chart";

        modalImage.src =
            "images/singlet-size-chart.jpg";

        modalImage.alt =
            "Unisex Sando Size Chart";

    }


    if (type === "shirt") {

        modalTitle.textContent =
            "Finisher Shirt Size Chart";

        modalImage.src =
            "images/shirt-size-chart.jpg";

        modalImage.alt =
            "Adult Shirt Size Chart";

    }


    sizeChartModal.classList.add(
        "is-open"
    );

    sizeChartModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

}


function closeSizeChart() {

    sizeChartModal.classList.remove(
        "is-open"
    );

    sizeChartModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeSizeChart
);


modalOverlay.addEventListener(
    "click",
    closeSizeChart
);


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            sizeChartModal.classList.contains(
                "is-open"
            )
        ) {

            closeSizeChart();

        }

    }
);


/* =========================================================
   FIELD ERROR HANDLING
   ========================================================= */

function clearFieldError(event) {

    const field =
        event.target;

    const formField =
        field.closest(
            ".form-field"
        );

    if (!formField) {
        return;
    }


    formField.classList.remove(
        "has-error"
    );


    const error =
        formField.querySelector(
            ".form-field-error"
        );


    if (error) {

        error.remove();

    }

}


/* =========================================================
   VALIDATE FIELD
   ========================================================= */

function validateField(field) {

    if (
        field.disabled ||
        field.offsetParent === null
    ) {

        return true;

    }


    const value =
        field.value.trim();


    if (
        field.required &&
        !value
    ) {

        showFieldError(
            field,
            "This field is required."
        );

        return false;

    }


    if (
        field.type === "email" &&
        value
    ) {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !emailPattern.test(
                value
            )
        ) {

            showFieldError(
                field,
                "Please enter a valid email address."
            );

            return false;

        }

    }


    return true;

}


/* =========================================================
   SHOW FIELD ERROR
   ========================================================= */

function showFieldError(
    field,
    message
) {

    const formField =
        field.closest(
            ".form-field"
        );

    if (!formField) {
        return;
    }


    formField.classList.add(
        "has-error"
    );


    let error =
        formField.querySelector(
            ".form-field-error"
        );


    if (!error) {

        error =
            document.createElement(
                "span"
            );

        error.className =
            "form-field-error";

        formField.appendChild(
            error
        );

    }


    error.textContent =
        message;

}


/* =========================================================
   VALIDATE RESERVATION
   ========================================================= */

function validateReservation() {

    let valid = true;

    let firstInvalidField = null;


    const contactFields = [

        document.getElementById(
            "contactName"
        ),

        document.getElementById(
            "contactEmail"
        ),

        document.getElementById(
            "contactNumber"
        ),

        document.getElementById(
            "teamName"
        )

    ];


    contactFields.forEach(
        field => {

            if (!field) {
                return;
            }


            const result =
                validateField(
                    field
                );


            if (!result) {

                valid = false;


                if (!firstInvalidField) {

                    firstInvalidField =
                        field;

                }

            }

        }
    );


    document.querySelectorAll(
        ".participant-card"
    ).forEach(
        card => {

            card.querySelectorAll(
                "input, select"
            ).forEach(
                field => {

                    const result =
                        validateField(
                            field
                        );


                    if (!result) {

                        valid = false;


                        if (
                            !firstInvalidField
                        ) {

                            firstInvalidField =
                                field;

                        }

                    }

                }
            );

        }
    );


    if (!waiverAccepted.checked) {

        valid = false;


        waiverAccepted
            .closest(
                ".waiver-checkbox"
            )
            .style.background =
            "#fff1f2";


        if (!firstInvalidField) {

            firstInvalidField =
                waiverAccepted;

        }

    } else {

        waiverAccepted
            .closest(
                ".waiver-checkbox"
            )
            .style.background =
            "";

    }


    if (!privacyAccepted.checked) {

        valid = false;


        privacyAccepted
            .closest(
                ".waiver-checkbox"
            )
            .style.background =
            "#fff1f2";


        if (!firstInvalidField) {

            firstInvalidField =
                privacyAccepted;

        }

    } else {

        privacyAccepted
            .closest(
                ".waiver-checkbox"
            )
            .style.background =
            "";

    }


    if (firstInvalidField) {

        if (
            firstInvalidField ===
                waiverAccepted ||
            firstInvalidField ===
                privacyAccepted
        ) {

            firstInvalidField
                .closest(
                    ".waiver-checkbox"
                )
                .scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });

        } else {

            firstInvalidField
                .scrollIntoView({

                    behavior: "smooth",

                    block: "center"

                });


            setTimeout(
                () => {

                    firstInvalidField.focus();

                },
                350
            );

        }

    }


    return valid;

}


/* =========================================================
   TOAST
   ========================================================= */

const toast =
    document.getElementById(
        "toast"
    );

const toastMessage =
    document.getElementById(
        "toastMessage"
    );

let toastTimeout;


function showToast(message) {

    toastMessage.textContent =
        message;

    toast.classList.add(
        "is-visible"
    );

    toast.setAttribute(
        "aria-hidden",
        "false"
    );


    clearTimeout(
        toastTimeout
    );


    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "is-visible"
                );

                toast.setAttribute(
                    "aria-hidden",
                    "true"
                );

            },
            4000
        );

}


/* =========================================================
   GOOGLE APPS SCRIPT BACKEND
   ========================================================= */

const BACKEND_URL =
    "https://script.google.com/macros/s/AKfycbw4zc8YLDvGOxzkslRGO7lMVlHGbnXpnFAuSuTwoPdwGf6jAZqFIgc1uBLRmzeKW3osDg/exec";


let isSubmitting = false;


/* =========================================================
   COLLECT RESERVATION DATA
   ========================================================= */

function collectReservationData() {

    const participants = [];


    document.querySelectorAll(
        ".participant-card"
    ).forEach(
        card => {

            const number =
                card.dataset.participant;


            const getValue =
                name => {

                    const field =
                        card.querySelector(
                            `[name="participant_${number}_${name}"]`
                        );


                    return field
                        ? field.value.trim()
                        : "";

                };


            participants.push({

                firstName:
                    getValue(
                        "first_name"
                    ),

                lastName:
                    getValue(
                        "last_name"
                    ),

                gender:
                    getValue(
                        "gender"
                    ),

                birthDate:
                    getValue(
                        "birth_date"
                    ),

                country:
                    getValue(
                        "country"
                    ),

                address:
                    getValue(
                        "address"
                    ),

                emergencyContactName:
                    getValue(
                        "emergency_name"
                    ),

                emergencyContactNumber:
                    getValue(
                        "emergency_number"
                    ),

                distance:
                    getValue(
                        "distance"
                    ),

                singletSize:
                    getValue(
                        "singlet"
                    ),

                finisherShirtSize:
                    getValue(
                        "shirt"
                    ),

                bibName:
                    getValue(
                        "bib_name"
                    )

            });

        }
    );


    return {

        contactName:
            document.getElementById(
                "contactName"
            ).value.trim(),

        email:
            document.getElementById(
                "contactEmail"
            ).value.trim(),

        contactNumber:
            document.getElementById(
                "contactNumber"
            ).value.trim(),

        organization:
            document.getElementById(
                "teamName"
            ).value.trim(),

        waiverAccepted:
            waiverAccepted.checked,

        dataPrivacyAccepted:
            privacyAccepted.checked,

        participants:
            participants

    };

}


/* =========================================================
   SEND RESERVATION TO APPS SCRIPT
   ========================================================= */

async function submitReservationToBackend(
    data
) {

    /*
     * Apps Script Web Apps can redirect their response.
     * A simple text/plain POST avoids a browser preflight
     * request.
     */

    await fetch(
        BACKEND_URL,
        {

            method: "POST",

            mode: "no-cors",

            headers: {

                "Content-Type":
                    "text/plain;charset=utf-8"

            },

            body:
                JSON.stringify(
                    data
                )

        }
    );

}


/* =========================================================
   SUBMIT RESERVATION
   ========================================================= */

async function handleReservationSubmit(
    event
) {

    if (event) {

        event.preventDefault();

    }


    if (isSubmitting) {

        return;

    }


    const valid =
        validateReservation();


    if (!valid) {

        showToast(
            "Please complete all required fields before continuing."
        );

        return;

    }


    const reservationData =
        collectReservationData();


    isSubmitting = true;


    /*
     * Prevent accidental double submission.
     */

    submitReservationBtn.disabled =
        true;

    submitReservationBtn.style.opacity =
        "0.65";

    submitReservationBtn.style.cursor =
        "not-allowed";


    const originalButtonHTML =
        submitReservationBtn.innerHTML;


    submitReservationBtn.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        Submitting Reservation...
    `;


    showToast(
        "Submitting your reservation..."
    );


    try {

        await submitReservationToBackend(
            reservationData
        );


        /*
         * The Apps Script Web App processes the POST,
         * but the browser does not expose its response
         * because of cross-origin restrictions.
         *
         * The Google Sheet is the source of truth during
         * this testing phase.
         */

        showToast(
            "Reservation submitted successfully. Your reservation has been recorded."
        );


        submitReservationBtn.innerHTML = `
            <i class="fa-solid fa-check"></i>
            Reservation Submitted
        `;


        /*
         * Keep the button disabled after submission.
         * This prevents accidental duplicate reservations.
         */


    } catch (error) {

        console.error(
            "Reservation submission error:",
            error
        );


        isSubmitting = false;


        submitReservationBtn.disabled =
            false;

        submitReservationBtn.style.opacity =
            "1";

        submitReservationBtn.style.cursor =
            "pointer";

        submitReservationBtn.innerHTML =
            originalButtonHTML;


        showToast(
            "We couldn't submit your reservation. Please try again."
        );

    }

}


/* =========================================================
   EVENT LISTENERS
   ========================================================= */

addParticipantBtn.addEventListener(
    "click",
    () => {

        createParticipant();

    }
);


waiverAccepted.addEventListener(
    "change",
    () => {

        if (waiverAccepted.checked) {

            waiverAccepted
                .closest(
                    ".waiver-checkbox"
                )
                .style.background =
                "";

        }

    }
);


privacyAccepted.addEventListener(
    "change",
    () => {

        if (privacyAccepted.checked) {

            privacyAccepted
                .closest(
                    ".waiver-checkbox"
                )
                .style.background =
                "";

        }

    }
);


submitReservationBtn.addEventListener(
    "click",
    handleReservationSubmit
);


/* =========================================================
   INITIALIZE
   ========================================================= */

createParticipant();

updateSummary();