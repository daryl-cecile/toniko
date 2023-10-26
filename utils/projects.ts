import { readFile, readdir } from "fs/promises";
import {parse} from "yaml"

type Project = {
    body: string,
    title?: string,
    order?: number,
}

export async function getProjects(){
    const projects = await readdir('public/(projects)');
    const collection = await Promise.all(projects.map(getProject));

    collection.sort((a, b) => {
        if (a.order == undefined && b.order === undefined) return 1;
        if (a.order == undefined && b.order !== undefined) return 1;
        if (b.order == undefined && a.order !== undefined) return -1;
        if (a.order === b.order) return 0;
        if (a.order > b.order) return 1;
        if (a.order < b.order) return -1;
        return 0;
    });

    console.log(collection.map(o => {
        const {body, ...other} = o;
        return other;
    }));

    return collection;
}

export async function getProject(slug: string){
    const content = await readFile(`public/(projects)/${slug}/content.md`, 'utf-8');
    const [metadata, body] = content.split('---\n');

    return {
        ...parse(metadata),
        body
    } as Project;
}
