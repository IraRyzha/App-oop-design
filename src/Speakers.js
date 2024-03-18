export class Speakers { 
    constructor(url, speakersListClass) {
        this.url = url;
        this.speakersListClass = speakersListClass;
    }

    async getSpeakers() {
        try {
            const response = await fetch(this.url);
            const speakers = await response.json();
            return speakers.users;
        } catch(error) {
            console.log(error);
            return [];
        }
    }

    createSpeakersMainInfo(speakers) {
        const updateSpeakers = speakers.reduce((accumulator, speaker) => {
            const { firstName, lastName, company: { title, name }, university, ip } = speaker;
            accumulator.push({ name: `${firstName} ${lastName}`, job: `${title} in ${name}`, university, ip });
            return accumulator;
        }, []);
        return updateSpeakers;
    }
}

