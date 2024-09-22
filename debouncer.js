console.log('debouncer works')

// to be able to bind something to the function context
// we need to use function expression
function fetchUrl(url) {
    console.log(`fetching ${url}`, this.name)
}

function debounce(callback, delay) {
    let timer = null;
    
    return (url) => {
        if (timer) {
            clearTimeout(timer)
        }

        timer = setTimeout(() => {
            callback(url)
        }, delay)
    }
}

const user = {
    name: 'Keith'
}

// bind user to the function context
const fetching = debounce(fetchUrl.bind(user), 300);

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);