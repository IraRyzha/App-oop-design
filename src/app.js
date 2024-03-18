import SpeakersSection1 from "./SpeakersSection1";
import SpeakersSection2 from "./SpeakersSection2";

 
function app() {
    const speakers = new SpeakersSection1('https://dummyjson.com/users', 'speakers-list');
    speakers.renderSpeakers(6);


    const april4 = new SpeakersSection2('https://dummyjson.com/users', 'day-events-4');
    april4.renderSpeakers(2);

    const april5 = new SpeakersSection2('https://dummyjson.com/users', 'day-events-5');
    april5.renderSpeakers(3);

    const april6 = new SpeakersSection2('https://dummyjson.com/users', 'day-events-6');
    april6.renderSpeakers(4);
}

app();