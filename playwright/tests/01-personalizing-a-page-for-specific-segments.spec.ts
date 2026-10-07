/**
 * Personalizing a Page for Specific Segments
 *
 * Generated from courses/latest/en/mastering-liferay-personalized-experiences/03-foundations-of-liferay-personalized-experiences/02-exploring-claritys-tailored-experiences.md at 85296c6, with uncommitted lesson edits.
 * Step 13 carries a temporary lesson fix (TEMPORARY-FIXES.md).
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

test('Personalizing a Page for Specific Segments', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Go to the Home page and click Edit (![](../../images/icon-edit.png)).
	await test.step('Step 1. Go to the Home page and click Edit (![](../../images/icon-edit.png)).', async () => {
		await openSitePage(page, 'Home');
		await press(page, 'Edit');
		await noConfirmationLeft(page);
	});

	// Step 2. Click the *Experience* drop down at the top of the page and choose *New Experience*.
	await test.step('Step 2. Click the *Experience* drop down at the top of the page and choose *New Experience*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/03-foundations-of-liferay-personalized-experiences/02-exploring-claritys-tailored-experiences/images/01.png']);
		await press(page, 'Experience');
		await press(page, 'New Experience');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/03-foundations-of-liferay-personalized-experiences/02-exploring-claritys-tailored-experiences/images/01.png'});
	});

	// Step 3. Enter *Distributor Experience* for the Name field.
	await test.step('Step 3. Enter *Distributor Experience* for the Name field.', async () => {
		await fill(page, 'Name', 'Distributor Experience');
	});

	// Step 4. For the Audience, choose the *Distributor Representatives* option.
	await test.step('Step 4. For the Audience, choose the *Distributor Representatives* option.', async () => {
		await press(page, 'Distributor Representatives');
		await noConfirmationLeft(page);
	});

	// Step 5. Click *Save*.
	await test.step('Step 5. Click *Save*.', async () => {
		await press(page, 'Save');
		await noConfirmationLeft(page);
	});

	// Step 6. Click *Prioritize Experience* (![](../../images/icon-angle-up.png)) on the Distributor Experience row.
	await test.step('Step 6. Click *Prioritize Experience* (![](../../images/icon-angle-up.png)) on the Distributor Experience row.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/03-foundations-of-liferay-personalized-experiences/02-exploring-claritys-tailored-experiences/images/02.png']);
		await press(page, 'Prioritize Experience', 'Distributor Experience', 'angle-up');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/03-foundations-of-liferay-personalized-experiences/02-exploring-claritys-tailored-experiences/images/02.png'});
	});

	// Step 7. While on the Distributor Representatives experience, hide the `Distributor Promo` container.
	await test.step('Step 7. While on the Distributor Representatives experience, hide the `Distributor Promo` container.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/03-foundations-of-liferay-personalized-experiences/02-exploring-claritys-tailored-experiences/images/03.png']);
		test.info().annotations.push({type: 'not-performed', description: 'stayed on the current experience; the step names the Distributor Representatives experience but does not switch to it'});
		await selectInEditor(page, 'Distributor Promo');
		await fragmentOption(page, 'Hide Fragment');

		await capture(page, {name: 'mastering-liferay-personalized-experiences/03-foundations-of-liferay-personalized-experiences/02-exploring-claritys-tailored-experiences/images/03.png'});
	});

	// Step 8. Drag a container to the top of the page.
	await test.step('Step 8. Drag a container to the top of the page.', async () => {
		await addComponent(page, 'Container');
		test.info().annotations.push({type: 'substituted', description: 'Container was added where the editor puts it, not to the top of the page'});
	});

	// Step 9. Rename this container to *Welcome Container*.
	// Not performed: renaming a page element is not automated yet.

	// Screenshot skipped: the step it belongs to was not performed.
	await test.step.skip('Step 9. Rename this container to *Welcome Container*. - not performed: renaming a page element is not automated yet', async () => {});

	// Step 10. In the General tab, set the Container Width to *Fixed Width*.
	await test.step('Step 10. In the General tab, set the Container Width to *Fixed Width*.', async () => {
		await press(page, 'General');
		await choose(page, 'Container Width', 'Fixed Width');
		await noConfirmationLeft(page);
	});

	// Step 11. In the Styles tab, set the Padding Bottom to *Spacer 4 (1.5rem)*.
	await test.step('Step 11. In the Styles tab, set the Padding Bottom to *Spacer 4 (1.5rem)*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/03-foundations-of-liferay-personalized-experiences/02-exploring-claritys-tailored-experiences/images/05.png']);
		await press(page, 'Styles');
		await choose(page, 'Padding Bottom', 'Spacer 4 (1.5rem)');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/03-foundations-of-liferay-personalized-experiences/02-exploring-claritys-tailored-experiences/images/05.png'});
	});

	// Step 12. Drag and drop the *Distributor Welcome Banner* fragment inside the Welcome Container.
	await test.step('Step 12. Drag and drop the *Distributor Welcome Banner* fragment inside the Welcome Container.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/03-foundations-of-liferay-personalized-experiences/02-exploring-claritys-tailored-experiences/images/06.png']);
		await addComponent(page, 'Distributor Welcome Banner', 'container');

		await capture(page, {name: 'mastering-liferay-personalized-experiences/03-foundations-of-liferay-personalized-experiences/02-exploring-claritys-tailored-experiences/images/06.png'});
	});

	// Step 13. Select the button's *button-link* sub-element and configure these settings:
	await test.step('Step 13. Select the button\'s *button-link* sub-element and configure these settings:', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/03-foundations-of-liferay-personalized-experiences/02-exploring-claritys-tailored-experiences/images/07.png']);
		test.info().annotations.push({type: 'temporary-fix', description: 'the lesson says: Select the button\'s *link* sub-element; patched until the lesson is corrected (TEMPORARY-FIXES.md)'});
		await selectInEditor(page, 'button-link', undefined, 'first', 'Distributor Welcome Banner');
		await openTab(page, 'Link');
		await choose(page, 'Link', 'Page');
		await choose(page, 'Page', 'Resources');

		await capture(page, {name: 'mastering-liferay-personalized-experiences/03-foundations-of-liferay-personalized-experiences/02-exploring-claritys-tailored-experiences/images/07.png'});
	});

	// Step 14. Click *Publish*.
	await test.step('Step 14. Click *Publish*.', async () => {
		await press(page, 'Publish');
		await noConfirmationLeft(page);
	});

	// Step 15. In the Home page, click the Simulation (![](../../images/icon-simulation.png)) menu.
	await test.step('Step 15. In the Home page, click the Simulation (![](../../images/icon-simulation.png)) menu.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/03-foundations-of-liferay-personalized-experiences/02-exploring-claritys-tailored-experiences/images/08.png']);
		await openSitePage(page, 'Home');
		await press(page, 'Simulation');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/03-foundations-of-liferay-personalized-experiences/02-exploring-claritys-tailored-experiences/images/08.png'});
	});

	// Step 16. Choose to Preview By *Segments*.
	await test.step('Step 16. Choose to Preview By *Segments*.', async () => {
		await press(page, 'Segments');
		await noConfirmationLeft(page);
	});

	// Step 17. Use the Segment dropdown to switch between *Anyone* and * Distributors Experience*.
	// Not performed: no control or value named in this step.

	// Screenshot skipped: the step it belongs to was not performed.
	await test.step.skip('Step 17. Use the Segment dropdown to switch between *Anyone* and * Distributors Experience*. - not performed: no control or value named in this step', async () => {});

});
