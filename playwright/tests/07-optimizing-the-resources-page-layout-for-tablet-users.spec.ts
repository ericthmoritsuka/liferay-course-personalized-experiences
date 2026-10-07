/**
 * Optimizing the Resources Page Layout for Tablet Users
 *
 * Generated from courses/latest/en/mastering-liferay-personalized-experiences/05-site-experiences/05-configuring-claritys-mobile-experiences.md at 85296c6, with uncommitted lesson edits.
 * Step 4, 10 carries a temporary lesson fix (TEMPORARY-FIXES.md).
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

test('Optimizing the Resources Page Layout for Tablet Users', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Sign in as the Clarity Admin user.
	// Not performed: the sign-in before the steps does this.
	await test.step.skip('Step 1. Sign in as the Clarity Admin user. - not performed: the sign-in before the steps does this', async () => {});

	// Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), and click *Page Tree*.
	// Not performed: the step names no page in the tree.
	await test.step.skip('Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), and click *Page Tree*. - not performed: the step names no page in the tree', async () => {});

	// Step 3. Go to the Resources page and click *Edit* (![](../../images/icon-edit.png)).
	await test.step('Step 3. Go to the Resources page and click *Edit* (![](../../images/icon-edit.png)).', async () => {
		await openSitePage(page, 'Resources');
		await press(page, 'Edit', undefined, 'edit');
		await noConfirmationLeft(page);
	});

	// Step 4. Change the experience to the *Distributor Experience*.
	await test.step('Step 4. Change the experience to the *Distributor Experience*.', async () => {
		test.info().annotations.push({type: 'temporary-fix', description: 'the lesson says: Change the experience to the *Distributors Experience*.; patched until the lesson is corrected (TEMPORARY-FIXES.md)'});
		await chooseExperience(page, 'Distributor Experience');
	});

	// Step 5. On the Viewport menu, click *Tablet* (![](../../images/icon-tablet.png)).
	await test.step('Step 5. On the Viewport menu, click *Tablet* (![](../../images/icon-tablet.png)).', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/05-configuring-claritys-mobile-experiences/images/01.png']);
		await press(page, 'Tablet', undefined, 'tablet');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/05-configuring-claritys-mobile-experiences/images/01.png'});
	});

	// Step 6. Click the *Collection Display*.
	await test.step('Step 6. Click the *Collection Display*.', async () => {
		await selectInEditor(page, 'Collection Display');
	});

	// Step 7. On the configuration panel, click the Layout dropdown and select *2 Columns*.
	await test.step('Step 7. On the configuration panel, click the Layout dropdown and select *2 Columns*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/05-configuring-claritys-mobile-experiences/images/02.png']);
		await press(page, '2 Columns');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/05-configuring-claritys-mobile-experiences/images/02.png'});
	});

	// Step 8. Change the experience to the *Default* and make the same layout change for tablet users.
	await test.step('Step 8. Change the experience to the *Default* and make the same layout change for tablet users.', async () => {
		await chooseExperience(page, 'Default');
		test.info().annotations.push({type: 'not-performed', description: 'the rest of the step ("make the same layout change for tablet users") was not performed'});
	});

	// Step 9. Click *Publish*.
	await test.step('Step 9. Click *Publish*.', async () => {
		await press(page, 'Publish');
		await noConfirmationLeft(page);
	});

	// Step 10. In the Resources page, click the Simulation (![](../../images/icon-simulation.png)) menu.
	await test.step('Step 10. In the Resources page, click the Simulation (![](../../images/icon-simulation.png)) menu.', async () => {
		test.info().annotations.push({type: 'temporary-fix', description: 'the lesson says: In the Home page, click the Simulation menu.; patched until the lesson is corrected (TEMPORARY-FIXES.md)'});
		await openSitePage(page, 'Resources');
		await press(page, 'Simulation');
		await noConfirmationLeft(page);
	});

	// Step 11. On the Screen Size section, select *Tablet*.
	await test.step('Step 11. On the Screen Size section, select *Tablet*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/05-configuring-claritys-mobile-experiences/images/03.png']);
		await press(page, 'Tablet');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/05-configuring-claritys-mobile-experiences/images/03.png'});
	});

});
