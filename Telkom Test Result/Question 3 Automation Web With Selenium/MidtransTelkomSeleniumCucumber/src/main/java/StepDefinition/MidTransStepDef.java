package StepDefinition;

import PageObject.Homepage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import utility.ClassHelp;
import utility.DefaultData;
import utility.Hooks;
import utility.TestData;


public class MidTransStepDef {
    WebDriver driver;
    Hooks hooks = new Hooks();
    TestData testData = new TestData();
    Homepage homepage = new Homepage();

    @Given("Initiate Browser")
    public void initiate_Browser() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        testData.setIsHeadless(ClassHelp.getEnv("DontRunningBrowser"));
        hooks = new Hooks();
        System.out.println("Hooks :" + hooks);
        driver = hooks.openBrowser(ClassHelp.getEnv("browser"));
        System.out.println("Driver : " + driver);
    }

    @Given("^setup SetTestData$")
    public void setup_SetTestData() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        DefaultData.setTestData();
        System.out.println("Setup Data Done");
        driver.manage().window().maximize();
    }
    @Given("^Navigate Demo Midtrans$")
    public void navigate_Demo_Midtrans() throws Throwable {
        homepage.GotoMidtransPage();
        // Write code here that turns the phrase above into concrete actions
    }
    @Given("^Go To landing page Midtrans$")
    public void go_To_landing_page_Midtrans() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        String title =  driver.getTitle();
        System.out.println("Title Page = " + title);
    }
    @Then("^Click Button buy pillow$")
    public void click_Button_buy_pillow() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        homepage.setClickBuynow();
        }
    @Then("^Move to Shoping Chart$")
    public void move_to_Shoping_Chart() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
    }
    @Then("^input Name \"([^\"]*)\" on page customer details$")
    public void input_Name_on_page_customer_details(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        homepage.setInputname(arg1);
        }

    @Then("^Input Email \"([^\"]*)\"$")
    public void input_Email(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        homepage.setInputEmail(arg1);
        }

    @Then("^Input PhoneNo \"([^\"]*)\"$")
    public void input_PhoneNo(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        homepage.setInputPhone(arg1);
        }

    @Then("^Input City \"([^\"]*)\"$")
    public void input_City(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        homepage.setInputCity(arg1);
        }

    @Then("^Input Address \"([^\"]*)\"$")
    public void input_Address(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        homepage.setInputAdd(arg1);

        }

    @Then("^Input Postal Code \"([^\"]*)\"$")
    public void input_Postal_Code(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        homepage.setInputPost(arg1);
        }

    @Then("^I click Checkout Button$")
    public void i_click_Checkout_Button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        homepage.setClickCheckout();
        }

    @Then("^click continue$")
    public void click_continue() throws Throwable {
        // Write code here that turns the phrase above into concrete actions

        homepage.setClickContinue();
        }

    @Then("^Select Payment Method With CreditCard$")
    public void select_Payment_Method_With_CreditCard() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        homepage.setClicCreditCard();
        }

    @Then("^Input Card Number \"([^\"]*)\"$")
    public void input_Card_Number(String arg1) throws Throwable {
        homepage.setInputcard(arg1);
        // Write code here that turns the phrase above into concrete actions
        }

    @Then("^Input Expiry Date \"([^\"]*)\"$")
    public void input_Expiry_Date(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        homepage.setInputExpiry(arg1);
        }

    @Then("^Input CVV \"([^\"]*)\"$")
    public void input_CVV(String arg1) throws Throwable {
        homepage.setInputCVV(arg1);
        // Write code here that turns the phrase above into concrete actions
        }
    @Then("^Input invalid Card Number \"([^\"]*)\"$")
    public void input_invalid_Card_Number(String arg1) throws Throwable {
        homepage.setInputcard(arg1);
        homepage.ValidationFail(arg1);

    }


    @Then("^click PAYNOW$")
    public void click_PAYNOW() throws Throwable {
        homepage.setClickPaynow();
     }
    @Then("^Input Bank OTP \"([^\"]*)\"$")
    public void input_Bank_OTP(String arg1) throws Throwable {
        homepage.setInputOTP(arg1);
        }
    @Then("^Input Invalid Bank OTP \"([^\"]*)\"$")
        public void input_Invalid_bank_OTP(String arg1) throws InterruptedException {
        homepage.setInputOTP(arg1);
        homepage.setClickOK();
        homepage.TransactionFail();
        driver.close();
    }

    @Then("^Click OK$")
    public void click_OK() throws Throwable {
        homepage.setClickOK();

        driver.close();
         }
}
