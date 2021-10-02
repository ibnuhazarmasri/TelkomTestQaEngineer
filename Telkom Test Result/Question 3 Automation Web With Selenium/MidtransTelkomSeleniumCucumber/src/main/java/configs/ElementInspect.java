package configs;

public class ElementInspect {
    //input
    public static final String xpathInputName = "(//input[contains(@type,'text')])[1]";
    public static final String xpathEmail = "//input[contains(@data-reactid,'.0.0.1.0.3.0.0.1.1.0')]";
    public static final String xpathPhone = "//input[contains(@data-reactid,'.0.0.1.0.3.0.0.2.1.0')]";
    public static final String xpathCity  = "(//input[contains(@type,'text')])[3]";
    public static final String xpathAdrres = "//textarea[contains(@data-reactid,'.0.0.1.0.3.0.0.4.1.0')]";
    public static final String xpathPost = "//input[contains(@data-reactid,'.0.0.1.0.3.0.0.5.1.0')]";
    public static final String xpathcardnumber = "//input[contains(@name,'cardnumber')]";
    public static final String xpathexpiry = "//input[contains(@placeholder,'MM / YY')]";
    public static final String xpathCVV = "//input[contains(@maxlength,'6')]";
    public static final String xpathOTP = "//*[@id=\"PaRes\"]";
    public static final String OTPclick = "//input[contains(@id,'PaRes')]";
    public static final String continuee = "//a[contains(text(),'Tap to Continue')]";
    //xpathclick
    public static final String xpathtickChecbox = "//input[contains(@type,'checkbox')]";
    public static final String xpathClickBuyNow = "//a[contains(@data-reactid,'.0.0.0.2.0.0.5')]";
    public static final String xpathCheckOutButton = "//div[contains(@data-reactid,'.0.0.1.1.0')]";
    public static final String xpathContinue = "//a[@href='#/select-payment']";
    public static final String xpathchooseCard = "//div[@class='list-caption text-actionable-caption'][contains(.,'Pay with Visa, MasterCard, JCB, or Amex')]";
            //"//div[@class='list-title text-actionable-bold'][contains(.,'Credit Card')]";
    public static final String xpathPayNow = "//a[@class='button-main-content'][contains(.,'Pay Now')]";
    public static final String xpathOK = "//button[@type='submit'][contains(.,'OK')]";
    //Validation
    public static final String xpathammount = "//span[contains(@class,'text-amount-amount')]";
    public static final String xpathitem = "//td[@class='table-amount text-body'][contains(.,'20,000')]";
    public static final String xpathValidatePay = "//div[@class='final-panel success'][contains(.,'Rp 20,000Transaction successfulYou will be redirected in 4 seconds')]";
    public static final String XpathInvalidCard = "//span[contains(.,'Invalid card number')]";
    public static final String xpathTransactionsucces = "//div[@class='text-success text-bold'][contains(.,'Transaction successful')]";
    public static final String xpathShipingdetail = "//span[contains(.,'shipping details')]";
    public static final String xpathTransactionfail = "//span[contains(.,'Your card got declined by the bank')]";
}
