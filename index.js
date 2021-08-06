class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = new Date(targetDate);      
        this.refs = {
            daysSpan: document.querySelector('span[data-value="days"]'),
            hoursSpan: document.querySelector('span[data-value="hours"]'),
            minsSpan: document.querySelector('span[data-value="mins"]'),
            secsSpan: document.querySelector('span[data-value="secs"]'),
        };
    }

    start() {
        this.action(0);
        setInterval(() => {
            const currentTime = new Date();
            this.action(currentTime);
        },1000);
    } 

    action(currentTime) {
    const time = this.targetDate - currentTime;
    this.refs.daysSpan.textContent = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    this.refs.hoursSpan.textContent = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    this.refs.minsSpan.textContent = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    this.refs.secsSpan.textContent = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    }

    pad(value) {
        return value < 10 ? `0${value}` : value;
    }
}

let timer01 = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sept 10, 2021'),
});

timer01.start();