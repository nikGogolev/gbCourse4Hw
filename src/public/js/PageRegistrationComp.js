const registrationPage = {

	template: `
	<main>
        <section class="container breadcrumps">
            <div class="container-mini breadcrumps-wrapper">
                <h2 class="breadcrumps-heading">Registration</h2>
            </div>
        </section>
        <section class="container registration">
            <div class="container-mini registration-wrapper">
                <form class="registration-form">
                    <fieldset class="registration-form-person-fieldset">
                        <legend class="registration-form-person">Your name</legend>
                        <input class="registration-form-name" name="name" type="text" placeholder="First name" required
                            pattern="^[A-Za-zА-Яа-яЁё]+$">
                        <input class="registration-form-surname" name="surname" type="text" placeholder="Last name"
                            required pattern="^[A-Za-zА-Яа-яЁё]+$">
                    </fieldset>
                    <div class="registration-form-sex">
                        <input id="registration-form-sex-male" class="registration-form-sex-input" name="sex"
                            type="radio" checked>
                        <label for="registration-form-sex-male" class="registration-form-sex-label">Male</label>
                        <input id="registration-form-sex-female" class="registration-form-sex-input" name="sex"
                            type="radio">
                        <label for="registration-form-sex-female" class="registration-form-sex-label">Female</label>
                    </div>
                    <fieldset class="registration-form-details-fieldset">
                        <legend class="registration-form-details">Login details</legend>
                        <input class="registration-form-email" name="email" type="text" placeholder="Email" required
                            pattern="([A-z0-9_.-]{1,})@([A-z0-9_.-]{1,}).([A-z]{2,8})">
                        <input class="registration-form-pass" name="pass" type="password" placeholder="Password"
                            required pattern="[A-z0-9_.@!]{6,}">
                        <p class="registration-form-recomend">Please use 8 or more characters, with at least 1 number
                            and a mixture of uppercase and lowercase letters</p>
                    </fieldset>
                    <div class="registration-form-submit">
                        <input class="registration-form-submit-input" type="submit" value="Join now">
                        <svg class="registration-form-submit-icon" width="17" height="10">
                            <use xlink:href="#arrow-right"></use>
                        </svg>
                    </div>
                </form>
                <div class="registration-perks">
                    <h1 class="registration-perks-heading">Loyalti has it perks</h1>
                    <p class="registration-perks-description">Get in on the loyalty program where you can earn points
                        and unlock serious perks. Starting with these as soon as you join:</p>
                    <ul class="registration-perks-list">
                        <li class="registration-perks-list-item">15% off welcome offer</li>
                        <li class="registration-perks-list-item">Free shipping, returns and exchanges on all orders</li>
                        <li class="registration-perks-list-item">$10 off a purchase on your birthday</li>
                        <li class="registration-perks-list-item">Early access to products</li>
                        <li class="registration-perks-list-item">Exclusive offers & rewards</li>
                    </ul>
                </div>
            </div>
        </section>

    </main>`
};

export default registrationPage;
