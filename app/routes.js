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
router.post('/en/spring-24/register/not-suitable-country', function(request, response) {

    var country = request.session.data['country']

    if (country == "wls"){
        response.redirect("/en/spring-24/register/charge-fee");

    } else if (country == "wls,eng"){
        response.redirect("/en/spring-24/register/charge-fee");

    } else if (country == "wls,eng,sct"){
        response.redirect("/en/spring-24/register/charge-fee");

    } else if (country == "wls,eng,sct,ni"){
        response.redirect("/en/spring-24/register/charge-fee");

    } else if (country == "wls,sct"){
        response.redirect("/en/spring-24/register/charge-fee");

    } else if (country == "wls,sct,ni"){
        response.redirect("/en/spring-24/register/charge-fee");

    } else if (country == "wls,eng,ni"){
        response.redirect("/en/spring-24/register/charge-fee");

    } else if (country == "wls,ni"){
        response.redirect("/en/spring-24/register/charge-fee");
    
    } else {
        response.redirect("/en/spring-24/register/not-suitable-country")
    }
})

// Filter out free accommodation 
router.post('/en/spring-24/register/not-suitable-fee', function(request, response) {

    var fee = request.session.data['fee']
    if (fee == "yes"){
        response.redirect("/en/spring-24/register/email")
    } else {
        response.redirect("/en/spring-24/register/not-suitable-fee")
    }
})

// Filter out free accommodation 
router.post('/en/spring-24/register/search-company-details', function(request, response) {

    var OrgType = request.session.data['OrgType']
    if (OrgType == "Charity"){
        response.redirect("/en/spring-24/register/search-charity-details")
    } else {
        response.redirect("/en/spring-24/register/search-company-details")
    }
})

// Stop non-Welsh postcodes being used
router.post('/en/spring-24/register/select-address', function(request, response) {

    var postcode = request.session.data['postcode']
    if (postcode == "HR1 1DB"){
        response.redirect("/en/spring-24/register/non-welsh-postcode")
    } else {
        response.redirect("/en/spring-24/register/select-address")
    }
})

// Choose how to register - form or spreadsheet
router.post('/en/spring-24/register/postcode', function(request, response) {

    var inputtype = request.session.data['inputtype']
    if (inputtype == "spreadsheet"){
        response.redirect("/en/spring-24/register/upload-spreadsheet")
    } else {
        response.redirect("/en/spring-24/register/postcode")
    }
})
