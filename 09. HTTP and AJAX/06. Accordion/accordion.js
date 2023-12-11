async function solution() {

    const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';


    const main = document.getElementById('main');
    main.innerHTML = '';

    const response = await fetch(baseUrl);
    const result = await response.json();

    Object.values(result).forEach((article) => {

        const divAccordion = document.createElement('div');
        divAccordion.classList.add('accordion');

        const divHead = document.createElement('div');
        divHead.classList.add('head');

        const span = document.createElement('span');
        span.textContent = article.title;

        const button = document.createElement('button');
        button.classList.add('button');
        button.id = article._id;
        button.textContent = "More";

        button.addEventListener('click', showOrHide);

        const divExtra = document.createElement('div');
        divExtra.classList.add('extra');

        const paragraph = document.createElement('p');
        paragraph.textContent = article.content;

        divExtra.appendChild(paragraph);

        divHead.appendChild(span);
        divHead.appendChild(button);

        divAccordion.appendChild(divHead);
        divAccordion.appendChild(divExtra);

        main.appendChild(divAccordion);
    });


    async function showOrHide(e) {
        const button = e.target;
        const buttonName = button.textContent;
        const id = button.id;

        const divAccordion = button.closest('.accordion');

        const divExtra = divAccordion.querySelector('.extra');
        const p = divAccordion.querySelector('.extra p');

        if (buttonName === 'More') {
            p.textContent = '';

            const requestDetails = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${id}`)
            const responseDetails = await requestDetails.json();

            p.textContent = responseDetails.content;
            divExtra.style.display = 'block';
            button.textContent = 'Less';
            
        } else if (buttonName === "Less") {
            p.textContent = '';
            divExtra.style.display = 'none';
            button.textContent = 'More';
        }
    }

}

solution()