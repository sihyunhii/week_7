

const qnaList = [
  {
    q: '1. What style of work do you prefer?',
    a: [
      { answer: 'a. I start working only when the deadline is close', type: [2, 3, 6, 7, 10, 11, 14, 15] },
      { answer: 'b. I need to concentarate on my work and start early', type: [0, 1, 4, 5, 8, 9, 12, 13] }
    ]
  },
  {
    q: '2. How often do you clean your room?',
    a: [
      { answer: 'a. I clean it at least once a week', type: [0, 1, 4, 5, 8, 9, 12, 13] },
      { answer: 'b. Do I need to clean it?', type: [2, 3, 6, 7, 10, 11, 14, 15] }
    ]
  },
  {
    q: '3. What is your perfect weekend?',
    a: [
      { answer: 'a. Meeting friends and new people', type: [1, 3, 5, 7, 9, 11, 13, 15] },
      { answer: 'b. Coding javascript at home or watching a movie', type: [0, 2, 4, 6, 8, 10, 12, 14] }
    ]
  },
  {
    q: '4. When your friend is sad, your first reaction?',
    a: [
      { answer: 'a. I feel sorry and get sad myself" ', type: [0, 1, 2, 3, 12, 13, 14, 15] },
      { answer: "b. I try to find a solution to their probalem", type: [4, 5, 6, 7, 8, 9, 10, 11] }
    ]
  },
  {
    q: '5. Have you ever thought about space travel?',
    a: [
      { answer: 'a. It would be great one day!', type: [0, 1, 2, 3, 4, 5, 6, 7] },
      { answer: 'b. No i need to deal with my midterms first', type: [8, 9, 10, 11, 12, 13, 14, 15]},
    ]
  },

  {
    q: '6. When you meet new people, you most likely to?',
    a: [
      { answer: 'a. I say hi and start sonversation first', type: [1, 3, 5, 7, 9, 11, 13, 15] },
      { answer: 'b. I just wait till they talk first', type: [0, 2, 4, 6, 8, 10, 12, 14] }
    ]
  },
  {
    q: '7. What do you base your decisions on',
    a: [
      { answer: 'a. My own experience', type: [8, 9, 10, 11, 12, 13, 14, 15] },
      { answer: 'b. I am open to new sultions and ideas', type: [0, 1, 2, 3, 4, 5, 6, 7] },
    ]
  },
  {
    q: '8. Do you feel hard to relate to others',
    a: [
      { answer: 'a. Yes, sometimes i just cannot understand people.', type: [4, 5, 6, 7, 8, 9, 10, 11] },
      { answer: 'b. It is easy to imagine me being in their situation.', type: [0, 1, 2, 3, 12, 13, 14, 15] },
    ]
  } 
]
/*
Elsa, infj, 0;
Judy Hopps, enfj, 1;
Bubbles, infp, 2;
Sailor Moon, enfp, 3;

Haku, intj, 4;
Peppa Pig, entj, 5;
Alice, intp, 6;
Snowball, enpt, 7;

Squidward Tentacles, istj, 8;
Blossom, estj, 9;
Shrek, istp, 10;
Sonic the Hedgehog, estp, 11;

Cinderella, isfj, 12;
SpongeBob SquarePants, esfj, 13;
Kirby, isfp, 14;
Homer Simpson, esfp, 15;

*/
const infoList = [
  {
    name: 'Elsa',
    desc: 'Frozen (Franchise)'
  },
  {
    name: 'Judy Hopps',
    desc: 'Zootopia (2016)'
  },
  {
    name: 'Bubbles',
    desc: 'The Powerpuff Girls (1998)'
  },
  {
    name: 'Sailor Moon',
    desc: 'Bishoujo Senshi Sailor Moon (Pretty Soldier Sailor Moon)'
  },
  {
    name: 'Haku',
    desc: 'Sen to Chihiro no Kamikakushi (Spirited Away)'
  },
  {
    name: 'Peppa Pig',
    desc: 'Peppa Pig (2004)'
  },
  {
    name: 'Alice',
    desc: 'Alice in Wonderland (1951)'
  },
  {
    name: 'Snowball',
    desc: 'The Secret Life of Pets (2016)'
  },
  {
    name: 'Squidward Tentacles',
    desc: 'SpongeBob SquarePants (1999)'
  },
  {
    name: 'Blossom',
    desc: 'The Powerpuff Girls (1998)'
  },
  {
    name: 'Shrek',
    desc: 'Shrek (Franchise)'
  },
  {
    name: 'Sonic the Hedgehog',
    desc: 'Super Smash Bros. Series'
  },
  {
    name: 'Cinderella',
    desc: '지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!'
  },
  {
    name: 'SpongeBob SquarePants',
    desc: 'SpongeBob SquarePants (1999)'
  },
  {
    name: 'Kirby',
    desc: 'Super Smash Bros. Series'
  },
  {
    name: 'Homer Simpson',
    desc: 'The Simpsons (1989)'
  },
]