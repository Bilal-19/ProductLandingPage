const tableRecordEl = document.getElementById("table-row-data")
const macAppIconEl = document.getElementById("mac-app-icon")
const navOptionEl = document.getElementById("nav-options")
const footerOptionEl = document.getElementById("footer-options")

const productFeatures = [
    {
        id: 1,
        specName: "Chip",
        specDetail: "Apple M1"
    },
    {
        id: 2,
        specName: "CPU",
        specDetail: "8 - Core"
    },
    {
        id: 3,
        specName: "GPU",
        specDetail: "Upto 8 - Core"
    },
    {
        id: 4,
        specName: "RAM",
        specDetail: "Upto 16GB unififed memory"
    },
    {
        id: 5,
        specName: "Storage",
        specDetail: "2TB - Maximum Configurable Storage"
    },
    {
        id: 6,
        specName: "Retina Display",
        specDetail: `13.3 "`
    },
    {
        id: 7,
        specName: "Battery Life",
        specDetail: "Upto 18 hours"
    },
    {
        id: 8,
        specName: "Facetime HD Camera",
        specDetail: "720p"
    },
    {
        id: 9,
        specName: "Weight",
        specDetail: "1.29 Kg"
    }
    ,
    {
        id: 10,
        specName: "Touch ID",
        specDetail: "Available"
    }
]

productFeatures.map((value) => {
    tableRecordEl.innerHTML +=
        `
     <tr>
        <td><b>${value.specName}</b></td>
        <td>${value.specDetail}</td>
    </tr>
    `
})

const macbookDefaultAppIcons = [
    { id: 1, imagePath: "./media/chrome.png" },
    { id: 2, imagePath: "./media/google-photos.png" },
    { id: 3, imagePath: "./media/sheets.png" },
    { id: 4, imagePath: "./media/google_podcast.png" },
    { id: 5, imagePath: "./media/google-calendar.png" },
    { id: 6, imagePath: "./media/linkedin.png" }
]

macbookDefaultAppIcons.map((item) => {
    macAppIconEl.innerHTML +=
        `
    <img src="${item.imagePath}" alt="" height="40px" width="40px">
    `
})


const navigationMenuOptions = [
    {
        id: 1,
        navName: "Store",
        iconClassName: "fa-store"
    },
    {
        id: 2,
        navName: "Mac",
        iconClassName: "fa-laptop"
    },
    {
        id: 3,
        navName: "iPad",
        iconClassName: "fa-tablet-screen-button"
    },
    {
        id: 4,
        navName: "Watch",
        iconClassName: "fa-clock"
    },
    {
        id: 5,
        navName: "AirPods",
        iconClassName: "fa-headphones"
    },
    {
        id: 6,
        navName: "TV & Home",
        iconClassName: "fa-tv"
    },
    {
        id: 7,
        navName: "Only on Apple",
        iconClassName: undefined
    },
    {
        id: 8,
        navName: "Accessories",
        iconClassName: undefined
    },
    {
        id: 9,
        navName: "Support",
        iconClassName: undefined
    }
]

navigationMenuOptions.map(item => {
    navOptionEl.innerHTML +=
        `
        <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa-solid ${item.iconClassName} mx-1"></i> ${item.navName}</a>
        </li>
        `
})

const footerOptionValues = ["Privacy Policy", "Use of Cookies", "Terms of Use", "Sales and Refunds", "Legal", "Sitemap"]

footerOptionValues.map(val => {
    footerOptionEl.innerHTML +=
    `
     <div class="col-md-2">
        <p>${val}</p>
    </div>
    `
})

