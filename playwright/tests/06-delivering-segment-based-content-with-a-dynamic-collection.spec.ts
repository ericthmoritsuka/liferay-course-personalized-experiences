/**
 * Delivering Segment-Based Content with a Dynamic Collection
 *
 * Generated from courses/latest/en/mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page.md at 85296c6, with uncommitted lesson edits.
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

test('Delivering Segment-Based Content with a Dynamic Collection', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. While logged as the Clarity admin, open the *Site Menu* (![](../../images/icon-product-menu.png)) and click *Page Tree*.
	// Not performed: the step names no page in the tree.
	await test.step.skip('Step 1. While logged as the Clarity admin, open the *Site Menu* (![](../../images/icon-product-menu.png)) and click *Page Tree*. - not performed: the step names no page in the tree', async () => {});

	// Step 2. Go to the Resources page and click *Edit* (![](../../images/icon-edit.png)).
	await test.step('Step 2. Go to the Resources page and click *Edit* (![](../../images/icon-edit.png)).', async () => {
		await openSitePage(page, 'Resources');
		await press(page, 'Edit', undefined, 'edit');
		await noConfirmationLeft(page);
	});

	// Step 3. Click the *Experience* drop down at the top of the page and delete the LATAM Distributor Experience.
	await test.step('Step 3. Click the *Experience* drop down at the top of the page and delete the LATAM Distributor Experience.', async () => {
		await deleteExperience(page, 'LATAM Distributor Experience');
	});

	// Step 4. Select the *Distributor Experience* and ensure that it's in the top position.
	await test.step('Step 4. Select the *Distributor Experience* and ensure that it\'s in the top position.', async () => {
		test.info().annotations.push({type: 'not-performed', description: 'checking what the step says to notice or verify'});
		await chooseExperience(page, 'Distributor Experience');
		test.info().annotations.push({type: 'not-performed', description: 'the rest of the step ("ensure that it\'s in the top position") was not performed'});
		// Not performed: checking what the step says to notice or verify.
	});

	// Step 5. With the Distributor Experience selected, click the *Collection Display*.
	await test.step('Step 5. With the Distributor Experience selected, click the *Collection Display*.', async () => {
		await selectInEditor(page, 'Collection Display');
	});

	// Step 6. On the General tab, click *Change* (![](../../images/icon-change.png)) and select the *Distributor Articles* collection.
	await test.step('Step 6. On the General tab, click *Change* (![](../../images/icon-change.png)) and select the *Distributor Articles* collection.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/09.png']);
		await press(page, 'Change', undefined, 'change');
		await press(page, 'Distributor Articles');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/09.png'});
	});

	// Step 7. Click *Publish* to save your changes to the Resources page.
	await test.step('Step 7. Click *Publish* to save your changes to the Resources page.', async () => {
		await press(page, 'Publish');
		await noConfirmationLeft(page);
	});

	// Step 8. Change the experience to the Distributor Experience and check that the changes persist.
	await test.step('Step 8. Change the experience to the Distributor Experience and check that the changes persist.', async () => {
		test.info().annotations.push({type: 'not-performed', description: 'the rest of the step ("check that the changes persist") was not performed'});
		await chooseExperience(page, 'Distributor Experience');
		// Not performed: the rest of the step ("check that the changes persist") was not performed.
	});

});
