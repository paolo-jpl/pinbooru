export function formatDate(timestamp: string){
  let date = new Date(timestamp);
  let formattedDate = `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}`;
  return formattedDate;
}