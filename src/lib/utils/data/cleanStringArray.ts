export function cleanStringArray(dataArr: string[]) {
  if (!Array.isArray(dataArr)) {
    return [];
  }

  const trimmedArr = dataArr.map((item) => item.trim());

  const cleanedArr = trimmedArr.filter(Boolean);

  return cleanedArr;
}
