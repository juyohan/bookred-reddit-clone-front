export const CommentCount = (comment) => {
    if (comment < 100)
        return `${comment}`;
    else
        return `99+`
}