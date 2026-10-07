/**
 * Creating Personalized Content with a Dynamic Collection
 *
 * Generated from courses/latest/en/mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page.md at 85296c6, with uncommitted lesson edits.
 * Step 9 carries a temporary lesson fix (TEMPORARY-FIXES.md).
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

test('Creating Personalized Content with a Dynamic Collection', async ({page}) => {
	await signIn(page, 'admin');

	// Step 1. Sign in as the Clarity Admin user.
	// Not performed: the sign-in before the steps does this.
	await test.step.skip('Step 1. Sign in as the Clarity Admin user. - not performed: the sign-in before the steps does this', async () => {});

	// Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Collections*.
	await test.step('Step 2. Open the *Site Menu* (![](../../images/icon-product-menu.png)), expand *Site Builder*, and click *Collections*.', async () => {
		await openMenu(page, 'Site Menu', 'Site Builder', 'Collections');
	});

	// Step 3. Click *New* and select *Dynamic Collection*.
	await test.step('Step 3. Click *New* and select *Dynamic Collection*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/01.png']);
		await press(page, 'New');
		await press(page, 'Dynamic Collection');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/01.png'});
	});

	// Step 4. Enter *Distributor Articles* for Title and click *Save*.
	await test.step('Step 4. Enter *Distributor Articles* for Title and click *Save*.', async () => {
		await fill(page, 'Title', 'Distributor Articles');
		await press(page, 'Save');
		await noConfirmationLeft(page);
	});

	// Step 5. Click *Add Personalized Variation*.
	await test.step('Step 5. Click *Add Personalized Variation*.', async () => {
		await press(page, 'Add Personalized Variation');
		await noConfirmationLeft(page);
	});

	// Step 6. Select *Distributor Representatives* segment.
	await test.step('Step 6. Select *Distributor Representatives* segment.', async () => {
		await press(page, 'Distributor Representatives');
		await noConfirmationLeft(page);
	});

	// Step 7. Click *Add* (![](../../images/icon-plus.png)) for Personalized Variations.
	await test.step('Step 7. Click *Add* (![](../../images/icon-plus.png)) for Personalized Variations.', async () => {
		await press(page, 'Add', 'Personalized Variations', 'plus');
		await noConfirmationLeft(page);
	});

	// Step 8. Select *Distributors - Latin America* segment.
	await test.step('Step 8. Select *Distributors - Latin America* segment.', async () => {
		await press(page, 'Distributors - Latin America');
		await noConfirmationLeft(page);
	});

	// Step 9. Reorder the segments by placing *Distributors - Latin America* first and *Distributor Representatives* second.
	await test.step('Step 9. Reorder the segments by placing *Distributors - Latin America* first and *Distributor Representatives* second.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/02.png']);
		test.info().annotations.push({type: 'temporary-fix', description: 'the lesson says: placing *Distributor - Latin America* first; patched until the lesson is corrected (TEMPORARY-FIXES.md)'});
		await reorderVariation(page, 'Distributors - Latin America', 1);
		await reorderVariation(page, 'Distributor Representatives', 2);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/02.png'});
	});

	// Step 10. Click *Distributors - Latin America* segment.
	await test.step('Step 10. Click *Distributors - Latin America* segment.', async () => {
		await press(page, 'Distributors - Latin America');
		await noConfirmationLeft(page);
	});

	// Step 11. For Item Type, click *Web Content Article*.
	await test.step('Step 11. For Item Type, click *Web Content Article*.', async () => {
		await choose(page, 'Item Type', 'Web Content Article');
	});

	// Step 12. For Item Subtype, click *Marketing*.
	await test.step('Step 12. For Item Subtype, click *Marketing*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/03.png']);
		await choose(page, 'Item Subtype', 'Marketing');

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/03.png'});
	});

	// Step 13. On the Scope section, click *Select*.
	await test.step('Step 13. On the Scope section, click *Select*.', async () => {
		await press(page, 'Select', 'Scope');
		await noConfirmationLeft(page);
	});

	// Step 14. Click *Other Site or Asset Library*.
	await test.step('Step 14. Click *Other Site or Asset Library*.', async () => {
		await press(page, 'Other Site or Asset Library');
		await noConfirmationLeft(page);
	});

	// Step 15. Go to the *Asset Libraries* page and click *Marketing Assets*.
	await test.step('Step 15. Go to the *Asset Libraries* page and click *Marketing Assets*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/04.png']);
		await openSitePage(page, 'Asset Libraries');
		await press(page, 'Marketing Assets');
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/04.png'});
	});

	// Step 16. On the Filter section, click *Select* for Tags and select *LATAM*.
	await test.step('Step 16. On the Filter section, click *Select* for Tags and select *LATAM*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/05.png']);
		await press(page, 'Select', 'Tags');
		await press(page, 'LATAM');
		await closePicker(page);
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/05.png'});
	});

	// Step 17. Click *Save*.
	await test.step('Step 17. Click *Save*.', async () => {
		await press(page, 'Save');
		await noConfirmationLeft(page);
	});

	// Step 18. Click *Distributor Representatives* segment.
	await test.step('Step 18. Click *Distributor Representatives* segment.', async () => {
		await press(page, 'Distributor Representatives');
		await noConfirmationLeft(page);
	});

	// Step 19. For Item Type, click *Web Content Article*.
	await test.step('Step 19. For Item Type, click *Web Content Article*.', async () => {
		await choose(page, 'Item Type', 'Web Content Article');
	});

	// Step 20. For Item Subtype, click *Marketing*.
	await test.step('Step 20. For Item Subtype, click *Marketing*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/06.png']);
		await choose(page, 'Item Subtype', 'Marketing');

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/06.png'});
	});

	// Step 21. On the Scope section, click *Select*.
	await test.step('Step 21. On the Scope section, click *Select*.', async () => {
		await press(page, 'Select', 'Scope');
		await noConfirmationLeft(page);
	});

	// Step 22. Click *Other Site or Asset Library*.
	await test.step('Step 22. Click *Other Site or Asset Library*.', async () => {
		await press(page, 'Other Site or Asset Library');
		await noConfirmationLeft(page);
	});

	// Step 23. Go to the *Asset Libraries* page and click *Marketing Assets*.
	await test.step('Step 23. Go to the *Asset Libraries* page and click *Marketing Assets*.', async () => {
		await openSitePage(page, 'Asset Libraries');
		await press(page, 'Marketing Assets');
		await noConfirmationLeft(page);
	});

	// Step 24. On the Filter section, click *Select* for Tags and select *Distributors*.
	await test.step('Step 24. On the Filter section, click *Select* for Tags and select *Distributors*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/07.png']);
		await press(page, 'Select', 'Tags');
		await press(page, 'Distributors');
		await closePicker(page);
		await noConfirmationLeft(page);

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/07.png'});
	});

	// Step 25. Click *Save*.
	await test.step('Step 25. Click *Save*.', async () => {
		await press(page, 'Save');
		await noConfirmationLeft(page);
	});

	// Step 26. Click *Anyone* in the Personalized Variations menu.
	await test.step('Step 26. Click *Anyone* in the Personalized Variations menu.', async () => {
		await press(page, 'Anyone');
		await noConfirmationLeft(page);
	});

	// Step 27. For Item Type, click *Web Content Article*.
	await test.step('Step 27. For Item Type, click *Web Content Article*.', async () => {
		await choose(page, 'Item Type', 'Web Content Article');
	});

	// Step 28. For Item Subtype, click *Marketing*.
	await test.step('Step 28. For Item Subtype, click *Marketing*.', async () => {
		await armCapture(page, ['mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/08.png']);
		await choose(page, 'Item Subtype', 'Marketing');

		await capture(page, {name: 'mastering-liferay-personalized-experiences/05-site-experiences/02-personalizing-claritys-distributor-page/images/08.png'});
	});

	// Step 29. On the Scope section, click *Select*.
	await test.step('Step 29. On the Scope section, click *Select*.', async () => {
		await press(page, 'Select', 'Scope');
		await noConfirmationLeft(page);
	});

	// Step 30. Click *Other Site or Asset Library*.
	await test.step('Step 30. Click *Other Site or Asset Library*.', async () => {
		await press(page, 'Other Site or Asset Library');
		await noConfirmationLeft(page);
	});

	// Step 31. Go to the *Asset Libraries* page and click *Marketing Assets*.
	await test.step('Step 31. Go to the *Asset Libraries* page and click *Marketing Assets*.', async () => {
		await openSitePage(page, 'Asset Libraries');
		await press(page, 'Marketing Assets');
		await noConfirmationLeft(page);
	});

	// Step 32. Click *Save*.
	await test.step('Step 32. Click *Save*.', async () => {
		await press(page, 'Save');
		await noConfirmationLeft(page);
	});

});
