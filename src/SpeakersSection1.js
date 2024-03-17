import { Speakers } from "./Speakers";

export default class SpeakersSection1 extends Speakers {
    constructor(url, speakersListClass) {
        super(url, speakersListClass);
    }


    async renderSpeakers(size) {
        const response = await this.getSpeakers();
        const speakers = this.createSpeakersMainInfo(response);
        const speakersList = document.querySelector(`.${this.speakersListClass}`);

        const photoUrl = new URL('https://api.lorem.space/image/face?w=320&h=320');

        for(let i = 0; i < size; i++) {
            const speakersItem = document.createElement('li');
            speakersItem.classList.add('speakers-item');

            photoUrl.searchParams.append('r', speakers[i].id);

            speakersItem.innerHTML = `
                <figure>
                    <img src="${photoUrl}" alt="">
                    <figcaption>
                        <h4>${speakers[i].name}</h4>
                        <p>${speakers[i].job}</p>
                    </figcaption>
                </figure>
            `;
            speakersList.append(speakersItem);
        }
    }

}