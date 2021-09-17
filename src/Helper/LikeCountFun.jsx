export const LikeCountFun = (count) => {
    const k = Math.floor(count/100);

    if(k >= 10) {
        return `${Math.floor(k/10)}.${k%10}k`
    }
    else
        return `${count}`;
}