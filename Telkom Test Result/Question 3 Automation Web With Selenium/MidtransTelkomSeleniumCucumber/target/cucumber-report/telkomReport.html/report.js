$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NegativeScenario.feature");
formatter.feature({
  "line": 3,
  "name": "Midtrans Demo",
  "description": "",
  "id": "midtrans-demo",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@allTestcase"
    },
    {
      "line": 2,
      "name": "@NegativeCaseMidtrans"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Negative Transaction",
  "description": "",
  "id": "midtrans-demo;negative-transaction",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "Go To landing page Midtrans",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Click Button buy pillow",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Move to Shoping Chart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "input Name \"\u003cname\u003e\" on page customer details",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Input Email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Input PhoneNo \"\u003cphonenumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Input City \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Input Address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Input Postal Code \"\u003cpostalcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click continue",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select Payment Method With CreditCard",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Input Card Number \"\u003ccard\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Input Expiry Date \"\u003cexpiry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Input CVV \"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click PAYNOW",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Input Bank OTP \"\u003cbankOTP\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click OK",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "midtrans-demo;negative-transaction;",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "phonenumber",
        "city",
        "address",
        "postalcode",
        "expiry",
        "card",
        "cvv",
        "bankOTP"
      ],
      "line": 29,
      "id": "midtrans-demo;negative-transaction;;1"
    },
    {
      "cells": [
        "imran",
        "imranduapuluh@gmail.com",
        "0845362436",
        "Bogor",
        "Bojong Gede",
        "4253652",
        "0223",
        "4911 1111 1111 1113",
        "123",
        "112233"
      ],
      "line": 30,
      "id": "midtrans-demo;negative-transaction;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Initiate Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "setup SetTestData",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate Demo Midtrans",
  "keyword": "Given "
});
formatter.match({
  "location": "MidTransStepDef.initiate_Browser()"
});
formatter.result({
  "duration": 3220384000,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.setup_SetTestData()"
});
formatter.result({
  "duration": 166619400,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.navigate_Demo_Midtrans()"
});
formatter.result({
  "duration": 972820200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Negative Transaction",
  "description": "",
  "id": "midtrans-demo;negative-transaction;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@allTestcase"
    },
    {
      "line": 2,
      "name": "@NegativeCaseMidtrans"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Go To landing page Midtrans",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Click Button buy pillow",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Move to Shoping Chart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "input Name \"imran\" on page customer details",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Input Email \"imranduapuluh@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Input PhoneNo \"0845362436\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Input City \"Bogor\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Input Address \"Bojong Gede\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Input Postal Code \"4253652\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click continue",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select Payment Method With CreditCard",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Input Card Number \"4911 1111 1111 1113\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Input Expiry Date \"0223\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Input CVV \"123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click PAYNOW",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Input Bank OTP \"112233\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click OK",
  "keyword": "And "
});
formatter.match({
  "location": "MidTransStepDef.go_To_landing_page_Midtrans()"
});
formatter.result({
  "duration": 14636500,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.click_Button_buy_pillow()"
});
formatter.result({
  "duration": 142771000,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.move_to_Shoping_Chart()"
});
formatter.result({
  "duration": 40400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imran",
      "offset": 12
    }
  ],
  "location": "MidTransStepDef.input_Name_on_page_customer_details(String)"
});
formatter.result({
  "duration": 677207100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "imranduapuluh@gmail.com",
      "offset": 13
    }
  ],
  "location": "MidTransStepDef.input_Email(String)"
});
formatter.result({
  "duration": 314244000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0845362436",
      "offset": 15
    }
  ],
  "location": "MidTransStepDef.input_PhoneNo(String)"
});
formatter.result({
  "duration": 221045800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bogor",
      "offset": 12
    }
  ],
  "location": "MidTransStepDef.input_City(String)"
});
formatter.result({
  "duration": 169810300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bojong Gede",
      "offset": 15
    }
  ],
  "location": "MidTransStepDef.input_Address(String)"
});
formatter.result({
  "duration": 245986400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4253652",
      "offset": 19
    }
  ],
  "location": "MidTransStepDef.input_Postal_Code(String)"
});
formatter.result({
  "duration": 261727700,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.i_click_Checkout_Button()"
});
formatter.result({
  "duration": 149949300,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.click_continue()"
});
formatter.result({
  "duration": 1264258200,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.select_Payment_Method_With_CreditCard()"
});
formatter.result({
  "duration": 292168500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4911 1111 1111 1113",
      "offset": 19
    }
  ],
  "location": "MidTransStepDef.input_Card_Number(String)"
});
formatter.result({
  "duration": 382499200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0223",
      "offset": 19
    }
  ],
  "location": "MidTransStepDef.input_Expiry_Date(String)"
});
formatter.result({
  "duration": 141880600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 11
    }
  ],
  "location": "MidTransStepDef.input_CVV(String)"
});
formatter.result({
  "duration": 123380000,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.click_PAYNOW()"
});
formatter.result({
  "duration": 159121900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "112233",
      "offset": 16
    }
  ],
  "location": "MidTransStepDef.input_Bank_OTP(String)"
});
formatter.result({
  "duration": 3238380300,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.click_OK()"
});
formatter.result({
  "duration": 1211408600,
  "status": "passed"
});
formatter.uri("PositiveScenario.feature");
formatter.feature({
  "line": 3,
  "name": "Midtrans Demo",
  "description": "",
  "id": "midtrans-demo",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@allTestcase"
    },
    {
      "line": 2,
      "name": "@PositiveCaseMidtrans"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Positive Transaction",
  "description": "",
  "id": "midtrans-demo;positive-transaction",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "Go To landing page Midtrans",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Click Button buy pillow",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Move to Shoping Chart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "input Name \"\u003cname\u003e\" on page customer details",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Input Email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Input PhoneNo \"\u003cphonenumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Input City \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Input Address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Input Postal Code \"\u003cpostalcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click continue",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select Payment Method With CreditCard",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Input Card Number \"\u003ccard\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Input Expiry Date \"\u003cexpiry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Input CVV \"\u003ccvv\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click PAYNOW",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#    And click pares"
    }
  ],
  "line": 26,
  "name": "Input Bank OTP \"\u003cbankOTP\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click OK",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "midtrans-demo;positive-transaction;",
  "rows": [
    {
      "cells": [
        "name",
        "email",
        "phonenumber",
        "city",
        "address",
        "postalcode",
        "ammount",
        "item",
        "expiry",
        "card",
        "cvv",
        "bankOTP"
      ],
      "line": 30,
      "id": "midtrans-demo;positive-transaction;;1"
    },
    {
      "cells": [
        "ibnu",
        "ibnuhazar.masri25@gmail.com",
        "0864735273",
        "Jakarta",
        "KotaKasablanka",
        "106723",
        "20,000",
        "Midtranss pillow",
        "0223",
        "4811 1111 1111 1114",
        "123",
        "112233"
      ],
      "line": 31,
      "id": "midtrans-demo;positive-transaction;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "Initiate Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "setup SetTestData",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Navigate Demo Midtrans",
  "keyword": "Given "
});
formatter.match({
  "location": "MidTransStepDef.initiate_Browser()"
});
formatter.result({
  "duration": 1329257400,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.setup_SetTestData()"
});
formatter.result({
  "duration": 166993700,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.navigate_Demo_Midtrans()"
});
formatter.result({
  "duration": 937917300,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Positive Transaction",
  "description": "",
  "id": "midtrans-demo;positive-transaction;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@allTestcase"
    },
    {
      "line": 2,
      "name": "@PositiveCaseMidtrans"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "Go To landing page Midtrans",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Click Button buy pillow",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Move to Shoping Chart",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "input Name \"ibnu\" on page customer details",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Input Email \"ibnuhazar.masri25@gmail.com\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Input PhoneNo \"0864735273\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Input City \"Jakarta\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Input Address \"KotaKasablanka\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Input Postal Code \"106723\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click continue",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select Payment Method With CreditCard",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "Input Card Number \"4811 1111 1111 1114\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Input Expiry Date \"0223\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Input CVV \"123\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "click PAYNOW",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "#    And click pares"
    }
  ],
  "line": 26,
  "name": "Input Bank OTP \"112233\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Click OK",
  "keyword": "And "
});
formatter.match({
  "location": "MidTransStepDef.go_To_landing_page_Midtrans()"
});
formatter.result({
  "duration": 8242400,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.click_Button_buy_pillow()"
});
formatter.result({
  "duration": 132447900,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.move_to_Shoping_Chart()"
});
formatter.result({
  "duration": 30700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ibnu",
      "offset": 12
    }
  ],
  "location": "MidTransStepDef.input_Name_on_page_customer_details(String)"
});
formatter.result({
  "duration": 630707500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ibnuhazar.masri25@gmail.com",
      "offset": 13
    }
  ],
  "location": "MidTransStepDef.input_Email(String)"
});
formatter.result({
  "duration": 349844000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0864735273",
      "offset": 15
    }
  ],
  "location": "MidTransStepDef.input_PhoneNo(String)"
});
formatter.result({
  "duration": 226928300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jakarta",
      "offset": 12
    }
  ],
  "location": "MidTransStepDef.input_City(String)"
});
formatter.result({
  "duration": 203565600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "KotaKasablanka",
      "offset": 15
    }
  ],
  "location": "MidTransStepDef.input_Address(String)"
});
formatter.result({
  "duration": 237849200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "106723",
      "offset": 19
    }
  ],
  "location": "MidTransStepDef.input_Postal_Code(String)"
});
formatter.result({
  "duration": 266743900,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.i_click_Checkout_Button()"
});
formatter.result({
  "duration": 150740800,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.click_continue()"
});
formatter.result({
  "duration": 1262883600,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.select_Payment_Method_With_CreditCard()"
});
formatter.result({
  "duration": 257455900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4811 1111 1111 1114",
      "offset": 19
    }
  ],
  "location": "MidTransStepDef.input_Card_Number(String)"
});
formatter.result({
  "duration": 293947200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0223",
      "offset": 19
    }
  ],
  "location": "MidTransStepDef.input_Expiry_Date(String)"
});
formatter.result({
  "duration": 94169000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 11
    }
  ],
  "location": "MidTransStepDef.input_CVV(String)"
});
formatter.result({
  "duration": 121725800,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.click_PAYNOW()"
});
formatter.result({
  "duration": 104866100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "112233",
      "offset": 16
    }
  ],
  "location": "MidTransStepDef.input_Bank_OTP(String)"
});
formatter.result({
  "duration": 3289248900,
  "status": "passed"
});
formatter.match({
  "location": "MidTransStepDef.click_OK()"
});
formatter.result({
  "duration": 1226502100,
  "status": "passed"
});
});