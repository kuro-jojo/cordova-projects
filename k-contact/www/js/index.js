document.addEventListener("deviceready", function () {
    loadContacts();
    document.getElementById('addContactForm').addEventListener('submit', addContact);
}, false);

function loadContacts() {
    let options = new ContactFindOptions();
    // options.filter = "esp";
    options.multiple = true;
    options.hasPhoneNumber = true;
    let fields = ["name", "phoneNumbers"];
    navigator.contacts.find(fields, showContacts, handleError, options);
}

function showContacts(contacts) {
    let contactList = document.getElementById('contactList');
    let code = ' ';
    for (let i = 0; i < contacts.length; i++) {
        code += `
            <li class="ctc">
                <a href="#" onclick="showContactDetail(${i})">
                    <img src="img/avatar.png" alt="profile photo" class="">
                    <h1>${contacts[i].name.formatted}</h1>
                    <p>${contacts[i].phoneNumbers[0].value}</p>
                </a>
            </li>
        `;
        contactList.innerHTML = code;
        $('#contactList').listview('refresh');
    }
}

function handleError(error) {
    console.log(error)
    alert("Error: " + error.code)
}

function addContact(event) {
    event.preventDefault();
    let contactName = document.getElementById('contactName').value;
    let phoneNumber = document.getElementById('phoneNumber').value;

    let contact = navigator.contacts.create();
    contact.displayName = contactName;
    contact.nickname = contactName;

    let name = new ContactName();
    name.givenName = contactName;
    contact.name = name;

    let phoneNumbers = [];
    phoneNumbers[0] = new ContactField('mobile', phoneNumber, true);
    contact.phoneNumbers = phoneNumbers;

    contact.save(function () {
        alert('Contact added successfully!');
        loadContacts();
        $.mobile.changePage('#main');
    }, handleError);
}

function showContactDetail(index) {
    let options = new ContactFindOptions();
    options.filter = index;
    options.multiple = true;
    options.hasPhoneNumber = true;
    let fields = ["name", "phoneNumbers"];
    navigator.contacts.find(fields, function (contacts) {
        if (contacts[index]) {
            let contact = contacts[index];
            document.getElementById('avatar').src = "img/avatar.jpg";
            document.getElementById('contactNameDetail').innerText = contact.name.formatted;
            document.getElementById('phoneNumber').innerText = contact.phoneNumbers[0].value;
            $.mobile.changePage('#details');
        }
    }, handleError, options);
}