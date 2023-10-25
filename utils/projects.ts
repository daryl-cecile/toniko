import { readFile, readdir } from "fs/promises";
import {parse} from "yaml"

type Project = {
    body: string,
    title?: string,
}

export async function getProjects(){
    const projects = await readdir('public/(projects)');
    return Promise.all(projects.map(getProject));
}

export async function getProject(slug: string){
    const content = await readFile(`public/(projects)/${slug}/content.md`, 'utf-8');
    const [metadata, body] = content.split('---\n');

    return {
        ...parse(metadata),
        body
    } as Project;
}
