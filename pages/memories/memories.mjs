//  import { memories } from "../../assets/memories";

const memories = [{
    author: "Eitan Katz",
    content: "Text by Eitan Katz"
},
{
    author: "Meyer Ashkenazi",
    content: ""
},
{
    author: "Rav Zuker",
    content: ""
}
]

const count = 0;

const author = document.getElementById('author');
const content = document.getElementById('content');

author.innerText += ' ' + memories[0].author;
content.innerText = memories[0].content;