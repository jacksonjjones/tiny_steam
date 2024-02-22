// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please provide a application title',
        validate: NameInput => {
            if (NameInput) {
                return true;
            } else {
                console.log('Please provide a application title!');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a application description',
        validate: NameInput => {
            if (NameInput) {
                return true;
            } else {
                console.log('Please provide a application description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions',
        validate: NameInput => {
            if (NameInput) {
                return true;
            } else {
                console.log('Please provide installation instructions!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information',
        validate: NameInput => {
            if (NameInput) {
                return true;
            } else {
                console.log('Please provide usage information!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please provide contribution guidlines',
        validate: NameInput => {
            if (NameInput) {
                return true;
            } else {
                console.log('Please provide contribution guidlines!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your application',
        validate: NameInput => {
            if (NameInput) {
                return true;
            } else {
                console.log('Please provide test information for your application!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        choices: ['MIT', 'GNU', 'Apache 2.0', 'ISC'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log('Please provide license information!')
                return false;
            }
        },
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide a Github Username',
        validate: NameInput => {
            if (NameInput) {
                return true;
            } else {
                console.log('Please provide a Github Username!');
                return false;
            }
        }
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'Please provide a Email',
        validate: NameInput => {
            if (NameInput) {
                return true;
            } else {
                console.log('Please provide a Email!');
                return false;
            }
        }
    }, 
];

module.exports = questions;