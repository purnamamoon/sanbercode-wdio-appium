describe('Open Application',() => {
    it('should open apps', async() => {
        await expect(await $('//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/header_welcome"]')).toHaveText('Welcome...')
    })

    it('should go to home page', async() => {
        await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_name"]').setValue('pur')
        await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_weight"]').setValue('55')
        await $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_height"]').setValue('165')
        await $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_male"]').click()
        await $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_next"]').click()
        await $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_low_to_medium"]').click()
        await $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_finish"]').click()
        await expect(await $('(//android.widget.ImageView[@resource-id="com.fghilmany.dietmealapp:id/navigation_bar_item_icon_view"])[1]')).toBeDisplayed()
    })
})