const { Builder, By } = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("firefox")
    .build();

async function dateForm() {
    try{
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/file-form');

        await driver.findElement(By.xpath('//input[@formcontrolname="file"]')).sendKeys(`${__dirname}\\\\exampleFile.jpeg`);
        await driver.findElement(By.id('submit')).click();

    } catch(error) {
        console.log(error);
    }
}

dateForm();