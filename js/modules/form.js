import axios from "axios";

export default function form() {
    const elsForm = document.querySelectorAll('.contact-form');

    elsForm.forEach(elForm => {
        elForm.addEventListener('submit', (evt) => {
            evt.preventDefault();

            const formData = new FormData(evt.target);
            const json = JSON.stringify(Object.fromEntries(formData.entries()))
            console.log(json);

            postData('http://localhost:3000/requests', json)
                .then(({data}) => console.log(data))
                .catch(err => console.log(err.message))
                .finally(() => evt.target.reset())
        })
    })

    async function postData(url, data) {
        return await axios.post(url, data, {
            headers: {
                "Content-Type": "application/json",
            }
        })
    }
}