// javascript

const wdio = require("webdriverio");
const assert = require("assert");

const opts = {
    path: '/wd/hub',
    port: 4725,
    capabilities: {
        platformName: "Android",
        platformVersion: "9",
        deviceName: "Pixel",
        appPackage: "com.google.android.apps.maps",
        appActivity: "com.google.android.maps.MapsActivity",
        automationName: "Appium"
    }
};

async function main () {
    const client = await wdio.remote(opts);

    // constants
    const city = "Moskva"
    const street = "Lesnaya Ulitsa, 7"

    // locators

    const skip_button =  await client.$("//android.widget.Button[@text='SKIP']");
    const search_field = await client.$("//android.widget.FrameLayout[@resource-id='com.google.android.apps.maps:id/search_omnibox_container']");
    const search_field_edit = await client.$("//android.widget.EditText[@resource-id='com.google.android.apps.maps:id/search_omnibox_edit_text']");
    const item_title = await client.$("//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.widget.LinearLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ViewSwitcher/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.TextView");
    const item_subtitle = await client.$("//android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.support.v4.widget.DrawerLayout/android.widget.LinearLayout/android.view.ViewGroup/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ViewSwitcher/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.TextView");
    const title_suggest_item = await client.$("//android.widget.FrameLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.RelativeLayout[1]");

    // actions
    await skip_button.click();
    await search_field.click();
    await search_field_edit.setValue(city + " " + street);
    await title_suggest_item.click()
    const title_value = await item_title.getText();
    const subtitle_value = await item_subtitle.getText();

    // assert
    assert.strictEqual(title_value, street);
    assert.strictEqual(subtitle_value, city + ", Russia, 125047");

    // teardown
    await client.deleteSession();

}

main();