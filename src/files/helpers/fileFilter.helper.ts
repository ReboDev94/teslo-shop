/* eslint-disable @typescript-eslint/ban-types */
export const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  if (!file) return callback(new Error('file is empty'), false);

  const fileExtension = file.mimetype.split('/')[1];
  const VALID_EXTENSION = ['jpg', 'jpeg', 'png', 'gif'];

  if (VALID_EXTENSION.includes(fileExtension)) {
    return callback(null, true);
  }

  return callback(new Error('file is not valid'), false);
};
