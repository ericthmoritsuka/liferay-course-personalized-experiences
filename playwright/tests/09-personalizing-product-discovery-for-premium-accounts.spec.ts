/**
 * Personalizing Product Discovery for Premium Accounts
 *
 * Generated from courses/latest/en/mastering-liferay-personalized-experiences/05-site-experiences/10-personalizing-claritys-commerce-experiences.md at 85296c6, with uncommitted lesson edits.
 * Edit the lesson and regenerate; edits here are overwritten.
 *
 * A pass means nothing blocked a reader. It does not mean the
 * exercise built the right thing - nothing records what it should
 * build.
 */
import {test} from '@playwright/test';

import {addComponent, attach, checkEach, choose, chooseAccount, chooseExperience, closeModal, closePicker, deleteExperience, download, enableSomeOptions, expectRow, expectShown, fill, fillEach, fragmentOption, goHome, noConfirmationLeft, openFromPageTree, openMenu, openSitePage, openTab, openPageEditor, openPageSettings, press, pressKeys, pressOneOf, reload, reorderMenu, reorderVariation, search, selectInEditor, toggle, transfer, verifyHead, visit, visitAsGuest, visitInNewBrowser, waitForReindex} from '../helpers/liferay';
import {CAPTURE, armCapture, capture} from '../helpers/screenshot';
import {signIn} from '../helpers/sign-in';

//
// The style guide's display width, captured at twice it.
//
test.use(CAPTURE);

