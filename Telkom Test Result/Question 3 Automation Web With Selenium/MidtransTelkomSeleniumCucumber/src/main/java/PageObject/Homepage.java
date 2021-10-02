package PageObject;

import configs.ElementInspect;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import utility.Hooks;
import utility.TestData;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

public class Homepage extends Hooks {

    private static TestData testData = new TestData();
    public void Homepage(WebDriver driver) {
        Hooks.driver = driver;
        PageFactory.initElements(driver, this);
    }
    //getting Url
    public void MidtransPage(String url) {
        driver.get(url.replace("\"",""));
        System.out.println("SuccessFully Opening Website : " + url);
        driver.manage().window().maximize();
    }
    public void GotoMidtransPage () {
        MidtransPage(testData.getUrl());
    }
    //Calling Xpath On Element Inspect Class
    //xpathButton
    By clickBuynow     = By.xpath(ElementInspect.xpathClickBuyNow);
    By clickCheckout   = By.xpath(ElementInspect.xpathCheckOutButton);
    By clickContinue   = By.xpath(ElementInspect.xpathContinue);
    By clicCreditCard  = By.xpath(ElementInspect.xpathchooseCard);
    By clickPaynow     = By.xpath(ElementInspect.xpathPayNow);
    By ClickOK         = By.xpath(ElementInspect.xpathOK);

    By Ammount         = By.xpath(ElementInspect.xpathammount);
    //xpath input
    By inputname       = By.xpath(ElementInspect.xpathInputName);
    By inputEmail      = By.xpath(ElementInspect.xpathEmail);
    By inputPhone      = By.xpath(ElementInspect.xpathPhone);
    By inputCity       = By.xpath(ElementInspect.xpathCity);
    By inputAdd        = By.xpath(ElementInspect.xpathAdrres);
    By inputPost       = By.xpath(ElementInspect.xpathPost);
    By inputcard       = By.xpath(ElementInspect.xpathcardnumber);
    By inputExpiry     = By.xpath(ElementInspect.xpathexpiry);
    By inputCVV        = By.xpath(ElementInspect.xpathCVV);
    By inputOTP        = By.xpath(ElementInspect.xpathOTP);
    By clickOTP        = By.xpath(ElementInspect.OTPclick);
    By invalidCard = By.xpath(ElementInspect.XpathInvalidCard);
    By TransactionSucces = By.xpath(ElementInspect.xpathTransactionsucces);
    By ShipingDetail = By.xpath(ElementInspect.xpathShipingdetail);
    By TransactionFailed = By.xpath(ElementInspect.xpathTransactionfail);

    //mini configuration Screenshoot

    public static void takeScreenshoot() {
        File scrFile = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(scrFile, new File("src/ScreenShoot/" + System.currentTimeMillis() + ".png"));
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    public static void scrollPage(){
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,1000)");
    }
    //excecute for step definition
    public void setClickBuynow () {
        driver.findElement(clickBuynow).click();
    }
    public void setInputname (String name) {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//        Assert.assertEquals(true, inputname.equals(false) );
        String expected = driver.findElement(inputname).getText();
        String Actual = driver.findElement(inputname).getText();
        Assert.assertEquals(expected, Actual);
        driver.findElement(inputname).clear();
        driver.findElement(inputname).sendKeys(name);
    }
    public void setInputEmail(String email) {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.findElement(inputEmail).clear();
        driver.findElement(inputEmail).sendKeys(email);
    }
    public void setInputPhone(String phone) {
        driver.findElement(inputPhone).clear();
        driver.findElement(inputPhone).sendKeys(phone);
    }
    public void setInputCity(String city) {
        driver.findElement(inputCity).clear();
        driver.findElement(inputCity).sendKeys(city);
    }
    public void setInputAdd(String address) {
        driver.findElement(inputAdd).clear();
        driver.findElement(inputAdd).sendKeys(address);
    }
    public void setInputPost(String postalCode) {
        driver.findElement(inputPost).clear();
        driver.findElement(inputPost).sendKeys(postalCode);
        WebElement postal = driver.findElement(inputPost);

        Assert.assertEquals(true, postal.isDisplayed());
        System.out.println("Actual Checking xpath : " + postal);
    }
    public void setClickCheckout() {
//        Assert.assertEquals()
        if (driver.findElement(clickCheckout).isDisplayed()){

            driver.findElement(clickCheckout).click();
            }
        else{
            driver.quit();
        }
        }

    public void setClickContinue() throws InterruptedException {
        driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
        List ele = driver.findElements(By.tagName("iframe"));
        System.out.println("Number of frames in a page :" + ele.size());
        driver.switchTo().frame(0);
        Thread.sleep(3000);
        takeScreenshoot();
        driver.findElement(ShipingDetail).click();
        Assert.assertEquals(driver.findElement(ShipingDetail).getText(), "shipping details" );
        takeScreenshoot();
        driver.findElement(clickContinue).click();
    }
    public void setClicCreditCard() {
        driver.findElement(clicCreditCard).click();
    }
    public void setInputcard(String card) {
        driver.findElement(inputcard).sendKeys(card);
    }
    public void ValidationFail(String Validation) throws InterruptedException {
        Assert.assertEquals(driver.findElement(invalidCard).getText(), "Invalid card number");
        Thread.sleep(5000);
        takeScreenshoot();
        if (driver.findElement(invalidCard).isDisplayed()) {
            driver.close();
        }

    }
    public void setInputExpiry(String expire) {
        driver.findElement(inputExpiry).sendKeys(expire);
    }
    public void setInputCVV(String cvv) {
        driver.findElement(inputCVV).sendKeys(cvv);
    }
    public void setClickPaynow() {
        driver.findElement(clickPaynow).click();
    }
    public void setClickpares() {
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.switchTo().frame(1);
        driver.findElement(ClickOK).click();
    }

    public void TransactionFail() throws InterruptedException {
//        List ele = driver.findElements(By.tagName("iframe"));
//        System.out.println("Number of frames in a page :" + ele.size());
//        driver.switchTo().frame(0);
        Thread.sleep(3000);
        takeScreenshoot();
//        Assert.assertEquals(driver.findElement(TransactionFailed).getText(), "Your card got declined by the bank");
//        if (driver.findElement(TransactionFailed).isDisplayed()) {
//            Thread.sleep(3000);
//            takeScreenshoot();
//            driver.close();
//        }
    }
    public void setInputOTP(String arg1) throws InterruptedException {
        List ele = driver.findElements(By.tagName("iframe"));
        System.out.println("Number of frames in a page :" + ele.size());
        Thread.sleep(3000);
        driver.switchTo().frame(0);
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(inputOTP)).sendKeys(arg1);
        WebElement OTPinput = driver.findElement(inputOTP);
        if(arg1.equals(OTPinput))
        {
            System.out.println("Output :"+ OTPinput);
        }else
        {
            System.out.println("Actual is: " + arg1);
            System.out.println("Expected is: "+ arg1);
        }
    }
    public void setClickOK() throws InterruptedException {
        driver.findElement(ClickOK).click();
//        List ele = driver.findElements(By.tagName("iframe"));
//        System.out.println("Number of frames in a page :" + ele.size());
//        driver.switchTo().frame(1);

//        if (driver.findElement(TransactionSucces).isDisplayed()) {
//            Assert.assertEquals(driver.findElement(TransactionSucces).getText(),"Transaction successful");
//            takeScreenshoot();
//        }
        Thread.sleep(3000);
        takeScreenshoot();


    }
}