let count = 0;

function increaseCount() {
  count++;
    displayCount();
    checkCountValue();
}

const displayCount = () => {
    document.getElementById('countDisplay').innerHTML = count;
    }

const checkCountValue = () => {
    if (count === 10) {
        alert('Congratulations! You have reached 10 followers');
    }
    else if (count === 20) {
    alert('Congratulations! You have reached 20 followers');
    }
}
