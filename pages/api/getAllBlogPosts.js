const data = require('../../data');
import uuid from 'uuid';
const fs = require('fs');
import verboselog from 'verboselog';


export default (req, res) => {

    // const blogPosts = [];
    //
    // for(var i =0; i < 300; i++) {
    //
    //     blogPosts.push( buildRandomItem({}, i) )
    //
    // }
    // fs.writeFile('data.json', JSON.stringify(blogPosts) , (err) => {
    //     if(err) console.log(err);
    //     console.log('wrote file');
    // })

    res.status(200).json({
        blogPosts:data.map( d => d.id )
    });

};


export const buildRandomItem = (item, index) => {
    item.id = uuid();
    item.author = authors[randNumber(authors.length - 1)];
    item.postTitle = `${preNames[randNumber(preNames.length - 1)]} ${
        midNames[randNumber(midNames.length - 1)]
        } ${endNames[randNumber(endNames.length - 1)]}`;
    item.pageTitle = item.postTitle;
    item.shortDescription = descriptions[randNumber(descriptions.length - 1)];
    item.slug = `/${item.postTitle && item.postTitle.split(" ").join("-")}`;
    console.log(item.slug);
    item.featureImage = {
        src: images[randNumber(images.length - 1)]
    };
    item.postContent = buildHTMLContent(item);
    //item.elements = elements;
    item.itemType = "blogPost";

    let categories = new Set();
    for (let i = 0; i < Math.ceil(Math.random() * 5 + 1); i++) {
        categories.add(ids[randNumber(ids.length - 1)]);
    }
    item.categories = new Array(...categories);
    return item;
};


const ids = [

    "b449d9c0-224a-4cf8-afd0-060c2bea7f8f",
    "7b629968-bed7-4eb3-92b5-044255c265a1",
    "3eb928ea-ffac-4427-9b53-f763730456a0",
    "eb2201bb-77e5-4ef1-97fd-7df83df7c5ea",
    "459cb64b-6371-45d5-b554-15c3a4904ed9",
    "637f66cf-e16e-478b-9420-896fbd1baded",
    "9087bcb5-12a7-45ae-aa74-8e3470effe2e",
    "c2f30a8e-39e1-414b-9845-bb01270a6167"
]

const randNumber = num => {
    return Math.floor(Math.random() * (num + 1));
};

const authors = [
    "Yennefer of Vengerberg",
    "Geralt of Rivia",
    "Triss Merigold"
];

const preNames = [
    "24 things you didnt know about",
    "What happens when you see",
    "Why wild animals love the smell of",
    "6 uses you never thought of",
    "Wild mongoose attacks",
    "When is the best time to think about",
    "30 stunning photos of",
    "Rancid donut found near",
    "Things to do with",
    "Gang of teenagers set fire to",
    "Buying",
    "These simple steps can help you with",
    "5 things you never knew about",
    "Cant sleep try watching",
    "Why you should never eat",
    "10 ways to stay healthy with",
    "Try these new ways to save on",
    "13 times you should consider",
    "Stop what you are doing and watch",
    "You could be paying too much for",
    "When to stop"
];

const midNames = [
    "Steve",
    "a tooth brush",
    "a ham sandwich",
    "a bacon avocado wrap",
    "a pencil sharpener",
    "the new Macbook Pro",
    "Green Shorts",
    "a High End Plastic Chair",
    "a cat",
    "a pack of zebra",
    "several elves",
    "two pigs",
    "a rooster",
    "a Bentley",
    "The American Medical Association",
    "Martha Stewart",
    "Ben Kenobi",
    "Jack in the Box",
    "several green flamingos",
    "a dozen chair legs",
    "a mattress",
    "dead fish",
    "Big Ben",
    "the Hilton Hotel",
    "a power strip",
    "12 fish",
    "breakfast burritos",
    "pineapple apple pen"
];

