export function getToday() {
  const aaa = new Date();
  const yyyy = aaa.getFullYear();
  const mm = String(aaa.getMonth() + 1).padStart(2, "0");
  const dd = String(aaa.getDate()).padStart(2, "0");
  const createdAt = `${yyyy}-${mm}-${dd}`; //year + "-" + month + "-" + date;
  return createdAt;
}
