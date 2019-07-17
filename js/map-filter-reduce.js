const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLangs = users.filter(function(user) {
    return user.languages.length >= 3;
});
console.log(threeLangs);

const emails = users.map(function(user) {
    return user.email;
});
console.log(emails);

const totalYears = users.reduce(function(years, user) {
    return years + user.yearsOfExperience;
}, 0);
console.log((totalYears / users.length));

const longestEmail = users.reduce(function(email, user) {
    if (user.email.length < email.length) {
        return email
    } else {
        return user.email
    }
});
console.log(longestEmail);

function nameString() {
const allNames = users.reduce(function(name, user, i) {
    if (i === 0) {
        return name + user.name
    } else {
        return name + ', ' + user.name
    }
},'');
    return 'Your instructors are ' + allNames + '.';
}
console.log(nameString());