const endNames = [
    "in the wilderness",
    "and enjoying the finer things in life",
    "falling 30 stories",
    "with a side fish sticks",
    "and investing in the stock market",
    "and choosing the right toy for your child",
    "staring at a pink unicorn",
    "watching dog videos on the internet",
    "heres why.",
    "according to science",
    "laying in bed",
    "losing all sanity",
    "in the wilderness",
    "and enjoying the finer things in life",
    "falling 30 stories",
    "with a side fish sticks",
    "and investing in the stock market",
    "and choosing the right toy for your child",
    "staring at a pink unicorn",
    "watching dog videos on the internet",
    "heres why.",
    "according to science",
    "laying in bed",
    "losing all sanity",
    "are worth millions!"
];

const descriptions = [
    "I love deadlines. I love the whooshing noise they make as they go by.",
    "In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move.",
    "For instance, on the planet Earth, man had always assumed that he was more intelligent than dolphins because he had achieved so much—the wheel, New York, wars and so on—whilst all the dolphins had ever done was muck about in the water having a good time. But conversely, the dolphins had always believed that they were far more intelligent than man—for precisely the same reasons.",
    "The fact that we live at the bottom of a deep gravity well, on the surface of a gas covered planet going around a nuclear fireball 90 million miles away and think this to be normal is obviously some indication of how skewed our perspective tends to be.",
    "A learning experience is one of those things that says, 'You know that thing you just did? Don't do that.",
    "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
    "Isn't it enough to see that a garden is beautiful without having to believe that there are fairies at the bottom of it too?",
    `The major problem—one of the major problems, for there are several—one of the many major problems with governing people is that of whom you get to do it; or rather of who manages to get people to let them do it to them. 
    To summarize: it is a well-known fact that those people who must want to rule people are, ipso facto, those least suited to do it. 
    To summarize the summary: anyone who is capable of getting themselves made President should on no account be allowed to do the job.`,
    "Nothing travels faster than the speed of light, with the possible exception of bad news, which obeys its own special laws.",
    "Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it's a long way down the road to the chemist's, but that's just peanuts to space.",
    "I'd far rather be happy than right any day.",
    `“You know," said Arthur, "it's at times like this, when I'm trapped in a Vogon airlock with a man from Betelgeuse, and about to die of asphyxiation in deep space that I really wish I'd listened to what my mother told me when I was young."
    "Why, what did she tell you?"
    "I don't know, I didn't listen.” `
];

const images = [
    "abc.jpg",
    "bcd.jpg",
    "cde.jpg",
    "def.jpg",
    "efg.jpeg",
    "fgh.png",
    "ghi.jpg",
    "hij.jpg",
    "ijk.jpg",
    "jkl.jpeg",
    "klm.jpg",
    "lmn.jpg",
    "mno.jpeg",
    "nop.jpg",
    "opq.jpeg",
    "pqr.jpg",
    "qrs.jpg",
    "rst.png",
    "stu.jpg",
    "tuv.png",
    "uvw.jpg",
    "vwx.jpg",
    "wxy.jpg",
    "xy.jpg",
    "xyz.jpg"
];

const writeParagraph = () => {
    let p = "";
    for (let i = 0; i < 3; i++) {
        p += descriptions[randNumber(descriptions.length - 1)];
    }
    return p;
};

const writeRandomSections = () => {
    let sections = "";
    for (let i = 0; i <= Math.ceil(Math.random() * 5 + 1); i++) {
        sections += `
<div>
    <h2>${descriptions[randNumber(descriptions.length - 1)]}</h2>
    <p>${writeParagraph()}</p>
</div>
`;
    }
    return sections;
};

const buildHTMLContent = item => {
    return `<div>
        <h1>${item.postTitle}</h1>
        <p>${writeParagraph()} 
        <img src="CUSTOM_IMG~[${images[randNumber(images.length - 1)]}]"
        style="float:left" 
        /></p>
        ${writeRandomSections()}
</div>`;
};
