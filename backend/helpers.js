const fs = require('fs');
const path = require('path');

const getAllCountries = () => {
    const countryFilePath = path.join(__dirname, './json/country.json');
    const data = fs.readFileSync(countryFilePath, 'utf8');
    return JSON.parse(data);
};

module.exports = {
    getAllCountries,
};