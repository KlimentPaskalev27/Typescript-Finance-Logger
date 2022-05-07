

// ================== ENUMS ======================//
// Theory and exercise file - Not included in project

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface eResource<T> {
    uid: number;
    resourceName: ResourceType;
    data: T;
}

const doc4 : eResource<number> = {
    uid: 3,
    resourceName: ResourceType.BOOK, //this will console log to 0 because it's the 0 index in ResourceType enum
    data: 43
}
