/* =========================================================
   IDM HERITAGE RUN 4
   GROUP REGISTRATION PORTAL
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

const submitRegistrationBtn =
    document.getElementById("submitRegistrationBtn");

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
                    Address <span class="optional-label">(Optional)</span>
                </label>

                <input
                    type="text"
                    name="participant_${participantNumber}_address"
                    placeholder="Address (optional)"
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
            "Add another runner to this group";

    }

}


/* =========================================================
   SUMMARY
   ========================================================= */

function updateSummary() {
    const counts = {"5K":0,"10K":0,"21K":0,"42K":0};
    document.querySelectorAll(".distance-select").forEach(select => {
        if (Object.prototype.hasOwnProperty.call(counts, select.value)) counts[select.value]++;
    });
    const raw = counts["5K"]*PRICES["5K"] + counts["10K"]*PRICES["10K"] + counts["21K"]*PRICES["21K"] + counts["42K"]*PRICES["42K"];
    const freeCount = Math.floor(Object.values(counts).reduce((a,b)=>a+b,0)/11);
    let discount = 0;
    if (freeCount) {
        const selectedPrices = [];
        document.querySelectorAll(".distance-select").forEach(select => {
            if (PRICES[select.value]) selectedPrices.push(PRICES[select.value]);
        });
        selectedPrices.sort((a,b)=>a-b);
        discount = selectedPrices.slice(0,freeCount).reduce((a,b)=>a+b,0);
    }
    [["5K","summary5k","subtotal5k"],["10K","summary10k","subtotal10k"],["21K","summary21k","subtotal21k"],["42K","summary42k","subtotal42k"]].forEach(([d,cid,sid])=>{
        document.getElementById(cid).textContent=counts[d];
        document.getElementById(sid).textContent=formatCurrency(counts[d]*PRICES[d]);
    });
    document.getElementById("grandTotal").textContent = formatCurrency(Math.max(0,raw-discount));
    let discountRow=document.getElementById("groupDiscountRow");
    if(!discountRow){
        discountRow=document.createElement("div");
        discountRow.id="groupDiscountRow";
        discountRow.className="discount-row";
        const totalEl=document.querySelector(".summary-total");
        totalEl.parentNode.insertBefore(discountRow,totalEl);
    }
    discountRow.innerHTML=`<span>10+1 group discount (${freeCount} free)</span><strong>−${formatCurrency(discount)}</strong>`;
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
   VALIDATE GROUP REGISTRATION
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
            "groupEmergencyName"
        ),

        document.getElementById(
            "groupEmergencyNumber"
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
   GROUP REGISTRATION SUBMISSION
   ========================================================= */
const BACKEND_URL = "https://script.google.com/macros/s/AKfycbxH0EZp1l_0iB1AUft9BUrapxES8tSsU3_4w8aQ3i4ihZbLGGvHJY0MUATwe2yiG9f5/exec";
const paymentProofInput = document.getElementById("paymentProof");
const fileList = document.getElementById("fileList");
const uploadStatus = document.getElementById("uploadStatus");
const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
const MAX_UPLOAD_FILES = 3;
let selectedProofFiles = [];
let isSubmitting = false;
function renderSelectedFiles() {
    fileList.innerHTML = "";
    selectedProofFiles.forEach((file,index) => {
        const row=document.createElement("div"); row.className="file-item";
        const label=document.createElement("span"); label.textContent=`${file.name} (${(file.size/1024/1024).toFixed(2)} MB)`;
        const remove=document.createElement("button"); remove.type="button"; remove.textContent="Remove";
        remove.addEventListener("click",()=>{selectedProofFiles.splice(index,1);renderSelectedFiles();});
        row.append(label,remove); fileList.appendChild(row);
    });
    const total=selectedProofFiles.reduce((sum,file)=>sum+file.size,0);
    uploadStatus.textContent=`${selectedProofFiles.length} of 3 files selected · ${(total/1024/1024).toFixed(2)} MB of 10 MB used`;
}
paymentProofInput.addEventListener("change",()=>{
    const incoming=Array.from(paymentProofInput.files||[]);
    const combined=[...selectedProofFiles,...incoming], unique=[];
    combined.forEach(f=>{if(!unique.some(x=>x.name===f.name&&x.size===f.size&&x.lastModified===f.lastModified))unique.push(f);});
    const bytes=unique.reduce((sum,file)=>sum+file.size,0);
    if(unique.length>3) showToast("You can upload a maximum of 3 files.");
    else if(bytes>MAX_UPLOAD_BYTES) showToast("The combined file size must not exceed 10 MB.");
    else if(unique.some(f=>!/\.(jpe?g|png|pdf)$/i.test(f.name))) showToast("Only JPG, PNG, and PDF files are accepted.");
    else selectedProofFiles=unique;
    paymentProofInput.value=""; renderSelectedFiles();
});
function readFileAsBase64(file) {
    return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve({name:file.name,mimeType:file.type||"application/octet-stream",size:file.size,base64:String(reader.result).split(",")[1]});reader.onerror=()=>reject(new Error("Could not read "+file.name));reader.readAsDataURL(file);});
}
function collectReservationData() {
    const participants = Array.from(document.querySelectorAll('.participant-card')).map(card => {
        const value = suffix => {
            const field = card.querySelector(`[name$="_${suffix}"]`);
            return field ? String(field.value || '').trim() : '';
        };
        const distance = value('distance');
        return {
            firstName: value('first_name'),
            lastName: value('last_name'),
            gender: value('gender'),
            birthDate: value('birth_date'),
            country: value('country'),
            address: value('address'),
            emergencyContactName: '',
            emergencyContactNumber: '',
            distance,
            singletSize: value('singlet'),
            finisherShirtSize: distance === '5K' ? '' : value('shirt'),
            bibName: value('bib_name')
        };
    });
    return {
        contactName: document.getElementById('contactName').value.trim(),
        email: document.getElementById('contactEmail').value.trim(),
        contactNumber: document.getElementById('contactNumber').value.trim(),
        organization: document.getElementById('teamName').value.trim(),
        groupEmergencyContactName: document.getElementById('groupEmergencyName').value.trim(),
        groupEmergencyContactNumber: document.getElementById('groupEmergencyNumber').value.trim(),
        participants,
        waiverAccepted: waiverAccepted.checked,
        dataPrivacyAccepted: privacyAccepted.checked
    };
}
function getGroupPricing() {
    const distances=Array.from(document.querySelectorAll(".distance-select")).map(s=>s.value).filter(Boolean);
    const raw=distances.reduce((sum,d)=>sum+(PRICES[d]||0),0);
    const freeCount=Math.floor(distances.length/11);
    const prices=distances.map(d=>PRICES[d]).sort((a,b)=>a-b);
    const discount=prices.slice(0,freeCount).reduce((sum,p)=>sum+p,0);
    return {rawTotal:raw,freeCount,discount,total:raw-discount};
}
function createGroupRegistrationId() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomPart = "";
    if (window.crypto && window.crypto.getRandomValues) {
        const bytes = new Uint8Array(6);
        window.crypto.getRandomValues(bytes);
        randomPart = Array.from(bytes, byte => alphabet[byte % alphabet.length]).join("");
    } else {
        for (let i = 0; i < 6; i++) randomPart += alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    return "IDM27-GR-" + Date.now().toString(36).toUpperCase() + randomPart;
}
async function submitGroupToBackend(data) {
    data.paymentProofFiles=await Promise.all(selectedProofFiles.map(readFileAsBase64));
    data.pricing=getGroupPricing();
    await fetch(BACKEND_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(data)});
}
async function handleGroupSubmit(event) {
    if(event)event.preventDefault(); if(isSubmitting)return;
    if(!validateReservation()){showToast("Please complete all required fields before submitting.");return;}
    if(selectedProofFiles.length<1){showToast("Please upload your proof of payment.");paymentProofInput.focus();return;}
    const totalBytes=selectedProofFiles.reduce((sum,file)=>sum+file.size,0);
    if(selectedProofFiles.length>3||totalBytes>MAX_UPLOAD_BYTES){showToast("Please check the proof-of-payment file limits.");return;}
    const data=collectReservationData();
    data.groupRegistrationId=createGroupRegistrationId();
    isSubmitting=true;submitRegistrationBtn.disabled=true;
    const original=submitRegistrationBtn.innerHTML;submitRegistrationBtn.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Submitting Registration...';
    showToast("Submitting group registration. Please wait...");
    try {
        await submitGroupToBackend(data);
        document.getElementById("submittedGroupId").textContent=data.groupRegistrationId;
        const resultPanel=document.getElementById("submissionResult");
        resultPanel.classList.add("is-visible");
        resultPanel.scrollIntoView({behavior:"smooth",block:"center"});
        showToast("Submission request sent. Keep your Group Registration ID.");
        submitRegistrationBtn.innerHTML='<i class="fa-solid fa-check"></i> Registration Submitted';
    } catch(error) {
        console.error(error);isSubmitting=false;submitRegistrationBtn.disabled=false;submitRegistrationBtn.innerHTML=original;showToast("We couldn't prepare the submission. Please try again.");
    }
}
submitRegistrationBtn.addEventListener("click",handleGroupSubmit);
renderSelectedFiles();

/* =========================================================
   EVENT LISTENERS
   ========================================================= */
addParticipantBtn.addEventListener("click", createParticipant);
waiverAccepted.addEventListener("change", () => {
    if (waiverAccepted.checked) waiverAccepted.closest(".waiver-checkbox").style.background = "";
});
privacyAccepted.addEventListener("change", () => {
    if (privacyAccepted.checked) privacyAccepted.closest(".waiver-checkbox").style.background = "";
});
