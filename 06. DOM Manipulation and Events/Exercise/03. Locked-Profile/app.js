function lockedProfile() {
    let buttons = Array.from(document.getElementsByTagName('button'));

    buttons.forEach((btn) => {
        btn.addEventListener('click', showMoreInfo);
    });

    function showMoreInfo(e) {
        let btn = e.target;
        let profile = btn.parentElement;
        let children = Array.from(profile.children);

        let unlocked = children[4];
        let moreInfo = children[9];

        if (!unlocked.checked) {
            return;
        }

        if (btn.textContent === 'Show more') {
            moreInfo.style.display = 'block';
            btn.textContent = 'Hide it';
        } else if (btn.textContent === 'Hide it') {
            moreInfo.style.display = 'none';
            btn.textContent = 'Show more';
        }
    }
}