import {CompositeDecorator} from 'draft-js'

export const LinkEditor = ({contentState, entityKey, children}) => {
    const {url} = contentState.getEntity(entityKey).getData();
    console.log(url);
    return (
        <a rel={'noopener noreferrer'} href={url} target={"_blank"}>
            {children}
        </a>
    )
}

export const LinkDecorator = new CompositeDecorator([
    {
        strategy : (contentBlock, callback, contentState) => {
            contentBlock.findEntityRanges((character) => {
                const entityKey = character.getEntity();
                return (
                    entityKey !== null &&
                    contentState.getEntity(entityKey).getType() === 'LINK'
                );
            }, callback)
        },
        component : LinkEditor
    }
])