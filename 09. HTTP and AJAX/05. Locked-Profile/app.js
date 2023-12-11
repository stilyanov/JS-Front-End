async function lockedProfile() {

    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';

    const request = await fetch(baseUrl);
    const result = await request.json();

    const main = document.getElementById('main');
    main.innerHTML = '';

    Object.values(result).forEach((person) => {

        const profile = document.createElement('div');

        profile.innerHTML += `
        <div class="profile">
				<img src="./iconProfile2.png" class="userIcon">
				<label>Lock</label>
				<input type="radio" name="user1Locked" value="lock" checked="">
				<label>Unlock</label>
				<input type="radio" name="user1Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${person.username}" disabled="" readonly="">
				<div class="user1Username" style="display: none;">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="${person.email}" disabled="" readonly="">
					<label>Age:</label>
					<input type="text" name="user1Age" value="${person.age}" disabled="" readonly="">
				</div>
				
				<button>Show more</button>
			</div>`;

        main.appendChild(profile);

        const showMoreButton = profile.querySelector('button');

        showMoreButton.addEventListener('click', (e) => {

            let button = e.target;
            let eachProfile = button.parentElement;
            let children = Array.from(eachProfile.children);

            let unlocked = children[4];
            let moreInfo = children[9];

            if (!unlocked.checked) {
                return;
            }async function lockedProfile() {

    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';

    const request = await fetch(baseUrl);
    const result = await request.json();

    const main = document.getElementById('main');
    main.innerHTML = '';

    Object.values(result).forEach((person) => {

        const profile = document.createElement('div');

        profile.innerHTML += `
        <div class="profile">
				<img src="./iconProfile2.png" class="userIcon">
				<label>Lock</label>
				<input type="radio" name="user1Locked" value="lock" checked="">
				<label>Unlock</label>
				<input type="radio" name="user1Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${person.username}" disabled="" readonly="">
				<div class="user1Username" style="display: none;">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="${person.email}" disabled="" readonly="">
					<label>Age:</label>
					<input type="text" name="user1Age" value="${person.age}" disabled="" readonly="">
				</div>
				
				<button>Show more</button>
			</div>`;

        main.appendChild(profile);

        const showMoreButton = profile.querySelector('button');

        showMoreButton.addEventListener('click', (e) => {

            let button = e.target;
            let eachProfile = button.parentElement;
            let children = Array.from(eachProfile.children);

            let unlocked = children[4];
            let moreInfo = children[9];

            if (!unlocked.checked) {
                return;
            }

            if (button.textContent === 'Show more') {
                moreInfo.style.display = 'block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInfo.style.display = 'none';
                button.textContent = 'Show more';
            }


        });

    });

}

            if (button.textContent === 'Show more') {
                moreInfo.style.display = 'block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInfo.style.display = 'none';
                button.textContent = 'Show more';
            }


        });

    });

}