test('Personalizing Product Discovery for Premium Accounts', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Sign in as the Clarity Admin user.
	// Not performed: the sign-in before the steps does this.
	await test.step.skip('Step 1. Sign in as the Clarity Admin user. - not performed: the sign-in before the steps does this', async () => {});

	// Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and click *Account Groups*.
	await test.step('Step 2. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Control Panel* tab, and click *Account Groups*.', async () => {
		await openMenu(page, 'Global Menu', 'Control Panel', 'Account Groups');
	});

	// Step 3. Click *New* and name it *Clarity Premium Tier*.
	await test.step('Step 3. Click *New* and name it *Clarity Premium Tier*.', async () => {
		await press(page, 'New');
		await fill(page, 'Name', 'Clarity Premium Tier');
		await noConfirmationLeft(page);
	});

	// Step 4. Enter *clarity-premium-tier* for the External Reference Code.
	await test.step('Step 4. Enter *clarity-premium-tier* for the External Reference Code.', async () => {
		await fill(page, 'External Reference Code', 'clarity-premium-tier');
	});

	// Step 5. Click *Save* and go to the *Accounts* tab.
	await test.step('Step 5. Click *Save* and go to the *Accounts* tab.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/10-personalizing-claritys-commerce-experiences/images/01.png']);
		await press(page, 'Save');
		await press(page, 'Accounts');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/10-personalizing-claritys-commerce-experiences/images/01.png'});
	});

	// Step 6. Click *New*.
	await test.step('Step 6. Click *New*.', async () => {
		await press(page, 'New');
		await noConfirmationLeft(page);
	});

	// Step 7. Select *Iris Optical* and click *Assign*.
	await test.step('Step 7. Select *Iris Optical* and click *Assign*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/10-personalizing-claritys-commerce-experiences/images/02.png']);
		await press(page, 'Iris Optical');
		await press(page, 'Assign');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/10-personalizing-claritys-commerce-experiences/images/02.png'});
	});

	// Step 8. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Commerce* tab, and click *Products*.
	await test.step('Step 8. Open the *Global Menu* (![](../../images/icon-applications-menu.png)), go to the *Commerce* tab, and click *Products*.', async () => {
		await openMenu(page, 'Global Menu', 'Commerce', 'Products');
	});

	// Step 9. Find the *Arclight Nova* product, click *Actions* (![](../../images/icon-actions.png)) for it, and click *Edit* (![](../../images/icon-edit.png)).
	await test.step('Step 9. Find the *Arclight Nova* product, click *Actions* (![](../../images/icon-actions.png)) for it, and click *Edit* (![](../../images/icon-edit.png)).', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/10-personalizing-claritys-commerce-experiences/images/03.png']);
		await press(page, 'Actions', 'Arclight Nova', 'actions');
		await press(page, 'Edit', undefined, 'edit');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/10-personalizing-claritys-commerce-experiences/images/03.png'});
	});

	// Step 10. Go to the *Visibility* tab and enable the *Account Groups* filter.
	await test.step('Step 10. Go to the *Visibility* tab and enable the *Account Groups* filter.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/10-personalizing-claritys-commerce-experiences/images/04.png']);
		await press(page, 'Visibility');
		await toggle(page, 'Account Groups', true);
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/10-personalizing-claritys-commerce-experiences/images/04.png'});
	});

	// Step 11. Click *Add* (![](../../images/icon-add.png)) or *Add Account Group Relation to Arclight Nova*.
	await test.step('Step 11. Click *Add* (![](../../images/icon-add.png)) or *Add Account Group Relation to Arclight Nova*.', async () => {
		await press(page, 'Add Account Group Relation to Arclight Nova');
		await noConfirmationLeft(page);
	});

	// Step 12. Select the Clarity Premium Tier account group and click *Add*.
	await test.step('Step 12. Select the Clarity Premium Tier account group and click *Add*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/10-personalizing-claritys-commerce-experiences/images/05.png']);
		await toggle(page, 'Clarity Premium Tier', true);
		await press(page, 'Add');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/10-personalizing-claritys-commerce-experiences/images/05.png'});
	});

	// Step 13. Repeat the previous four steps for the *Éclat Verona* and *Vetra Octo*products.
	await test.step('Step 13. Repeat steps 9-12 - Éclat Verona in place of Arclight Nova', async () => {
		await openMenu(page, 'Global Menu', 'Commerce', 'Products');
		await press(page, 'Actions', 'Éclat Verona', 'actions');
		await press(page, 'Edit', undefined, 'edit');
		await press(page, 'Visibility');
		await toggle(page, 'Account Groups', true);
		await press(page, 'Add Account Group Relation to Éclat Verona');
		await toggle(page, 'Clarity Premium Tier', true);
		await press(page, 'Add');
	});

	await test.step('Step 13. Repeat steps 9-12 - Vetra Octo in place of Arclight Nova', async () => {
		await openMenu(page, 'Global Menu', 'Commerce', 'Products');
		await press(page, 'Actions', 'Vetra Octo', 'actions');
		await press(page, 'Edit', undefined, 'edit');
		await press(page, 'Visibility');
		await toggle(page, 'Account Groups', true);
		await press(page, 'Add Account Group Relation to Vetra Octo');
		await toggle(page, 'Clarity Premium Tier', true);
		await press(page, 'Add');
	});

	// Step 14. Open an incognito tab and access Clarity's site.
	await test.step('Step 14. Open an incognito tab and access Clarity\'s site.', async () => {
		await visitAsGuest(page);
	});

	// Step 15. Go to the *Products* page and click *Eyeglasses*.
	await test.step('Step 15. Go to the *Products* page and click *Eyeglasses*.', async () => {
		await openSitePage(page, 'Products');
		await press(page, 'Eyeglasses');
	});

	// Step 16. Confirm that you only see two types of eyeglasses.
	// Not performed: it is a check of what the screen shows, which is not automated yet.

	// Screenshot skipped: the step it belongs to was not performed.
	await test.step.skip('Step 16. Confirm that you only see two types of eyeglasses. - not performed: it is a check of what the screen shows, which is not automated yet', async () => {});

	// Step 17. In the incognito tab, log in as Renee Salinger.
	await test.step('Step 17. In the incognito tab, log in as Renee Salinger.', async () => {
		await signIn(page, 'renee');
	});

	// Step 18. Go to the *Products* page and click *Eyeglasses*.
	await test.step('Step 18. Go to the *Products* page and click *Eyeglasses*.', async () => {
		await openSitePage(page, 'Products');
		await press(page, 'Eyeglasses');
	});

	// Step 19. Confirm that you see five different glasses.
	// Not performed: it is a check of what the screen shows, which is not automated yet.

	// Screenshot skipped: the step it belongs to was not performed.
	await test.step.skip('Step 19. Confirm that you see five different glasses. - not performed: it is a check of what the screen shows, which is not automated yet', async () => {});

});
