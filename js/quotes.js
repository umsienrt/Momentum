const quotes = [
    {
        quote: "난 나쁜 놈이야. 하지만 괜찮아 난 절대 착한 사람이 될 수 없어 하지만 그건 나쁜 게 아니야 난 절대로 내 자신을 버린 적이 없으니까",
        author: "주먹왕 랄프",
    },
    {
        quote: "누구나 무엇이든 될 수 있으니까 그 누구도 내 꿈에 대해서 이러쿵저러쿵 못해",
        author: "주토피아",
    },
    {
        quote: "상실감에 가장 좋은 치료법은 위로와 포옹이야",
        author: "빅히어로",
    },
    {
        quote: "네 잘못이 아니야 상처는 아물고 길이 열릴 거야",
        author: "모아나",
    },
    {
        quote: "저도 궁금했던 적이 있었죠. 나는 팬더의 아들인가, 오리의 아들인가, 나는 제자인가, 스승인가, 하지만 그런 건 중요하지 않아요. 난 그저 나이기 때문이죠.",
        author: "쿵푸팬더3",
    },
    {
        quote: "어째서 즐거운 일이 끝나는 거죠? 괴로운 일도 끝나기 때문이란다",
        author: "보노보노",
    },
    {
        quote: "확실하지 않은데 그들이 뭐라고 하든 상관하지 마",
        author: "심슨",
    },
    {
        quote: "I don't have time to worry about who doesn't like me. I'm too busy loving the people who love me",
        author: "스누피",
    },
    {
        quote: "너무 심각할 것 없어. 잘 될 거야. 시간을 가져",
        author: "스누피",
    },
    {
        quote: "강아지는 날 가르치려 들지 않아 그저 있는 그대로의 날 사랑해주지",
        author: "스누피",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;