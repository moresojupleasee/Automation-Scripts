const { By, Builder, Key } = require('selenium-webdriver')
require('chromedriver')

async function zomato() {
  let driver = await new Builder().forBrowser('chrome').build()
  await driver.get('https://www.zomato.com/ncr')
  await driver.manage().window().maximize()

  await driver.findElement(By.xpath('//a[text()="Log in"]')).click()
  await driver.switchTo().frame('auth-login-ui')

  await driver
    .findElement(By.xpath('//span[text()="Continue with Email"]'))
    .click()

  await new Promise((resolve) => setTimeout(resolve, 1000))

  await driver.findElement(By.css('input')).sendKeys('fawomit143@royalka.com')

  await driver
    .findElement(By.xpath('//span[text()="Send One Time Password"]'))
    .click()

  const readline = require('readline')

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  // Prompt the user for input
  rl.question('Enter OTP: ', (pass) => {
    driver.findElement(By.css('input')).sendKeys(pass)
  })
}

zomato()
