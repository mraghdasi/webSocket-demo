export const convertPersianNumberToEnglish = (s = '', number) => {
  const elem = s
    .toString()
    .replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
    .replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d));
  if (number) return +elem;
  return elem;
};

export const convertAllPropertyToEnNumber = (values) => {
  const newValues = {};
  for (const key in values) {
    if (Object.hasOwnProperty.call(values, key)) {
      const element = values[key];
      if ((element, !isNaN(element))) {
        newValues[key] = convertPersianNumberToEnglish(element, true);
      } else {
        newValues[key] = element;
      }
    }
  }

  return newValues;
};

//separates text to 3 digit parts
export const separator = (input, separator = ',', separateLength = 3) => {
  if (input === null || input === undefined) return '';
  input = input.toString();
  let result = '';
  let count = 0;
  for (let i = input.length - 1; i > -1; i--) {
    if (count === separateLength) {
      result = separator + result;
      count = 0;
    }
    result = input.charAt(i) + result;
    count++;
  }
  return result;
};

export const tableRowIndex = (index = 0, page = 1, recordPerPage = 10) => {
  return index + 1 + (page - 1) * recordPerPage;
};
