const express = require('express')
const router = express.Router()
const FauxApiClient = require('faux-api-client')

const fauxApiClient = new FauxApiClient.FauxApiClient(
  process.env.PFSENSE_ADDRESS,
  process.env.PFSENSE_API_VALUE,
  process.env.PFSENSE_API_KEY
)

router.get('/', function(req, res, next) {
  res.render('router');
});

router.get('/get-config', (req, res, next) => {
  fauxApiClient.getConfiguration()
    .then((success) => {
      res.json(success)
    })
    .catch((error) => {
      res.json(error)
    })
})

router.get('/gateway-status', (req, res, next) => {
  fauxApiClient.gatewayStatus()
    .then((success) => {
      res.json(success)
    })
    .catch((error) => {
      res.json(error)
    })
})

module.exports = router;