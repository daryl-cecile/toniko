

export function toId(content:string) {
    return content.replace(/[^a-z0-9]/gi, '_').toLowerCase();
}