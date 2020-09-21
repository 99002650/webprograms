function log(target, key, descriptor) {
    console.log(`${key} was called!`);
}

class MyDecor {
    @log
    show() {
        console.log('log details');
    }
}
const decor = new MyDecor();
decor.show();