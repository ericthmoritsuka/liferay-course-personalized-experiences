/**
 * Customizing the Resources Page for Distributors
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

test('Customizing the Resources Page for Distributors', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Go to the *Resources* page and click Edit (![](../../images/icon-edit.png)).
	await test.step('Step 1. Go to the *Resources* page and click Edit (![](../../images/icon-edit.png)).', async () => {
		await openSitePage(page, 'Resources');
		await press(page, 'Edit');
		await noConfirmationLeft(page);
	});

	// Step 2. Click the *Experience* drop down at the top of the page and select *Distributor Experience*.
	await test.step('Step 2. Click the *Experience* drop down at the top of the page and select *Distributor Experience*.', async () => {
		await chooseExperience(page, 'Distributor Experience');
	});

	// Step 3. Click *Duplicate Experience* (![](../../images/icon-duplicate.png)).
	await test.step('Step 3. Click *Duplicate Experience* (![](../../images/icon-duplicate.png)).', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors/images/06.png']);
		await press(page, 'Duplicate Experience', undefined, 'duplicate');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors/images/06.png'});
	});

	// Step 4. Once the experience is duplicated, click *Edit* (![](../../images/icon-edit.png)) for the new experience.
	await test.step('Step 4. Once the experience is duplicated, click *Edit* (![](../../images/icon-edit.png)) for the new experience.', async () => {
		await press(page, 'Edit', 'Copy of Distributor Experience', 'edit');
		await noConfirmationLeft(page);
	});

	// Step 5. Rename it to *LATAM Distributor Experience* and change the Audience to *Distributors - Latin America*.
	await test.step('Step 5. Rename it to *LATAM Distributor Experience* and change the Audience to *Distributors - Latin America*.', async () => {
		await fill(page, 'Name', 'LATAM Distributor Experience');
		await choose(page, 'Audience', 'Distributors - Latin America');
	});

	// Step 6. Click *Save*.
	await test.step('Step 6. Click *Save*.', async () => {
		await press(page, 'Save');
		await noConfirmationLeft(page);
	});

	// Step 7. Click *Prioritize Experience* (![](../../images/icon-angle-up.png)) on the LATAM Distributor Experience row twice to move it to the top of the list. This ensures it takes priority over all other segments.
	await test.step('Step 7. Click *Prioritize Experience* (![](../../images/icon-angle-up.png)) on the LATAM Distributor Experience row twice to move it to the top of the list. This ensures it takes priority over all other segments.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors/images/07.png']);
		await press(page, 'Prioritize Experience', 'LATAM Distributor Experience', 'angle-up');
		await press(page, 'Prioritize Experience', 'LATAM Distributor Experience', 'angle-up');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors/images/07.png'});
	});

	// Step 8. Select the *Collection Display* fragment.
	await test.step('Step 8. Select the *Collection Display* fragment.', async () => {
		await selectInEditor(page, 'Collection Display');
	});

	// Step 9. In the configuration side panel, click *Change* (![](../../images/icon-change.png)) and select *LATAM Distributor Campaign*.
	await test.step('Step 9. In the configuration side panel, click *Change* (![](../../images/icon-change.png)) and select *LATAM Distributor Campaign*.', async () => {
		await press(page, 'Change', undefined, 'change');
		await press(page, 'LATAM Distributor Campaign');
		await noConfirmationLeft(page);
	});

	// Step 10. For Pagination, select *None*.
	await test.step('Step 10. For Pagination, select *None*.', async () => {
		await choose(page, 'Pagination', 'None');
	});

	// Step 11. Click *Publish*.
	await test.step('Step 11. Click *Publish*.', async () => {
		await press(page, 'Publish');
		await noConfirmationLeft(page);
	});

	// Step 12. Click the Experience dropdown in the top-left corner and select *LATAM Distributor Experience*.
	await test.step('Step 12. Click the Experience dropdown in the top-left corner and select *LATAM Distributor Experience*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors/images/08.png']);
		await chooseExperience(page, 'LATAM Distributor Experience');

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/05-targeting-claritys-regional-distributors/images/08.png'});
	});

});
