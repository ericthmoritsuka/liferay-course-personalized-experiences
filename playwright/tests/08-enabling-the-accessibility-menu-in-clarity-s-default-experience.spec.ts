/**
 * Enabling the Accessibility Menu in Clarity's Default Experience
 *
 * Generated from courses/latest/en/mastering-liferay-personalized-experiences/05-site-experiences/07-improving-claritys-accessibility.md at 85296c6, with uncommitted lesson edits.
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

test('Enabling the Accessibility Menu in Clarity\'s Default Experience', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Sign in as the Clarity Admin user.
	// Not performed: the sign-in before the steps does this.
	await test.step.skip('Step 1. Sign in as the Clarity Admin user. - not performed: the sign-in before the steps does this', async () => {});

	// Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Pages*.
	await test.step('Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Pages*.', async () => {
		await openMenu(page, 'Site Menu', 'Site Builder', 'Pages');
	});

	// Step 3. Click *Actions* (![](../../images/icon-actions.png)) and select *Configuration*.
	await test.step('Step 3. Click *Actions* (![](../../images/icon-actions.png)) and select *Configuration*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/07-improving-claritys-accessibility/images/01.png']);
		await press(page, 'Actions', undefined, 'actions');
		await press(page, 'Configuration');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/07-improving-claritys-accessibility/images/01.png'});
	});

	// Step 4. On the Design tab, under the Customization section, go to the *JavaScript* tab.
	await test.step('Step 4. On the Design tab, under the Customization section, go to the *JavaScript* tab.', async () => {
		await press(page, 'JavaScript');
		await noConfirmationLeft(page);
	});

	// Step 5. Click *Add JavaScript Client Extensions* and select *In Page Head* in the dropdown.
	await test.step('Step 5. Click *Add JavaScript Client Extensions* and select *In Page Head* in the dropdown.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/07-improving-claritys-accessibility/images/02.png']);
		await press(page, 'Add JavaScript Client Extensions');
		await press(page, 'In Page Head');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/07-improving-claritys-accessibility/images/02.png'});
	});

	// Step 6. Select the *Clarity Global JS* checkbox and click *Add*.
	await test.step('Step 6. Select the *Clarity Global JS* checkbox and click *Add*.', async () => {
		await press(page, 'Clarity Global JS');
		await press(page, 'Add');
		await noConfirmationLeft(page);
	});

	// Step 7. Scroll to the bottom of the page and click *Save*.
	await test.step('Step 7. Scroll to the bottom of the page and click *Save*.', async () => {
		await press(page, 'Save');
		await noConfirmationLeft(page);
	});

	// Step 8. Return to the *Home* page and refresh it.
	await test.step('Step 8. Return to the *Home* page and refresh it.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/07-improving-claritys-accessibility/images/03.png']);
		await openFromPageTree(page, ['Home']);
		await reload(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/07-improving-claritys-accessibility/images/03.png'});
	});

	// Step 9. Click the *A+* button in the top-right corner of the page to increase the font size.
	await test.step('Step 9. Click the *A+* button in the top-right corner of the page to increase the font size.', async () => {
		await press(page, 'A+');
		await noConfirmationLeft(page);
	});

});
