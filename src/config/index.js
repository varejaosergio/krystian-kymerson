const URL = window.location.hostname.includes('localhost')
? 'http://localhost:8080'
: 'https://krystian-kymerson.herokuapp.com';

export default {
    URL,
}