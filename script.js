
let mobilePhones = [
    {
        brand: "RedMe",
        model: "RedMeA10",
        price: "25000",
        camera: "34px",
        ram: "4gb",
        rom: "128gb",
    },
    {
        brand: "Vivo",
        model: "VivoY20",
        price: "33000",
        camera: "40px",
        ram: "2gb",
        rom: "32gb",
    },
    {
        brand: "Vivo",
        model: "VivoY11",
        price: "45000",
        camera: "40px",
        ram: "3gb",
        rom: "32gb",
    },
    {
        brand: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom: "64gb",
    },
    {
        brand: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb",
    },
    {
        brand: "Iphone",
        model: "Iphone12",
        price: "400000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",
    },
    {
        brand: "Iphone",
        model: "Iphone13",
        price: "500000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",
    },
    {
        brand: "Iphone",
        model: "IphoneX",
        price: "600000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",
    },
];

function filterMobilePhones() {
    var filterOption = document.getElementById("filterOption").value;
    var filterValue = document.getElementById("filterValue").value.toLowerCase();

    var filteredPhones = mobilePhones.filter(function (phone) {
        return phone[filterOption].toLowerCase().includes(filterValue);
    });

    displayMobilePhones(filteredPhones);
}

function displayMobilePhones(phones) {
    var mobileList = document.getElementById("mobileList");
    mobileList.innerHTML = ""; // Clear previous list items

    phones.forEach(function (phone) {
        var listItem = document.createElement("li");
        listItem.textContent = `Brand: ${phone.brand}, Model: ${phone.model}, Price: ${phone.price}`;
        mobileList.appendChild(listItem);
    });
}

// Initial display of all mobile phones
displayMobilePhones(mobilePhones);