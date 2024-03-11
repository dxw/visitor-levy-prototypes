//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.get("/", function (request, response) {
  response.redirect('/en/index')
});

// Filter out accommodation not in Wales
router.post('/en/register/not-suitable-nation', function(request, response) {

    var nation = request.session.data['nation']

    if (nation == "wls"){
        response.redirect("/en/register/charge-fee");

    } else if (nation == "wls,eng"){
        response.redirect("/en/register/charge-fee");

    } else if (nation == "wls,eng,sct"){
        response.redirect("/en/register/charge-fee");

    } else if (nation == "wls,eng,sct,ni"){
        response.redirect("/en/register/charge-fee");

    } else if (nation == "wls,sct"){
        response.redirect("/en/register/charge-fee");

    } else if (nation == "wls,sct,ni"){
        response.redirect("/en/register/charge-fee");

    } else if (nation == "wls,eng,ni"){
        response.redirect("/en/register/charge-fee");

    } else if (nation == "wls,ni"){
        response.redirect("/en/register/charge-fee");
    
    } else {
        response.redirect("/en/register/not-suitable-nation")
    }
})

// Filter out free accommodation 
router.post('/en/register/not-suitable-fee', function(request, response) {

    var fee = request.session.data['fee']
    if (fee == "yes"){
        response.redirect("/en/register/email")
    } else {
        response.redirect("/en/register/not-suitable-fee")
    }
})

// Choose how to register - form or spreadsheet
router.post('/en/register/postcode', function(request, response) {

    var inputtype = request.session.data['inputtype']
    if (inputtype == "spreadsheet"){
        response.redirect("/en/register/upload-spreadsheet")
    } else {
        response.redirect("/en/register/postcode")
    }
})
