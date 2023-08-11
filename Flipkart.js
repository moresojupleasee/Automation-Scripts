const { By, Builder, Key } = require('selenium-webdriver')
require('chromedriver')
const { URL } = require('../config.js')

async function flipkart() {
  let driver = await new Builder().forBrowser('chrome').build()
  await driver.get(URL)
  await driver.manage().window().maximize()

  let originalWindow = await driver.getWindowHandle() //fetch the current window
  await new Promise((resolve) => setTimeout(resolve, 1000)) // wait for pop up window to loadup
  let windows = await driver.getAllWindowHandles() // getting list of all windows
  for (const handle of windows) {
    if (handle !== originalWindow) {
      await driver.switchTo().window(handle)
    }
  }

  try {
    await driver.findElement(By.xpath("//button[text()='✕']")).click()
  } catch (error) {
    console.log('Popup Not Found')
  }

  let search = driver.findElement(By.name('q'))
  search.sendKeys('iphone')

  await new Promise((resolve) => setTimeout(resolve, 1000))
  await search.sendKeys(Key.ARROW_DOWN)
  await search.sendKeys(Key.ARROW_DOWN)
  await search.sendKeys(Key.ENTER)

  await new Promise((resolve) => setTimeout(resolve, 2000))

  let divs = await driver.findElements(By.css('div._13oc-S'))
  await divs[2].findElement(By.css('a')).click()

  console.log(await driver.getCurrentUrl())
  originalWindow = await driver.getWindowHandle() //fetch the current window
  await new Promise((resolve) => setTimeout(resolve, 1000)) // wait for pop up window to loadup
  windows = await driver.getAllWindowHandles() // getting list of all windows
  for (const handle of windows) {
    if (handle !== originalWindow) {
      await driver.switchTo().window(handle)
    }
  }
  console.log(await driver.getCurrentUrl())
  await new Promise((resolve) => setTimeout(resolve, 2000))
  await driver.findElement(By.xpath("//button[text()='Add to cart']")).click()
  await new Promise((resolve) => setTimeout(resolve, 2000))
  // await driver.findElement(By.xpath("//span[text()='Place Order']")).click()

  // for (let chill of chills) {
  //   console.log(await chill.getText())
  // }
  // console.log(await divs[0].findElement(By.css('a')).getText())
  // console.log(divs.length)
}
flipkart()
