const map = (f, iter) => {
    let res = [];
    for (const a of iter) {
        res.push(f(a));
    }
    return res;
};

const filter = (cond, iter) => {
    const res = [];
    for (const a of iter) {
        if (cond(a)) res.push(a);
    }
    return res
}

const reduce = (f, num, iter) => {
    if (!iter) {
        iter = num[Symbol.iterator]();
        num = iter.next().value;
    }

    for (const a of iter) {
        num = f(num, a);
    }
    return num;
};
