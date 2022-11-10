/* eslint-disable @typescript-eslint/ban-types */
import { v4 as UUIDV4 } from 'uuid';
export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  if (!file) return callback(new Error('file is empty'), false);
  const fileExtension = file.mimetype.split('/')[1];
  const fileName = `${UUIDV4()}.${fileExtension}`;

  return callback(null, fileName);
};
