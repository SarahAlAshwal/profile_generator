const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin ,
  output: process.stdout
});

const profile = {
  name: '',
  preferedActivity: '',
  preferedMusic: '',
  preferedMeal: '',
  preferdFood: '',
  preferedSport: '',
  superPower: ''
};

r1.question('What\'s your name? ',(answer) => {
  profile.name = answer;
  r1.question('What\'s an activity you like doing ?', (answer) => {
    profile.preferedActivity = answer;
    r1.question('What do you listen to while doing that ?', (answer) => {
      profile.preferedMusic = answer;
      r1.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
        profile.preferedMeal = answer;
        r1.question("What's your favourite thing to eat for that meal? ", (answer) => {
          profile.preferdFood = answer;
          r1.question('Which sport is your absolute favourite? ', (answer) => {
            profile.preferedSport = answer;
            r1.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              profile.superPower = answer;
              console.log(`My name is ${profile.name}. I like ${profile.preferedActivity}.I love to listen to ${profile.preferedMusic} while ${profile.preferedActivity}. My prefer meal is ${profile.preferedMeal}. In which I love to eat ${profile.preferdFood}. My favorite sport is ${profile.preferedSport}. I am so good in ${profile.superPower} `);
            });
          });
        });
      });
    });
  });
});















