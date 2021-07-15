module.exports = {
  post: {
    tags: ['Records API'],
    description: 'Get Records',
    operationId: 'getRecords',
    parameters: [],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/RecordInput',
          },
        },
      },
    },
    responses: {
      201: {
        code: 0,
        msg: 'Success',
      },
      400: {
        $ref: '#/components/schemas/Error',
      },
    },
  },
};
