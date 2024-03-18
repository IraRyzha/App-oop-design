import { Speakers } from "./Speakers"; 

export default class SpeakersSection2 extends Speakers {
    constructor(url, speakersListClass) {
        super(url, speakersListClass);
    }


    async renderSpeakers(size) {
        const response = await this.getSpeakers();
        const speakers = this.createSpeakersMainInfo(response);
        const speakersList = document.querySelector(`.${this.speakersListClass}`);

        for(let i = 0; i < size; i++) {
            const speakersItem = document.createElement('li');
            speakersItem.classList.add('speakers-item');

            speakersItem.innerHTML = `
                <h4>${speakers[i].name}</h4>
                <span>${speakers[i].university}</span>
                <span>${speakers[i].ip}</span>
            `;
            speakersList.append(speakersItem);
        }
    }
}