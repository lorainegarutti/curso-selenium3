const { Builder, By, Key } = require("selenium-webdriver");

const driver = new Builder()
    .forBrowser("firefox")
    .build();

async function iframeForm() {
    try{
        await driver.get('https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form');
        //identificação do iFrame
        await driver.switchTo().frame(0);

        await driver.findElement(By.xpath('//input[@aria-label="Name"]')).sendKeys("Augusto Andrade");
        //apertamos a tecla TAB para mudar a caixa selecionada
        await driver.actions().sendKeys(Key.TAB).perform();

        //apertamos a seta para baixo 4 vezes, até chegar no número 5
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        
        //apertamos o TAB 2 vezes para mudar a caixa selecionada
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.TAB)).perform();
        
        //apertamos a seta para baixo 3 vezes, até chegar na opção 3
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.chord(Key.ARROW_DOWN)).perform();
        await driver.actions().sendKeys(Key.chord(Key.SPACE)).perform();
        
        await driver.actions().sendKeys(Key.chord(Key.TAB,"26")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,"08")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB,"1991")).perform();

        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();

        await driver.actions().sendKeys(Key.chord(Key.TAB, "Secret answer")).perform();
        await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();


    } catch(error) {
        console.log(error);
    }
}

iframeForm();