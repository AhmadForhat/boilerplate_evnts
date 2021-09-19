const httCodes = {
  successRequest: 200,
  badRequest: 400,
  unauthorized: 401,
  forbidden: 403,
  notFound: 404,
  notAcceptable: 406,
  conflict: 409,
  unprocessableEntity: 422,
  internalServerError: 500,
  serviceUnavailabel: 503
}

export default Object.freeze(httCodes)
