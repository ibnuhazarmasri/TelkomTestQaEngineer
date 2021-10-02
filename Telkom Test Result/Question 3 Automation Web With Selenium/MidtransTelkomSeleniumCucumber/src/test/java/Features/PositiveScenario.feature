@allTestcase
@PositiveCaseMidtrans
Feature: Midtrans Demo
  Background:
    Given Initiate Browser
    Given setup SetTestData
    Given Navigate Demo Midtrans
  Scenario Outline: Positive Transaction
    Given Go To landing page Midtrans
    And Click Button buy pillow
    Then Move to Shoping Chart
    And input Name "<name>" on page customer details
    And Input Email "<email>"
    And Input PhoneNo "<phonenumber>"
    And Input City "<city>"
    And Input Address "<address>"
    And Input Postal Code "<postalcode>"
    And I click Checkout Button
    And click continue
    Then Select Payment Method With CreditCard
    And Input Card Number "<card>"
    And Input Expiry Date "<expiry>"
    And Input CVV "<cvv>"
    And click PAYNOW
#    And click pares
    And Input Bank OTP "<bankOTP>"
    And Click OK

    Examples:
      | name  | email                       | phonenumber | city    | address        | postalcode | ammount |       item       | expiry |         card        |cvv | bankOTP |
      | ibnu  | ibnuhazar.masri25@gmail.com | 0864735273  | Jakarta | KotaKasablanka | 106723     | 20,000  | Midtranss pillow | 0223   | 4811 1111 1111 1114 |123 |  112233 |
  Scenario Outline: Positive Transaction
    Given Go To landing page Midtrans
    And Click Button buy pillow
    Then Move to Shoping Chart
    And input Name "<name>" on page customer details
    And Input Email "<email>"
    And Input PhoneNo "<phonenumber>"
    And Input City "<city>"
    And Input Address "<address>"
    And Input Postal Code "<postalcode>"
    And I click Checkout Button
    And click continue
    Then Select Payment Method With CreditCard
    And Input Card Number "<card>"
    And Input Expiry Date "<expiry>"
    And Input CVV "<cvv>"
    And click PAYNOW
#    And click pares
    And Input Bank OTP "<bankOTP>"
    And Click OK
    Examples:
      | name  | email             | phonenumber | city    | address        | postalcode | ammount |       item       | expiry |         card        |cvv | bankOTP |
      | Jumair | Jumair@gmail.com | 0864735273  | Jakarta | Ciganjur | 106723     | 20,000  | Midtranss pillow | 0223   | 4811 1111 1111 1114 |123 |  112233 |