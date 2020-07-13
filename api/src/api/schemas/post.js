const postSchema = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        title: { type: 'string' },
        contents: { type: 'string' },
        user: { type: 'string' },
        avatar: { type: "string" },
        uid: { type: 'number' },
        timestamp: { type: "string" },
        module: { type: "number" },
        accountId: { type: "number" },
        likes: { type: "number" },
        dislikes: { type: "number" },
        shares: { type: "number" },
        deleted: { type: "boolean" },
        replies: {
            type: "array",
            items: postSchema,
              type: "object",
              properties: {
                id: { type: 'number' },
                title: { type: 'string' },
                contents: { type: 'string' },
                user: { type: 'string' },
                avatar: { type: "string" },
                uid: { type: 'number' },
                timestamp: { type: "string" },
                module: { type: "number" },
                accountId: { type: "number" },
                likes: { type: "number" },
                dislikes: { type: "number" },
                shares: { type: "number" },
                deleted: { type: "boolean" },              
            }
        }
    }
};


module.exports = {
    postSchema
};
