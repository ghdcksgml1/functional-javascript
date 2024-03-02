const curry = f =>
    (a, ..._) => _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => {
    let res = [];
    for (const a of iter) {
        res.push(f(a));
    }
    return res;
});

const filter = curry((cond, iter) => {
    const res = [];
    for (const a of iter) {
        if (cond(a)) res.push(a);
    }
    return res
});

const reduce = curry((f, num, iter) => {
    if (!iter) {
        iter = num[Symbol.iterator]();
        num = iter.next().value;
    }

    for (const a of iter) {
        num = f(num, a);
    }
    return num;
});

const go = (...args) => {
    return reduce((a, f) => f(a), args);
};
const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);
