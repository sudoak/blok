module.exports = {
  components: {
    schemas: {
      // record model
      Record: {
        type: 'object', // data type
        properties: {
          key: {
            type: 'string', // data-type
            description: 'Unique Key', // desc
            example: 'Jadkasdoiasdy', // example of a key
          },
          totalCount: {
            type: 'number', // data-type
            description: 'Total Records', // desc
            example: 1000, // example of totalCount
          },
          createdAt: {
            type: 'date', // data-type
            description: 'Creation Date', // desc
            example: '2017-01-28 01:22:14.398Z', // example of a date
          },
        },
      },
      // Todo input model
      RecordInput: {
        type: 'object', // data type
        properties: {
          startDate: {
            type: 'date', // data-type
            description: 'Start Date', // desc
            example: '2015-01-28', // example of a date
          },
          endDate: {
            type: 'date', // data-type
            description: 'End Date', // desc
            example: '2017-01-28', // example of a date
          },
          minCount: {
            type: 'number', // data-type
            description: 'Total Records', // desc
            example: 0, // example of minCount
          },
          maxCount: {
            type: 'number', // data-type
            description: 'Total Records', // desc
            example: 1000, // example of maxCount
          },
        },
      },
      // error model
      Error: {
        type: 'object',
        properties: {
          msg: {
            type: 'string', // data type
            description: 'Error message', // desc
            example: 'Not found', // example of an error message
          },
          code: {
            type: 'number', // data type
            description: 'Error internal code', // desc
            example: 'Invalid parameters', // example of an error internal code
          },
        },
      },
    },
  },
};
