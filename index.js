const config = require('./config.json')
const FauxApiClient = require('faux-api-client')

const fauxApiClient = new FauxApiClient.FauxApiClient(
    config.pfSense.address,
    config.pfSense.api_value,
    config.pfSense.api_key
);

console.log(
    config.pfSense.address,
    config.pfSense.api_value,
    config.pfSense.api_key
)

fauxApiClient.getConfiguration()
    .then((success) => {
        console.log('#################################################');
        console.log('#                SUCCESS                        #');
        console.log('#################################################');
        console.log(JSON.stringify(success));
    })
    .catch((error) => {
        console.log('#################################################');
        console.log('#                 ERROR                         #');
        console.log('#################################################');
        console.log(JSON.stringify(error));
    });