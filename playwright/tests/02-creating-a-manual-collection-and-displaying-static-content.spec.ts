/**
 * Creating a Manual Collection and Displaying Static Content
 *
 * Generated from courses/latest/en/mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences.md at 85296c6, with uncommitted lesson edits.
 * Step 19 carries a temporary lesson fix (TEMPORARY-FIXES.md).
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

test('Creating a Manual Collection and Displaying Static Content', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Sign in as the Clarity Admin user.
	// Not performed: the sign-in before the steps does this.
	await test.step.skip('Step 1. Sign in as the Clarity Admin user. - not performed: the sign-in before the steps does this', async () => {});

	// Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Collections*.
	await test.step('Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Collections*.', async () => {
		await openMenu(page, 'Site Menu', 'Site Builder', 'Collections');
	});

	// Step 3. Click *New* and select *Manual Collection*.
	await test.step('Step 3. Click *New* and select *Manual Collection*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/01.png']);
		await press(page, 'New');
		await press(page, 'Manual Collection');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/01.png'});
	});

	// Step 4. Enter `Distributor Resource Highlights` for Title and click *Save*.
	await test.step('Step 4. Enter `Distributor Resource Highlights` for Title and click *Save*.', async () => {
		await fill(page, 'Title', 'Distributor Resource Highlights');
		await press(page, 'Save');
		await noConfirmationLeft(page);
	});

	// Step 5. Select *Web Content Article* for Item Type and *Marketing* for Item Subtype.
	await test.step('Step 5. Select *Web Content Article* for Item Type and *Marketing* for Item Subtype.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/02.png']);
		await choose(page, 'Item Type', 'Web Content Article');
		await choose(page, 'Item Subtype', 'Marketing');

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/02.png'});
	});

	// Step 6. Click *Save*.
	await test.step('Step 6. Click *Save*.', async () => {
		await press(page, 'Save');
		await noConfirmationLeft(page);
	});

	// Step 7. In the Personalized Variation, click *Add Personalized Variation*.
	await test.step('Step 7. In the Personalized Variation, click *Add Personalized Variation*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/03.png']);
		await press(page, 'Add Personalized Variation');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/03.png'});
	});

	// Step 8. Select *Distributor Representatives* segment.
	await test.step('Step 8. Select *Distributor Representatives* segment.', async () => {
		await press(page, 'Distributor Representatives');
		await noConfirmationLeft(page);
	});

	// Step 9. Drag and drop the Distributor Representatives segment option to the first position.
	await test.step('Step 9. Drag and drop the Distributor Representatives segment option to the first position.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/04.png']);
		await reorderVariation(page, 'Distributor Representatives', 1);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/04.png'});
	});

	// Step 10. In the Collection Items section, click *Select* and select Marketing.
	await test.step('Step 10. In the Collection Items section, click *Select* and select Marketing.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/05.png']);
		await press(page, 'Select');
		await press(page, 'Marketing');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/05.png'});
	});

	// Step 11. In the breadcrumb navigation, click *Sites and Libraries*.
	await test.step('Step 11. In the breadcrumb navigation, click *Sites and Libraries*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/06.png']);
		await press(page, 'Sites and Libraries');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/06.png'});
	});

	// Step 12. Go to the *Asset Library* section and select *Marketing Assets*.
	await test.step('Step 12. Go to the *Asset Library* section and select *Marketing Assets*.', async () => {
		await press(page, 'Asset Library');
		await press(page, 'Marketing Assets');
		await noConfirmationLeft(page);
	});

	// Step 13. Go to the Article folder and select the following articles.
	await test.step('Step 13. Go to the Article folder and select the following articles.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/07.png']);
		await press(page, 'Article');
		await toggle(page, 'Getting Started as a Clarity Distributor', true);
		await toggle(page, 'Sales Toolkit: Product Brochures and Pricing Guide', true);
		await toggle(page, 'FAQs for New Distributors', true);
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/07.png'});
	});

	// Step 14. Click *Add*.
	await test.step('Step 14. Click *Add*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/08.png']);
		await press(page, 'Add');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/08.png'});
	});

	// Step 15. Open the *Site Menu* (![](../../images/icon-product-menu.png)) and click *Page Tree*.
	// Not performed: the step names no page in the tree.
	await test.step.skip('Step 15. Open the *Site Menu* (![](../../images/icon-product-menu.png)) and click *Page Tree*. - not performed: the step names no page in the tree', async () => {});

	// Step 16. Go to the Resources page and click Edit (![](../../images/icon-edit.png)).
	await test.step('Step 16. Go to the Resources page and click Edit (![](../../images/icon-edit.png)).', async () => {
		await openSitePage(page, 'Resources');
		await press(page, 'Edit');
		await noConfirmationLeft(page);
	});

	// Step 17. Click the *Experience* drop down at the top of the page and choose *New Experience*.
	await test.step('Step 17. Click the *Experience* drop down at the top of the page and choose *New Experience*.', async () => {
		await press(page, 'Experience');
		await press(page, 'New Experience');
		await noConfirmationLeft(page);
	});

	// Step 18. For the experience name enter *Distributor Experience*.
	await test.step('Step 18. For the experience name enter *Distributor Experience*.', async () => {
		await fill(page, 'Name', 'Distributor Experience');
	});

	// Step 19. For the Audience, choose the *Distributor Representatives* segment option.
	await test.step('Step 19. For the Audience, choose the *Distributor Representatives* segment option.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/09.png']);
		test.info().annotations.push({type: 'temporary-fix', description: 'the lesson says: For the Audience, choose the *Distributors Representatives* segment option.; patched until the lesson is corrected (TEMPORARY-FIXES.md)'});
		await press(page, 'Distributor Representatives');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/09.png'});
	});

	// Step 20. Click *Save*.
	await test.step('Step 20. Click *Save*.', async () => {
		await press(page, 'Save');
		await noConfirmationLeft(page);
	});

	// Step 21. Click the up arrow on the Distributor Experience row.
	await test.step('Step 21. Click the up arrow on the Distributor Experience row.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/10.png']);
		await press(page, 'up arrow', 'Distributor Experience', 'angle-up');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/10.png'});
	});

	// Step 22. Select the *Collection Display* fragment in the Helpful Articles container.
	await test.step('Step 22. Select the *Collection Display* fragment in the Helpful Articles container.', async () => {
		await selectInEditor(page, 'Collection Display');
	});

	// Step 23. In the configuration side panel, click *Change* (![](../../images/icon-change.png)) and select the *Distributor Resource Highlights* collection.
	await test.step('Step 23. In the configuration side panel, click *Change* (![](../../images/icon-change.png)) and select the *Distributor Resource Highlights* collection.', async () => {
		await press(page, 'Change', undefined, 'change');
		await press(page, 'Distributor Resource Highlights');
		await noConfirmationLeft(page);
	});

	// Step 24. For Pagination, select *None*.
	await test.step('Step 24. For Pagination, select *None*.', async () => {
		await choose(page, 'Pagination', 'None');
	});

	// Step 25. Double click the heading and rename it to *Articles to Support Your Success*.
	// Not performed: editing a fragment's text in place in the page editor is not automated yet.
	await test.step.skip('Step 25. Double click the heading and rename it to *Articles to Support Your Success*. - not performed: editing a fragment\'s text in place in the page editor is not automated yet', async () => {});

	// Step 26. Click *Publish* to save your changes to the Resources page.
	await test.step('Step 26. Click *Publish* to save your changes to the Resources page.', async () => {
		await press(page, 'Publish');
		await noConfirmationLeft(page);
	});

	// Step 27. Click the Experience dropdown in the top-left corner and select *Distributor Experience*.
	await test.step('Step 27. Click the Experience dropdown in the top-left corner and select *Distributor Experience*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/11.png']);
		await chooseExperience(page, 'Distributor Experience');

		await capture(page, {name: 'mastering-liferay-personalized-experiences/04-user-segmentation/02-personalizing-collections-for-claritys-audiences/images/11.png'});
	});

});
