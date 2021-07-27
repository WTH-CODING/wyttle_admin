const baseUrl = process.env.API || "http://20.84.89.186/";
//const baseUrl = "http://localhost:2000";

export const api = `${baseUrl}/api/v1`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
