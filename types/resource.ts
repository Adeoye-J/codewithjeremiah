

export interface ResourceContent {
    title: string, 
    preface: string,
    coverImage: string,
}

export interface Resource {
    name: string,
    excerpt: string,
    coverImage: string, 
    content: ResourceContent[],
}