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
router.post('/en/register/nation/v1/not-suitable', function(request, response) {

    var country = request.session.data['country']

    if (country == "wls"){
        response.redirect("/en/register/login/v1/email");

    } else if (country == "wls,eng"){
        response.redirect("/en/register/login/v1/email");

    } else if (country == "wls,eng,sct"){
        response.redirect("/en/register/login/v1/email");

    } else if (country == "wls,eng,sct,ni"){
        response.redirect("/en/register/login/v1/email");

    } else if (country == "wls,sct"){
        response.redirect("/en/register/login/v1/email");

    } else if (country == "wls,sct,ni"){
        response.redirect("/en/register/login/v1/email");

    } else if (country == "wls,eng,ni"){
        response.redirect("/en/register/login/v1/email");

    } else if (country == "wls,ni"){
        response.redirect("/en/register/login/v1/email");
    
    } else {
        response.redirect("/en/register/nation/v1/not-suitable")
    }
})

// Property ownership routing
router.post('/en/register/details-limited-company/v1/search-company-details', function(request, response) {

    var ownership = request.session.data['ownership']

    if (ownership == "soletrader"){
        response.redirect("/en/register/details-sole-trader/v1/trading-name-question");

    } else if (ownership == "partnership"){
        response.redirect("/en/register/details-partnership/v1/relationship");

    } else if (ownership == "charity"){
        response.redirect("/en/register/details-charity/v1/search-charity-details");

    } else if (ownership == "multiple"){
        response.redirect("/en/register/details-multiple/v1");

    } else if (ownership == "NotSure"){
        response.redirect("/en/register/details-sole-trader/v1/trading-name-question");
    
    } else {
        response.redirect("/en/register/details-limited-company/v1/search-company-details")
    }
})

// Trading name - sole trader
router.post('/en/register/details-sole-trader/v1/trading-name', function(request, response) {

    var hasTradingName = request.session.data['hasTradingName']
    if (hasTradingName == "no"){
        response.redirect("/en/register/details-sole-trader/v1/business-address")
    } else {
        response.redirect("/en/register/details-sole-trader/v1/trading-name")
    }
})

// Trading name - limited company
router.post('/en/register/details-limited-company/v1/trading-name', function(request, response) {

    var hasTradingName = request.session.data['hasTradingName']
    if (hasTradingName == "no"){
        response.redirect("/en/register/address/v1/postcode")
    } else {
        response.redirect("/en/register/details-limited-company/v1/trading-name")
    }
})

// Trading name - partnership
router.post('/en/register/details-partnership/v1/trading-name', function(request, response) {

    var hasTradingName = request.session.data['hasTradingName']
    if (hasTradingName == "no"){
        response.redirect("/en/register/details-partnership/v1/relationship")
    } else {
        response.redirect("/en/register/details-partnership/v1/trading-name")
    }
})

// Filter out accommodation not in Wales
router.post('/en/register/details-partnership/v1/business-address', function(request, response) {

    var Add2ndPartner = request.session.data['Add2ndPartner']
    var Add3rdPartner = request.session.data['Add3rdPartner']
    var Add4thPartner = request.session.data['Add4thPartner']
    var Add5thPartner = request.session.data['Add5thPartner']

    if (Add2ndPartner == "yes" && Add3rdPartner == "yes" && Add4thPartner == "yes" && Add5thPartner == "no" ){
        response.redirect("/en/register/details-partnership/v1/business-address-alt");

    } else if (Add2ndPartner == "yes" && Add3rdPartner == "yes" && Add4thPartner == "yes"){
        response.redirect("/en/register/details-partnership/v1/partner-4th");

    } else if (Add2ndPartner == "yes" && Add3rdPartner == "yes"){
        response.redirect("/en/register/details-partnership/v1/partner-3rd");

    } else if (Add2ndPartner == "yes"){
        response.redirect("/en/register/details-partnership/v1/partner-2nd");

    } else {
        response.redirect("/en/register/details-partnership/v1/business-address")
    }
})


// routes from SPRING 2024 work 👇

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
