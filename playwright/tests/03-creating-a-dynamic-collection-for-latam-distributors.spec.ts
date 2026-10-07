/**
 * Creating a Dynamic Collection for LATAM Distributors
 *
 * Generated from courses/latest/en/mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors.md at 85296c6, with uncommitted lesson edits.
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

test('Creating a Dynamic Collection for LATAM Distributors', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Logged in as the Clarity Admin, open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Collections*.
	await test.step('Step 1. Logged in as the Clarity Admin, open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Collections*.', async () => {
		await openMenu(page, 'Site Menu', 'Site Builder', 'Collections');
	});

	// Step 2. Click *New* and select *Dynamic Collection*.
	await test.step('Step 2. Click *New* and select *Dynamic Collection*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors/images/01.png']);
		await press(page, 'New');
		await press(page, 'Dynamic Collection');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors/images/01.png'});
	});

	// Step 3. Enter *LATAM Distributor Campaign* for the Title and click *Save*.
	await test.step('Step 3. Enter *LATAM Distributor Campaign* for the Title and click *Save*.', async () => {
		await fill(page, 'Title', 'LATAM Distributor Campaign');
		await press(page, 'Save');
		await noConfirmationLeft(page);
	});

	// Step 4. In the Personalized Variation, click *Add Personalized Variation*.
	await test.step('Step 4. In the Personalized Variation, click *Add Personalized Variation*.', async () => {
		await press(page, 'Add Personalized Variation');
		await noConfirmationLeft(page);
	});

	// Step 5. Select *Distributors - Latin America* segment.
	await test.step('Step 5. Select *Distributors - Latin America* segment.', async () => {
		await press(page, 'Distributors - Latin America');
		await noConfirmationLeft(page);
	});

	// Step 6. Drag and drop the Distributors - Latin America segment option to the first position.
	await test.step('Step 6. Drag and drop the Distributors - Latin America segment option to the first position.', async () => {
		await reorderVariation(page, 'Distributors - Latin America', 1);
	});

	// Step 7. Set the Item Type to *Web Content Article*.
	await test.step('Step 7. Set the Item Type to *Web Content Article*.', async () => {
		await choose(page, 'Item Type', 'Web Content Article');
	});

	// Step 8. Set Item Subtype to *Marketing*.
	await test.step('Step 8. Set Item Subtype to *Marketing*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors/images/02.png']);
		await choose(page, 'Item Subtype', 'Marketing');

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors/images/02.png'});
	});

	// Step 9. Expand the Scope section and click *Select*.
	await test.step('Step 9. Expand the Scope section and click *Select*.', async () => {
		await press(page, 'Scope');
		await press(page, 'Select', 'Scope');
		await noConfirmationLeft(page);
	});

	// Step 10. Click *Other Site or Asset Library*.
	await test.step('Step 10. Click *Other Site or Asset Library*.', async () => {
		await press(page, 'Other Site or Asset Library');
		await noConfirmationLeft(page);
	});

	// Step 11. Click *Asset Libraries* and select *Marketing Assets*.
	await test.step('Step 11. Click *Asset Libraries* and select *Marketing Assets*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors/images/03.png']);
		await press(page, 'Asset Libraries');
		await press(page, 'Marketing Assets');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors/images/03.png'});
	});

	// Step 12. On the Filter section, click *Select* for Tags and select *LATAM*.
	await test.step('Step 12. On the Filter section, click *Select* for Tags and select *LATAM*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors/images/04.png']);
		await press(page, 'Select', 'Tags');
		await press(page, 'LATAM');
		await closePicker(page);
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors/images/04.png'});
	});

	// Step 13. Click *Save*.
	await test.step('Step 13. Click *Save*.', async () => {
		await press(page, 'Save');
		await noConfirmationLeft(page);
	});

	// Step 14. In the Personalized Variation, select *Anyone*.
	await test.step('Step 14. In the Personalized Variation, select *Anyone*.', async () => {
		await press(page, 'Anyone');
		await noConfirmationLeft(page);
	});

	// Step 15. Set the Item Type to *Web Content Article*.
	await test.step('Step 15. Set the Item Type to *Web Content Article*.', async () => {
		await choose(page, 'Item Type', 'Web Content Article');
	});

	// Step 16. Set Item Subtype to *Marketing*.
	await test.step('Step 16. Set Item Subtype to *Marketing*.', async () => {
		await choose(page, 'Item Subtype', 'Marketing');
	});

	// Step 17. Expand the Scope section and click *Select*.
	await test.step('Step 17. Expand the Scope section and click *Select*.', async () => {
		await press(page, 'Scope');
		await press(page, 'Select', 'Scope');
		await noConfirmationLeft(page);
	});

	// Step 18. Click *Other Site or Asset Library*.
	await test.step('Step 18. Click *Other Site or Asset Library*.', async () => {
		await press(page, 'Other Site or Asset Library');
		await noConfirmationLeft(page);
	});

	// Step 19. Click *Asset Libraries* and select *Marketing Assets*.
	await test.step('Step 19. Click *Asset Libraries* and select *Marketing Assets*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors/images/05.png']);
		await press(page, 'Asset Libraries');
		await press(page, 'Marketing Assets');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors/images/05.png'});
	});

	// Step 20. Click *Save*.
	await test.step('Step 20. Click *Save*.', async () => {
		await press(page, 'Save');
		await noConfirmationLeft(page);
	});

});
