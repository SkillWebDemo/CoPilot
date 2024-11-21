// service.js
let customers = [];
let contactPersons = [];
let contactInfo = [];

const getCustomers = () => {
    return customers;
};

const getContactPersons = () => {
    return contactPersons;
};

const getContactInfo = () => {
    return contactInfo;
};

const addResource = (resource) => {
    // Assuming resource contains type and data
    switch (resource.type) {
        case 'customer':
            customers.push(resource.data);
            break;
        case 'contact_person':
            contactPersons.push(resource.data);
            break;
        case 'contact_info':
            contactInfo.push(resource.data);
            break;
        default:
            throw new Error('Unknown resource type');
    }
};

module.exports = {
    getCustomers,
    getContactPersons,
    getContactInfo,
    addResource
};